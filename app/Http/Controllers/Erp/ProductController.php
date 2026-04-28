<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'brand', 'currency'])
            ->get();

        $categories = Category::all();
        $brands = Brand::all();
        $currencies = Currency::all();

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

        Product::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
            'currency_id' => $request->currency_id,
            'type' => $request->type,
            'is_active' => true,
        ]);

        return redirect()->back()->with('success', 'Producto registrado al catálogo.');
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products,slug,'.$product->id,
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'required|exists:brands,id',
            'currency_id' => 'required|exists:currencies,id',
            'type' => 'required|in:physical,digital,service'
        ]);

        $product->update($request->validated());

        return redirect()->back()->with('success', 'Producto actualizado correctamente.');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->back()->with('success', 'Producto eliminado correctamente.');
    }
}
