import React from 'react';

export default function DataTable({ title, columns, data, actions }) {
    return (
        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 overflow-hidden">
            {title && (
                <div className="px-8 py-6 border-b border-outline-variant/30 bg-surface-container-low/30">
                    <h3 className="font-headline font-black text-on-surface uppercase tracking-tight">{title}</h3>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-low/50">
                        <tr>
                            {columns.map((column, idx) => (
                                <th 
                                    key={idx} 
                                    className={`px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-widest ${column.align === 'right' ? 'text-right' : ''}`}
                                >
                                    {column.label}
                                </th>
                            ))}
                            {actions && <th className="px-8 py-4 w-20"></th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                        {data.length > 0 ? data.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-primary/5 transition-colors group">
                                {columns.map((column, colIdx) => (
                                    <td 
                                        key={colIdx} 
                                        className={`px-8 py-5 text-sm ${column.align === 'right' ? 'text-right font-headline font-bold' : 'text-on-surface'}`}
                                    >
                                        {column.render ? column.render(row) : row[column.key]}
                                    </td>
                                ))}
                                {actions && (
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            {actions.map((action, actionIdx) => (
                                                <button
                                                    key={actionIdx}
                                                    onClick={() => action.onClick(row)}
                                                    className={`material-symbols-outlined text-[20px] transition-colors ${action.className || 'text-outline hover:text-primary'}`}
                                                >
                                                    {action.icon}
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={columns.length + (actions ? 1 : 0)} className="px-8 py-10 text-center text-secondary italic">
                                    No se encontraron registros.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="px-8 py-4 bg-surface-container-low/20 border-t border-outline-variant/30 flex justify-between items-center text-[10px] font-bold text-secondary uppercase tracking-widest">
                <span>Mostrando {data.length} registros</span>
                <div className="flex gap-4">
                    <button className="hover:text-primary transition-colors">Anterior</button>
                    <button className="hover:text-primary transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    );
}
