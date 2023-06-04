type MealCategory = 'in' | 'out'

type Meal = {
  id: string
  hour: string
  date: string
  name: string
  description: string
  category: MealCategory
}

type MappedMeals = {
  [key: string]: Meal[]
}

type MealByPeriod = {
  title: string
  data: Meal[]
}
