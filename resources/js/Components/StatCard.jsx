import React from 'react';

export default function StatCard({ title, value, icon, trend, trendValue, color = 'primary' }) {
    const colorClasses = {
        primary: 'text-primary bg-primary/10',
        success: 'text-green-600 bg-green-50',
        error: 'text-error bg-error/10',
        warning: 'text-amber-600 bg-amber-50',
        info: 'text-blue-600 bg-blue-50',
    };

    return (
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${colorClasses[color]}`}>
                    <span className="material-symbols-outlined text-[28px]">{icon}</span>
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'text-green-600 bg-green-50' : 'text-error bg-error/5'}`}>
                        <span className="material-symbols-outlined text-sm">
                            {trend === 'up' ? 'trending_up' : 'trending_down'}
                        </span>
                        {trendValue}%
                    </div>
                )}
            </div>
            <div>
                <p className="text-secondary font-headline font-bold text-xs uppercase tracking-widest">{title}</p>
                <h3 className="text-on-surface font-headline font-black text-3xl mt-1 tracking-tighter">{value}</h3>
            </div>
        </div>
    );
}
