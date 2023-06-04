import { useNavigation } from '@react-navigation/native'

import { theme } from '@/styles/theme'

import { Container, HStack, Status, Text, TextHour } from './styles'

type MealItemProps = {
  meal: Meal
}

export function MealItem({ meal }: MealItemProps) {
  const navigation = useNavigation()

  function handleDetail() {
    navigation.navigate('details', {
      meal
    })
  }

  return (
    <Container onPress={handleDetail}>
      <HStack>
        <TextHour>{meal.hour}</TextHour>
        <Text>|</Text>
        <Text style={{ flex: 1 }} numberOfLines={1}>
          {meal.name}
        </Text>
      </HStack>

      <Status
        style={{
          backgroundColor:
            meal.category === 'in'
              ? theme.colors.green[700]
              : theme.colors.red[700]
        }}
      />
    </Container>
  )
}
