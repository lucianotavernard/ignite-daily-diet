import { TouchableOpacityProps } from 'react-native'

import { Container } from './styles'

type BackButtonProps = TouchableOpacityProps

export function BackButton({ children, ...rest }: BackButtonProps) {
  return <Container {...rest}>{children}</Container>
}
