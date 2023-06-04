export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined

      create?: {
        meal?: Meal
      }
      update: {
        meal: Meal
      }
      details: {
        meal: Meal
      }
      statistics: {
        color: 'success' | 'danger'
      }
      confirmation: {
        status: 'success' | 'danger'
        title: string
        description: string
      }
    }
  }
}
