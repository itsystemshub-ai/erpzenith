#!/usr/bin/env python3
"""
Script para corregir los errores de validación de relaciones en schema.prisma
"""

import re

# Leer el schema
with open('prisma/schema.prisma', 'r', encoding='utf-8') as f:
    schema = f.read()

# Lista de correcciones a realizar
corrections = []

# ============================================================================
# 1. ModuleAccess.role necesita campo opuesto en Role
# ============================================================================
# Agregar moduleAccesses ModuleAccess[] en el modelo Role
if 'moduleAccesses ModuleAccess[]' not in schema:
    schema = schema.replace(
        '  modules     ModuleAccess[]',
        '  modules     ModuleAccess[]\n  moduleAccesses ModuleAccess[]'
    )
    corrections.append("Agregado moduleAccesses en Role")

# ============================================================================
# 2. FixedAsset.location necesita campo opuesto en CostCenter
# ============================================================================
# Ya existe: FixedAsset FixedAsset[] en CostCenter, verificar nombre
# El error dice que falta el campo opuesto - ya existe "FixedAsset FixedAsset[]"
# pero el campo en FixedAsset es "location CostCenter?", necesita "fixedAssets FixedAsset[]"
# Ya existe en CostCenter: "FixedAsset FixedAsset[]" - esto deberia estar bien

# ============================================================================
# 3-8. JournalEntry necesita campos opuestos para varias relaciones
# ============================================================================
# AssetDepreciation.journalEntry -> agregar assetDepreciations en JournalEntry
if 'assetDepreciations AssetDepreciation[]' not in schema:
    schema = schema.replace(
        '  assetRevaluations  AssetRevaluation[]',
        '  assetDepreciations AssetDepreciation[]\n  assetRevaluations  AssetRevaluation[]'
    )
    corrections.append("Agregado assetDepreciations en JournalEntry")

# AssetRevaluation.journalEntry -> ya existe assetRevaluations
# AssetDisposal.journalEntry -> ya existe assetDisposals

# WithholdingTax.journalEntry -> agregar withholdingTaxes
if 'withholdingTaxes WithholdingTax[]' not in schema:
    schema = schema.replace(
        '  WithholdingTax  WithholdingTax[]',
        '  withholdingTaxes  WithholdingTax[]'
    )
    corrections.append("Agregado withholdingTaxes en JournalEntry")

# ISLRWithholding.journalEntry -> agregar islrWithholdings
if 'ISLRWithholding ISLRWithholding[]' not in schema and 'islrWithholdings' not in schema:
    schema = schema.replace(
        '  ISLRWithholding ISLRWithholding[]',
        '  islrWithholdings ISLRWithholding[]'
    )
    corrections.append("Agregado islrWithholdings en JournalEntry")

# Payroll.journalEntry -> agregar payrolls
if 'Payroll         Payroll[]' in schema:
    schema = schema.replace(
        '  Payroll         Payroll[]',
        '  payrolls        Payroll[]'
    )
    corrections.append("Renombrado Payroll a payrolls en JournalEntry")

# BankTransaction.journalEntry -> agregar bankTransactions
if 'BankTransaction BankTransaction[]' in schema:
    schema = schema.replace(
        '  BankTransaction BankTransaction[]',
        '  bankTransactions BankTransaction[]'
    )
    corrections.append("Renombrado BankTransaction a bankTransactions en JournalEntry")

# CreditNote.journalEntry -> ya existe creditNotes

# ARPayment.journalEntry -> ya existe arPayments
# APPayment.journalEntry -> agregar apPayments
if 'apPayments         APPayment[]' not in schema:
    schema = schema.replace(
        '  arPayments         ARPayment[]',
        '  arPayments         ARPayment[]\n  apPayments         APPayment[]'
    )
    corrections.append("Agregado apPayments en JournalEntry")

# ============================================================================
# 9. VarianceAnalysis.budget necesita campo opuesto en Budget
# ============================================================================
if 'varianceAnalyses VarianceAnalysis[]' not in schema:
    schema = schema.replace(
        '  VarianceAnalysis VarianceAnalysis[]',
        '  varianceAnalyses VarianceAnalysis[]'
    )
    corrections.append("Agregado varianceAnalyses en Budget")

# ============================================================================
# 10. Employee.user necesita campo opuesto en User
# ============================================================================
# Ya existe: Employee Employee? en User - verificar

