import { TouchableOpacityProps } from 'react-native'

import { StyleButtonTypeProps, Container, Title } from './styles'

type ButtonProps = TouchableOpacityProps & {
  type?: StyleButtonTypeProps
}

export function Button({ children, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{children}</Title>
    </Container>
  )
}
