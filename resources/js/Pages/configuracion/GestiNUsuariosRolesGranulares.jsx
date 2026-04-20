import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNUsuariosRolesGranulares() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r-0 bg-stone-950 dark:bg-black z-50 font-['Space_Grotesk'] uppercase tracking-tight">
<div className="p-6">
<h1 className="text-xl font-bold tracking-tighter text-lime-400 dark:text-lime-300">LA CIMA</h1>
<p className="text-[10px] text-stone-500 tracking-widest mt-1">ADMIN FORGE v2.4</p>
</div>
<nav className="flex-1 mt-4 overflow-y-auto no-scrollbar">
<div className="space-y-1 px-2">
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="text-xs font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
<span className="text-xs font-medium">Module Health</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-stone-900 text-lime-400 border-l-4 border-lime-500 scale-[0.98] transition-transform duration-150" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span className="text-xs font-medium">User Access</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="database">database</span>
<span className="text-xs font-medium">DB Management</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span className="text-xs font-medium">Audit Logs</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-xs font-medium">Settings</span>
</a>
</div>
</nav>
<div className="mt-auto border-t border-stone-900/50 p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors text-xs font-medium uppercase">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
<span>Support</span>
</button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors text-xs font-medium uppercase">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Logout</span>
</button>
<button className="mt-4 w-full bg-stone-900 py-3 text-[10px] font-bold text-error tracking-widest hover:bg-error/10 transition-colors">
                SYSTEM LOCK
            </button>
</div>
</aside>
{/* Comentario remanente */}
<header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center pl-64 pr-8 bg-stone-950/80 backdrop-blur-md z-40">
<div className="flex items-center gap-8 pl-8">
<span className="text-lg font-black tracking-widest text-white">MAYOR DE REPUESTO LA CIMA, C.A.</span>
<nav className="hidden md:flex gap-6 font-['Space_Grotesk'] uppercase text-sm">
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">Global View</a>
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">System Health</a>
<a className="text-lime-400 font-bold border-b-2 border-lime-500 pb-1" href="#">Security Ops</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block">
<input className="bg-stone-900 border-none text-[10px] text-stone-300 px-4 py-2 w-64 focus:ring-1 focus:ring-lime-500 font-['Space_Grotesk']" placeholder="QUERY SYSTEM..." type="text"/>
</div>
<div className="flex items-center gap-4 text-lime-500">
<span className="material-symbols-outlined cursor-pointer hover:text-amber-500 transition-colors" data-icon="notifications_active">notifications_active</span>
<span className="material-symbols-outlined cursor-pointer hover:text-amber-500 transition-colors" data-icon="terminal">terminal</span>
<div className="h-8 w-8 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
<img className="w-full h-full object-cover" data-alt="Professional portrait of a male system administrator in a high-tech server room environment with cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv4SUKd_TwT3XT7akCGyAabqJOj3t8vWeBGkYc43ulydYsKQ05NGtj9GQOh4XgR9NmvBLWtyQ7ZpkVQtvow1LnDib88XZTJBnoZUsyDgV3AidB1TNnLsDFSxLbQHXNfh35BJsrvK6_1j21VyIpD8WYnbhYUK8HFaazr6-ywyzYzknf5ym86xC8lluCCvn2CNSxGBQH8lilY7bYioxEo3BuXcqDH7-ssalN0gdtD2pu_ITMVWcMlZ9UijqQO5dHh_6mPa4dgCDCwZA"/>
</div>
<button className="bg-error text-on-error px-4 py-1.5 text-[10px] font-bold uppercase tracking-tighter hover:opacity-80 transition-opacity">
                    Emergency Shutdown
                </button>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="ml-64 pt-24 p-8 min-h-screen">
{/* Comentario remanente */}
<div className="mb-12">
<h2 className="text-5xl font-black uppercase tracking-tighter text-on-surface mb-2">User Access Control</h2>
<div className="flex items-center gap-4">
<div className="h-1 w-24 bg-primary"></div>
<span className="text-xs font-bold uppercase tracking-widest text-secondary font-headline">Authorization Matrix Engine</span>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<section className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-9xl" data-icon="shield">shield</span>
</div>
<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<h3 className="text-2xl font-bold uppercase tracking-tight text-on-surface">Active Directory</h3>
<p className="text-sm text-secondary font-label">Managing 124 global identities</p>
</div>
<button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                        Add New Operator
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-headline text-[10px] uppercase tracking-widest">
<th className="p-4">Identity</th>
<th className="p-4">Assigned Role</th>
<th className="p-4">Node Affinity</th>
<th className="p-4">Protocol Status</th>
<th className="p-4 text-right">Direct Actions</th>
</tr>
</thead>
<tbody className="font-label text-sm">
<tr className="border-b border-surface-container hover:bg-surface-container-low/50 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-stone-200 rounded-sm">
<img className="w-full h-full object-cover" data-alt="Headshot of a female executive in industrial engineering setting, sharp focus, professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiNzBYBGGHV-3VGpBGz1jVKKXPhqOojUzWl_Z44cLfi9fpHRnI5Y-CAfgagK5KqMiM_p9Sftg3dm4plqiQL7O1_tPEMOqjocVmyTQb6XedOetAaTUsy6N5QRJYcrJRvVS3jyBpdfSQpNYBhfHF07EMAUGOfvpBAS6vXq85-WS3MUaOqGnLUOzAdhbbmU-qmXYJB4d2TqDLasysi-mrpEl2Wj8hfgkyWG-I7X4LLdNVopx2cOUWH2osA_6mrAZt0pQE2gVnRdO-Agk"/>
</div>
<div>
<span className="block font-bold">Elena Rodriguez</span>
<span className="text-[10px] text-secondary">erodriguez@lacima.erp</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase">System Admin</span>
</td>
<td className="p-4 text-xs font-mono">HQ-MAIN-01</td>
<td className="p-4">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Encrypted
                                    </span>
