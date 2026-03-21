$files = @(
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(auth)\login\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\administrativo\contabilidad\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\administrativo\rrhh\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\administrativo\tesoreria\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\comercial\crm\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\comercial\ventas\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\dashboard\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\operativo\compras\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\operativo\inventario\page.tsx",
    "C:\Users\ET\Documents\GitHub\erpzenith\sistema-erp-zenith\apps\frontend\src\app\(dashboard)\reportes\page.tsx"
)

foreach ($file in $files) {
    # Read lines as array
    $lines = Get-Content $file
    $newLines = @()
    
    foreach ($line in $lines) {
        if ($line -match "^'use client';") {
            $newLines += "'use client';"
            $newLines += "export const dynamic = 'force-dynamic';"
        } elseif ($line -notmatch "^\\r\\nexport const dynamic") {
            $newLines += $line
        }
    }
    
    # Write back with proper line endings
    $newLines | Set-Content -Path $file
    Write-Host "Fixed: $file"
}

Write-Host "Done!"