# ============================================================================
# 11-12. SalesCommission.sale y SalesCommission.payrollItem necesitan campos opuestos
# ============================================================================
if 'salesCommissions SalesCommission[]' not in schema:
    # En Sale
    schema = schema.replace(
        '  SalesCommission SalesCommission[]',
        '  salesCommissions SalesCommission[]'
    )
    corrections.append("Renombrado SalesCommission a salesCommissions en Sale")

# Para PayrollItem, necesitamos agregar salesCommissions
payroll_item_pattern = r'(model PayrollItem \{[^}]*?)(\n  @@index)'
def add_sales_commissions(match):
    content = match.group(1)
    if 'salesCommissions' not in content:
        return content + '\n  salesCommissions SalesCommission[]' + match.group(2)
    return match.group(0)

schema = re.sub(payroll_item_pattern, add_sales_commissions, schema, flags=re.DOTALL)
corrections.append("Agregado salesCommissions en PayrollItem")

# ============================================================================
# 13-14. PurchaseRequest.purchaseOrder y PurchaseOrder.request - one-to-one
# ============================================================================
# El problema es que AMBOS lados tienen fields/references
# Solo PurchaseOrder.request debe tener los campos de relación
# PurchaseRequest.purchaseOrder debe solo tener el campo y @unique

# Corregir PurchaseRequest.purchaseOrder - quitar @relation y dejar solo el campo
schema = schema.replace(
    'purchaseOrderId String?\n  purchaseOrder   PurchaseOrder? @relation(fields: [purchaseOrderId], references: [id])',
    'purchaseOrderId String? @unique\n  purchaseOrder   PurchaseOrder? @relation(fields: [purchaseOrderId], references: [id])'
)
corrections.append("Corregido purchaseOrderId con @unique en PurchaseRequest")

# Corregir PurchaseOrder.request - este lado debe tener la relación completa
# El problema es que requestId tiene @unique pero no debería, porque la relación
# one-to-one se define con el unique en purchaseOrderId del lado de PurchaseRequest
schema = schema.replace(
    'requestId String?          @unique\n  request   PurchaseRequest? @relation(fields: [requestId], references: [id])',
    'requestId String?\n  request   PurchaseRequest? @relation(fields: [requestId], references: [id])'
)
corrections.append("Eliminado @unique de requestId en PurchaseOrder")

# ============================================================================
# 15. PurchaseRequestItem.product necesita campo opuesto en Product
# ============================================================================
if 'purchaseRequestItems PurchaseRequestItem[]' not in schema:
    schema = schema.replace(
        '  PurchaseRequestItem PurchaseRequestItem[]',
        '  purchaseRequestItems PurchaseRequestItem[]'
    )
    corrections.append("Renombrado PurchaseRequestItem a purchaseRequestItems en Product")

# ============================================================================
# 16. PurchaseOrder.supplier necesita campo opuesto en Supplier
# ============================================================================
if 'purchaseOrders PurchaseOrder[]' not in schema:
    schema = schema.replace(
        '  PurchaseOrder      PurchaseOrder[]',
        '  purchaseOrders     PurchaseOrder[]'
    )
    corrections.append("Renombrado PurchaseOrder a purchaseOrders en Supplier")

# ============================================================================
# 17. PurchaseOrder.purchase necesita campo opuesto en Purchase
# ============================================================================
# Ya existe PurchaseOrder PurchaseOrder[] en Purchase, renombrar
if 'purchaseOrders  PurchaseOrder[]' not in schema:
    schema = schema.replace(
        '  PurchaseOrder PurchaseOrder[]',
        '  purchaseOrders  PurchaseOrder[]'
    )
    corrections.append("Renombrado PurchaseOrder a purchaseOrders en Purchase")

# ============================================================================
# 18. PurchaseOrderItem.product necesita campo opuesto en Product
# ============================================================================
if 'purchaseOrderItems PurchaseOrderItem[]' not in schema:
    schema = schema.replace(
        '  purchaseOrderItems PurchaseOrderItem[]',
        '  purchaseOrderItems PurchaseOrderItem[]'
    )
    # Ya existe, verificar

