import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNEmpleadosExpedienteDigital() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-neutral-50 dark:bg-neutral-950 flex flex-col border-r border-neutral-200 dark:border-neutral-800">
<div className="px-6 py-8">
<h1 className="font-['Space_Grotesk'] font-black text-lime-700 dark:text-lime-400 text-2xl tracking-tighter">HR MODULE</h1>
<p className="font-['Inter'] font-semibold text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Industrial Control</p>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="flex items-center px-4 py-3 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300 border-r-4 border-lime-600 font-['Inter'] font-semibold text-sm uppercase transition-colors duration-200" href="#">
<span className="material-symbols-outlined mr-3">badge</span> Employee Files
            </a>
<a className="flex items-center px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-['Inter'] font-semibold text-sm uppercase transition-colors duration-200" href="#">
<span className="material-symbols-outlined mr-3">payments</span> Payroll
            </a>
<a className="flex items-center px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-['Inter'] font-semibold text-sm uppercase transition-colors duration-200" href="#">
<span className="material-symbols-outlined mr-3">account_balance</span> Social Benefits
            </a>
<a className="flex items-center px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-['Inter'] font-semibold text-sm uppercase transition-colors duration-200" href="#">
<span className="material-symbols-outlined mr-3">event_busy</span> Leave Mgmt
            </a>
<a className="flex items-center px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-['Inter'] font-semibold text-sm uppercase transition-colors duration-200" href="#">
<span className="material-symbols-outlined mr-3">gavel</span> Legal Reports
            </a>
</nav>
<div className="px-4 py-6 border-t border-neutral-200 dark:border-neutral-800">
<button className="w-full bg-primary text-on-primary font-bold uppercase text-xs py-3 rounded-sm flex items-center justify-center gap-2 hover:scale-102 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">description</span> Generate Report
            </button>
<div className="mt-6 space-y-1">
<a className="flex items-center px-4 py-2 text-neutral-500 text-xs font-bold uppercase" href="#">
<span className="material-symbols-outlined mr-3 text-sm">help_center</span> Support
                </a>
<a className="flex items-center px-4 py-2 text-neutral-500 text-xs font-bold uppercase" href="#">
<span className="material-symbols-outlined mr-3 text-sm">logout</span> Logout
                </a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen flex flex-col bg-surface">
{/* Comentario remanente */}
<header className="fixed top-0 right-0 left-64 z-30 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-[0_24px_40px_rgba(26,28,28,0.06)] px-8 py-3 flex justify-between items-center border-b border-neutral-100">
<div className="flex items-center gap-8">
<span className="font-['Space_Grotesk'] uppercase tracking-tight text-xl font-bold text-neutral-900 dark:text-neutral-50">FORGE INDUSTRIAL ERP</span>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-neutral-400">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container-highest border-none rounded-md text-sm w-80 focus:ring-2 focus:ring-primary transition-all" placeholder="Search employee by name or ID..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full transition-all">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
<div className="text-right">
<p className="text-xs font-bold text-on-surface">HR Manager</p>
<p className="text-[10px] text-secondary">Operational Hub</p>
</div>
<img className="w-10 h-10 rounded-full object-cover grayscale brightness-90" data-alt="professional portrait of a high-level industrial manager in a clean warehouse office setting with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3SKEFavsDc6pSxjK77Om-VTlK12VNvDO1KXsygl3bVVHvIx4xPx5gB2vgaRGFF-Uk9ZM7pj6ov1nBJfxNj-uPeCPqbUieJcplx5bZHwVUMWsy8B57p6cJumf-0YlRZP9bg00mMe9FFWIlZOf0sY-Nuc0hbaZh5YtHB2M4ZHQaAi6vXpDx94TrSW0rkcuI3aUwhX9CczdzcjEa9Suj9pPDzSgI25R22ilErtzimIqrJSZRKNvRsQ7zAar25EvcOmqcoG_hbU24Y_M"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="mt-20 px-10 pb-12 flex-1">
{/* Comentario remanente */}
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-4xl font-black uppercase tracking-tight text-on-surface">Expediente Digital</h2>
<p className="text-secondary font-medium mt-1">Gestión Centralizada de Personal Industrial • Forge Industrial Group</p>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high px-6 py-2.5 font-bold uppercase text-xs flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span> Advanced Filters
                    </button>
