<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

// E-Commerce Storefront (Public)
Route::get('/', function () {
    $products = DB::table('products')->where('is_active', true)->limit(8)->get();
    return Inertia::render('Tienda/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'products' => $products
    ]);
});

// ERP Dashboard (Protected)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $stats = [
            'total_users' => DB::table('users')->count(),
            'total_products' => DB::table('products')->count(),
            'total_currencies' => DB::table('currencies')->count(),
            'total_orders' => DB::table('orders')->count(),
        ];
        return Inertia::render('Dashboard', [
            'stats' => $stats
        ]);
    })->name('dashboard');

    // Admin ERP Routes
    Route::get('/erp/currencies', [\App\Http\Controllers\Erp\CurrencyController::class, 'index'])->name('erp.currencies.index');
    Route::post('/erp/currencies', [\App\Http\Controllers\Erp\CurrencyController::class, 'store'])->name('erp.currencies.store');

    Route::get('/erp/products', [\App\Http\Controllers\Erp\ProductController::class, 'index'])->name('erp.products.index');
    Route::post('/erp/products', [\App\Http\Controllers\Erp\ProductController::class, 'store'])->name('erp.products.store');

    // Módulo Ventas (Nuevas Rutas Estáticas)
    Route::get('/erp/ventas/pos', function() {
        return Inertia::render('erp/ventas/POS');
    })->name('erp.ventas.pos');

    Route::get('/erp/ventas/historial', function() {
        return Inertia::render('erp/ventas/SalesHistory');
    })->name('erp.ventas.history');

    // === ENRUTADOR MAESTRO UNIVERSAL PARA LAS 81+ PÁGINAS LEGACY ===
    // Garantiza que absolutamente ninguna página quede por fuera. Navegación dinámica.
    // Ejemplos de acceso:
    // /erp/modulo/erp/ventas/historial_facturacion -> ModulosLegacy/Erp/Ventas/HistorialFacturacion
    // /erp/modulo/tienda_virtual/cart -> ModulosLegacy/TiendaVirtual/Cart
    Route::get('/modulo/{path}', function($path) {
        // Convertimos la ruta URL (ej: erp/ventas/punto_de_venta_pos)
        // al formato de componentes JSX (ej: Erp/Ventas/PuntoDeVentaPos)
        
        $segments = explode('/', $path);
        
        $jsxSegments = array_map(function($segment) {
            return str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $segment)));
        }, $segments);
        
        $componentPath = 'erp/' . implode('/', $jsxSegments);
        
        return Inertia::render($componentPath);
    })->where('path', '.*')->name('erp.legacy.universal');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
