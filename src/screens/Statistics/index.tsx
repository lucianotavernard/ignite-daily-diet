import { useCallback, useMemo, useState } from 'react'
import { ActivityIndicator, Alert, Text, View } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'

import { ArrowLeft } from 'phosphor-react-native'

import { formatPercent } from '@/utils/format-percent'
import { findAllMeals } from '@/storage/meal/find-meals'

import { StatisticsCard } from '@/components/StatisticsCard'
import { BackButton } from '@/components/Touchables/BackButton'

import { theme } from '@/styles/theme'

import { Container, Content, Header, Heading, Title } from './styles'

type StatisticsProps = {
  color: 'success' | 'danger'
}

export function Statistics() {
  const route = useRoute()
  const navigation = useNavigation()

  const { color } = route.params as StatisticsProps

  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<MealByPeriod[]>([])

  function handleGoBack() {
    navigation.goBack()
  }

  async function featchMeals() {
    try {
      setIsLoading(true)
      const data = await findAllMeals()

      const mappedResponse = data.reduce((mapped, meal) => {
        if (!mapped[meal.date]) {
          mapped[meal.date] = []
        }

        mapped[meal.date].push(meal)

        return mapped
      }, {} as MappedMeals)

      const mealsByPeriod = Object.keys(mappedResponse).map((date) => ({
        title: date,
        data: mappedResponse[date]
      })) as MealByPeriod[]

      setMeals(mealsByPeriod)
    } catch (error) {
      Alert.alert('Receitas', 'Não foi possível carregar as receitas')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      featchMeals()
    }, [])
  )

  const totalDaysInDiet = useMemo(() => meals.length, [meals])

  const totalMealsInDiet = useMemo(
    () =>
      meals.reduce(
        (total, day) =>
          total + day.data.filter((item) => item.category === 'in').length,
        0
      ),
    [meals]
  )

  const totalMealsOutDiet = useMemo(
    () =>
      meals.reduce(
        (total, day) =>
          total + day.data.filter((item) => item.category === 'out').length,
        0
      ),
    [meals]
  )

  const totalMealsDiet = useMemo(
    () => meals.reduce((total, day) => total + day.data.length, 0),
    [meals]
  )

  const dietPercent = useMemo(
    () =>
      Number(totalMealsInDiet / (totalMealsInDiet + totalMealsOutDiet || 1)),
    [totalMealsInDiet, totalMealsInDiet]
  )

  return (
    <Container
      style={{
        backgroundColor:
          color === 'success' ? theme.colors.green[100] : theme.colors.red[100]
      }}
    >
      <BackButton onPress={handleGoBack}>
        <ArrowLeft
          size={24}
          color={
            color === 'success'
              ? theme.colors.green[700]
              : theme.colors.red[700]
          }
        />
      </BackButton>

      <Header>
        <Heading>{formatPercent(dietPercent)}</Heading>
        <Text>das refeições dentro da dieta</Text>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        {isLoading && <ActivityIndicator color={theme.colors.green[400]} />}

        <View style={{ gap: 12, marginTop: 24 }}>
          <StatisticsCard
            title={String(totalDaysInDiet)}
            description="melhor sequência de pratos dentro da dieta"
          />

          <StatisticsCard
            title={String(totalMealsDiet)}
            description="refeições registradas"
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <StatisticsCard
              style={{ width: '48%' }}
              title={String(totalMealsInDiet)}
              color="primary"
              description={`refeições dentro da\ndieta`}
            />

            <StatisticsCard
              style={{ width: '48%' }}
              title={String(totalMealsOutDiet)}
              color="secondary"
              description={`refeições fora da\ndieta`}
            />
          </View>
        </View>
      </Content>
    </Container>
  )
}
