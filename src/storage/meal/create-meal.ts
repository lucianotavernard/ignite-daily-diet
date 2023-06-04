/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { mealCollection } from '@/storage/storage-config'
import { findAllMeals } from './find-meals'

export async function createMeal(meal: Meal) {
  try {
    const storedMeals = await findAllMeals()

    const groupAlreadyExists = storedMeals.includes(meal)

    if (groupAlreadyExists) {
      throw new Error('Essa receita já foi criada.')
    }

    const storage = JSON.stringify([...storedMeals, meal])
    await AsyncStorage.setItem(mealCollection, storage)
  } catch (error) {
    throw error
  }
}
