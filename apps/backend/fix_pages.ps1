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
    $content = Get-Content $file -Raw
    # Fix the broken line ending
    $content = $content -replace "'use client';\r\\nexport const dynamic = 'force-dynamic';", "'use client';`r`nexport const dynamic = 'force-dynamic';"
    Set-Content -Path $file -Value $content -NoNewline
    Write-Host "Fixed: $file"
}

Write-Host "Done!"