<button className="bg-primary px-6 py-2.5 text-on-primary font-bold uppercase text-xs flex items-center gap-2 shadow-sm hover:scale-102 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">person_add</span> New Employee
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-4 gap-4 mb-8">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-primary">
<p className="text-[10px] uppercase font-bold text-secondary tracking-widest">Total Staff</p>
<p className="text-3xl font-black text-on-surface mt-1">1,248</p>
<p className="text-xs text-lime-600 font-bold mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +12% this quarter
                    </p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<p className="text-[10px] uppercase font-bold text-secondary tracking-widest">Active Operations</p>
<p className="text-3xl font-black text-on-surface mt-1">1,182</p>
<p className="text-xs text-secondary mt-2">Plant Floor &amp; Logistics</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<p className="text-[10px] uppercase font-bold text-secondary tracking-widest">On Leave</p>
<p className="text-3xl font-black text-on-surface mt-1">24</p>
<p className="text-xs text-secondary mt-2">Vacation / Medical / Personal</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<p className="text-[10px] uppercase font-bold text-secondary tracking-widest">Pending Approvals</p>
<p className="text-3xl font-black text-on-surface mt-1">08</p>
<p className="text-xs text-error font-bold mt-2">Action required</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden border border-surface-container">
{/* Comentario remanente */}
<div className="bg-surface-container-low px-6 py-4 flex gap-6 items-center border-b border-surface-container">
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase text-secondary">Department</label>
<select className="bg-surface border-none text-xs font-bold py-1 px-3 focus:ring-1 focus:ring-primary">
<option>All Departments</option>
<option>Engineering</option>
<option>Maintenance</option>
<option>Quality Control</option>
<option>Logistics</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase text-secondary">Role Level</label>
<select className="bg-surface border-none text-xs font-bold py-1 px-3 focus:ring-1 focus:ring-primary">
<option>All Roles</option>
<option>Executive</option>
<option>Team Lead</option>
<option>Specialist</option>
<option>Operator</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase text-secondary">Tenure</label>
<select className="bg-surface border-none text-xs font-bold py-1 px-3 focus:ring-1 focus:ring-primary">
<option>Any Duration</option>
<option>5+ Years</option>
<option>2-5 Years</option>
<option>Under 2 Years</option>
</select>
</div>
<div className="flex-1"></div>
<div className="flex gap-2">
<button className="p-2 bg-surface text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
<button className="p-2 bg-surface text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">print</span>
</button>
</div>
</div>
{/* Comentario remanente */}
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-secondary font-black uppercase text-[11px] tracking-widest border-b border-surface-container-high">
<th className="px-6 py-4">Employee</th>
<th className="px-4 py-4">ID (V/E)</th>
<th className="px-4 py-4">Department</th>
<th className="px-4 py-4">Role</th>
<th className="px-4 py-4 text-right">Base Salary</th>
<th className="px-4 py-4">Hire Date</th>
<th className="px-4 py-4">Status</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm">
{/* Comentario remanente */}
<tr className="border-b border-surface-container-low hover:bg-surface-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-sm object-cover grayscale" data-alt="professional male engineer portrait in workplace with neutral background and sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-88UcsuhJ4KSTkrT6_rfaBzKYxmLE3J6_jB52shodUxl7NO9VAg66GXUdoZKB7wGqZ5mBP_iPCN-j6os-aeTQjZupEj-g1R5uBFGSHwdB0h2bSc6VeWpdTzXzd1TX1XkNQREzo2hX4ppEf7r2qSfSzHdJqJ5P4TkJoWuQsfyM-eDOt4UsxRp2sw1oWwDmdp05ZSIWAUfh7Gc0ci5f6UB3Pkwl5kPF8u345ajNVht0RhS7ZUs2SBS6-p1y5xE1ez_7aYpPgJ6ef9A"/>
<div>
<p className="font-bold text-on-surface">Marcos Rodríguez</p>
<p className="text-[10px] text-secondary">m.rodriguez@forge-ind.com</p>
</div>
</div>
</td>
<td className="px-4 py-4 font-mono text-xs text-secondary">V-18.452.102</td>
<td className="px-4 py-4">
<span className="bg-surface-container-high px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">Maintenance</span>
</td>
<td className="px-4 py-4 text-on-surface font-medium">Chief Technician</td>
<td className="px-4 py-4 text-right font-bold">$2,850.00</td>
<td className="px-4 py-4 text-secondary">15 Jan 2018</td>
<td className="px-4 py-4">
<span className="flex items-center gap-1.5 text-lime-600 font-bold text-[10px] uppercase">
<span className="w-2 h-2 rounded-full bg-lime-500"></span> Active
                                </span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all" title="View File">