# ============================================================================
# 19. SupplierEvaluation.supplier necesita campo opuesto en Supplier
# ============================================================================
if 'evaluations SupplierEvaluation[]' not in schema:
    schema = schema.replace(
        '  supplierEvaluations SupplierEvaluation[]',
        '  evaluations SupplierEvaluation[]'
    )
    corrections.append("Agregado evaluations en Supplier")

# ============================================================================
# 20-21. AccountPayable.purchase y AccountPayable.supplier necesitan campos opuestos
# ============================================================================
if 'accountPayablesList AccountPayable[]' not in schema:
    schema = schema.replace(
        '  accountPayables     AccountPayable[]',
        '  accountPayables     AccountPayable[]\n  accountPayablesList AccountPayable[]'
    )
    corrections.append("Agregado accountPayablesList en Purchase")

# ============================================================================
# 22. Category.products necesita campo opuesto en Product
# ============================================================================
# Ya existe categoryRel en Product y products en Category - verificar

# ============================================================================
# 23-25. WarehouseStock, InventoryMovement, PhysicalCountItem.product necesitan campos opuestos
# ============================================================================
if 'warehouseStocks WarehouseStock[]' not in schema:
    schema = schema.replace(
        '  warehouseStocks    WarehouseStock[]',
        '  warehouseStocks    WarehouseStock[]'
    )
    # Ya existe

# Para InventoryMovement en Product
if 'inventoryMovementsList InventoryMovement[]' not in schema:
    schema = schema.replace(
        '  inventoryMovements   InventoryMovement[]',
        '  inventoryMovements   InventoryMovement[]\n  inventoryMovementsList InventoryMovement[]'
    )
    corrections.append("Agregado inventoryMovementsList en Product")

# ============================================================================
# 26. Lot para InventoryMovement
# ============================================================================
# Agregar en modelo Lot
lot_pattern = r'(model Lot \{[^}]*?qualityInspections QualityInspection\[\])(\n\n  createdAt)'
def add_inventory_movements_to_lot(match):
    content = match.group(1)
    if 'inventoryMovements' not in content:
        return content + '\n  inventoryMovements InventoryMovement[]' + match.group(2)
    return match.group(0)

schema = re.sub(lot_pattern, add_inventory_movements_to_lot, schema, flags=re.DOTALL)
corrections.append("Agregado inventoryMovements en Lot")

# ============================================================================
# 27. Warehouse.physicalCounts
# ============================================================================
if 'physicalCounts PhysicalCount[]' not in schema:
    schema = schema.replace(
        '  physicalCounts PhysicalCount[]',
        '  physicalCounts PhysicalCount[]'
    )
    # Ya existe en Warehouse

# ============================================================================
# 28. MaintenanceAsset.fixedAsset y MaintenanceAsset.workOrder
# ============================================================================
if 'maintenanceAssetsList MaintenanceAsset[]' not in schema:
    schema = schema.replace(
        '  maintenanceAssets MaintenanceAsset[]',
        '  maintenanceAssets MaintenanceAsset[]\n  maintenanceAssetsList MaintenanceAsset[]'
    )
    corrections.append("Agregado maintenanceAssetsList en FixedAsset")

# ============================================================================
# 29. MaintenanceHistory.asset y MaintenanceHistory.workOrder
# ============================================================================
if 'maintenanceHistory MaintenanceHistory[]' not in schema:
    schema = schema.replace(
        '  history    MaintenanceHistory[]',
        '  history    MaintenanceHistory[]\n  maintenanceHistory MaintenanceHistory[]'
    )
    corrections.append("Agregado maintenanceHistory en MaintenanceAsset y WorkOrder")

# ============================================================================
# 30-41. Varios campos de relación en Product para producción
# ============================================================================
# productionOrders
if 'productionOrdersList ProductionOrder[]' not in schema:
    schema = schema.replace(
        '  productionOrders   ProductionOrder[]',
        '  productionOrders   ProductionOrder[]\n  productionOrdersList ProductionOrder[]'
    )
    corrections.append("Agregado productionOrdersList en Product")

# mrpRequests
if 'mrpRequestsPO MRPRequest[]' not in schema:
    schema = schema.replace(
        '  mrpRequests        MRPRequest[]',
        '  mrpRequests        MRPRequest[]\n  mrpRequestsPO      MRPRequest[]'
    )
    corrections.append("Agregado mrpRequestsPO en ProductionOrder")

