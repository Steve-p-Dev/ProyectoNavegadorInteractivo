document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar componentes: diagrama y select de comparación
    setupDiagrama();
    setupComparadorSelect();

    // 2. Event Listeners
    document.getElementById('btn-sugerir').addEventListener('click', sugerirIncoterm);
    document.getElementById('btn-comparar').addEventListener('click', compararIncoterms);
});

// =======================================================
// A. DIAGRAMA INTERACTIVO
// =======================================================

function setupDiagrama() {
    const diagrama = document.getElementById('diagrama-incoterms');
    
    // Iterar sobre los datos e inyectar elementos al DOM
    IncotermsList.forEach(key => {
        const term = IncotermsData[key];
        const termElement = document.createElement('div');
        termElement.className = `incoterm-item ${term.grupo.toLowerCase()}`;
        termElement.style.backgroundColor = term.color;
        termElement.title = term.obligaciones; 

        // Símbolos de Riesgo (🛑) y Costo (💰)
        let simbolos = '';
        if (term.grupo === 'E' || term.grupo === 'F') {
             simbolos = '🛑💰'; // Riesgo y Costo temprano
        }
        
        // CPT/CIP y CFR/CIF tienen riesgo temprano y costo tardío
        if (key === 'CPT' || key === 'CIP' || key === 'CFR' || key === 'CIF') {
            simbolos = '🛑...💰'; 
        }

        // Grupo D tiene riesgo y costo tardío
        if (term.grupo === 'D') {
            simbolos = '...🛑💰'; 
        }
        
        termElement.innerHTML = `<strong>${key}</strong> <span class="simbolos">${simbolos}</span>`;
        
        diagrama.appendChild(termElement);
    });
}

// =======================================================
// B. ASISTENTE DE SELECCIÓN
// =======================================================

function sugerirIncoterm() {
    const modo = document.getElementById('q1-modo').value;
    const transporte = document.querySelector('input[name="q2-transporte"]:checked')?.value;
    const seguro = document.querySelector('input[name="q3-seguro"]:checked')?.value;
    const resultadoDiv = document.getElementById('resultado-sugerencia');
    let sugerencia = '';

    if (!transporte || !seguro) {
        resultadoDiv.innerHTML = '<p class="alerta">⚠️ Por favor, responda todas las preguntas.</p>';
        return;
    }

    // Lógica del Asistente (Simplificada)
    if (modo === 'maritimo') {
        if (transporte === 'no') {
            sugerencia = "FAS o FOB. (Riesgo y costo se transfieren en el puerto de carga).";
        } else if (seguro === 'si') {
            sugerencia = "CIF. (Vendedor paga flete y seguro mínimo hasta el puerto de destino).";
        } else {
            sugerencia = "CFR. (Vendedor paga flete hasta el puerto de destino, sin seguro obligatorio).";
        }
    } else { // Cualquier Modo
        if (transporte === 'no') {
            sugerencia = "EXW (Mínima) o FCA (Si el Vendedor puede cargar o despachar).";
        } else if (seguro === 'si') {
            sugerencia = "CIP. (Vendedor paga flete y seguro total hasta el destino).";
        } else {
            sugerencia = "CPT (Flete pagado, sin seguro) o DAP/DPU/DDP (Si el Vendedor quiere asumir el riesgo hasta destino).";
        }
    }

    resultadoDiv.innerHTML = `
        <p class="exito">✨ Incoterm Sugerido:</p>
        <p class="resultado-term">${sugerencia}</p>
        <p class="nota">Revise siempre la descripción detallada del término sugerido.</p>
    `;
}

// =======================================================
// C. COMPARADOR DINÁMICO
// =======================================================

function setupComparadorSelect() {
    const select = document.getElementById('select-incoterms');
    // Llenar el <select multiple> con los Incoterms disponibles
    IncotermsList.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${key} (${IncotermsData[key].nombre})`;
        select.appendChild(option);
    });
}

function compararIncoterms() {
    const select = document.getElementById('select-incoterms');
    const resultadoDiv = document.getElementById('tabla-comparacion');
    const terminosSeleccionados = Array.from(select.selectedOptions).map(option => option.value);

    if (terminosSeleccionados.length < 2 || terminosSeleccionados.length > 4) {
        resultadoDiv.innerHTML = '<p class="alerta">⚠️ Por favor, seleccione entre 2 y 4 Incoterms para comparar.</p>';
        return;
    }

    // Definición de las variables clave para la comparación
    const variables = [
        { key: 'nombre', label: 'Nombre Completo' },
        { key: 'modo', label: 'Modo de Transporte' },
        { key: 'riesgo', label: '🛑 Transferencia de Riesgo' },
        { key: 'costo', label: '💰 Transferencia de Costo' },
        { key: 'seguroVendedor', label: 'Obligación de Seguro (Vendedor)' },
        { key: 'aduanasExport', label: 'Aduana de Exportación' },
    ];

    // Construir el HTML de la tabla
    let html = '<table><thead><tr><th>Obligación Clave</th>';
    terminosSeleccionados.forEach(termKey => {
        html += `<th style="background-color: ${IncotermsData[termKey].color}">${termKey}</th>`;
    });
    html += '</tr></thead><tbody>';

    variables.forEach(v => {
        html += `<tr><td><strong>${v.label}</strong></td>`;
        terminosSeleccionados.forEach(termKey => {
            const dato = IncotermsData[termKey][v.key] || 'N/A';
            html += `<td>${dato}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    resultadoDiv.innerHTML = html;
}