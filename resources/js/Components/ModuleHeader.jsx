import React from 'react';
import { Link } from '@inertiajs/react';

export default function ModuleHeader({ title, breadcrumbs, actions }) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
                <nav className="flex items-center gap-2 mb-3 text-secondary">
                    <Link href={route('dashboard')} className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">home</span>
                    </Link>
                    {breadcrumbs && breadcrumbs.map((crumb, idx) => (
                        <React.Fragment key={idx}>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <Link 
                                href={crumb.route ? route(crumb.route, crumb.params) : '#'} 
                                className={`text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${crumb.active ? 'text-primary' : ''}`}
                            >
                                {crumb.name}
                            </Link>
                        </React.Fragment>
                    ))}
                </nav>
                <h1 className="font-headline font-black text-4xl text-on-surface tracking-tighter uppercase">{title}</h1>
            </div>

            {actions && (
                <div className="flex items-center gap-3">
                    {actions.map((action, idx) => (
                        <Link
                            key={idx}
                            href={action.route ? route(action.route, action.params) : '#'}
                            className={`h-12 px-6 flex items-center justify-center gap-2 rounded-2xl font-headline font-bold text-xs uppercase tracking-widest transition-all shadow-sm ${
                                action.primary 
                                ? 'bg-primary text-on-primary hover:scale-[1.02] active:scale-95 shadow-primary/20' 
                                : 'bg-surface-container-low text-secondary border border-outline-variant/50 hover:bg-surface-container-high'
                            }`}
                        >
                            {action.icon && <span className="material-symbols-outlined text-[18px]">{action.icon}</span>}
                            {action.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
