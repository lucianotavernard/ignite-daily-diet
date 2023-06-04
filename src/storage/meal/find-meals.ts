/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { mealCollection } from '@/storage/storage-config'

const data: Meal[] = [
  {
    id: String(new Date().getTime()),
    hour: '10:00',
    date: '12.08.22',
    name: 'Sanduíche',
    description: 'Sanduíche',
    category: 'in'
  },
  {
    id: String(new Date().getTime() + 1),
    hour: '12:00',
    date: '12.08.22',
    name: 'Lasanha de Frango com queijo',
    description: 'Lasanha de Frango com queijo',
    category: 'in'
  },
  {
    id: String(new Date().getTime() + 2),
    hour: '18:00',
    date: '12.08.22',
    name: 'X-Tudo',
    description: 'X-Tudo',
    category: 'out'
  },
  {
    id: String(new Date().getTime() + 3),
    hour: '12:00',
    date: '11.08.22',
    name: 'Torta de chocolate',
    description: 'Torta de chocolate',
    category: 'in'
  },
  {
    id: String(new Date().getTime() + 4),
    hour: '18:00',
    date: '11.08.22',
    name: 'X-Tudo',
    description: 'X-Tudo',
    category: 'out'
  }
]

export async function findAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(mealCollection)

    if (!storage) {
      await AsyncStorage.setItem(mealCollection, JSON.stringify(data))

      return data
    }

    return JSON.parse(storage) as Meal[]
  } catch (error) {
    return []
  }
}