<span className="material-symbols-outlined text-lg">folder_shared</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all" title="Edit">
<span className="material-symbols-outlined text-lg">edit_square</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all" title="Process Leave">
<span className="material-symbols-outlined text-lg">flight_takeoff</span>
</button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="border-b border-surface-container-low hover:bg-surface-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-sm object-cover grayscale" data-alt="professional female office worker smiling in industrial office setting with soft focus machinery in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9anvCte6QHzYB9x8Ol2DyMoMy1jOfG6O0wGjH6UfRrYozEzzh5lRiW5Mz4f_l1RbtJgdjzXnqWA81n0Fte6gCIP95hfH9FybVjvWe63lBgyyJ-AYD3fuNOMz4GkorbZK2rBBAhw_btSA_FNDhs93IqvnsKqCqUoR-a6YQh1f-iO4YxMNh5nI3GqWbJNapzVo7g-53fRssdPzGlSXTR_XeDvzMN5A3u2N_vG_df3euk-A_DWpUwwVsDNvZYtlWpTJnJyfy6Th_7qs"/>
<div>
<p className="font-bold text-on-surface">Elena Vasquez</p>
<p className="text-[10px] text-secondary">e.vasquez@forge-ind.com</p>
</div>
</div>
</td>
<td className="px-4 py-4 font-mono text-xs text-secondary">V-22.109.443</td>
<td className="px-4 py-4">
<span className="bg-surface-container-high px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">Logistics</span>
</td>
<td className="px-4 py-4 text-on-surface font-medium">Supply Chain Analyst</td>
<td className="px-4 py-4 text-right font-bold">$3,100.00</td>
<td className="px-4 py-4 text-secondary">03 May 2020</td>
<td className="px-4 py-4">
<span className="flex items-center gap-1.5 text-lime-600 font-bold text-[10px] uppercase">
<span className="w-2 h-2 rounded-full bg-lime-500"></span> Active
                                </span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">folder_shared</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">edit_square</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">flight_takeoff</span>
</button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="border-b border-surface-container-low hover:bg-surface-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-sm object-cover grayscale" data-alt="corporate male professional in a sharp suit standing in a modern architectural building with glass textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOnuCcqAnDzJLQQ_znS5x9uDnI_N8uz8xfkJbyD1cW7hrn-ZqkLH08ZMtnb1JM_2sLw8H3ijjVKJks_VmKOf-hWzO-O536mIYiZ-Ks9vc9ErIeRjrFa95Cmf54LCPp0MwY3KCl5r1jlL7H75PbhG6iIDTPD1j9MfHiegHHsENvrXGDkn4Ty1cHiWfhPIdSUkCmVLXZWbBAr3RNIy3ziTytnkXtvejjNuhwXMnG93VVTp_dFIV0Tn0qGxLZOlMJZcTy35p_9LoucO0"/>
<div>
<p className="font-bold text-on-surface">Javier Mendez</p>
<p className="text-[10px] text-secondary">j.mendez@forge-ind.com</p>
</div>
</div>
</td>
<td className="px-4 py-4 font-mono text-xs text-secondary">V-15.332.990</td>
<td className="px-4 py-4">
<span className="bg-surface-container-high px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">Engineering</span>
</td>
<td className="px-4 py-4 text-on-surface font-medium">Systems Architect</td>
<td className="px-4 py-4 text-right font-bold">$5,400.00</td>
<td className="px-4 py-4 text-secondary">22 Nov 2015</td>
<td className="px-4 py-4">
<span className="flex items-center gap-1.5 text-neutral-400 font-bold text-[10px] uppercase">
<span className="w-2 h-2 rounded-full bg-neutral-300"></span> Inactive
                                </span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">folder_shared</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">edit_square</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">flight_takeoff</span>
