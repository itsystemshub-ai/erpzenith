import React from 'react';
import { Link } from '@inertiajs/react';

export default function PasswordRecoveryRequest() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
<div className="text-xl font-black tracking-tighter text-lime-500 font-headline uppercase">
            APEX INDUSTRIAL
        </div>
<div className="flex items-center gap-4 text-stone-400">
<span className="material-symbols-outlined text-stone-400">support_agent</span>
<span className="material-symbols-outlined text-stone-400">help_outline</span>
</div>
</header>
<main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
<div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden bg-surface-container-lowest shadow-2xl shadow-black/10 rounded-lg">
{/* Comentario remanente */}
<div className="md:col-span-5 bg-stone-900 p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<img alt="Industrial machinery texture" className="w-full h-full object-cover grayscale" data-alt="Close-up of industrial heavy machinery parts with metallic textures and dark shadows in an engineering workshop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTkZtJSSNsIHQErzV1_9XzToxX14snaVh43pqwzxNW6Ysrohl30gc_ET3s2rbj_7xZPTRmQl6vkH5UscwLPkzzpOtsC8WKPHdFedPQRqjs9ltLOdAbPSm9OUkB0jAHwI5AVbjXmmuFCrQBtiUrmD9q5KNpxxK6zXS6ormvjXgxV_NL5LbNwo1zdKtlB8zFOOCA6tzK7QaADLxWIOQccfeV4ZjoVm0mtOIqsFO9_lx9JC9SkXIBSc515ARVcq2IuNoRbZXElNdOh48"/>
</div>
<div className="relative z-10">
<h2 className="font-headline text-3xl font-black text-lime-500 leading-none tracking-tighter uppercase mb-2">
                        MAYOR DE REPUESTO LA CIMA, C.A.
                    </h2>
<div className="w-12 h-1 bg-lime-500 mb-6"></div>
<p className="font-label text-stone-400 uppercase tracking-widest text-[10px] leading-relaxed">
                        Security Layer: Protocol 04-B<br/>
                        Industrial Asset Management<br/>
                        Node Status: Operational
                    </p>
</div>
<div className="relative z-10">
<div className="p-4 bg-stone-800/50 border-l-4 border-lime-500">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-lime-500 text-sm">security</span>
<span className="font-headline text-xs font-bold text-stone-100 tracking-widest uppercase">Encryption Active</span>
</div>
<p className="text-[11px] text-stone-400 leading-normal">
                            All recovery requests are logged via unique hardware identifiers and subject to manual ERP audit.
                        </p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-7 p-8 md:p-12 bg-white">
<div className="mb-8">
<h1 className="font-headline text-4xl font-extrabold text-stone-900 uppercase tracking-tighter mb-4 leading-none">
                        Credential <span className="text-primary italic">Forge</span>
</h1>
<p className="text-secondary font-medium text-sm max-w-sm">
                        Initialize password reset protocol. Identity must be verified against central industrial database.
                    </p>
</div>
<form className="space-y-6">
{/* Comentario remanente */}
<div>
<label className="block font-label text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                            Registered Terminal Email
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400 text-lg">alternate_email</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 text-stone-900 placeholder:text-stone-400 font-body text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="operator@lacima.repuestos.com" type="email"/>
</div>
</div>
{/* Comentario remanente */}
<div>
<label className="block font-label text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                            New Desired Access Key
                        </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400 text-lg">lock_reset</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 text-stone-900 placeholder:text-stone-400 font-body text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="••••••••••••" type="password"/>
</div>
</div>
{/* Comentario remanente */}
<div className="flex gap-4 items-start p-4 bg-surface-container rounded">
<span className="material-symbols-outlined text-primary mt-0.5">hub</span>
<p className="text-[12px] text-stone-600 leading-relaxed italic">
                            Your request will be sent to the <span className="font-bold text-stone-900">ERP system</span> for manual approval by an administrator. Status updates will be transmitted to the provided email.
                        </p>
</div>
{/* Comentario remanente */}
<button className="w-full bg-primary py-5 px-6 text-on-primary font-headline font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-primary-container hover:text-on-primary-container transition-all group" type="submit">
                        Execute Recovery Protocol
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
</button>
</form>
<div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center">
<a className="text-[10px] font-bold text-stone-400 uppercase hover:text-primary tracking-widest flex items-center gap-1 transition-colors" href="#">
<span className="material-symbols-outlined text-xs">arrow_back</span>
                        Return to Hub
                    </a>
<span className="text-[10px] font-medium text-stone-300 uppercase tracking-tighter">System Ref: 88-LXC</span>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="bg-stone-900 py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
{/* Comentario remanente */}
<div className="flex flex-col">
<div className="text-lime-500 font-headline font-black text-xl mb-6 tracking-tighter uppercase">
                    LA CIMA <span className="text-stone-500">INDUSTRIAL</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 text-stone-400 group">
<span className="material-symbols-outlined text-lime-500">location_on</span>
<address className="not-italic text-xs font-medium uppercase tracking-wider leading-relaxed">
                            AV. 119, EDIF. MULTICENTRO PASEO EL PARRAL,<br/>
                            Valencia, Edo. Carabobo, Venezuela.
                        </address>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex flex-col">
<h3 className="text-stone-500 font-headline font-bold text-xs uppercase tracking-[0.2em] mb-6">Communication Channels</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-lime-500">call</span>
<span className="text-stone-100 text-sm font-semibold tracking-tighter">+58 424-4582766</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-lime-500">mail</span>
<span className="text-stone-100 text-sm font-semibold tracking-tighter">LACIMA.REPUESTOS@GMAIL.COM</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex flex-col md:items-end">
<div className="text-right">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 rounded mb-4">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
<span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">Network Secure</span>
</div>
<p className="text-stone-600 text-[10px] uppercase font-medium leading-loose text-right">
                        © 2024 MAYOR DE REPUESTO LA CIMA, C.A.<br/>
                        All Industrial Rights Reserved.
                    </p>
</div>
</div>
</div>
</footer>

        </div>
    );
};
