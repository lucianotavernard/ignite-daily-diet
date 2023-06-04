/* eslint-disable no-useless-catch */
import { deleteMeal } from './delete-meal'
import { createMeal } from './create-meal'

export async function updateMeal(oldMeal: Meal, newMeal: Partial<Meal>) {
  try {
    const meal = {
      ...oldMeal,
      ...newMeal
    }

    await deleteMeal(oldMeal)
    await createMeal(meal)
  } catch (error) {
    throw error
  }
}
