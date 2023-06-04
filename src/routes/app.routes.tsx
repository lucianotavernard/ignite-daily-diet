import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { EditMeal } from '@/screens/EditMeal'
import { CreateMeal } from '@/screens/CreateMeal'
import { DetailMeal } from '@/screens/DetailMeal'
import { Statistics } from '@/screens/Statistics'
import { Confirmation } from '@/screens/Confirmation'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="update" component={EditMeal} />
      <Screen name="create" component={CreateMeal} />
      <Screen name="details" component={DetailMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="confirmation" component={Confirmation} />
    </Navigator>
  )
}
