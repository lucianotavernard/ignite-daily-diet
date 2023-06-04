/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { ArrowLeft } from 'phosphor-react-native'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { updateMeal } from '@/storage/meal/edit-meal'

import { Input } from '@/components/Form/Input'
import { Textarea } from '@/components/Form/Textarea'
import { BackButton } from '@/components/Touchables/BackButton'
import { Button } from '@/components/Touchables/Button'

import { theme } from '@/styles/theme'

import {
  Container,
  Error,
  FormControl,
  HStack,
  Header,
  Heading,
  Label,
  SelectOption,
  SelectOptionBall,
  SelectOptionTitle,
  VStack
} from './styles'

const updateMealSchema = z.object({
  name: z.string().nonempty({
    message: 'O nome é obrigatório'
  }),
  description: z.string().min(0),
  date: z
    .string()
    .nonempty({
      message: 'A data é obrigatória'
    })
    .refine((date) => date.match(/\d{2}\.\d{2}\.\d{2}/g), {
      message: 'A data deve possuir o seguinte formato 01.01.23'
    })
    .refine(
      (date) => {
        const [day, month, year] = date.split('.')
        const parsedDay = Number(day)
        const parsedMonth = Number(month)
        const parsedYear = Number(year)

        return (
          parsedDay >= 1 &&
          parsedDay <= 31 &&
          parsedMonth >= 1 &&
          parsedMonth <= 12 &&
          parsedYear === 23
        )
      },
      {
        message: 'A data deve ser uma data válida'
      }
    ),
  hour: z
    .string()
    .nonempty({
      message: 'A hora é obrigatória'
    })
    .refine((hour) => hour.match(/\d{2}:\d{2}/g), {
      message: 'A hora deve possuir o seguinte formato 12:00'
    })
    .refine(
      (hours) => {
        const [hour, minute] = hours.split(':')
        const parsedHour = Number(hour)
        const parsedMinute = Number(minute)

        return (
          parsedHour >= 0 &&
          parsedHour <= 23 &&
          parsedMinute >= 0 &&
          parsedMinute <= 59
        )
      },
      {
        message: 'A hora deve ser um horário válido'
      }
    )
})

type UpdateMealData = z.infer<typeof updateMealSchema>

type UpdateMealProps = {
  meal: Meal
}

export function EditMeal() {
  const [selected, setSelected] = useState('')

  const route = useRoute()
  const navigation = useNavigation()

  const { meal } = route.params as UpdateMealProps

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateMealData>({
    resolver: zodResolver(updateMealSchema),
    defaultValues: {
      name: meal.name,
      hour: meal.hour,
      date: meal.date,
      description: meal.description
    }
  })

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleUpdate(data: UpdateMealData) {
    try {
      await updateMeal(meal, {
        ...data,
        category: selected === 'yes' ? 'in' : 'out'
      })

      navigation.navigate(
        'confirmation',
        selected === 'yes'
          ? {
              status: 'success',
              title: 'Continue assim!',
              description: 'Você continua dentro da dieta. Muito bem!'
            }
          : {
              status: 'danger',
              title: 'Que pena!',
              description:
                'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
            }
      )
    } catch (error) {
      Alert.alert(
        'Oops',
        'Ocorreu um erro ao atualizar a alimentação, por favor tente novamente.'
      )
    }
  }

  useEffect(() => {
    if (meal) {
      setSelected(meal.category === 'in' ? 'yes' : 'no')
    }
  }, [meal])

  return (
    <Container>
      <Header>
        <BackButton
          style={{ top: -24, left: 0, backgroundColor: 'transparent' }}
          onPress={handleGoBack}
        >
          <ArrowLeft size={24} />
        </BackButton>

        <Heading>Editar refeição</Heading>
      </Header>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          borderRadius: 16,
          paddingTop: 40,
          paddingHorizontal: 24,
          backgroundColor: theme.colors.white
        }}
        showsVerticalScrollIndicator={false}
      >
        <VStack style={{ gap: 12 }}>
          <FormControl>
            <Label>Nome</Label>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input onChangeText={onChange} value={value} />
              )}
            />

            {errors.name?.message && <Error>{errors.name.message}</Error>}
          </FormControl>

          <FormControl>
            <Label>Descrição</Label>

            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <Textarea onChangeText={onChange} value={value} />
              )}
            />

            {errors.description?.message && (
              <Error>{errors.description.message}</Error>
            )}
          </FormControl>

          <View style={{ flexDirection: 'row', gap: 16 }}>
            <FormControl style={{ flex: 1 }}>
              <Label>Data</Label>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange, value } }) => (
                  <Input onChangeText={onChange} value={value} />
                )}
              />

              {errors.date?.message && <Error>{errors.date.message}</Error>}
            </FormControl>

            <FormControl style={{ flex: 1 }}>
              <Label>Hora</Label>
              <Controller
                control={control}
                name="hour"
                render={({ field: { onChange, value } }) => (
                  <Input onChangeText={onChange} value={value} />
                )}
              />

              {errors.hour?.message && <Error>{errors.hour.message}</Error>}
            </FormControl>
          </View>

          <FormControl>
            <Label>Está dentro da dieta?</Label>

            <HStack style={{ gap: 16 }}>
              <SelectOption
                style={{ flex: 1 }}
                color={selected === 'yes' ? 'primary' : 'default'}
                onPress={() => setSelected('yes')}
              >
                <SelectOptionBall color="primary" />
                <SelectOptionTitle>Sim</SelectOptionTitle>
              </SelectOption>

              <SelectOption
                style={{ flex: 1 }}
                color={selected === 'no' ? 'secondary' : 'default'}
                onPress={() => setSelected('no')}
              >
                <SelectOptionBall color="secondary" />
                <SelectOptionTitle>Não</SelectOptionTitle>
              </SelectOption>
            </HStack>
          </FormControl>
        </VStack>

        <Button
          style={{ marginVertical: 20 }}
          onPress={handleSubmit(handleUpdate)}
        >
          Salvar refeição
        </Button>
      </ScrollView>
    </Container>
  )
}
