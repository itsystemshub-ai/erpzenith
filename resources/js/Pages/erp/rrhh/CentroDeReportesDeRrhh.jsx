import React from 'react';
import { Link } from '@inertiajs/react';

export default function CentroDeReportesDeRrhh() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<header className="bg-surface dark:bg-stone-950/80 backdrop-blur-xl docked full-width top-0 z-50 tonal-shift-no-borders bg-stone-100 dark:bg-stone-900 flat no shadows ambient-depth">
<div className="flex justify-between items-center w-full px-6 py-4 mx-auto">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 font-['Space_Grotesk'] uppercase tracking-tight">INDUSTRIAL FORGE ERP</span>
<nav className="hidden md:flex gap-6">
<a className="text-stone-500 dark:text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 dark:hover:text-lime-300 transition-colors scale-98-on-click duration-200" href="#">Dashboard</a>
<a className="text-stone-500 dark:text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 dark:hover:text-lime-300 transition-colors scale-98-on-click duration-200" href="#">Analytics</a>
<a className="text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-400 pb-1 font-['Space_Grotesk'] uppercase tracking-tight" href="#">Reports</a>
<a className="text-stone-500 dark:text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 dark:hover:text-lime-300 transition-colors scale-98-on-click duration-200" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
<input className="bg-surface-container-highest border-none text-xs font-['Space_Grotesk'] pl-10 pr-4 py-2 rounded-none focus:ring-2 focus:ring-primary w-64" placeholder="SEARCH SYSTEM..." type="text"/>
</div>
<button className="text-stone-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="text-stone-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">help_outline</span></button>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="professional headshot of a senior industrial manager with a confident expression in a clean studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaSp_B92JLBx6XsNBSEeS4mvtLtHFJwDny5gYRsmZNrE0LFKN7AsPIRuQenOt1fxq07rRTsnkolxebXCRsbJJKqvG72TPHEAekfm25-8XBGZuKSlTRZJwpvzoxMt_RzvyORA_3VdPTE6I5h98gyGYm9BEZpTIMetnFDcF0NdCJFenHqjVL2FLO9C8w2NsTnmk3n2UEhbWuGa_d3LfAlLyS9TZGN3Uz4WEISoSm9OtGs9158yDAwTcyRyPL-GiMrlx2DGlK1p7tzZ0"/>
</div>
</div>
</header>
<div className="flex">
{/* Comentario remanente */}
<aside className="bg-stone-50 dark:bg-stone-900 h-screen w-64 docked left-0 border-r-0 tonal-layering bg-stone-100 dark:bg-stone-800 shadow-[4px_0_24px_rgba(0,0,0,0.04)] sticky top-0 hidden md:block">
<div className="flex flex-col h-full py-8 gap-2">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
<span className="material-symbols-outlined text-on-primary">engineering</span>
</div>
<div>
<h2 className="text-lg font-black text-stone-800 dark:text-stone-100 font-['Inter'] leading-tight">REPORTING SUITE</h2>
<p className="text-[10px] text-stone-500 font-mono">V2.4 Precision Engine</p>
</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
<a className="flex items-center gap-4 px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150 font-['Inter'] font-semibold tracking-wide text-xs" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventory
                    </a>
<a className="flex items-center gap-4 px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150 font-['Inter'] font-semibold tracking-wide text-xs" href="#">
<span className="material-symbols-outlined">trending_up</span> Sales
                    </a>
<a className="flex items-center gap-4 px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150 font-['Inter'] font-semibold tracking-wide text-xs" href="#">
<span className="material-symbols-outlined">shopping_cart</span> Purchases
                    </a>
<a className="flex items-center gap-4 px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150 font-['Inter'] font-semibold tracking-wide text-xs" href="#">
<span className="material-symbols-outlined">payments</span> Finance
                    </a>
<a className="flex items-center gap-4 px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150 font-['Inter'] font-semibold tracking-wide text-xs" href="#">
<span className="material-symbols-outlined">account_balance</span> Accounting
                    </a>
<a className="flex items-center gap-4 px-6 py-3 bg-lime-500/10 text-lime-700 dark:text-lime-400 border-r-4 border-lime-600 hover:translate-x-1 transition-transform ease-in-out duration-150 font-['Inter'] font-semibold tracking-wide text-xs" href="#">
<span className="material-symbols-outlined">groups</span> HR
                    </a>
