import { useCallback, useMemo, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Image,
  SectionList,
  View
} from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Plus } from 'phosphor-react-native'

import logo from '@/assets/logo.png'
import { formatPercent } from '@/utils/format-percent'
import { findAllMeals } from '@/storage/meal/find-meals'

import { Button } from '@/components/Touchables/Button'
import { MealItem } from '@/components/MealItem'
import { StatisticsCard } from '@/components/StatisticsCard'

import { theme } from '@/styles/theme'

import {
  Container,
  Content,
  Empty,
  Header,
  Heading,
  Photo,
  Title
} from './styles'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<MealByPeriod[]>([])

  const navigation = useNavigation()

  function handleCreate() {
    navigation.navigate('create')
  }

  function handleStatistics() {
    navigation.navigate('statistics', {
      color: 'success'
    })
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

  const userPhoto = useMemo(() => 'https://github.com/lucianotavernard.png', [])

  const dietPercent = useMemo(() => {
    const totalMealsInDiet = meals.reduce(
      (total, day) =>
        total + day.data.filter((item) => item.category === 'in').length,
      0
    )

    const totalMealsOutDiet = meals.reduce(
      (total, day) =>
        total + day.data.filter((item) => item.category === 'out').length,
      0
    )

    return Number(
      totalMealsInDiet / (totalMealsInDiet + totalMealsOutDiet || 1)
    )
  }, [meals])

  return (
    <Container>
      <Header>
        <Image style={{ width: 80, height: 40 }} source={logo} />

        <Photo source={{ uri: userPhoto }} alt="Imagem do usuário" />
      </Header>

      <Content>
        <StatisticsCard
          style={{ marginBottom: 12 }}
          color={
            dietPercent === 0 || dietPercent > 0.51 ? 'primary' : 'secondary'
          }
          title={formatPercent(dietPercent)}
          enableArrowLeft
          description="das refeições dentro da dieta"
          onPress={handleStatistics}
        />

        <Title>Refeições</Title>

        <Button style={{ marginVertical: 12 }} onPress={handleCreate}>
          <Plus size={18} color={theme.colors.white} /> Nova Refeição
        </Button>

        {isLoading && <ActivityIndicator color={theme.colors.green[400]} />}

        <SectionList
          sections={meals}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <MealItem meal={item} />}
          renderSectionHeader={({ section }) => (
            <Heading>{section.title}</Heading>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          ListEmptyComponent={() => (
            <Empty>
              Não há registradas ainda. {'\n'}
              Vamos fazer exercícios hoje?
            </Empty>
          )}
        />
      </Content>
    </Container>
  )
}
