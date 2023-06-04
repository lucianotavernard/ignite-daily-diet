/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { mealCollection } from '@/storage/storage-config'

import { findAllMeals } from './find-meals'

export async function deleteMeal(meal: Meal) {
  try {
    const storedMeals = await findAllMeals()

    const meals = storedMeals.filter((item) => item.id !== meal.id)

    await AsyncStorage.setItem(mealCollection, JSON.stringify(meals))
  } catch (error) {
    throw error
  }
}
