import { Image } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import success from '@/assets/images/success.png'
import danger from '@/assets/images/danger.png'

import { Button } from '@/components/Touchables/Button'

import { Container, VStack, Heading, Paragraph } from './styles'

type ConfirmationProps = {
  status: 'success' | 'danger'
  title: string
  description: string
}

export function Confirmation() {
  const route = useRoute()
  const navigation = useNavigation()

  const { title, status, description } = route.params as ConfirmationProps

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <VStack>
        <Heading color={status === 'success' ? 'primary' : 'secondary'}>
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </VStack>

      <Image
        style={{ marginVertical: 32 }}
        source={status === 'success' ? success : danger}
      />

      <Button onPress={handleGoHome}>Ir para a página inicial</Button>
    </Container>
  )
}
