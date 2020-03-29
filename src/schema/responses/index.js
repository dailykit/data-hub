module.exports = {
   MutationResponse: {
      __resolveType(response) {
         if (response.recipe) {
            return 'RecipeResponse'
         } else if (response.ingredient) {
            return 'IngredientResponse'
         } else if (response.processing) {
            return 'ProcessingResponse'
         } else if (response.processingName) {
            return 'ProcessingNameResponse'
         } else if (response.sachet) {
            return 'SachetResponse'
         } else if (response.supplierItem) {
            return 'SupplierItemResponse'
         } else if (response.unit) {
            return 'UnitResponse'
         } else if (response.packaging) {
            return 'PackagingResponse'
         } else if (response.labelTemplate) {
            return 'LabelTemplateResponse'
         }
         return null
      }
   }
}
