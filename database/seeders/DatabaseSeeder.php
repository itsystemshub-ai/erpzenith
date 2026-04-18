<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Roles y Permisos
        $adminRole = Role::create(['name' => 'Admin']);
        $managerRole = Role::create(['name' => 'Manager']);
        $customerRole = Role::create(['name' => 'Customer']);

        // 2. Usuarios Base
        $admin = User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@zenith.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole($adminRole);

        // 3. Monedas Base
        $usdId = DB::table('currencies')->insertGetId([
            'code' => 'USD',
            'name' => 'US Dollar',
            'symbol' => '$',
            'exchange_rate' => 1.000000,
            'is_default' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $vesId = DB::table('currencies')->insertGetId([
            'code' => 'VES',
            'name' => 'Bolívar',
            'symbol' => 'Bs.',
            'exchange_rate' => 38.500000,
            'is_default' => false,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 4. Categoría y Marca y Producto
        $catId = DB::table('categories')->insertGetId(['name' => 'Electrónica', 'slug' => 'electronica', 'created_at' => now(), 'updated_at' => now()]);
        $brandId = DB::table('brands')->insertGetId(['name' => 'Acme Corp', 'slug' => 'acme-corp', 'created_at' => now(), 'updated_at' => now()]);
        
        $productId = DB::table('products')->insertGetId([
            'category_id' => $catId,
            'brand_id' => $brandId,
            'name' => 'Laptop Pro 15',
            'slug' => 'laptop-pro-15',
            'description' => 'A very powerful laptop.',
            'type' => 'physical',
            'price' => 1200.00,
            'currency_id' => $usdId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $skuId = DB::table('product_skus')->insertGetId([
            'product_id' => $productId,
            'sku' => 'LAP-PRO-15-BLA',
            'price' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 5. Inventario
        $warehouseId = DB::table('warehouses')->insertGetId(['name' => 'Almacén Central', 'location' => 'Caracas', 'created_at' => now(), 'updated_at' => now()]);
        
        DB::table('inventories')->insert([
            'warehouse_id' => $warehouseId,
            'product_sku_id' => $skuId,
            'quantity' => 50,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
