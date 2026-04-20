import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function VistaPreviaDeImpresionFactura() {
    const items = [
        { code: 'ENG-902', desc: 'PISTÓN DE ALTA PRESIÓN - SERIE INDUSTRIAL TITAN', qty: 4, price: '450,00', total: '1.800,00' },
        { code: 'SL-044', desc: 'EMPACADURA TÉRMICA DE NEOPRENO REFORZADO', qty: 2, price: '125,50', total: '251,00' },
        { code: 'OIL-MAX', desc: 'LUBRICANTE SINTÉTICO GRADO PESADO (TAMBOR 20L)', qty: 1, price: '890,00', total: '890,00' }
    ];

    const InvoiceComponent = ({ type = 'ORIGINAL' }) => (
        <div className="bg-white text-black w-full max-w-[210mm] min-h-[297mm] p-12 border border-stone-200 shadow-sm print:shadow-none print:border-none relative overflow-hidden mb-12 last:mb-0">
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] pointer-events-none opacity-[0.03]">
                <span className="text-[12rem] font-headline font-black uppercase text-secondary">{type}</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-12">
                <div className="w-1/2 space-y-4">
                    <h1 className="font-headline font-black text-2xl tracking-tighter text-black uppercase">TITAN INDUSTRIAL C.A.</h1>
                    <div className="text-[10px] space-y-0.5 font-mono uppercase text-zinc-600">
                        <p className="font-bold text-black">RIF: J-12345678-9</p>
                        <p>AV. INTERCOMUNAL SECTOR LOS PINOS, GALPON 14-B.</p>
                        <p>VALENCIA, EDO. CARABOBO - VENEZUELA.</p>
                        <p>TELÉFONOS: (0241) 555-0199 / 555-0200</p>
                        <p>EMAIL: VENTAS@TITAN-INDUSTRIAL.COM</p>
                    </div>
                </div>
                <div className="w-1/3 text-right">
                    <div className="border border-black p-3 mb-4 bg-zinc-50 print:bg-transparent">
                        <h2 className="font-headline font-black text-xl uppercase leading-none italic">
                            FACTURA {type !== 'ORIGINAL' && `(${type})`}
                        </h2>
                    </div>
                    <div className="space-y-1 text-[11px] font-mono text-zinc-600">
                        <p>FECHA EMISIÓN: <span className="font-black text-black">24/05/2024</span></p>
                        <p>Nro. FACTURA: <span className="font-black text-black tracking-widest">00004582</span></p>
                        <p className="text-error font-black">Nro. CONTROL: 00-019284</p>
                    </div>
                </div>
            </div>

            {/* Client Info */}
            <div className="border border-black p-6 mb-8 bg-zinc-50/50 print:bg-transparent">
                <div className="grid grid-cols-2 gap-8 text-[11px] font-mono uppercase">
                    <div className="space-y-1">
                        <span className="text-[9px] text-zinc-500 font-black block">RAZÓN SOCIAL / NOMBRE TRANSACCIONAL</span>
                        <p className="font-black border-b border-zinc-200 pb-1 text-black">CONSTRUCTORA DEL CENTRO, S.A.</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[9px] text-zinc-500 font-black block">FISCAL ID / RIF</span>
                        <p className="font-black border-b border-zinc-200 pb-1 text-black">J-98765432-1</p>
                    </div>
                    <div className="col-span-2 space-y-1">
                        <span className="text-[9px] text-zinc-500 font-black block">DOMICILIO FISCAL AUTORIZADO</span>
                        <p className="font-black border-b border-zinc-200 pb-1 text-black leading-relaxed">CALLE 12, EDIFICIO INDUSTRIAL BETA, PISO 2, CARACAS.</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[9px] text-zinc-500 font-black block">TELÉFONO DE CONTACTO</span>
                        <p className="font-black border-b border-zinc-200 pb-1 text-black">0212-999-0000</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[9px] text-zinc-500 font-black block">CONDICIÓN DE SUMINISTRO</span>
                        <p className="font-black border-b border-zinc-200 pb-1 text-black">CRÉDITO 15 DÍAS</p>
                    </div>
                </div>
            </div>

            {/* Items Table */}
            <div className="border border-black mb-8 min-h-[450px]">
                <table className="w-full text-left text-[11px] font-mono border-collapse">
                    <thead className="bg-zinc-100 border-b border-black print:bg-transparent">
                        <tr className="font-black uppercase text-[10px]">
                            <th className="p-3 border-r border-black w-24">CÓDIGO</th>
                            <th className="p-3 border-r border-black">DESCRIPCIÓN TÉCNICA DEL ASSET</th>
                            <th className="p-3 border-r border-black text-center w-16">UNIT</th>
                            <th className="p-3 border-r border-black text-right w-32">P. UNITARIO</th>
                            <th className="p-3 text-right w-32">TOTAL (BS)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                        {items.map((it, i) => (
                            <tr key={i} className="text-black">
                                <td className="p-3 border-r border-zinc-200 font-black italic">{it.code}</td>
                                <td className="p-3 border-r border-zinc-200 font-black leading-relaxed uppercase">{it.desc}</td>
                                <td className="p-3 border-r border-zinc-200 text-center font-black">{it.qty}</td>
                                <td className="p-3 border-r border-zinc-200 text-right font-black">{it.price}</td>
                                <td className="p-3 text-right font-black">{it.total}</td>
                            </tr>
                        ))}
                        {/* Filler Rows for high density feel */}
                        {[...Array(8)].map((_, i) => (
                            <tr key={`filler-${i}`} className="h-10">
                                <td className="p-3 border-r border-zinc-200"></td>
                                <td className="p-3 border-r border-zinc-200"></td>
                                <td className="p-3 border-r border-zinc-200"></td>
                                <td className="p-3 border-r border-zinc-200"></td>
                                <td className="p-3"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Summary Area */}
            <div className="flex justify-end gap-16 mb-12">
                 <div className="w-1/2 space-y-2">
                    <div className="flex justify-between text-[11px] font-mono font-black border-b border-zinc-100 pb-1">
                        <span className="text-zinc-600 uppercase">SUB-TOTAL:</span>
                        <span className="text-black">2.941,00</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono font-black border-b border-zinc-100 pb-1">
                        <span className="text-zinc-600 uppercase">BASE IMPONIBLE (G) 16%:</span>
                        <span className="text-black">2.941,00</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono font-black border-b border-zinc-100 pb-1">
                        <span className="text-zinc-600 uppercase">I.V.A. (16%):</span>
                        <span className="text-black">470,56</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-headline font-black border-t-2 border-black pt-3 mt-4 text-black italic italic tracking-tighter">
                        <span className="uppercase">TOTAL FACTURA (BS):</span>
                        <span>3.411,56</span>
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 text-right mt-4 italic font-black uppercase tracking-widest">
                        PRECIOS EXPRESADOS EN MONEDA DE CURSO LEGAL (Bs.)
                    </div>
                </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-12 mt-20 mb-20">
                <div className="text-center space-y-4">
                    <div className="border-t border-black w-48 mx-auto"></div>
                    <span className="text-[9px] font-mono font-black text-black uppercase tracking-widest block">RECEPTOR (FIRMA Y SELLO)</span>
                    <span className="text-[8px] font-mono text-zinc-400 block italic">ID Transaccional Cliente: VALID_NODE</span>
                </div>
                <div className="text-center space-y-4">
                    <div className="border-t border-black w-48 mx-auto"></div>
                    <span className="text-[9px] font-mono font-black text-black uppercase tracking-widest block">EMISOR (FIRMA Y SELLO)</span>
                    <span className="text-[8px] font-mono text-zinc-400 block italic">Auth Protocol: FORGE_SECURE_NODE</span>
                </div>
            </div>

            {/* Footer Metadata */}
            <footer className="absolute bottom-12 left-12 right-12 pt-6 border-t border-dashed border-black">
                <div className="flex justify-between items-end text-[8px] font-mono uppercase text-zinc-500 font-bold leading-relaxed">
                    <div className="max-w-[75%] space-y-1">
                        <p className="text-black">IMPRENTA EL TREBOL AZUL, C.A. RIF: J-000111222-0. PROVIDENCIA ADMINISTRATIVA No. SENIAT/INTI/2023/0014.</p>
                        <p>FECHA DE EMISIÓN: 10/01/2024. SERIE: {type} | DESDE 00004001 HASTA 00005000.</p>
                    </div>
                    <div className="text-right text-[10px] font-black italic tracking-widest text-black">
                        {type}
                    </div>
                </div>
            </footer>
        </div>
    );

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest no-print">
                    <span className="material-symbols-outlined text-lg">print</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Vista Previa de Impresión</span>
                </div>
            }
        >
            <Head title="Vista Previa de Impresión Factura - Industrial Forge" />

            <div className="flex flex-col items-center pb-20 no-print px-4">
                {/* Print Control Toolbar */}
                <header className="fixed top-20 right-10 z-50 flex flex-col gap-4">
                     <button className="bg-primary text-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group border border-primary/20" onClick={() => window.print()}>
                        <span className="material-symbols-outlined text-3xl font-black italic">print</span>
                        <span className="absolute right-full mr-6 bg-black text-white text-[9px] font-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest border border-zinc-800">Execute Print Protocol</span>
                    </button>
                    <button className="bg-zinc-900 border border-zinc-800 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span className="material-symbols-outlined text-3xl">download</span>
                        <span className="absolute right-full mr-6 bg-black text-white text-[9px] font-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest border border-zinc-800">Download Manifest PDF</span>
                    </button>
                </header>

                <div className="my-12 flex flex-col gap-6 items-center">
                    <div className="bg-zinc-950 px-8 py-3 rounded-full border border-zinc-900 mb-8 animate-pulse">
                         <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] italic leading-none">PREVIEW MODE: Ink-Optimized Data Rendering Protocol</span>
                    </div>

                    {/* Original Copy */}
                    <div className="scale-[0.8] md:scale-100 origin-top">
                        <InvoiceComponent type="ORIGINAL" />
                    </div>

                    {/* Separator / Manual Break */}
                    <div className="h-px w-full max-w-[210mm] bg-zinc-900 dashed-divider opacity-20 my-10"></div>

                    {/* Accounting Copy */}
                    <div className="scale-[0.8] md:scale-100 origin-top">
                        <InvoiceComponent type="COPIA CONTABILIDAD" />
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; margin: 0 !important; padding: 0 !important; }
                    main { margin: 0 !important; padding: 0 !important; }
                    .print-area { margin: 0 !important; border: none !important; box-shadow: none !important; width: 100% !important; height: auto !important; }
                    .page-break { page-break-after: always; }
                }
                .dashed-divider {
                    background-image: linear-gradient(to right, #27272a 50%, transparent 50%);
                    background-size: 10px 1px;
                    background-repeat: repeat-x;
                    height: 1px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
