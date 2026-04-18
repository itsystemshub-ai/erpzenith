<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CurrencyController extends Controller
{
    public function index()
    {
        $currencies = DB::table('currencies')->get();
        return Inertia::render('Erp/Currencies/Index', [
            'currencies' => $currencies
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|max:3|unique:currencies',
            'name' => 'required|string',
            'symbol' => 'required|string|max:10',
            'exchange_rate' => 'required|numeric|min:0.000001',
            'is_default' => 'boolean'
        ]);

        if ($request->is_default) {
            DB::table('currencies')->update(['is_default' => false]);
        }

        DB::table('currencies')->insert([
            'code' => strtoupper($request->code),
            'name' => $request->name,
            'symbol' => $request->symbol,
            'exchange_rate' => $request->exchange_rate,
            'is_default' => $request->is_default ?? false,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Moneda agregada correctamente.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'symbol' => 'required|string|max:10',
            'exchange_rate' => 'required|numeric|min:0.000001',
            'is_default' => 'boolean'
        ]);

        if ($request->is_default) {
            DB::table('currencies')->update(['is_default' => false]);
        }

        DB::table('currencies')->where('id', $id)->update([
            'name' => $request->name,
            'symbol' => $request->symbol,
            'exchange_rate' => $request->exchange_rate,
            'is_default' => $request->is_default ?? false,
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Moneda actualizada correctamente.');
    }

    public function destroy($id)
    {
        // Don't delete if it's the only one or default
        $currency = DB::table('currencies')->where('id', $id)->first();
        if ($currency && $currency->is_default) {
            return redirect()->back()->withErrors(['error' => 'No puedes eliminar la moneda por defecto.']);
        }

        DB::table('currencies')->where('id', $id)->delete();
        return redirect()->back()->with('success', 'Moneda eliminada.');
    }
}
