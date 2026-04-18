import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function LoginRegister() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        // Redirige la data hacia el método real de inicio de sesión de Laravel
        post('/login');
    };

    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 docked full-width top-0 sticky z-50">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
<div className="text-xl font-bold tracking-tighter text-[#9ACD32] font-['Space_Grotesk'] uppercase">
                MAYOR DE REPUESTO LA CIMA, C.A.
            </div>
<div className="flex items-center gap-6">
<a className="text-zinc-400 font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-white transition-colors duration-200" href="#">Help Center</a>
<a className="text-[#9ACD32] border-b-2 border-[#9ACD32] pb-1 font-['Space_Grotesk'] tracking-tight uppercase" href="#">Portal Access</a>
</div>
</div>
</nav>
<main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface-container">
{/* Comentario remanente */}
<div className="absolute inset-0 z-0">
<img alt="Detailed view of high-performance engine components in a dark, atmospheric industrial setting with sharp lime green accents" className="w-full h-full object-cover opacity-20 grayscale contrast-125" data-alt="high-performance diesel engine block with chrome detailing and dramatic industrial lighting in a dark factory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoffadVPARxkiB59Wx_6jSMXPyMEUuFzf1WPAi8adCwGL5G7MTINxhU3-um5AomosShhohIzI72resEgbUV4S_STgrvJ3CDKhYPPYrt4fPkDPwgcrbF681XLZNJMZUK_hwiOros14m302MzVqIiV2mkCzLXDbdti0U6pl_2GsXWV1TyHpOTzXw7S3zJNmYND2gxJR9fUf8O3ETuvU6Sp-MY9yqszN4_hjETFcPEqj1ElUh9Tx1cQkWKKPY7T93vdfjBhnKihTxtLU"/>
<div className="absolute inset-0 bg-gradient-to-br from-surface via-transparent to-surface-container-highest opacity-90"></div>
</div>
{/* Comentario remanente */}
<div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden border border-outline-variant/10">
{/* Comentario remanente */}
<div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
<header className="mb-10">
<span className="text-primary font-headline text-sm font-bold uppercase tracking-[0.2em]">Authorized Access</span>
<h1 className="text-4xl font-headline font-bold text-on-surface mt-2 tracking-tight uppercase">Client Login</h1>
<p className="text-secondary mt-2">Access your industrial parts inventory and order history.</p>
</header>
<form className="space-y-6" onSubmit={submit}>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-secondary">Work Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-lg">mail</span>
<input 
    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-high border-none focus:ring-2 focus:ring-primary rounded-lg transition-all text-on-surface placeholder:text-secondary/50" 
    placeholder="name@company.com" 
    type="email"
    name="email"
    value={data.email}
    onChange={(e) => setData('email', e.target.value)}
    required
/>
</div>
{errors.email && <div className="text-error text-xs mt-1 font-bold">{errors.email}</div>}
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-xs font-bold uppercase tracking-wider text-secondary">Password</label>
<a className="text-xs font-bold text-primary hover:underline uppercase tracking-tight" href="#">Forgot?</a>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-lg">lock</span>
<input 
    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-high border-none focus:ring-2 focus:ring-primary rounded-lg transition-all text-on-surface placeholder:text-secondary/50" 
    placeholder="••••••••" 
    type="password"
    name="password"
    value={data.password}
    onChange={(e) => setData('password', e.target.value)}
    required
/>
</div>
{errors.password && <div className="text-error text-xs mt-1 font-bold">{errors.password}</div>}
</div>
<div className="flex items-center gap-3">
<input 
    className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/30" 
    id="remember" 
    type="checkbox"
    name="remember"
    checked={data.remember}
    onChange={(e) => setData('remember', e.target.checked)}
/>
<label className="text-sm text-on-surface-variant" htmlFor="remember">Keep me logged in</label>
</div>
<button 
    className="w-full bg-primary hover:bg-primary-container text-on-primary font-headline font-bold uppercase py-4 rounded-lg flex items-center justify-center gap-2 group transition-all active:scale-[0.98] disabled:opacity-50" 
    type="submit"
    disabled={processing}
