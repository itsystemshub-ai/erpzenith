import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeEmpleados() {
    const employees = [
        { name: 'Marcos Rodríguez', email: 'm.rodriguez@forge-ind.com', id: 'V-18.452.102', dept: 'Maintenance', role: 'Chief Technician', salary: '$2,850.00', date: '15 Jan 2018', status: 'Active', initials: 'MR' },
        { name: 'Elena Vasquez', email: 'e.vasquez@forge-ind.com', id: 'V-22.109.443', dept: 'Logistics', role: 'Supply Chain Analyst', salary: '$3,100.00', date: '03 May 2020', status: 'Active', initials: 'EV' },
        { name: 'Javier Mendez', email: 'j.mendez@forge-ind.com', id: 'V-15.332.990', dept: 'Engineering', role: 'Systems Architect', salary: '$5,400.00', date: '22 Nov 2015', status: 'Inactive', initials: 'JM' },
        { name: 'Sofia Torres', email: 's.torres@forge-ind.com', id: 'V-20.998.331', dept: 'Quality Control', role: 'Compliance Lead', salary: '$4,250.00', date: '10 Feb 2019', status: 'Active', initials: 'ST' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">folder_shared</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Gestión de Empleados</span>
                </div>
            }
        >
            <Head title="Gestión de Empleados" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Human Capital Registry Matrix</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            STAFF <br/><span className="text-stone-700">NODES</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            MAYOR DE REPUESTO LA CIMA, C.A. • Expediente Digital de Personal
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-5 bg-zinc-950 text-stone-700 font-black text-[9px] uppercase tracking-[0.3em] border border-white/5 rounded-2xl hover:text-white transition-all shadow-inner">
                            Filter Protocol_Advanced
                        </button>
                        <button className="px-10 py-5 bg-primary text-black font-black text-[9px] uppercase tracking-[0.3em] rounded-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            <span className="material-symbols-outlined text-sm font-black">person_add</span> Enrol_New Personnel
                        </button>
                    </div>
                </header>

                {/* Dashboard Widgets Bento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-8 italic">Total Personnel_Staff</p>
                        <div>
                            <p className="text-6xl font-headline font-black text-white italic tracking-tighter decoration-double underline decoration-primary/20">1,248</p>
                            <div className="flex items-center gap-2 text-primary mt-4">
                                <span className="material-symbols-outlined text-sm font-black animate-pulse">trending_up</span>
                                <span className="text-[9px] font-black uppercase tracking-widest">+12% Quarterly Delta</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col justify-between group">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800 mb-8 italic">Active Operations</p>
                        <div>
                            <p className="text-4xl font-headline font-black text-stone-500 italic tracking-tighter">1,182</p>
                            <p className="text-[8px] text-stone-900 font-black uppercase tracking-widest mt-4 italic">Plant Floor & Logistics Modules</p>
                        </div>
                    </div>

                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col justify-between">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800 mb-8 italic">Personnel On Leave</p>
                        <div>
                            <p className="text-4xl font-headline font-black text-stone-500 italic tracking-tighter">24</p>
                            <p className="text-[8px] text-stone-900 font-black uppercase tracking-widest mt-4 italic">Vacation / Medical / Personal</p>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-error/20 shadow-3xl flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-error/5 -mt-10 -mr-10 rounded-full blur-2xl group-hover:bg-error/10 transition-all duration-700"></div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-error mb-8 italic italic">Pending Approvals</p>
                        <div>
                            <div className="flex items-center gap-4">
                                <p className="text-5xl font-headline font-black text-error italic tracking-tighter">08</p>
                                <span className="material-symbols-outlined text-error font-black animate-pulse">priority_high</span>
                            </div>
                            <p className="mt-4 text-[8px] font-black text-error uppercase tracking-widest italic decoration-solid underline decoration-error/30 underline-offset-4">Critical Managerial Action Needed</p>
                        </div>
                    </div>
                </div>

                {/* Main Staff Registry Section */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    
                    {/* Filters Matrix bar */}
                    <div className="relative z-10 p-10 bg-zinc-950/40 border-b border-white/5 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic">Department_Hub</label>
                            <select className="w-full bg-zinc-950 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                <option>All Departments</option>
                                <option>Engineering_Core</option>
                                <option>Maintenance_Ops</option>
                                <option>Quality_Control</option>
                                <option>Logistics_Chain</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic">Role_Level</label>
                            <select className="w-full bg-zinc-950 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                <option>All Roles Matrix</option>
                                <option>Executive_Layer</option>
                                <option>Team_Lead_Node</option>
                                <option>Specialist_Unit</option>
                                <option>Operator_Base</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic">Tenure_Delta</label>
                            <select className="w-full bg-zinc-950 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                <option>Any Tenure Duration</option>
                                <option>5+ Years Protocol</option>
                                <option>2-5 Years Vector</option>
                                <option>Under 2 Years Cycle</option>
                            </select>
                        </div>
                        <div className="flex items-end gap-4">
                            <button className="flex-1 bg-zinc-900 p-5 rounded-2xl text-stone-700 hover:text-primary transition-all border border-white/5 shadow-inner">
                                <span className="material-symbols-outlined">download</span>
                            </button>
                            <button className="flex-1 bg-zinc-900 p-5 rounded-2xl text-stone-700 hover:text-primary transition-all border border-white/5 shadow-inner">
                                <span className="material-symbols-outlined">print</span>
                            </button>
                        </div>
                    </div>

                    {/* High-Density Registry Matrix */}
                    <div className="relative z-10 overflow-x-auto p-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-10 py-6">Personnel Node</th>
                                    <th className="px-10 py-6">Identity #ID</th>
                                    <th className="px-10 py-6">Department</th>
                                    <th className="px-10 py-6">Structural Role</th>
                                    <th className="px-10 py-6 text-right">Base_Salary</th>
                                    <th className="px-10 py-6">Enrolment_Date</th>
                                    <th className="px-10 py-6">Status Delta</th>
                                    <th className="px-10 py-6"></th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {employees.map((e, i) => (
                                    <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                        <td className="px-10 py-8 first:rounded-l-[32px]">
                                            <div className="flex items-center gap-6">
                                                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center font-headline font-black text-primary rounded-2xl border border-white/5 shadow-inner relative overflow-hidden group-hover/row:scale-110 transition-transform">
                                                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/row:opacity-100 transition-opacity"></div>
                                                    {e.initials}
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{e.name}</span>
                                                    <span className="text-[8px] text-stone-800 font-mono tracking-widest lowercase">{e.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 font-mono text-stone-500 tracking-widest">{e.id}</td>
                                        <td className="px-10 py-8">
                                            <span className="bg-zinc-900 text-stone-800 text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5 shadow-inner italic">
                                                {e.dept}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-stone-400 italic font-medium">{e.role}</td>
                                        <td className="px-10 py-8 text-right text-primary font-headline text-xl tabular-nums italic tracking-tighter underline underline-offset-8 decoration-primary/20">{e.salary}</td>
                                        <td className="px-10 py-8 text-stone-700 italic tracking-widest">{e.date}</td>
                                        <td className="px-10 py-8">
                                            <span className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest italic ${e.status === 'Active' ? 'text-primary' : 'text-stone-800'}`}>
                                                <span className={`w-2 h-2 rounded-full ${e.status === 'Active' ? 'bg-primary shadow-[0_0_8px_#9acd32]' : 'bg-stone-900'}`}></span>
                                                {e.status}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-right last:rounded-r-[32px]">
                                            <div className="flex gap-4 opacity-30 group-hover/row:opacity-100 transition-opacity">
                                                <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white hover:scale-110 transition-all border border-white/5 shadow-inner" title="View Digital File">
                                                    <span className="material-symbols-outlined text-2xl">folder_shared</span>
                                                </button>
                                                <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white hover:scale-110 transition-all border border-white/5 shadow-inner" title="Edit Vector">
                                                    <span className="material-symbols-outlined text-2xl">edit_note</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="relative z-10 p-10 bg-zinc-950/40 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Showing 4 of 1,248 workforce Units</span>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 bg-zinc-950 rounded-2xl border border-white/5 flex items-center justify-center text-stone-700 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-black font-black font-headline text-lg italic shadow-2xl">01</button>
                            <button className="w-14 h-14 bg-zinc-950 rounded-2xl border border-white/5 flex items-center justify-center text-stone-700 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">STAFF MANAGEMENT LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span>Staff Registry: Digital Compliance</span>
                             <span className="w-1 h-1 bg-stone-900 rounded-full"></span>
                             <span>Data Integrity Layer Active</span>
                         </div>
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
