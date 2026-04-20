import React from 'react';
import { Head } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function Page(props) {
    const { page = {
        title: 'Términos y Condiciones',
        meta_description: 'Información legal y administrativa de LA CIMA.',
        meta_keywords: 'legal, términos, condiciones, b2b',
        content_html: `
            <h2 style="font-size: 1.5rem; font-weight: 900; margin-bottom: 1.5rem; color: black; text-transform: uppercase;">1. Protocolo de Venta</h2>
            <p style="color: #4b5563; margin-bottom: 2rem; line-height: 1.8;">Todas las transacciones realizadas en este portal están sujetas a validación de inventario en tiempo real. Los precios mostrados son referenciales y liquidados en base a la tasa oficial del día.</p>
            <h2 style="font-size: 1.5rem; font-weight: 900; margin-bottom: 1.5rem; color: black; text-transform: uppercase;">2. Garantías Industriales</h2>
            <p style="color: #4b5563; margin-bottom: 2rem; line-height: 1.8;">Los componentes Cummins, Volvo y Detroit cuentan con garantía de fabricante de 12 meses contra defectos de fundición o mecanizado.</p>
        `
    } } = props;

    return (
        <EcommerceLayout title={page.title}>
            <Head>
                <meta name="description" content={page.meta_description} />
                <meta name="keywords" content={page.meta_keywords} />
            </Head>

            <main className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
                {/* Header Decorativo del CMS */}
                <div className="text-center mb-24 relative">
                    <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter relative z-10 text-black leading-none italic">
                        {page.title}
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[12rem] font-black text-stone-50/50 z-0 pointer-events-none uppercase w-full overflow-hidden truncate">
                        {page.title}
                    </div>
                </div>

                {/* Contenido Inyectado Seguro desde la BD */}
                <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-stone-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-[200px] pointer-events-none"></div>
                    <div 
                        className="prose prose-stone max-w-none"
                        dangerouslySetInnerHTML={{ __html: page.content_html }} 
                    />
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-300">ZENITH ERP CLOUD SYSTEM &bull; CONTENT ENGINE</p>
                </div>
            </main>
        </EcommerceLayout>
    );
}