</nav>
<div className="px-6 py-4">
<button className="w-full bg-primary text-on-primary text-[10px] font-bold py-3 uppercase tracking-[0.2em] hover:brightness-110 transition-all active:scale-95">
                        EXPORT ALL DATA
                    </button>
</div>
<div className="mt-auto border-t border-stone-200 dark:border-stone-800 pt-4 flex flex-col gap-1">
<a className="flex items-center gap-4 px-6 py-2 text-stone-500 font-['Inter'] font-semibold tracking-wide text-xs" href="#"><span className="material-symbols-outlined">support_agent</span> Support</a>
<a className="flex items-center gap-4 px-6 py-2 text-stone-500 font-['Inter'] font-semibold tracking-wide text-xs" href="#"><span className="material-symbols-outlined">history_edu</span> Logs</a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 min-h-screen p-8 lg:p-12 overflow-x-hidden">
{/* Comentario remanente */}
<div className="mb-12 border-l-8 border-primary pl-6">
<h1 className="text-5xl font-['Space_Grotesk'] font-bold uppercase tracking-tighter text-on-surface mb-2">HR REPORTING CENTER</h1>
<p className="text-secondary font-['Inter'] uppercase text-xs tracking-[0.3em] font-semibold">Industrial Force HR Management / Reporting Suite V2.4</p>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
{/* Comentario remanente */}
<div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-none relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="flex justify-between items-start relative z-10 mb-8">
<div>
<span className="text-[10px] font-bold tracking-widest text-primary uppercase">Financial Period: OCT 2023</span>
<h3 className="text-2xl font-headline font-bold uppercase mt-1">Payroll Distribution</h3>
</div>
<span className="material-symbols-outlined text-primary text-4xl">payments</span>
</div>
<div className="flex items-end gap-4 mb-6">
<span className="text-5xl font-headline font-bold">$428,950</span>
<span className="text-lime-600 font-bold mb-2 flex items-center text-sm"><span className="material-symbols-outlined text-sm">arrow_upward</span> 3.2%</span>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-surface-container pt-6">
<div>
<p className="text-[10px] text-secondary uppercase font-bold tracking-tighter">Direct Labor</p>
<p className="font-headline font-bold text-lg">$312,400</p>
</div>
<div>
<p className="text-[10px] text-secondary uppercase font-bold tracking-tighter">Administrative</p>
<p className="font-headline font-bold text-lg">$116,550</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-high p-8 flex flex-col justify-between">
<div>
<h3 className="text-lg font-headline font-bold uppercase mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified_user</span> 
                            Compliance
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs font-bold font-['Inter']">IVSS</span>
<span className="px-2 py-0.5 bg-lime-500 text-[10px] font-black text-on-primary">VALID</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-bold font-['Inter']">INCES</span>
<span className="px-2 py-0.5 bg-lime-500 text-[10px] font-black text-on-primary">VALID</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-bold font-['Inter']">FAOV</span>
<span className="px-2 py-0.5 bg-amber-500 text-[10px] font-black text-white">RENEWAL</span>
</div>
</div>
</div>
<button className="text-[10px] font-bold text-primary text-left uppercase tracking-widest mt-8 flex items-center gap-2 group">
                        VIEW CERTIFICATES <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
{/* Comentario remanente */}
<div className="bg-primary text-on-primary p-8 flex flex-col justify-center items-center text-center">
<span className="text-[10px] font-black tracking-[0.2em] uppercase mb-2 opacity-80">Employee Turnover</span>
<span className="text-7xl font-headline font-bold leading-none">4.2%</span>
<span className="text-xs font-medium mt-2 opacity-80 italic">Industry Benchmark: 8.5%</span>
<div className="w-full bg-on-primary/20 h-1 mt-6">
<div className="bg-on-primary h-full w-[42%]"></div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Comentario remanente */}
<div className="lg:col-span-2 space-y-6">
<div className="flex justify-between items-end mb-4">
<h2 className="text-2xl font-headline font-bold uppercase tracking-tight">Performance Summaries</h2>
<span className="text-xs font-bold text-secondary uppercase tracking-widest">Q3 Engineering Division</span>
</div>
<div className="space-y-4">
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 flex items-center gap-6 group hover:bg-surface-container transition-colors border-l-4 border-transparent hover:border-primary">
<img className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="close-up portrait of a female industrial engineer wearing safety goggles and a hard hat in a workshop background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcYX_zLz4F-DIHW5ZLEjUqYN4nGjcTEtmmOwH0_DUiakbBAy0CUGvFTaPoZZyGtOxzjzlyWX--jlhduQDi4no6mq7_Un77OIrXmNKwpcdU_BKEOzbYhFcfo0FSDMYOiDPk47P0QXv_CS4QtD-5of3womt9KzZAF6ysXeg3OlTUILC0LxCswoAxkJG32I4_16V1y1ZBPzB67zQi62CN-Ng330sX-J3JBrzEUFdYnMrwpyiVzVy9lGfqx--YA_34tRuz-Z4ybqDx7O8"/>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-headline font-bold uppercase text-lg">Elena Rodriguez</h4>
<span className="text-[10px] font-bold text-primary">PROJECT LEAD</span>
</div>
<p className="text-xs text-secondary mt-1 max-w-md">Exceeded Q3 production targets by 15%. Demonstrated exceptional lead in the Forge-X integration project.</p>
</div>
<div className="text-right">
<p className="text-[10px] text-secondary uppercase font-bold">Rating</p>
<p className="text-2xl font-headline font-bold text-primary">4.9</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 flex items-center gap-6 group hover:bg-surface-container transition-colors border-l-4 border-transparent hover:border-primary">
<img className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="professional portrait of a male mechanic in a dark uniform with a focused and serious expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeSVfecYM00jYZTucel3zKrJLOggw7-Mc-j61TF7DzFAhKzOUa4dQb4pyG3CQdNzlUx0BJtOP5RVDFAD3oT2TTTZUFO3oWcE1kLj3elnpLPKHLMF2tatbxnSJOGdRK3S7FKoV5RrdANAi-fRYs_uSpVPoHobyY_KyWmr2YjrKagGQhoczIeG6ELGpbpTCTbPT0CAHSFKEtrYxQbNVbqDZSFYz38y3NFqFoofLLGmXa_yUZORRz1pqkWvA6UoJ-CWV8jd8nAQ2DwlM"/>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-headline font-bold uppercase text-lg">Marcus Thorne</h4>
<span className="text-[10px] font-bold text-primary">SENIOR TECHNICIAN</span>
</div>
<p className="text-xs text-secondary mt-1 max-w-md">Consistent performance in maintenance cycles. Instrumental in reducing downtime of the hydraulic press by 20%.</p>
</div>
<div className="text-right">
<p className="text-[10px] text-secondary uppercase font-bold">Rating</p>
<p className="text-2xl font-headline font-bold text-primary">4.7</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 flex items-center gap-6 group hover:bg-surface-container transition-colors border-l-4 border-transparent hover:border-primary">
<img className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="professional portrait of a black woman in business attire with a confident smile in a bright office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO5pGRox9jSQmMtsdPOcQymeo4pZLVpq3yvO3kwHC8a7RMvTIWvqyVAbOl9458KGaWo0QjZFFIqjWnRl7lGv_xmtfbCtCKxbOiMRtX6E7ppI0xw-yCcgAl_WAVX_q2kOD16M66-DVNYVavvVHlgcbvb6l9M5ODfhwZJFrsXuU7dZ8Rd3Xb2RzdlF_BU4rbBouW7hU2w4G4vk4r3GuDNVM0NneF0JuMgMRWlvVsgBQO5hLec7tN4vZr1Nm-PYsLxtyQtrQIee1easo"/>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-headline font-bold uppercase text-lg">Sarah Jenkins</h4>
<span className="text-[10px] font-bold text-primary">LOGISTICS COORDINATOR</span>
</div>
<p className="text-xs text-secondary mt-1 max-w-md">Optimized supply chain routes during the regional strike. Achieved zero delay in crucial parts delivery.</p>
</div>
<div className="text-right">
<p className="text-[10px] text-secondary uppercase font-bold">Rating</p>
<p className="text-2xl font-headline font-bold text-primary">4.8</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-inverse-surface text-inverse-on-surface p-8 relative">
<h2 className="text-2xl font-headline font-bold uppercase mb-8 border-b border-white/10 pb-4">Vacation Accruals</h2>
<div className="space-y-8">
<div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
<span>Pending Approval</span>
<span>142 Days Total</span>
</div>
<div className="h-2 bg-white/10">
<div className="h-full bg-primary w-2/3"></div>
</div>
</div>
<div className="space-y-4 overflow-y-auto max-h-[400px] pr-2 no-scrollbar">
{/* Comentario remanente */}
<div className="flex justify-between items-center py-3 border-b border-white/5">
<div>
<p className="font-headline font-bold text-sm">Industrial Ops Team</p>
<p className="text-[10px] opacity-60">Avg. 12.5 days/person</p>
</div>
<span className="bg-white/10 px-3 py-1 text-[10px] font-bold">HIGH LOAD</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<div>
<p className="font-headline font-bold text-sm">Design Bureau</p>
<p className="text-[10px] opacity-60">Avg. 18.2 days/person</p>
</div>
<span className="bg-primary/20 text-primary-fixed px-3 py-1 text-[10px] font-bold">AVAIL</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<div>
<p className="font-headline font-bold text-sm">Admin &amp; HR</p>
<p className="text-[10px] opacity-60">Avg. 9.1 days/person</p>
</div>
<span className="bg-white/10 px-3 py-1 text-[10px] font-bold">CRITICAL</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<div>
<p className="font-headline font-bold text-sm">Sales Division</p>
<p className="text-[10px] opacity-60">Avg. 15.0 days/person</p>
</div>
<span className="bg-primary/20 text-primary-fixed px-3 py-1 text-[10px] font-bold">AVAIL</span>
</div>
</div>
<button className="w-full border-2 border-primary text-primary py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">
                            GENERATE ACCRUAL FORECAST
                        </button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-16 overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-headline font-bold uppercase flex items-center gap-3">
