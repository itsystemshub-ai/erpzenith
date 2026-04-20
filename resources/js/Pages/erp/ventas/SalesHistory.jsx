import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DataTable from '@/Components/DataTable';
import ModuleHeader from '@/Components/ModuleHeader';
import { Head } from '@inertiajs/react';

export default function SalesHistory() {
    const columns = [
        { key: 'invoice_no', label: 'Nro. Factura', render: (row) => <span className="font-headline font-black text-primary">{row.invoice_no}</span> },
        { key: 'date', label: 'Fecha Emisión' },
        { key: 'customer', label: 'Cliente', render: (row) => (
            <div>
                <div className="font-bold text-on-surface">{row.customer}</div>
                <div className="text-[10px] text-secondary uppercase tracking-widest">{row.rif}</div>
            </div>
        )},
        { key: 'status', label: 'Estado', render: (row) => (
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                row.status === 'Pagada' ? 'bg-green-100 text-green-700' : 
                row.status === 'Pendiente' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
            }`}>
                {row.status}
            </span>
        )},
        { key: 'total', label: 'Total Divisas', align: 'right', render: (row) => `$ ${row.total.toFixed(2)}` },
    ];

    const mockSales = [
        { invoice_no: 'FAC-2024-0001', date: '2026-04-19 10:30', customer: 'Transporte Carabobo', rif: 'J-12345678-9', total: 1287.60, status: 'Pagada' },
        { invoice_no: 'FAC-2024-0002', date: '2026-04-19 11:15', customer: 'Consumidor Final', rif: 'V-20123456', total: 45.00, status: 'Pagada' },
        { invoice_no: 'FAC-2024-0003', date: '2026-04-18 15:45', customer: 'Industrial Parts S.A.', rif: 'J-98765432-1', total: 3450.00, status: 'Pendiente' },
        { invoice_no: 'FAC-2024-0004', date: '2026-04-18 09:20', customer: 'Constructora Master', rif: 'J-45678901-2', total: 890.15, status: 'Pagada' },
        { invoice_no: 'FAC-2024-0005', date: '2026-04-17 14:10', customer: 'Cliente Eventual', rif: 'V-15098734', total: 120.00, status: 'Anulada' },
    ];

    const actions = [
        { icon: 'visibility', onClick: (row) => console.log('Ver', row) },
        { icon: 'print', onClick: (row) => console.log('Imprimir', row) },
        { icon: 'download', onClick: (row) => console.log('Descargar PDF', row) },
    ];

    const headerActions = [
        { label: 'Nueva Venta', icon: 'add', route: 'erp.legacy.universal', params: { path: 'erp/ventas/punto_de_venta_pos' }, primary: true },
        { label: 'Exportar Reporte', icon: 'description' },
    ];

    const breadcrumbs = [
        { name: 'Ventas', route: 'erp.legacy.universal', params: { path: 'erp/ventas/dashboard_de_ventas_kpis' } },
        { name: 'Historial Global', active: true },
    ];

    return (
        <AuthenticatedLayout header="Historial Global de Ventas">
            <Head title="Historial - Zenith ERP" />

            <ModuleHeader 
                title="Registro de Facturación" 
                breadcrumbs={breadcrumbs}
                actions={headerActions}
            />

            <div className="space-y-6">
                {/* Advanced Search & Filters */}
                <div className="bg-surface-container-low/30 p-6 rounded-3xl border border-outline-variant/30 flex flex-wrap gap-4 items-center">
                    <div className="flex-1 min-w-[200px]">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-3 text-secondary text-[20px]">search</span>
                            <input 
                                type="text" 
                                placeholder="Buscar por factura, cliente o RIF..." 
                                className="w-full pl-12 pr-4 h-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <select className="h-12 px-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 text-sm focus:ring-1 focus:ring-primary cursor-pointer">
                            <option>Todos los Estados</option>
                            <option>Pagada</option>
                            <option>Pendiente</option>
                            <option>Anulada</option>
                        </select>
                        <button className="h-12 px-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 text-xs font-bold uppercase tracking-widest text-secondary hover:bg-surface-container-high transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                            Este Mes
                        </button>
                    </div>
                </div>

                <DataTable 
                    columns={columns} 
                    data={mockSales} 
                    actions={actions}
                />
            </div>
        </AuthenticatedLayout>
    );
}
