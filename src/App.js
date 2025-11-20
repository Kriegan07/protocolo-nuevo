import React, { useState } from 'react';
import { 
  Bed, 
  Syringe, 
  Scissors, 
  Stethoscope, 
  Microscope, 
  ChevronDown, 
  ChevronUp, 
  CreditCard,
  DollarSign,
  Package
} from 'lucide-react';

export default function SurgicalCostBreakdown() {
  // Estado para controlar qué secciones están abiertas
  const [openSection, setOpenSection] = useState(null);

  // Función para alternar secciones
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  // DATOS EXTRAÍDOS DE LA IMAGEN
  const data = {
    hospitalizacion: {
      id: 'hosp',
      title: 'Hospitalización y Equipo',
      icon: <Bed className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      total: 3530.00,
      items: [
        { sku: 'H213', name: 'Habitación una noche', qty: 1, unit: 880.00, total: 880.00 },
        { sku: 'SO2', name: 'Uso Quirófano', qty: 2, unit: 700.00, total: 1400.00 },
        { sku: '-', name: 'Electrocauterio', qty: 1, unit: 250.00, total: 250.00 },
        { sku: 'USEQ38', name: 'Uso Maquina Anestesia con accesorios', qty: 1, unit: 875.00, total: 875.00 },
        { sku: 'S06', name: 'Sala de Recuperación', qty: 1, unit: 125.00, total: 125.00 },
      ]
    },
    anestesia: {
      id: 'anes',
      title: 'Insumos y Med. Anestesia General',
      icon: <Syringe className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      total: 2948.00,
      items: [
        { sku: 'Z1204004', name: 'Fentanyl citrato', qty: 1, unit: 60.00, total: 60.00 },
        { sku: 'Z1204005', name: 'Midazolam 5mg/ml', qty: 1, unit: 104.00, total: 104.00 },
        { sku: 'Z1204001', name: 'Efedrina 50mg/ml', qty: 1, unit: 135.00, total: 135.00 },
        { sku: 'Y0600004', name: 'Electrodo para monitor de SV adulto', qty: 3, unit: 2.85, total: 8.55 },
        { sku: 'Z1404084', name: 'Anestesia sin epinefrina', qty: 1, unit: 22.50, total: 22.50 },
        { sku: 'Y0100009', name: 'Hemovac 1/8', qty: 1, unit: 543.00, total: 543.00 },
        { sku: 'Y0900032', name: 'Venda Elastica de 6"', qty: 1, unit: 32.00, total: 32.00 },
        { sku: 'Y0400127', name: 'Seda negra 2-0 sin aguja', qty: 1, unit: 156.00, total: 156.00 },
        { sku: 'Y0400158', name: 'Vicryl 3 0 70 SC20', qty: 1, unit: 140.00, total: 140.00 },
        { sku: 'Y0800013', name: 'Guantes quirúrgicos #8.5', qty: 2, unit: 26.00, total: 52.00 },
        { sku: 'Y0500042', name: 'Gasa estéril paquete de 5', qty: 10, unit: 9.80, total: 98.00 },
        { sku: 'Z1405247', name: 'Cefazolina Vial', qty: 1, unit: 225.00, total: 225.00 },
        { sku: 'Y0500005', name: 'Paquete 5 compresas de gasa 18X18', qty: 2, unit: 96.95, total: 193.90 },
        { sku: 'Y1300011', name: 'Agua Oxigenada', qty: 100, unit: 0.33, total: 33.00 },
        { sku: 'Z2404003', name: 'Salino 1000', qty: 1, unit: 60.00, total: 60.00 },
        { sku: 'Z1404121', name: 'Enantyum', qty: 3, unit: 133.11, total: 399.33 },
        { sku: 'Z1404196', name: 'Zoltum', qty: 1, unit: 283.72, total: 283.72 },
        { sku: 'Y170003', name: 'Lapiz electrocauterio', qty: 1, unit: 294.00, total: 294.00 },
        { sku: 'Y170004', name: 'Plancha de Electrocauterio', qty: 1, unit: 108.00, total: 108.00 },
      ]
    },
    cirugia: {
      id: 'cir',
      title: 'Insumos Cirugía',
      icon: <Scissors className="w-6 h-6" />,
      color: 'bg-teal-100 text-teal-700 border-teal-200',
      total: 1277.14,
      items: [
        { sku: 'Y0800017', name: 'Mascarilla Quirurgica', qty: 8, unit: 1.30, total: 10.40 },
        { sku: 'S0000016', name: 'Zapatones', qty: 6, unit: 7.00, total: 42.00 },
        { sku: 'Y0800004', name: 'Gorro descartable', qty: 1, unit: 4.75, total: 4.75 },
        { sku: 'Y1100006', name: 'Cepillo Doble Lavado manos', qty: 4, unit: 20.00, total: 80.00 },
        { sku: 'Y1300043', name: 'Bandeja de asepsia admetech (yodo)', qty: 1, unit: 300.00, total: 300.00 },
        { sku: 'Y1300009', name: 'Jabon de gluconato de clorhexidina', qty: 20, unit: 1.15, total: 23.00 },
        { sku: 'Y1300004', name: 'Hibitane', qty: 20, unit: 2.90, total: 58.00 },
        { sku: 'Y0800005', name: 'Guantes descartables grandes', qty: 10, unit: 7.00, total: 70.00 },
        { sku: 'Y1100013', name: 'Hoja de bisturi #10', qty: 1, unit: 3.00, total: 3.00 },
        { sku: 'Y0500040', name: 'Tegaderm+ pad 9*20cm', qty: 1, unit: 28.06, total: 28.06 },
        { sku: 'Y1100135', name: 'Bata syrus talla L', qty: 3, unit: 150.00, total: 450.00 },
        { sku: 'X0100009', name: 'Termometro digital microlife', qty: 1, unit: 60.00, total: 60.00 },
        { sku: 'Y1300008', name: 'Jabon enzimatico cc', qty: 25, unit: 0.55, total: 13.75 },
        { sku: 'Y1100008', name: 'Cinta de Castilla por yarda', qty: 3, unit: 3.06, total: 9.18 },
        { sku: 'S07', name: 'Manejo y esterilización de equipo', qty: 1, unit: 125.00, total: 125.00 },
      ]
    },
    otros: {
      id: 'otros',
      title: 'Otros Insumos y Medicamentos',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-700 border-orange-200',
      total: 683.23,
      items: [
        { sku: 'Y1500010', name: 'Toalla de alcohol', qty: 10, unit: 1.00, total: 10.00 },
        { sku: 'S0000033', name: 'Algodón x 10 torundas', qty: 1, unit: 1.50, total: 1.50 },
        { sku: 'S0000021', name: 'Alcohol al 70% x 10cc', qty: 1, unit: 2.50, total: 2.50 },
        { sku: 'Y0500075', name: 'Kit para fijación de acceso periférico', qty: 1, unit: 79.63, total: 79.63 },
        { sku: 'Y0100063', name: 'Conector clave de dos lumen', qty: 1, unit: 137.20, total: 137.20 },
        { sku: 'Y0100044', name: 'Jeringa Descartable 10ml', qty: 3, unit: 5.00, total: 15.00 },
        { sku: 'Y0200009', name: 'Cateter intravenoso No. 20', qty: 2, unit: 8.70, total: 17.40 },
        { sku: 'Y0100037', name: 'Equipo para venoclisis', qty: 3, unit: 20.00, total: 60.00 },
        { sku: 'Y1600030', name: 'Media antiembolica grande', qty: 1, unit: 360.00, total: 360.00 },
      ]
    },
    laboratorios: {
      id: 'lab',
      title: 'Laboratorios (Cotizado)',
      icon: <Microscope className="w-6 h-6" />,
      color: 'bg-slate-100 text-slate-600 border-slate-200',
      total: 0.00,
      isOptional: true,
      items: [
        { sku: 'HE01', name: 'Hematología completa', qty: 0, unit: 100.00, total: 0 },
        { sku: 'QS63', name: 'Glucosa al azar', qty: 0, unit: 70.00, total: 0 },
        { sku: 'QS29', name: 'Nitrogeno de urea', qty: 0, unit: 70.00, total: 0 },
        { sku: 'QS12', name: 'Creatinina', qty: 0, unit: 70.00, total: 0 },
        { sku: 'PCOU01', name: 'Tiempo de protrombina', qty: 0, unit: 72.00, total: 0 },
        { sku: 'CT008', name: 'Compatibilidad + Grupo sanguíneo', qty: 0, unit: 90.00, total: 0 },
        { sku: 'PCOU02', name: 'Tiempo parcial de tromboplastina', qty: 0, unit: 72.00, total: 0 },
      ]
    }
  };

  const grandTotal = 8438.37;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* HEADER / RESUMEN */}
        <header className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Stethoscope className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Presupuesto Quirúrgico</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Resumen de Costos</h1>
              <p className="text-slate-500 text-sm mt-1">Desglose detallado por áreas</p>
            </div>
            
            <div className="bg-slate-900 text-white px-6 py-4 rounded-xl text-right shadow-lg transform transition hover:scale-105 cursor-default">
              <p className="text-xs text-slate-400 uppercase font-bold mb-1">Total General</p>
              <div className="flex items-start justify-end gap-1">
                <span className="text-lg font-medium mt-1">Q</span>
                <span className="text-4xl font-bold tracking-tight">8,438.37</span>
              </div>
            </div>
          </div>
        </header>

        {/* LISTA DE CATEGORÍAS (ACORDEÓN) */}
        <div className="space-y-3">
          {Object.values(data).map((section) => (
            <div 
              key={section.id} 
              className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${openSection === section.id ? 'shadow-md ring-1 ring-slate-200' : 'border-slate-200 hover:border-slate-300'}`}
            >
              {/* Header del Acordeón */}
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg border ${section.color}`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{section.title}</h3>
                    <p className="text-slate-500 text-sm">{section.items.length} Ítems incluidos</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-slate-400 font-bold uppercase">Subtotal</p>
                    <p className={`font-bold text-lg ${section.isOptional ? 'text-slate-400' : 'text-slate-800'}`}>
                      Q {section.total.toLocaleString('es-GT', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  {openSection === section.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </div>
              </button>

              {/* Contenido Desplegable (Tabla de Ítems) */}
              {openSection === section.id && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-4 md:p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-400 uppercase font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-2 px-2">SKU/Ítem</th>
                          <th className="py-2 px-2 text-center">Cant.</th>
                          <th className="py-2 px-2 text-right">Precio Unit.</th>
                          <th className="py-2 px-2 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {section.items.map((item, index) => (
                          <tr key={index} className="hover:bg-white transition-colors">
                            <td className="py-3 px-2">
                              <div className="font-medium text-slate-700">{item.name}</div>
                              <div className="text-xs text-slate-400">{item.sku !== '-' ? item.sku : ''}</div>
                            </td>
                            <td className="py-3 px-2 text-center text-slate-600 bg-slate-50/50 rounded-lg">{item.qty || '-'}</td>
                            <td className="py-3 px-2 text-right text-slate-600">
                              Q{item.unit.toLocaleString('es-GT', { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-2 text-right font-semibold text-slate-800">
                              {item.total > 0 ? `Q${item.total.toLocaleString('es-GT', { minimumFractionDigits: 2 })}` : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {section.isOptional && (
                    <div className="mt-4 p-3 bg-slate-100 text-slate-500 text-xs rounded-lg text-center">
                      * Los laboratorios se encuentran listados para referencia de precios unitarios pero no están sumados al total general en este presupuesto.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Informativo */}
        <footer className="text-center text-slate-400 text-xs py-6 space-y-1">
          <p>Documento generado para fines informativos.</p>
          <p>Precios sujetos a cambios sin previo aviso.</p>
        </footer>

      </div>
    </div>
  );
}