</td>
<td className="p-4 text-right space-x-2">
<button className="text-[10px] font-bold uppercase text-secondary hover:text-primary underline">Edit</button>
<button className="text-[10px] font-bold uppercase text-error hover:opacity-70">Reset 2FA</button>
</td>
</tr>
<tr className="border-b border-surface-container bg-surface-container-low/20 hover:bg-surface-container-low/50 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-stone-200 rounded-sm">
<img className="w-full h-full object-cover" data-alt="Portrait of a male accountant in a modern industrial office with steel elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcrPow-cvtcWz6iml-FcylCtZxh2yb5asHhqPTx-dVBuDVnba-ZXEwCB3-zBDm8GkZJ54mSTBxQhVOOS-4uM2botN1kP6MZx6NWIZvTxhhi495vWoO9lSuphyeRiZz35MghnDF0SkQ3c9gF72b0sroS2aWXSCYskkGcAzoOyNS3CrTNERegYAr-mMIDeOiEJtKvfchh5QGgFEEAvxaujvH5T2bkpp2pZU4-7zgKRDy0Qm_ySkudlScfy2ApDi0yMn-ol-QA0RfZ9U"/>
</div>
<div>
<span className="block font-bold">Marcus Chen</span>
<span className="text-[10px] text-secondary">mchen@lacima.erp</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-1 bg-surface-container-highest text-secondary text-[10px] font-bold uppercase">Accountant</span>
</td>
<td className="p-4 text-xs font-mono">FIN-OPS-12</td>
<td className="p-4">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary">
<span className="w-2 h-2 rounded-full bg-primary"></span> active
                                    </span>
</td>
<td className="p-4 text-right space-x-2">
<button className="text-[10px] font-bold uppercase text-secondary hover:text-primary underline">Edit</button>
<button className="text-[10px] font-bold uppercase text-secondary/50">Reset 2FA</button>
</td>
</tr>
<tr className="border-b border-surface-container hover:bg-surface-container-low/50 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-stone-200 rounded-sm">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional woman in a logistics environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4EvYkn-yBsocrAilYHDS_nZtN9sHjwmhL_-bA5QO_0hgl7agqsvqyMKwLORBLqNELKvy0rgaLvdPbDjVjNWE3kvDYf4Z72ewwpUOijwM6G8k4dDqVHkY1AjEPj6uZiWm7dLoO5lD-16tNQAvOZe93yUWxdC9EvWkBu_YSe3M0uPLOYQsZWxK7LfR9vGl9PhU4wWnrB4ICCokdx4lDfROa2qTWcymtTA5c3ivXYKmCvS1jz2VUIcDG5VLLtnzLirMhRUAA7o_OFEY"/>
</div>
<div>
<span className="block font-bold">Sarah Jenkins</span>
<span className="text-[10px] text-secondary">sjenkins@lacima.erp</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-1 bg-surface-container-highest text-secondary text-[10px] font-bold uppercase">Seller</span>
</td>
<td className="p-4 text-xs font-mono">SALES-REM-04</td>
<td className="p-4">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-error">
<span className="w-2 h-2 rounded-full bg-error"></span> locked
                                    </span>
