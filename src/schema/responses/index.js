module.exports = {
   MutationResponse: {
      __resolveType(response) {
         if (response.recipe) {
            return 'RecipeResponse'
         }
         else if (response.supplier) {
            return 'SupplierResponse'
         }
         else if (response.purchaseOrder) {
            return 'PurchaseOrderResponse';
         }
         else if (response.workOrder) {
            return 'WorkOrderResponse'
         }
         else if (response.supplierItem) {
            return 'SupplierItemResponse'
         }
         else if (response.supplierItemProcessing) {
            return 'SupplierItemProcessingResponse'
         }
         else if (response.supplierItemProcessingSachets) {
            return 'SupplierItemProcessingSachetsResponse'
         }
         return null
      }
   }
}
