import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function PlanDeCuentas() {
    const accounts = [
        { code: '1.0.00.00', name: 'ACTIVOS', type: 'ASSET', balance: '2,450,892.40', level: 0 },
        { code: '1.1.00.00', name: 'Activos Corrientes', type: 'ASSET', balance: '1,120,440.00', level: 1 },
        { code: '1.1.01.01', name: 'Caja General - Principal', type: 'LIQUID ASSET', balance: '12,450.00', level: 2 },
        { code: '1.1.01.02', name: 'Bancos - Operativo Central', type: 'LIQUID ASSET', balance: '458,990.00', level: 2 },
        { code: '1.1.05.01', name: 'Inventario de Repuestos Pesados', type: 'INVENTORY', balance: '649,000.00', level: 2 },
        { code: '2.0.00.00', name: 'PASIVOS', type: 'LIABILITY', balance: '842,110.15', level: 0 },
        { code: '2.1.00.00', name: 'Pasivos a Corto Plazo', type: 'LIABILITY', balance: '312,400.00', level: 1 },
        { code: '2.1.01.01', name: 'Proveedores Nacionales', type: 'PAYABLE', balance: '198,000.00', level: 2 },
        { code: '2.1.05.10', name: 'Impuestos por Pagar (IVA)', type: 'TAX', balance: '114,400.00', level: 2 },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">account_tree</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Plan de Cuentas</span>
                </div>
            }
        >
            <Head title="Plan de Cuentas Contable" />

            <div className="space-y-10 pb-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                        <span className="text-primary font-bold font-label tracking-widest text-[10px] uppercase">Hierarchy Configuration</span>
                        <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tighter uppercase mt-1 text-white">Chart of Accounts</h1>
                        <div className="h-1.5 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_#9acd32]"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-zinc-900 border border-outline-variant/10 px-8 py-3.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-zinc-800 transition-all active:scale-95">
                            <span className="material-symbols-outlined text-sm">upload_file</span>
                            Export Ledger
                        </button>
                        <button className="bg-primary text-black px-8 py-3.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(154,205,50,0.3)]">
                            <span className="material-symbols-outlined text-sm font-black">add_circle</span>
                            New Account
                        </button>
                    </div>
                </div>

                {/* Dashboard Stats Summary (Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-zinc-900/50 p-8 border-l-4 border-primary rounded-2xl shadow-xl">
                        <p className="text-[9px] text-stone-500 font-black uppercase tracking-[0.3em] mb-2">Total Assets</p>
                        <p className="text-2xl font-headline font-black text-white">$2,450,892.40</p>
                    </div>
                    <div className="bg-zinc-900/50 p-8 border-l-4 border-error rounded-2xl shadow-xl">
                        <p className="text-[9px] text-stone-500 font-black uppercase tracking-[0.3em] mb-2">Total Liabilities</p>
                        <p className="text-2xl font-headline font-black text-white">$842,110.15</p>
                    </div>
                    <div className="bg-zinc-900/50 p-8 border-l-4 border-amber-500 rounded-2xl shadow-xl">
                        <p className="text-[9px] text-stone-500 font-black uppercase tracking-[0.3em] mb-2">Total Equity</p>
                        <p className="text-2xl font-headline font-black text-white">$1,608,782.25</p>
                    </div>
                    <div className="bg-zinc-900/50 p-8 border-l-4 border-stone-700 rounded-2xl shadow-xl">
                        <p className="text-[9px] text-stone-500 font-black uppercase tracking-[0.3em] mb-2">Account Nodes</p>
                        <p className="text-2xl font-headline font-black text-white">142 Entries</p>
                    </div>
                </div>

                {/* Hierarchical Table */}
                <div className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="grid grid-cols-12 bg-zinc-950 text-stone-600 py-6 px-10 text-[9px] font-black uppercase tracking-[0.4em]">
                        <div className="col-span-2">Account Code</div>
                        <div className="col-span-4">Account Name</div>
                        <div className="col-span-2">Type</div>
                        <div className="col-span-2 text-right">Current Balance</div>
                        <div className="col-span-2 text-right">Actions</div>
                    </div>
                    
                    <div className="divide-y divide-outline-variant/5">
                        {accounts.map((account, i) => (
                            <div 
                                key={i} 
                                className={`grid grid-cols-12 py-6 px-10 items-center hover:bg-zinc-950/40 transition-colors group/row ${
                                    account.level === 0 ? 'bg-zinc-950/20 font-black' : 
                                    account.level === 1 ? 'bg-zinc-900/50 font-bold' : 'text-stone-400 font-medium'
                                }`}
                            >
                                <div className={`col-span-2 font-mono tracking-widest ${account.level > 0 ? (account.level === 1 ? 'pl-4' : 'pl-8 text-stone-600') : 'text-primary'}`}>
                                    {account.code}
                                </div>
                                <div className={`col-span-4 uppercase tracking-tight ${account.level === 0 ? 'text-white text-base' : 'text-stone-300'}`}>
                                    {account.name}
                                </div>
                                <div className="col-span-2">
                                    <span className="text-[8px] font-black tracking-widest bg-zinc-950 px-2 py-1 rounded border border-white/5">{account.type}</span>
                                </div>
                                <div className={`col-span-2 text-right font-headline ${account.level === 0 ? 'text-white' : 'text-stone-400'}`}>
                                    $ {account.balance}
                                </div>
                                <div className="col-span-2 flex justify-end gap-4 text-stone-700">
                                    <button className="hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">edit_note</span>
                                    </button>
                                    <button className="hover:text-amber-500 transition-colors">
                                        <span className="material-symbols-outlined text-lg">visibility</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table Footer */}
                    <div className="bg-zinc-950/80 px-10 py-5 flex items-center justify-between border-t border-outline-variant/10">
                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.5em]">Synchronized with Core Ledger Forge</span>
                        <div className="flex gap-10">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#9acd32]"></div>
                                <span className="text-[9px] font-black text-white uppercase tracking-widest">Database Online</span>
                            </div>
                            <span className="text-[9px] font-black text-stone-800 uppercase tracking-widest">T-XC44-LEDGER</span>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