</td>
<td className="p-4 text-right space-x-2">
<button className="text-[10px] font-bold uppercase text-secondary hover:text-primary underline">Edit</button>
<button className="text-[10px] font-bold uppercase text-primary font-black">Unlock</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* Comentario remanente */}
<section className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-inverse-surface text-inverse-on-surface p-8 relative overflow-hidden">
<div className="absolute -bottom-6 -right-6 opacity-10">
<span className="material-symbols-outlined text-8xl" data-icon="lock_reset">lock_reset</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight mb-6">Security Pulse</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-[10px] uppercase font-headline opacity-60">Auth Success Rate</span>
<span className="text-lg font-bold text-lime-400">99.8%</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-[10px] uppercase font-headline opacity-60">Pending 2FA Resets</span>
<span className="text-lg font-bold text-amber-400">03</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-[10px] uppercase font-headline opacity-60">Failed Login Attempts</span>
<span className="text-lg font-bold text-error">12</span>
</div>
</div>
<button className="mt-6 w-full py-2 border border-lime-500/30 text-lime-400 text-[10px] font-bold uppercase tracking-widest hover:bg-lime-500/10 transition-colors">
                        Download Security Audit
                    </button>
</div>
<div className="bg-surface-container-high p-8">
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-6">Global Roles</h3>
<div className="grid grid-cols-2 gap-4 font-headline uppercase text-[10px] font-bold">
<div className="p-4 bg-surface-container-lowest flex flex-col gap-2">
<span className="text-secondary">Admins</span>
<span className="text-3xl font-black text-primary">04</span>
</div>
<div className="p-4 bg-surface-container-lowest flex flex-col gap-2">
<span className="text-secondary">Sellers</span>
<span className="text-3xl font-black text-on-surface">42</span>
</div>
<div className="p-4 bg-surface-container-lowest flex flex-col gap-2">
<span className="text-secondary">Logistics</span>
<span className="text-3xl font-black text-on-surface">68</span>
</div>
<div className="p-4 bg-surface-container-lowest flex flex-col gap-2">
<span className="text-secondary">Guests</span>
<span className="text-3xl font-black text-secondary">10</span>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="col-span-12 bg-surface-container-low p-8 border-l-8 border-primary">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-3xl font-black uppercase tracking-tighter">Permission Matrix</h3>
<div className="h-px flex-1 bg-outline-variant/30"></div>
<span className="text-[10px] font-bold uppercase text-secondary bg-surface-container-high px-3 py-1">Mode: Structural Editing</span>
</div>
<div className="bg-surface-container-lowest overflow-hidden shadow-sm">
<table className="w-full text-left">
<thead>
<tr className="bg-stone-900 text-stone-300 font-headline text-[10px] uppercase tracking-widest">
<th className="p-6 w-1/4 border-r border-stone-800">Module / Segment</th>
<th className="p-6 text-center">View</th>
<th className="p-6 text-center">Create</th>
<th className="p-6 text-center">Edit</th>
<th className="p-6 text-center">Delete</th>
<th className="p-6 text-right">Inheritance</th>
</tr>
</thead>
<tbody className="font-label text-sm">
<tr className="border-b border-surface-container">
<td className="p-6 font-bold uppercase text-xs bg-surface-container-low/30 border-r border-surface-container">Inventory &amp; Warehouse</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</td>
<td className="p-6 text-right text-[10px] uppercase font-bold text-secondary">Global Admin Default</td>
</tr>
<tr className="border-b border-surface-container bg-surface-container-low/10">
<td className="p-6 font-bold uppercase text-xs bg-surface-container-low/30 border-r border-surface-container">Sales &amp; CRM Engine</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</td>
<td className="p-6 text-right text-[10px] uppercase font-bold text-secondary">Role: Regional Seller</td>
</tr>
<tr className="border-b border-surface-container">
<td className="p-6 font-bold uppercase text-xs bg-surface-container-low/30 border-r border-surface-container">Financial Ledger</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</td>
<td className="p-6 text-right text-[10px] uppercase font-bold text-secondary">Custom Policy A1</td>
</tr>
<tr className="border-b border-surface-container bg-surface-container-low/10">
<td className="p-6 font-bold uppercase text-xs bg-surface-container-low/30 border-r border-surface-container">System &amp; DB Access</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="cancel">cancel</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="cancel">cancel</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="cancel">cancel</span>
</td>
<td className="p-6 text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="cancel">cancel</span>
</td>
<td className="p-6 text-right text-[10px] uppercase font-bold text-error">Access Forbidden</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex justify-end gap-4">
<button className="bg-surface-container-high text-secondary px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-surface-dim transition-colors">
                        Discard Changes
                    </button>
<button className="bg-on-surface text-surface-container-lowest px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                        Commit Access Schema
                    </button>
</div>
</section>
</div>
{/* Comentario remanente */}
<footer className="mt-12 pt-8 border-t border-surface-container flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
<div className="flex gap-8 mb-4 md:mb-0">
<span>Core Engine: v4.22.0</span>
<span>DB Latency: 12ms</span>
<span>Uptime: 99.998%</span>
</div>
<div className="flex gap-4">
<span className="text-primary-container bg-on-primary-container px-2 py-0.5">Production Environment</span>
<span>© 2024 La Cima Industrial Systems</span>
</div>
</footer>
</main>
{/* Comentario remanente */}
<div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

        </div>
    );
};
