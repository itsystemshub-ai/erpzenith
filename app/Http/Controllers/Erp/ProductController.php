<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = DB::table('products')
            ->leftJoin('categories', 'products.category_id', '=', 'categories.id')
            ->leftJoin('brands', 'products.brand_id', '=', 'brands.id')
            ->leftJoin('currencies', 'products.currency_id', '=', 'currencies.id')
            ->select(
                'products.*', 
                'categories.name as category_name', 
                'brands.name as brand_name',
                'currencies.code as currency_code'
            )
            ->get();

        $categories = DB::table('categories')->get();
        $brands = DB::table('brands')->get();
        $currencies = DB::table('currencies')->get();

        return Inertia::render('Erp/Products/Index', [
            'products' => $products,
            'categories' => $categories,
            'brands' => $brands,
            'currencies' => $currencies
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'required|exists:brands,id',
            'currency_id' => 'required|exists:currencies,id',
            'type' => 'required|in:physical,digital,service'
        ]);

        DB::table('products')->insert([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
            'currency_id' => $request->currency_id,
            'type' => $request->type,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Producto registrado al catálogo.');
    }
}
