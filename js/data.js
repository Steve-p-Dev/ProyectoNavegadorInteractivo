const IncotermsData = {
    "EXW": {
        nombre: "Ex Works",
        grupo: "E",
        modo: "Cualquier Modo",
        riesgo: "En el Almacén del Vendedor",
        costo: "En el Almacén del Vendedor",
        seguroVendedor: "No",
        aduanasExport: "Comprador",
        obligaciones: "Mínima. Vendedor solo pone la mercancía a disposición.",
        color: "var(--color-e)"
    },
    "FCA": {
        nombre: "Free Carrier",
        grupo: "F",
        modo: "Cualquier Modo",
        riesgo: "Entrega al transportista nombrado por el Comprador",
        costo: "Entrega al transportista nombrado por el Comprador",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "El Vendedor despacha para exportación y entrega al transportista.",
        color: "var(--color-f)"
    },
    "CPT": {
        nombre: "Carriage Paid To",
        grupo: "C",
        modo: "Cualquier Modo",
        riesgo: "Entrega al primer transportista",
        costo: "Hasta el Lugar de Destino Acordado",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "Vendedor paga el transporte principal, pero el riesgo se transfiere al inicio.",
        color: "var(--color-c)"
    },
    "CIP": {
        nombre: "Carriage and Insurance Paid To",
        grupo: "C",
        modo: "Cualquier Modo",
        riesgo: "Entrega al primer transportista",
        costo: "Hasta el Lugar de Destino Acordado",
        seguroVendedor: "Sí (Cobertura A - Total)",
        aduanasExport: "Vendedor",
        obligaciones: "Similar a CPT, pero Vendedor obligado a seguro de cobertura máxima.",
        color: "var(--color-c)"
    },
    "DAP": {
        nombre: "Delivered at Place",
        grupo: "D",
        modo: "Cualquier Modo",
        riesgo: "En el Lugar de Destino Acordado (Descarga NO incluida)",
        costo: "En el Lugar de Destino Acordado",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "Vendedor asume casi todo el riesgo y costo, excepto la descarga y la aduana de importación.",
        color: "var(--color-d)"
    },
    "DPU": {
        nombre: "Delivered at Place Unloaded",
        grupo: "D",
        modo: "Cualquier Modo",
        riesgo: "En el Lugar de Destino Acordado (Descarga SÍ incluida)",
        costo: "En el Lugar de Destino Acordado",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "Único Incoterm donde la descarga en destino es responsabilidad del Vendedor.",
        color: "var(--color-d)"
    },
    "DDP": {
        nombre: "Delivered Duty Paid",
        grupo: "D",
        modo: "Cualquier Modo",
        riesgo: "En el Lugar de Destino Acordado",
        costo: "En el Lugar de Destino Acordado",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        aduanasImport: "Vendedor (Incluye impuestos y aranceles)",
        obligaciones: "Máxima. Vendedor asume TODO, incluyendo aranceles de importación.",
        color: "var(--color-d)"
    },
    "FAS": {
        nombre: "Free Alongside Ship",
        grupo: "F",
        modo: "Marítimo",
        riesgo: "Al costado del Buque",
        costo: "Al costado del Buque",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "Vendedor deja la mercancía junto al buque. Uso limitado a carga a granel o pesada.",
        color: "var(--color-f)"
    },
    "FOB": {
        nombre: "Free On Board",
        grupo: "F",
        modo: "Marítimo",
        riesgo: "A bordo del Buque",
        costo: "A bordo del Buque",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "Clásico. Vendedor carga la mercancía a bordo. SOLO para transporte marítimo.",
        color: "var(--color-f)"
    },
    "CFR": {
        nombre: "Cost and Freight",
        grupo: "C",
        modo: "Marítimo",
        riesgo: "A bordo del Buque",
        costo: "Hasta el Puerto de Destino",
        seguroVendedor: "No",
        aduanasExport: "Vendedor",
        obligaciones: "Vendedor paga flete, pero el riesgo se transfiere en el puerto de carga.",
        color: "var(--color-c)"
    },
    "CIF": {
        nombre: "Cost Insurance and Freight",
        grupo: "C",
        modo: "Marítimo",
        riesgo: "A bordo del Buque",
        costo: "Hasta el Puerto de Destino",
        seguroVendedor: "Sí (Cobertura C - Mínima)",
        aduanasExport: "Vendedor",
        obligaciones: "Similar a CFR, pero Vendedor obligado a seguro de cobertura mínima.",
        color: "var(--color-c)"
    }
};

const IncotermsList = Object.keys(IncotermsData);