<span className="w-3 h-3 bg-primary"></span>
                        Social Benefits Compliance Ledger
                    </h3>
<div className="flex gap-2">
<button className="bg-surface-container-high px-4 py-2 text-[10px] font-bold uppercase tracking-tighter">PDF</button>
<button className="bg-surface-container-high px-4 py-2 text-[10px] font-bold uppercase tracking-tighter">CSV</button>
</div>
</div>
<div className="w-full">
<table className="w-full text-left font-['Inter']">
<thead>
<tr className="bg-surface-container-highest">
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Department</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Employee Count</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">IVSS Contribution</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">INCES (2%)</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">FAOV (1%)</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Status</th>
</tr>
</thead>
<tbody className="text-xs">
<tr className="bg-surface hover:bg-surface-container-low transition-colors">
<td className="p-4 font-bold">Engineering - Havy Duty</td>
<td className="p-4">124</td>
<td className="p-4">$12,450.00</td>
<td className="p-4">$2,490.00</td>
<td className="p-4">$1,245.00</td>
<td className="p-4 text-lime-600 font-bold uppercase tracking-tighter">Paid</td>
</tr>
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
<td className="p-4 font-bold">Logistics &amp; Warehousing</td>
<td className="p-4">86</td>
<td className="p-4">$8,120.50</td>
<td className="p-4">$1,624.10</td>
<td className="p-4">$812.05</td>
<td className="p-4 text-lime-600 font-bold uppercase tracking-tighter">Paid</td>
</tr>
<tr className="bg-surface hover:bg-surface-container-low transition-colors">
<td className="p-4 font-bold">Administration Headquarters</td>
<td className="p-4">42</td>
<td className="p-4">$9,800.00</td>
<td className="p-4">$1,960.00</td>
<td className="p-4">$980.00</td>
<td className="p-4 text-amber-500 font-bold uppercase tracking-tighter">Pending</td>
</tr>
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
<td className="p-4 font-bold">Quality Control (QC)</td>
<td className="p-4">18</td>
<td className="p-4">$2,100.00</td>
<td className="p-4">$420.00</td>
<td className="p-4">$210.00</td>
<td className="p-4 text-lime-600 font-bold uppercase tracking-tighter">Paid</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

        </div>
    );
};
