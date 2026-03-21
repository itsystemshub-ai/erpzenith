const fs = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, 'prisma', 'schema.prisma');
let schema = fs.readFileSync(schemaPath, 'utf-8');

// 1. Agregar campos de relación faltantes en Role para ModuleAccess
if (!schema.includes('moduleAccesses ModuleAccess[]')) {
  schema = schema.replace(
    /(\nmodel Role \{[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*permissions Permission\[\])/,
    '$1\n  moduleAccesses ModuleAccess[]'
  );
}

// 2. Agregar campos de relación faltantes en CostCenter para FixedAsset
if (!schema.includes('fixedAssets FixedAsset[]')) {
  schema = schema.replace(
    /(\n  FixedAsset FixedAsset\[\])/g,
    ''
  );
  schema = schema.replace(
    /(\n  createdAt  DateTime     @default\(now\)\n  updatedAt  DateTime     @updatedAt\n  FixedAsset FixedAsset\[\])/g,
    '\n  createdAt  DateTime     @default(now)\n  updatedAt  DateTime     @updatedAt'
  );
  schema = schema.replace(
    /(\n  managerId   String\?\n  managerName String\?)\n\n  \/\/ Relaciones\n  budgets      Budget\[\]\n  journalItems JournalEntryItem\[\]/,
    '$1\n\n  // Relaciones\n  fixedAssets  FixedAsset[]\n  budgets      Budget[]\n  journalItems JournalEntryItem[]'
  );
}

// 3. Agregar campos de relación faltantes en JournalEntry para AssetDepreciation, AssetRevaluation, AssetDisposal, etc.
if (!schema.includes('assetDepreciations AssetDepreciation[]')) {
  schema = schema.replace(
    /(\n  assetRevaluations  AssetRevaluation\[\]\n  assetDisposals     AssetDisposal\[\])/g,
    '\n  assetDepreciations AssetDepreciation[]\n  assetRevaluations  AssetRevaluation[]\n  assetDisposals     AssetDisposal[]'
  );
}

// 4. Agregar campos de relación faltantes en JournalEntry para WithholdingTax
if (!schema.includes('withholdingTaxes WithholdingTax[]')) {
  schema = schema.replace(
    /(\n  WithholdingTax  WithholdingTax\[\]\n  ISLRWithholding ISLRWithholding\[\])/g,
    '\n  withholdingTaxes  WithholdingTax[]\n  islrWithholdings  ISLRWithholding[]'
  );
}

// 5. Agregar campos de relación faltantes en JournalEntry para Payroll
if (!schema.includes('payrolls Payroll[]')) {
  schema = schema.replace(
    /(\n  Payroll         Payroll\[\]\n  BankTransaction BankTransaction\[\])/g,
    '\n  payrolls          Payroll[]\n  bankTransactions  BankTransaction[]'
  );
}

// 6. Agregar campos de relación faltantes en JournalEntry para CreditNote
if (!schema.includes('creditNotes CreditNote[]')) {
  // Ya existe en JournalEntry, verificar
}

// 7. Agregar campos de relación faltantes en JournalEntry para ARPayment y APPayment
if (!schema.includes('arPayments ARPayment[]')) {
  // Ya existe en JournalEntry
}

// 8. Agregar campos de relación faltantes en JournalEntry para BankTransaction
// Ya agregado arriba

// 9. Agregar campos de relación faltantes en JournalEntry para ISLRWithholding
// Ya agregado arriba

// 10. Agregar campos de relación faltantes en Budget para VarianceAnalysis
if (!schema.includes('varianceAnalyses VarianceAnalysis[]')) {
  schema = schema.replace(
    /(\n  VarianceAnalysis VarianceAnalysis\[\])/g,
    '\n  varianceAnalyses VarianceAnalysis[]'
  );
}

// 11. Agregar campos de relación faltantes en User para Employee
if (!schema.includes('employee Employee?')) {
  schema = schema.replace(
    /(\n  createdAt DateTime  @default\(now\)\n  updatedAt DateTime  @updatedAt\n  Employee  Employee\?)/g,
    '\n  createdAt DateTime  @default(now)\n  updatedAt DateTime  @updatedAt\n  employee Employee?'
  );
}

// 12. Agregar campos de relación faltantes en Sale para SalesCommission
if (!schema.includes('salesCommissions SalesCommission[]')) {
  schema = schema.replace(
    /(\n  createdAt       DateTime          @default\(now\)\n  updatedAt       DateTime          @updatedAt\n  SalesCommission SalesCommission\[\])/g,
    '\n  createdAt       DateTime          @default(now)\n  updatedAt       DateTime          @updatedAt\n  salesCommissions SalesCommission[]'
  );
}

// 13. Agregar campos de relación faltantes en PayrollItem para SalesCommission
if (!schema.includes('salesCommissions SalesCommission[]') && schema.includes('model PayrollItem')) {
  const payrollItemMatch = schema.match(/(model PayrollItem \{[^}]*\n  createdAt DateTime @default\(now\))/);
  if (payrollItemMatch) {
    const replacement = payrollItemMatch[0] + '\n  salesCommissions SalesCommission[]';
    schema = schema.replace(payrollItemMatch[0], replacement);
  }
}

// 14. Corregir relación PurchaseRequest <-> PurchaseOrder (one-to-one)
// Eliminar fields/references de PurchaseRequest.purchaseOrder y agregar @unique
schema = schema.replace(
  /purchaseOrderId String\?\n  purchaseOrder   PurchaseOrder\? @relation\(fields: \[purchaseOrderId\], references: \[id\]\)/g,
  'purchaseOrderId String? @unique\n  purchaseOrder   PurchaseOrder? @relation(fields: [purchaseOrderId], references: [id])'
);

// Eliminar fields/references de PurchaseOrder.request (one-to-one) - dejar solo en un lado
schema = schema.replace(
  /requestId String\?          @unique\n  request   PurchaseRequest\? @relation\(fields: \[requestId\], references: \[id\]\)/g,
  'requestId String?\n  request   PurchaseRequest? @relation(fields: [requestId], references: [id])'
);

// 15. Agregar campos de relación faltantes en Product para PurchaseRequestItem
if (!schema.includes('purchaseRequestItems PurchaseRequestItem[]')) {
  schema = schema.replace(
    /(\n  PurchaseRequestItem PurchaseRequestItem\[\]\n\n  @@index\(\[code\]\))/g,
    '\n  purchaseRequestItems PurchaseRequestItem[]\n\n  @@index([code])'
  );
}

// 16. Agregar campos de relación faltantes en Supplier para PurchaseOrder
if (!schema.includes('purchaseOrders PurchaseOrder[]')) {
  schema = schema.replace(
    /(\n  PurchaseOrder      PurchaseOrder\[\]\n\n  @@index\(\[rif\]\))/g,
    '\n  purchaseOrders       PurchaseOrder[]\n\n  @@index([rif])'
  );
}

// 17. Agregar campos de relación faltantes en Purchase para PurchaseOrder
if (!schema.includes('purchaseOrders PurchaseOrder[]')) {
  schema = schema.replace(
    /(\n  PurchaseOrder PurchaseOrder\[\]\n\n  @@index\(\[supplierId\]\))/g,
    '\n  purchaseOrders  PurchaseOrder[]\n\n  @@index([supplierId])'
  );
}

// 18. Agregar campos de relación faltantes en Product para PurchaseOrderItem
if (!schema.includes('purchaseOrderItems PurchaseOrderItem[]')) {
  schema = schema.replace(
    /(\n  purchaseOrderItems PurchaseOrderItem\[\]\n  billOfMaterials    BillOfMaterial\[\])/g,
    '\n  purchaseOrderItems   PurchaseOrderItem[]\n  billOfMaterials    BillOfMaterial[]'
  );
}

// 19. Agregar campos de relación faltantes en Supplier para SupplierEvaluation
if (!schema.includes('evaluations SupplierEvaluation[]')) {
  schema = schema.replace(
    /(\n  supplierEvaluations SupplierEvaluation\[\]\n  lots                Lot\[\])/g,
    '\n  supplierEvaluations SupplierEvaluation[]\n  evaluations         SupplierEvaluation[]\n  lots                Lot[]'
  );
}

// 20. Agregar campos de relación faltantes en Purchase para AccountPayable
if (!schema.includes('accountPayables AccountPayable[]')) {
  schema = schema.replace(
    /(\n  accountPayables     AccountPayable\[\]\n  supplierEvaluations SupplierEvaluation\[\])/g,
    '\n  accountPayables     AccountPayable[]\n  accountPayablesList AccountPayable[]\n  supplierEvaluations SupplierEvaluation[]'
  );
}

// 21. Agregar campos de relación faltantes en Supplier para AccountPayable
// Ya existe arriba

// 22. Agregar campos de relación faltantes en JournalEntry para APPayment
if (!schema.includes('apPayments APPayment[]')) {
  schema = schema.replace(
    /(\n  apPayments         ARPayment\[\]\n  apPayments         APPayment\[\])/g,
    '\n  arPayments         ARPayment[]\n  apPayments         APPayment[]'
  );
}

// 23. Agregar campos de relación faltantes en Category para Product
if (!schema.includes('products Product[]')) {
  schema = schema.replace(
    /(\n  children    Category\[\] @relation\("CategoryHierarchy"\)\n  products    Product\[\])/g,
    '\n  children    Category[] @relation("CategoryHierarchy")\n  products    Product[]'
  );
}

// 24. Agregar campos de relación faltantes en Product para WarehouseStock
if (!schema.includes('warehouseStocks WarehouseStock[]')) {
  schema = schema.replace(
    /(\n  physicalCountItems PhysicalCountItem\[\]\n  workOrderParts     WorkOrderPart\[\])/g,
    '\n  physicalCountItems   PhysicalCountItem[]\n  workOrderParts       WorkOrderPart[]\n  warehouseStocks      WarehouseStock[]'
  );
}

// 25. Agregar campos de relación faltantes en Product para InventoryMovement
if (!schema.includes('inventoryMovements InventoryMovement[]')) {
  schema = schema.replace(
    /(\n  inventoryMovements   InventoryMovement\[\]\n  physicalCountItems PhysicalCountItem\[\])/g,
    '\n  inventoryMovements   InventoryMovement[]\n  inventoryMovementsList InventoryMovement[]\n  physicalCountItems PhysicalCountItem[]'
  );
}

// 26. Agregar campos de relación faltantes en Lot para InventoryMovement
if (!schema.includes('inventoryMovements InventoryMovement[]') && schema.includes('model Lot')) {
  const lotMatch = schema.match(/(model Lot \{[^}]*qualityInspections QualityInspection\[\]\n\n  createdAt DateTime @default\(now\))/);
  if (lotMatch) {
    const replacement = lotMatch[0] + '\n  inventoryMovements InventoryMovement[]';
    schema = schema.replace(lotMatch[0], replacement);
  }
}

// 27. Agregar campos de relación faltantes en User para InventoryMovement
if (!schema.includes('inventoryMovements InventoryMovement[]') && schema.includes('model User')) {
  // Ya existe en User
}

// 28. Agregar campos de relación faltantes en Warehouse para PhysicalCount
if (!schema.includes('physicalCounts PhysicalCount[]')) {
  schema = schema.replace(
    /(\n  posConfigs     POSConfig\[\]\n\n  createdAt DateTime @default\(now\))/g,
    '\n  posConfigs     POSConfig[]\n  physicalCounts PhysicalCount[]\n\n  createdAt DateTime @default(now)'
  );
}

// 29. Agregar campos de relación faltantes en Product para PhysicalCountItem
// Ya existe physicalCountItems

// 30. Agregar campos de relación faltantes en FixedAsset para MaintenanceAsset
if (!schema.includes('maintenanceAssets MaintenanceAsset[]')) {
  schema = schema.replace(
    /(\n  maintenances      AssetMaintenance\[\]\n  maintenanceAssets MaintenanceAsset\[\]\n\n  createdAt DateTime @default\(now\))/g,
    '\n  maintenances      AssetMaintenance[]\n  maintenanceAssets MaintenanceAsset[]\n  maintenanceAssetsList MaintenanceAsset[]\n\n  createdAt DateTime @default(now)'
  );
}

// 31. Agregar campos de relación faltantes en Product para WorkOrderPart
if (!schema.includes('workOrderParts WorkOrderPart[]')) {
  // Ya existe arriba
}

// 32. Agregar campos de relación faltantes en MaintenanceAsset para MaintenanceHistory
if (!schema.includes('history MaintenanceHistory[]')) {
  schema = schema.replace(
    /(\n  workOrders WorkOrder\[\]\n  history    MaintenanceHistory\[\]\n\n  \/\/ Estado)/g,
    '\n  workOrders WorkOrder[]\n  history    MaintenanceHistory[]\n  maintenanceHistory MaintenanceHistory[]\n\n  // Estado'
  );
}

// 33. Agregar campos de relación faltantes en WorkOrder para MaintenanceHistory
if (!schema.includes('history MaintenanceHistory[]')) {
  schema = schema.replace(
    /(\n  parts     WorkOrderPart\[\]\n  partsCost Float                @default\(0\)\n  history   MaintenanceHistory\[\])/g,
    '\n  parts     WorkOrderPart[]\n  partsCost Float                @default(0)\n  history   MaintenanceHistory[]\n  maintenanceHistory MaintenanceHistory[]'
  );
}

// 34. Agregar campos de relación faltantes en Product para BillOfMaterial
if (!schema.includes('billOfMaterials BillOfMaterial[]')) {
  // Ya existe arriba
}

// 35. Agregar campos de relación faltantes en Product para BOMComponent (ya tiene relation "component")
// Ya existe bomComponents

// 36. Agregar campos de relación faltantes en Product para ProductionOrder
if (!schema.includes('productionOrders ProductionOrder[]')) {
  schema = schema.replace(
    /(\n  productionOrders   ProductionOrder\[\]\n  mrpRequests        MRPRequest\[\])/g,
    '\n  productionOrders   ProductionOrder[]\n  productionOrdersList ProductionOrder[]\n  mrpRequests        MRPRequest[]'
  );
}

// 37. Agregar campos de relación faltantes en BillOfMaterial para ProductionOrder
if (!schema.includes('productionOrders ProductionOrder[]')) {
  schema = schema.replace(
    /(\n  components       BOMComponent\[\]\n  productionOrders ProductionOrder\[\]\n\n  createdAt DateTime @default\(now\))/g,
    '\n  components       BOMComponent[]\n  productionOrders ProductionOrder[]\n  productionOrdersBOM ProductionOrder[]\n\n  createdAt DateTime @default(now)'
  );
}

// 38. Agregar campos de relación faltantes en Product para ProductionConsumed
// Ya existe productionConsumed

// 39. Agregar campos de relación faltantes en Lot para ProductionConsumed
if (!schema.includes('productionConsumed ProductionConsumed[]')) {
  schema = schema.replace(
    /(\n  productionConsumed ProductionConsumed\[\]\n  productionResults  ProductionResult\[\]\n  inventoryMovements InventoryMovement\[\])/g,
    '\n  productionConsumed ProductionConsumed[]\n  productionConsumedLot ProductionConsumed[]\n  productionResults  ProductionResult[]\n  inventoryMovements InventoryMovement[]'
  );
}

// 40. Agregar campos de relación faltantes en Product para ProductionResult
// Ya existe productionResults

// 41. Agregar campos de relación faltantes en Lot para ProductionResult
if (!schema.includes('productionResults ProductionResult[]')) {
  schema = schema.replace(
    /(\n  productionResults  ProductionResult\[\]\n  inventoryMovements InventoryMovement\[\])/g,
    '\n  productionResults  ProductionResult[]\n  productionResultsLot ProductionResult[]\n  inventoryMovements InventoryMovement[]'
  );
}

// 42. Agregar campos de relación faltantes en ProductionOrder para ProductionOrder (workCenter)
// Verificar si WorkCenter tiene la relación inversa
if (!schema.includes('orders ProductionOrder[]')) {
  schema = schema.replace(
    /(\n  \/\/ Órdenes asignadas\n  orders      ProductionOrder\[\]\n\n  createdAt DateTime @default\(now\))/g,
    '\n  // Órdenes asignadas\n  orders      ProductionOrder[]\n  productionOrders ProductionOrder[]\n\n  createdAt DateTime @default(now)'
  );
}

// 43. Agregar campos de relación faltantes en Product para MRPRequest
if (!schema.includes('mrpRequests MRPRequest[]')) {
  // Ya existe arriba
}

// 44. Agregar campos de relación faltantes en ProductionOrder para MRPRequest
if (!schema.includes('mrpRequests MRPRequest[]')) {
  schema = schema.replace(
    /(\n  mrpRequests        MRPRequest\[\]\n  posQuickProducts   POSQuickProduct\[\])/g,
    '\n  mrpRequests        MRPRequest[]\n  mrpRequestsPO      MRPRequest[]\n  posQuickProducts   POSQuickProduct[]'
  );
}

// 45. Corregir User.assignedTasks y User.assignedLeads - el campo assigned es opcional
// Cambiar assigned User? en lugar de User
schema = schema.replace(
  /(\n  assignedTo  String\?\n  assigned    User     @relation\(fields: \[assignedTo\], references: \[id\]\))/g,
  '\n  assignedTo  String?\n  assigned    User?    @relation(fields: [assignedTo], references: [id])'
);

// 46. Agregar campos de relación faltantes en User para Lead
if (!schema.includes('assignedLeads Lead[]')) {
  schema = schema.replace(
    /(\n  assignedLeads        Lead\[\]\n  \/\/ POS)/g,
    '\n  assignedLeads        Lead[]\n  assignedLeadsList  Lead[]\n  // POS'
  );
}

// 47. Agregar campos de relación faltantes en Customer para Lead (convertedToCustomer)
if (!schema.includes('convertedFromLeads Lead[]')) {
  schema = schema.replace(
    /(\n  quotes             Quote\[\]\n  segments           CustomerSegment\[\])/g,
    '\n  quotes             Quote[]\n  convertedFromLeads Lead[]\n  segments           CustomerSegment[]'
  );
}

// 48. Agregar campos de relación faltantes en User para Task
if (!schema.includes('assignedTasks Task[]')) {
  schema = schema.replace(
    /(\n  assignedTasks        Task\[\]\n  assignedLeads        Lead\[\])/g,
    '\n  assignedTasks        Task[]\n  assignedTasksList    Task[]\n  assignedLeads        Lead[]'
  );
}

// 49. Agregar campos de relación faltantes en Customer para CustomerSegment
if (!schema.includes('segments CustomerSegment[]')) {
  schema = schema.replace(
    /(\n  segments           CustomerSegment\[\]\n\n  createdAt DateTime @default\(now\))/g,
    '\n  segments           CustomerSegment[]\n  customerSegments CustomerSegment[]\n\n  createdAt DateTime @default(now)'
  );
}

// 50. Agregar campos de relación faltantes en User para POSSession
if (!schema.includes('posSessions POSSession[]')) {
  // Ya existe en User
}

// 51. Agregar campos de relación faltantes en Sale para POSTransaction
if (!schema.includes('posTransactions POSTransaction[]')) {
  schema = schema.replace(
    /(\n  posTransactions   POSTransaction\[\]\n\n  createdAt       DateTime          @default\(now\))/g,
    '\n  posTransactions   POSTransaction[]\n  posTransactionsList POSTransaction[]\n\n  createdAt       DateTime          @default(now)'
  );
}

// 52. Agregar campos de relación faltantes en Warehouse para POSConfig
if (!schema.includes('posConfigs POSConfig[]')) {
  // Ya existe en Warehouse
}

// 53. Agregar campos de relación faltantes en POSSession para CashReconciliation
if (!schema.includes('cashReconciliations CashReconciliation[]')) {
  schema = schema.replace(
    /(\n  transactions POSTransaction\[\]\n  createdAt  DateTime       @default\(now\))/g,
    '\n  transactions       POSTransaction[]\n  cashReconciliations CashReconciliation[]\n  createdAt  DateTime       @default(now)'
  );
}

// 54. Agregar campos de relación faltantes en Product para POSQuickProduct
if (!schema.includes('posQuickProducts POSQuickProduct[]')) {
  // Ya existe en Product
}

// 55. Agregar campos de relación faltantes en Customer para Quote
if (!schema.includes('quotes Quote[]')) {
  // Ya existe en Customer
}

// 56. Agregar campos de relación faltantes en User para Quote
if (!schema.includes('quotes Quote[]')) {
  schema = schema.replace(
    /(\n  posSessions          POSSession\[\]\n  \/\/ Ventas\n  quotes               Quote\[\])/g,
    '\n  posSessions          POSSession[]\n  // Ventas\n  quotes               Quote[]\n  quotesList           Quote[]'
  );
}

// 57. Agregar campos de relación faltantes en Sale para Quote (convertedToSale)
if (!schema.includes('convertedFromQuotes Quote[]')) {
  schema = schema.replace(
    /(\n  \/\/ Relaciones inversas\n  quotes            Quote\[\]\n  creditNotes       CreditNote\[\])/g,
    '\n  // Relaciones inversas\n  quotes            Quote[]\n  convertedFromQuotes Quote[]\n  creditNotes       CreditNote[]'
  );
}

// 58. Agregar campos de relación faltantes en Product para QuoteItem
if (!schema.includes('quoteItems QuoteItem[]')) {
  // Ya existe en Product
}

// 59. Agregar campos de relación faltantes en Sale para CreditNote
if (!schema.includes('creditNotes CreditNote[]')) {
  // Ya existe en Sale
}

// 60. Agregar campos de relación faltantes en Customer para CreditNote
if (!schema.includes('creditNotes CreditNote[]')) {
  schema = schema.replace(
    /(\n  creditNotes        CreditNote\[\]\n  accountReceivables AccountReceivable\[\])/g,
    '\n  creditNotes        CreditNote[]\n  creditNotesList    CreditNote[]\n  accountReceivables AccountReceivable[]'
  );
}

// 61. Agregar campos de relación faltantes en JournalEntry para CreditNote
if (!schema.includes('creditNotes CreditNote[]')) {
  schema = schema.replace(
    /(\n  creditNotes        CreditNote\[\]\n  arPayments         ARPayment\[\])/g,
    '\n  creditNotes        CreditNote[]\n  creditNotesJE      CreditNote[]\n  arPayments         ARPayment[]'
  );
}

// 62. Agregar campos de relación faltantes en Product para CreditNoteItem
if (!schema.includes('creditNoteItems CreditNoteItem[]')) {
  // Ya existe en Product
}

// 63. Agregar campos de relación faltantes en Sale para AccountReceivable
if (!schema.includes('accountReceivable AccountReceivable?')) {
  // Ya existe en Sale
}

// 64. Agregar campos de relación faltantes en Customer para AccountReceivable
if (!schema.includes('accountReceivables AccountReceivable[]')) {
  // Ya existe en Customer
}

// 65. Agregar campos de relación faltantes en JournalEntry para ARPayment
if (!schema.includes('arPayments ARPayment[]')) {
  // Ya existe en JournalEntry
}

// 66. Agregar campos de relación faltantes en User para AccessAttempt
if (!schema.includes('accessAttempts AccessAttempt[]')) {
  // Ya existe en User
}

// 67. Agregar campos de relación faltantes en User para SecurityAlert
if (!schema.includes('securityAlerts SecurityAlert[]')) {
  // Ya existe en User
}

// 68. Agregar campos de relación faltantes en User para PasswordHistory
if (!schema.includes('passwordHistory PasswordHistory[]')) {
  schema = schema.replace(
    /(\n  passwordHistory      PasswordHistory\[\]\n  userActivities       UserActivity\[\])/g,
    '\n  passwordHistory      PasswordHistory[]\n  passwordHistoryList  PasswordHistory[]\n  userActivities       UserActivity[]'
  );
}

// 69. Agregar campos de relación faltantes en User para UserActivity
if (!schema.includes('userActivities UserActivity[]')) {
  // Ya existe en User
}

// 70. Agregar campos de relación faltantes en User para AIUsageLog
if (!schema.includes('aiUsageLogs AIUsageLog[]')) {
  // Ya existe en User
}

// 71. Agregar campos de relación faltantes en User para ChatbotConversation
if (!schema.includes('chatbotConversations ChatbotConversation[]')) {
  // Ya existe en User
}

// 72. Agregar campos de relación faltantes en Lot para QualityInspection
if (!schema.includes('qualityInspections QualityInspection[]')) {
  // Ya existe en Lot
}

// 73. Agregar campos de relación faltantes en Product para Lot
if (!schema.includes('Lot Lot[]')) {
  schema = schema.replace(
    /(\n  categoryId          String\?\n  Lot                 Lot\[\]\n  PurchaseRequestItem PurchaseRequestItem\[\])/g,
    '\n  categoryId          String?\n  Lot                 Lot[]\n  lots                Lot[]\n  PurchaseRequestItem PurchaseRequestItem[]'
  );
}

// 74. Agregar campos de relación faltantes en Supplier para Lot
if (!schema.includes('lots Lot[]')) {
  // Ya existe en Supplier
}

// 75. Agregar campos de relación faltantes en Purchase para Lot
if (!schema.includes('lots Lot[]')) {
  schema = schema.replace(
    /(\n  accountPayable AccountPayable\?\n  lots           Lot\[\]\n\n  createdAt     DateTime        @default\(now\))/g,
    '\n  accountPayable AccountPayable?\n  lots           Lot[]\n  lotsPO       Lot[]\n\n  createdAt     DateTime        @default(now)'
  );
}

// 76. Agregar campos de relación faltantes en ProductionOrder para Lot
if (!schema.includes('lots Lot[]')) {
  schema = schema.replace(
    /(\n  lotsPO       Lot\[\]\n\n  createdAt     DateTime        @default\(now\))/g,
    '\n  lotsPO       Lot[]\n  lotsProduction Lot[]\n\n  createdAt     DateTime        @default(now)'
  );
}

// 77. Agregar campos de relación faltantes en Supplier para SupplierCategory
if (!schema.includes('supplierCategoryId String?')) {
  // Ya existe en Supplier
}

// 78. Agregar campos de relación faltantes en Department para PurchaseRequest
if (!schema.includes('purchaseRequests PurchaseRequest[]')) {
  schema = schema.replace(
    /(\n  PurchaseRequest PurchaseRequest\[\]\n\n  @@index\(\[parentId\]\))/g,
    '\n  purchaseRequests  PurchaseRequest[]\n  purchaseRequestsList PurchaseRequest[]\n\n  @@index([parentId])'
  );
}

// 79. Agregar campos de relación faltantes en Product para PurchaseRequestItem
// Ya agregado arriba

// 80. Agregar campos de relación faltantes en User para BankTransaction
// Ya agregado arriba en JournalEntry

// Escribir el schema corregido
fs.writeFileSync(schemaPath, schema);
console.log('Schema corregido exitosamente!');
