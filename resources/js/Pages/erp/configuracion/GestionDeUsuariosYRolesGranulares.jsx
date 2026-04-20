import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeUsuariosYRolesGranulares() {
    const users = [
        {
            name: 'Elena Rodriguez',
            email: 'erodriguez@lacima.erp',
            role: 'System Admin',
            roleColor: 'bg-primary/20 text-primary border-primary/20',
            node: 'HQ-MAIN-01',
            status: 'Encrypted',
            statusColor: 'text-primary'
        },
        {
            name: 'Marcus Chen',
            email: 'mchen@lacima.erp',
            role: 'Accountant',
            roleColor: 'bg-zinc-950 text-stone-600 border-zinc-800',
            node: 'FIN-OPS-12',
            status: 'Active',
            statusColor: 'text-primary'
        },
        {
            name: 'Sarah Jenkins',
            email: 'sjenkins@lacima.erp',
            role: 'Seller',
            roleColor: 'bg-zinc-950 text-stone-600 border-zinc-800',
            node: 'SALES-REM-04',
            status: 'Locked',
            statusColor: 'text-error'
        }
    ];

    const permissions = [
        { module: 'Inventory & Warehouse', v: true, c: true, e: true, d: false, inherit: 'Global Admin Default' },
        { module: 'Sales & CRM Engine', v: true, c: true, e: false, d: false, inherit: 'Role: Regional Seller' },
        { module: 'Financial Ledger', v: true, c: false, e: false, d: false, inherit: 'Custom Policy A1' },
        { module: 'System & DB Access', v: false, c: false, e: false, d: false, inherit: 'Access Forbidden', error: true }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                    <span>Usuarios <span className="text-white/60 mx-2">|</span> Acceso y Roles Granulares</span>
                </div>
            }
        >
            <Head title="Gestión de Usuarios y Roles" />

            <div className="space-y-12 pb-20 px-4">
                {/* Header Section */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Authorization Matrix Engine</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Access Ops v2.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">User <br/> <span className="text-stone-700">Access</span></h1>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-8">
                    {/* Active Directory Table */}
                    <section className="col-span-12 xl:col-span-8 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden group relative">
                        <span className="material-symbols-outlined absolute -right-6 -top-6 text-[160px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">shield</span>
                        
                        <div className="p-10 border-b border-zinc-800 flex flex-col xl:flex-row xl:items-center justify-between gap-8 relative z-10">
                            <div>
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Active Directory</h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.2em] mt-2">Managing 124 global identities</p>
                            </div>
                            <button className="bg-primary text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-105 active:scale-95 transition-all shadow-primary/10">
                                Add New Operator
                            </button>
                        </div>

                        <div className="overflow-x-auto relative z-10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-zinc-950/30">
                                        {['Identity', 'Assigned Role', 'Node Affinity', 'Protocol Status', 'Actions'].map(head => (
                                            <th key={head} className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 border-b border-zinc-800">{head}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/50">
                                    {users.map((user, i) => (
                                        <tr key={i} className="group/row hover:bg-zinc-950 transition-all duration-300">
                                            <td className="px-10 py-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-xl bg-zinc-950 border border-outline-variant/5 overflow-hidden">
                                                        <img className="w-full h-full object-cover grayscale opacity-60 group-hover/row:opacity-100 group-hover/row:grayscale-0 transition-all" src={`https://i.pravatar.cc/150?u=${user.email}`} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="block text-sm font-headline font-black text-white uppercase tracking-tighter">{user.name}</span>
                                                        <span className="block text-[10px] font-black text-stone-700 uppercase tracking-widest">{user.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-8">
                                                <span className={`px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.3em] ${user.roleColor}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-10 py-8">
                                                <span className="font-mono text-xs text-stone-600 tracking-widest uppercase italic font-bold">{user.node}</span>
                                            </td>
                                            <td className="px-10 py-8">
                                                <div className={`flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] ${user.statusColor}`}>
                                                    <span className={`w-2 h-2 rounded-full ${user.status === 'Locked' ? 'bg-error' : 'bg-primary animate-pulse shadow-[0_0_8px_rgba(154,205,50,0.5)]'}`}></span>
                                                    {user.status}
                                                </div>
                                            </td>
                                            <td className="px-10 py-8 text-right">
                                                <div className="flex justify-end gap-4">
                                                    <button className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-700 hover:text-white transition-colors underline decoration-primary/50 underline-offset-4 italic">Edit</button>
                                                    <button className={`text-[10px] font-black uppercase tracking-[0.3em] italic ${user.status === 'Locked' ? 'text-primary' : 'text-error/60 hover:text-error'} transition-all`}>
                                                        {user.status === 'Locked' ? 'Unlock' : 'Reset 2FA'}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Security Stats Sidebar */}
                    <aside className="col-span-12 xl:col-span-4 space-y-8">
                        {/* Security Pulse */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl space-y-10 relative overflow-hidden group">
                            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[140px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">lock_reset</span>
                            <div className="relative z-10 space-y-2">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Security <br/> <span className="text-primary italic">Pulse</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.2em]">Real-time Authorization Metrics</p>
                            </div>
                            <div className="relative z-10 space-y-6">
                                {[
                                    { l: 'Auth Success Rate', v: '99.8%', c: 'text-primary' },
                                    { l: 'Pending 2FA Resets', v: '03', c: 'text-amber-500' },
                                    { l: 'Failed Login Attempts', v: '12', c: 'text-error' }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-zinc-800 last:border-none">
                                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">{stat.l}</span>
                                        <span className={`text-2xl font-headline font-black ${stat.c} tracking-tighter`}>{stat.v}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="relative z-10 w-full bg-zinc-950 text-primary border border-primary/20 py-4 rounded-2xl font-black text-[9px] uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all active:scale-95">
                                Download Security Audit
                            </button>
                        </section>

                        {/* Roles Distribution */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl space-y-8">
                            <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Global Roles</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { l: 'Admins', v: '04', c: 'text-primary' },
                                    { l: 'Sellers', v: '42', c: 'text-white' },
                                    { l: 'Logistics', v: '68', c: 'text-white' },
                                    { l: 'Guests', v: '10', c: 'text-stone-700' }
                                ].map((role, i) => (
                                    <div key={i} className="bg-zinc-950 p-6 rounded-[32px] border border-outline-variant/5 space-y-2">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest block">{role.l}</span>
                                        <span className={`text-3xl font-headline font-black ${role.c} italic tracking-tighter`}>{role.v}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>

                    {/* Permission Matrix */}
                    <section className="col-span-12 bg-zinc-900 rounded-[56px] border border-outline-variant/10 border-l-[12px] border-l-primary p-12 shadow-3xl space-y-12">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                            <div className="space-y-2">
                                <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Permission Matrix</h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Engineered Structural Access Mapping</p>
                            </div>
                            <span className="text-[9px] font-black text-primary bg-primary/5 px-6 py-2 rounded-full border border-primary/10 tracking-[0.4em] uppercase self-start xl:self-center italic">Mode: Structural Editing</span>
                        </div>

                        <div className="bg-zinc-950 rounded-[40px] border border-outline-variant/5 overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-zinc-900/50">
                                        <th className="p-8 w-1/4 border-r border-zinc-900 text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Module / Segment</th>
                                        {['View', 'Create', 'Edit', 'Delete'].map(act => (
                                            <th key={act} className="p-8 text-center text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">{act}</th>
                                        ))}
                                        <th className="p-8 text-right text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Inheritance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permissions.map((perm, i) => (
                                        <tr key={i} className="border-b border-zinc-900 last:border-none group/perm transition-colors hover:bg-zinc-900/10 text-xs">
                                            <td className="p-8 font-headline font-black text-white uppercase tracking-tighter border-r border-zinc-900 italic">{perm.module}</td>
                                            {[perm.v, perm.c, perm.e, perm.d].map((val, idx) => (
                                                <td key={idx} className="p-8 text-center">
                                                    <span className={`material-symbols-outlined text-3xl transition-transform group-hover/perm:scale-110 ${val ? 'text-primary' : 'text-stone-900'}`} style={{ fontVariationSettings: val ? "'FILL' 1" : "'FILL' 0" }}>
                                                        {val ? 'check_circle' : 'radio_button_unchecked'}
                                                    </span>
                                                </td>
                                            ))}
                                            <td className="p-8 text-right">
                                                <span className={`text-[10px] font-black uppercase tracking-widest italic ${perm.error ? 'text-error underline underline-offset-4 decoration-error/50' : 'text-stone-700 group-hover/perm:text-stone-400 transtion-colors'}`}>
                                                    {perm.inherit}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-end gap-6 pt-4">
                            <button className="bg-zinc-950 text-stone-700 px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] border border-outline-variant/10 hover:text-white transition-all">
                                Discard Changes
                            </button>
                            <button className="bg-white text-black px-12 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] shadow-xl hover:scale-105 active:scale-95 transition-all">
                                Commit Access Schema
                            </button>
                        </div>
                    </section>
                </div>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none italic">AUTH MATRIX</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Identity & Authorization Protocol Infrastructure</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                        {['Core_Engine: v4.22.0', 'DB_Latency: 12ms', 'Uptime: 99.998%'].map(metric => (
                            <span key={metric} className="px-2 border-r border-zinc-900 last:border-none">{metric}</span>
                        ))}
                    </div>
                    <div className="bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-primary-container bg-on-primary-container px-4 py-1.5 rounded-full tracking-[0.2em]">PRODUCTION ENVIRONMENT</span>
                    </div>
                </footer>
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
