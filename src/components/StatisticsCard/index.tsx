import { TouchableOpacityProps } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'

import { theme } from '@/styles/theme'

import {
  Container,
  HStack,
  Heading,
  StyledContainerProps,
  Text,
  VStack
} from './styles'

type StatisticsCardProps = TouchableOpacityProps &
  StyledContainerProps & {
    title: string
    description: string
    enableArrowLeft?: boolean
  }

export function StatisticsCard({
  color,
  title,
  description,
  enableArrowLeft,
  ...rest
}: StatisticsCardProps) {
  return (
    <Container {...rest} color={color}>
      {enableArrowLeft && (
        <HStack style={{ position: 'absolute', top: 4, right: 4 }}>
          <ArrowUpRight
            size={30}
            color={
              color === 'primary'
                ? theme.colors.green[700]
                : theme.colors.red[700]
            }
          />
        </HStack>
      )}

      <VStack>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </Container>
  )
}