>
<span>{processing ? 'Authenticating...' : 'Authenticate Session'}</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</form>
<div className="mt-8 pt-8 border-t border-surface-container-highest">
<p className="text-sm text-secondary text-center">Trouble signing in? <a className="text-on-surface font-bold hover:text-primary transition-colors" href="#">Contact Technical Support</a></p>
</div>
</div>
{/* Comentario remanente */}
<div className="relative bg-zinc-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
{/* Comentario remanente */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute inset-0" ></div>
</div>
<div className="relative z-10">
<header className="mb-10">
<span className="text-[#9ACD32] font-headline text-sm font-bold uppercase tracking-[0.2em]">Partner Network</span>
<h2 className="text-4xl font-headline font-bold text-white mt-2 tracking-tight uppercase">Corporate Registration</h2>
<p className="text-zinc-400 mt-2">Establish a high-performance procurement account for your fleet or industrial operations.</p>
</header>
<div className="space-y-8 mb-10">
<div className="flex gap-4">
<div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[#9ACD32]" data-weight="fill">precision_manufacturing</span>
</div>
<div>
<h4 className="font-headline font-bold text-zinc-100 uppercase tracking-tight">Direct OEM Inventory</h4>
<p className="text-zinc-400 text-sm mt-1">Real-time access to our entire engine and transmission part database.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[#9ACD32]" data-weight="fill">verified_user</span>
</div>
<div>
<h4 className="font-headline font-bold text-zinc-100 uppercase tracking-tight">Priority B2B Pricing</h4>
<p className="text-zinc-400 text-sm mt-1">Tiered pricing structures designed for heavy-duty industrial volume.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[#9ACD32]" data-weight="fill">local_shipping</span>
</div>
<div>
<h4 className="font-headline font-bold text-zinc-100 uppercase tracking-tight">Expedited Logistics</h4>
<p className="text-zinc-400 text-sm mt-1">Integrated tracking and regional distribution priority.</p>
</div>
</div>
</div>
<button className="w-full bg-white/5 hover:bg-white/10 border-2 border-[#9ACD32] text-[#9ACD32] font-headline font-bold uppercase py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
<span>Request Corporate Account</span>
<span className="material-symbols-outlined text-lg">corporate_fare</span>
</button>
</div>
{/* Comentario remanente */}
<div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#9ACD32]/10 blur-3xl rounded-full"></div>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="bg-zinc-900 w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full">
<div className="space-y-4">
<div className="font-['Space_Grotesk'] font-black text-zinc-100 text-lg uppercase tracking-tighter">
                    MAYOR DE REPUESTO LA CIMA, C.A.
                </div>
<p className="text-zinc-500 font-['Inter'] text-sm antialiased">
                    Superior industrial parts distribution. 
                    Setting the standard for engine performance since 2014.
                </p>
</div>
<div className="space-y-4">
<h4 className="text-zinc-100 font-headline font-bold uppercase text-xs tracking-[0.2em]">Contact Us</h4>
<ul className="space-y-2">
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="mailto:info@lacima.com">General: info@lacima.com</a></li>
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="mailto:sales@lacima.com">Orders: sales@lacima.com</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-zinc-100 font-headline font-bold uppercase text-xs tracking-[0.2em]">Emergency Support</h4>
<ul className="space-y-2">
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="tel:+582415550101">Phone: +58 241-5550101</a></li>
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="tel:+584125550202">Phone: +58 412-5550202</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-zinc-100 font-headline font-bold uppercase text-xs tracking-[0.2em]">Quick Links</h4>
<ul className="space-y-2">
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-zinc-500 text-sm hover:text-[#9ACD32] transition-colors" href="#">Logistics Network</a></li>
</ul>
</div>
</div>
<div className="px-8 py-6 bg-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-500 font-['Inter'] text-sm antialiased">
                © 2024 MAYOR DE REPUESTO LA CIMA, C.A. RIF: J-40308741-5. Valencia, Venezuela.
            </p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-zinc-500 text-xl cursor-pointer hover:text-[#9ACD32] transition-colors">share</span>
<span className="material-symbols-outlined text-zinc-500 text-xl cursor-pointer hover:text-[#9ACD32] transition-colors">public</span>
</div>
</div>
</footer>

        </div>
    );
};
