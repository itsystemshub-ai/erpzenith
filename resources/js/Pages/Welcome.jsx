import { Head, Link } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister, products }) {
    return (
        <>
            <Head title="Zenith E-Commerce" />
            <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col font-sans selection:bg-rose-500 selection:text-white">
                
                {/* Header / Navbar */}
                <header className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-orange-400">
                                Zenith Store
                            </span>
                        </div>
                        <nav className="flex items-center justify-end gap-4">
                            {canLogin ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-sm font-semibold transition hover:text-black/70 focus:outline-none dark:hover:text-white/80"
                                >
                                    Portal ERP
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-sm font-semibold transition hover:text-black/70 focus:outline-none dark:hover:text-white/80"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-sm font-semibold transition hover:text-black/70 focus:outline-none dark:hover:text-white/80"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Main Storefront Content */}
                <main className="flex-1 w-full max-w-7xl mx-auto mt-10 px-6">
                    {/* Hero Section */}
                    <div className="py-16 text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
                            Todo lo que buscas en un <span className="text-rose-500">solo click</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                            Navega por nuestro catálogo de productos impulsado por el sistema Zenith ERP, sincronizado en tiempo real.
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
                        {products && products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <div key={product.id} className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center p-4">
                                            {/* Placeholder Image */}
                                            <svg className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <h3 className="font-semibold text-lg line-clamp-2 mb-1">{product.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 flex-1">{product.description}</p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                                <button className="bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-full transition-colors shadow-md hover:shadow-lg">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl">
                                No hay productos sincronizados en el inventario.
                            </div>
                        )}
                    </div>
                </main>

                {/* Footer */}
                <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 mt-auto border-t border-gray-200 dark:border-gray-800">
                    &copy; {new Date().getFullYear()} Zenith Enterprise. Todos los derechos reservados.
                </footer>
            </div>
        </>
    );
}