# ============================================================================
# 42. WorkCenter.orders necesita campo opuesto en ProductionOrder
# ============================================================================
# Agregar workCenter en ProductionOrder si no existe
if 'workCenterId' not in schema or 'workCenter   WorkCenter?' not in schema:
    # Buscar ProductionOrder y agregar workCenter
    prod_order_pattern = r'(model ProductionOrder \{[^}]*?bomId       String\?\n  bom         BillOfMaterial\? @relation\(fields: \[bomId\], references: \[id\]\))'
    def add_work_center(match):
        content = match.group(1)
        if 'workCenter' not in content:
            return content + '\n  workCenterId String?\n  workCenter   WorkCenter? @relation(fields: [workCenterId], references: [id])'
        return match.group(0)
    
    schema = re.sub(prod_order_pattern, add_work_center, schema, flags=re.DOTALL)
    corrections.append("Agregado workCenter en ProductionOrder")

# ============================================================================
# 43-44. Lead y Task.assigned son opcionales pero la relación no
# ============================================================================
# Cambiar assigned User? en lugar de User
schema = re.sub(
    r'(\n  assignedTo  String\?\n  assigned    User     @relation\(fields: \[assignedTo\], references: \[id\]\))',
    r'\n  assignedTo  String?\n  assigned    User?    @relation(fields: [assignedTo], references: [id])',
    schema
)
corrections.append("Cambiado assigned a User? en Lead y Task")

# ============================================================================
# 45-49. Campos opuestos faltantes en User, Customer, Sale
# ============================================================================
if 'assignedLeadsList Lead[]' not in schema:
    schema = schema.replace(
        '  assignedLeads        Lead[]',
        '  assignedLeads        Lead[]\n  assignedLeadsList  Lead[]'
    )
    corrections.append("Agregado assignedLeadsList en User")

if 'assignedTasksList Task[]' not in schema:
    schema = schema.replace(
        '  assignedTasks        Task[]',
        '  assignedTasks        Task[]\n  assignedTasksList    Task[]'
    )
    corrections.append("Agregado assignedTasksList en User")

if 'convertedFromLeads Lead[]' not in schema:
    schema = schema.replace(
        '  segments           CustomerSegment[]',
        '  convertedFromLeads Lead[]\n  segments           CustomerSegment[]'
    )
    corrections.append("Agregado convertedFromLeads en Customer")

if 'customerSegments CustomerSegment[]' not in schema:
    schema = schema.replace(
        '  segments           CustomerSegment[]',
        '  segments           CustomerSegment[]\n  customerSegments CustomerSegment[]'
    )
    corrections.append("Agregado customerSegments en Customer")

# ============================================================================
# 50-53. POSSession, POSTransaction, CashReconciliation
# ============================================================================
if 'cashReconciliations CashReconciliation[]' not in schema:
    # Buscar POSSession y agregar
    pos_session_pattern = r'(model POSSession \{[^}]*?transactions POSTransaction\[\])(\n  createdAt)'
    def add_cash_recon(match):
        content = match.group(1)
        if 'cashReconciliations' not in content:
            return content + '\n  cashReconciliations CashReconciliation[]' + match.group(2)
        return match.group(0)
    
    schema = re.sub(pos_session_pattern, add_cash_recon, schema, flags=re.DOTALL)
    corrections.append("Agregado cashReconciliations en POSSession")

# ============================================================================
# 54-58. Quote, CreditNote, AccountReceivable
# ============================================================================
if 'quotesList Quote[]' not in schema:
    schema = schema.replace(
        '  quotes               Quote[]',
        '  quotes               Quote[]\n  quotesList           Quote[]'
    )
    corrections.append("Agregado quotesList en User")

if 'convertedFromQuotes Quote[]' not in schema:
    schema = schema.replace(
        '  quotes            Quote[]',
        '  quotes            Quote[]\n  convertedFromQuotes Quote[]'
    )
    corrections.append("Agregado convertedFromQuotes en Sale")

if 'creditNotesList CreditNote[]' not in schema:
    schema = schema.replace(
        '  creditNotes        CreditNote[]',
        '  creditNotes        CreditNote[]\n  creditNotesList    CreditNote[]'
    )
    corrections.append("Agregado creditNotesList en Customer")

if 'creditNotesJE CreditNote[]' not in schema:
    schema = schema.replace(
        '  creditNotes        CreditNote[]',
        '  creditNotes        CreditNote[]\n  creditNotesJE      CreditNote[]'
    )
    corrections.append("Agregado creditNotesJE en JournalEntry")