</button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-sm object-cover grayscale" data-alt="serious professional woman in an industrial control room looking directly at camera with blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHPOLRzJdOAaXumZmUSVeDNRIrCJPdG-7E0MTGI-mSID5suQKh69arwm2XcYobHcu_5IuVxCbzVhdbYjcBxY6hAnORkJw3wkiZHvXVf0Bb8XnbcwRwNb42KoPx-LTQm34HePyVF4nvhvNm2YwB74tGpPHkKqL_dq05aHsK_GpddKH2xgVuNfZt1PR80cibPADOXGqxwkbpRBli5-RMQoEW_ybJPdKs4y5qA7LUBJIm735K5C38i3U35E_r38dFPWYqY43G45mC6gI"/>
<div>
<p className="font-bold text-on-surface">Sofia Torres</p>
<p className="text-[10px] text-secondary">s.torres@forge-ind.com</p>
</div>
</div>
</td>
<td className="px-4 py-4 font-mono text-xs text-secondary">V-20.998.331</td>
<td className="px-4 py-4">
<span className="bg-surface-container-high px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">Quality Control</span>
</td>
<td className="px-4 py-4 text-on-surface font-medium">Compliance Lead</td>
<td className="px-4 py-4 text-right font-bold">$4,250.00</td>
<td className="px-4 py-4 text-secondary">10 Feb 2019</td>
<td className="px-4 py-4">
<span className="flex items-center gap-1.5 text-lime-600 font-bold text-[10px] uppercase">
<span className="w-2 h-2 rounded-full bg-lime-500"></span> Active
                                </span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">folder_shared</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">edit_square</span>
</button>
<button className="p-1.5 hover:bg-primary-container/20 text-secondary hover:text-primary transition-all">
<span className="material-symbols-outlined text-lg">flight_takeoff</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
{/* Comentario remanente */}
<div className="px-6 py-4 bg-surface-container-low flex justify-between items-center border-t border-surface-container">
<p className="text-xs text-secondary font-medium">Showing 1-4 of 1,248 employees</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded text-secondary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded font-bold text-xs">1</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded text-secondary hover:bg-primary hover:text-on-primary transition-colors font-bold text-xs">2</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded text-secondary hover:bg-primary hover:text-on-primary transition-colors font-bold text-xs">3</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded text-secondary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="bg-neutral-900 text-neutral-400 py-12 px-10 border-t border-neutral-800">
<div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
<div className="col-span-1">
<h3 className="font-['Space_Grotesk'] text-white font-bold text-lg mb-4 tracking-tighter">FORGE INDUSTRIAL</h3>
<p className="text-xs leading-relaxed opacity-70">Sistemas Avanzados de Gestión para la Industria Pesada. Control de procesos, capital humano y logística integrada.</p>
</div>
<div className="col-span-1">
<h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Legal</h4>
<p className="text-xs mb-1">RIF: J-30459821-4</p>
<p className="text-xs mb-1">© 2024 Forge Industrial ERP</p>
<p className="text-xs">Todos los derechos reservados.</p>
</div>
<div className="col-span-1">
<h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Contact Detail</h4>
<p className="text-xs mb-1 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">call</span> +58 (212) 555-0199
                    </p>
<p className="text-xs mb-1 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">mail</span> support@forge-industrial.com
                    </p>
</div>
<div className="col-span-1 flex flex-col items-end">
<div className="flex gap-4">
<a className="hover:text-lime-400 transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
<a className="hover:text-lime-400 transition-colors" href="#"><span className="material-symbols-outlined">shield</span></a>
<a className="hover:text-lime-400 transition-colors" href="#"><span className="material-symbols-outlined">help</span></a>
</div>
<p className="mt-8 text-[10px] uppercase font-bold text-neutral-600">V. 4.8.2 - Build 2024.11</p>
</div>
</div>
</footer>
</main>

        </div>
    );
};
