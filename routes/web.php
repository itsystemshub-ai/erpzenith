<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

// E-Commerce Storefront (Public)
Route::get('/', function () {
    $products = DB::table('products')->where('is_active', true)->get();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
