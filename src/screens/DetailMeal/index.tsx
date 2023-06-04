import { Alert, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { ArrowLeft, Pencil, Trash } from 'phosphor-react-native'

import { deleteMeal } from '@/storage/meal/delete-meal'

import { Button } from '@/components/Touchables/Button'
import { BackButton } from '@/components/Touchables/BackButton'

import { theme } from '@/styles/theme'

import {
  Container,
  Content,
  DateDescription,
  DateHeading,
  Description,
  Header,
  Heading,
  TagContainer,
  TagIndicator,
  Title
} from './styles'

type DetailMealProps = {
  meal: Meal
}

export function DetailMeal() {
  const route = useRoute()
  const navigation = useNavigation()

  const { meal } = route.params as DetailMealProps

  function handleUpdate() {
    navigation.navigate('update', { meal })
  }

  function handleGoBack() {
    navigation.goBack()
  }

  async function remove() {
    try {
      await deleteMeal(meal)
      navigation.navigate('home')
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível excluir a refeição!')
      console.log(error)
    }
  }

  async function handleRemove() {
    Alert.alert(
      'Remover refeição',
      `Deseja remover a refeição "${meal.name}"?`,
      [
        { text: 'Sim', onPress: () => remove() },
        { text: 'Não', style: 'cancel' }
      ]
    )
  }

  return (
    <Container
      style={{
        backgroundColor:
          meal.category === 'in'
            ? theme.colors.green[100]
            : theme.colors.red[100]
      }}
    >
      <Header>
        <BackButton
          style={{ top: -24, left: 0, backgroundColor: 'transparent' }}
          onPress={handleGoBack}
        >
          <ArrowLeft size={24} />
        </BackButton>

        <Heading>Refeição</Heading>
      </Header>

      <Content>
        <Title>{meal.name}</Title>

        {meal.description && <Description>{meal.description}</Description>}

        <DateHeading>Data e Hora</DateHeading>
        <DateDescription>
          {meal.date} às {meal.hour}
        </DateDescription>

        <TagContainer>
          <TagIndicator
            style={{
              backgroundColor:
                meal.category === 'in'
                  ? theme.colors.green[700]
                  : theme.colors.red[700]
            }}
          />

          <Text>
            {meal.category === 'in' ? 'dentro da dieta' : 'fora da dieta'}
          </Text>
        </TagContainer>

        <View style={{ gap: 8, marginTop: 'auto', marginBottom: 124 }}>
          <Button onPress={handleUpdate}>
            <Pencil
              size={18}
              style={{ marginLeft: 12 }}
              color={theme.colors.white}
            />
            Editar refeição
          </Button>

          <Button type="secondary" onPress={handleRemove}>
            <Trash
              size={18}
              style={{ marginLeft: 12 }}
              color={theme.colors.gray[600]}
            />
            Excluir refeição
          </Button>
        </View>
      </Content>
    </Container>
  )
}