# ============================================================================
# 59. PasswordHistory
# ============================================================================
if 'passwordHistoryList PasswordHistory[]' not in schema:
    schema = schema.replace(
        '  passwordHistory      PasswordHistory[]',
        '  passwordHistory      PasswordHistory[]\n  passwordHistoryList  PasswordHistory[]'
    )
    corrections.append("Agregado passwordHistoryList en User")

# ============================================================================
# 60. Lot.product, Lot.supplier, Lot.purchase, Lot.productionOrder
# ============================================================================
# Estos ya tienen relación definida, verificar campos opuestos
if 'lots Lot[]' not in schema:
    schema = schema.replace(
        '  Lot                 Lot[]',
        '  Lot                 Lot[]\n  lots                Lot[]'
    )
    corrections.append("Agregado lots en Product")

# En Purchase para Lot
if 'lotsProduction Lot[]' not in schema:
    schema = schema.replace(
        '  lots           Lot[]',
        '  lots           Lot[]\n  lotsProduction Lot[]'
    )
    corrections.append("Agregado lotsProduction en Purchase")

# ============================================================================
# 61. Department.purchaseRequests
# ============================================================================
if 'purchaseRequestsList PurchaseRequest[]' not in schema:
    schema = schema.replace(
        '  PurchaseRequest PurchaseRequest[]',
        '  PurchaseRequest   PurchaseRequest[]\n  purchaseRequestsList PurchaseRequest[]'
    )
    corrections.append("Agregado purchaseRequestsList en Department")

# ============================================================================
# 62. QualityInspection.lot
# ============================================================================
# Ya existe qualityInspections en Lot

# ============================================================================
# 63. ProductionConsumed.lot y ProductionResult.lot
# ============================================================================
if 'productionConsumedLot ProductionConsumed[]' not in schema:
    schema = schema.replace(
        '  productionConsumed ProductionConsumed[]',
        '  productionConsumed ProductionConsumed[]\n  productionConsumedLot ProductionConsumed[]'
    )
    corrections.append("Agregado productionConsumedLot en Lot")

if 'productionResultsLot ProductionResult[]' not in schema:
    schema = schema.replace(
        '  productionResults  ProductionResult[]',
        '  productionResults  ProductionResult[]\n  productionResultsLot ProductionResult[]'
    )
    corrections.append("Agregado productionResultsLot en Lot")

# ============================================================================
# 64. BillOfMaterial.productionOrders
# ============================================================================
if 'productionOrdersBOM ProductionOrder[]' not in schema:
    schema = schema.replace(
        '  productionOrders ProductionOrder[]',
        '  productionOrders ProductionOrder[]\n  productionOrdersBOM ProductionOrder[]'
    )
    corrections.append("Agregado productionOrdersBOM en BillOfMaterial")

# ============================================================================
# 65. WorkCenter.productionOrders
# ============================================================================
if 'productionOrdersWC ProductionOrder[]' not in schema:
    schema = schema.replace(
        '  orders      ProductionOrder[]',
        '  orders      ProductionOrder[]\n  productionOrdersWC ProductionOrder[]'
    )
    corrections.append("Agregado productionOrdersWC en WorkCenter")

# ============================================================================
# 66. POSTransaction.sale
# ============================================================================
if 'posTransactionsList POSTransaction[]' not in schema:
    schema = schema.replace(
        '  posTransactions   POSTransaction[]',
        '  posTransactions   POSTransaction[]\n  posTransactionsList POSTransaction[]'
    )
    corrections.append("Agregado posTransactionsList en Sale")

# ============================================================================
# 67. SupplierCategory.suppliers
# ============================================================================
# Ya existe suppliers en SupplierCategory y supplierCategoryId en Supplier

# ============================================================================
# Escribir el schema corregido
# ============================================================================
with open('prisma/schema.prisma', 'w', encoding='utf-8') as f:
    f.write(schema)

print("=" * 60)
print("CORRECCIONES REALIZADAS:")
print("=" * 60)
for correction in corrections:
    print(f"  ✓ {correction}")
print("=" * 60)
print(f"Total: {len(corrections)} correcciones")
print("=" * 60)
print("\nAhora ejecuta `prisma format` para verificar el schema")
