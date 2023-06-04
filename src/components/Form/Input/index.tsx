import { TextInputProps } from 'react-native'

import { theme } from '@/styles/theme'
import { Container } from './styles'

type InputProps = TextInputProps & {
  value?: string
}

export function Input(props: InputProps) {
  return (
    <Container
      {...props}
      placeholderTextColor={theme.colors.gray[300]}
      returnKeyType="done"
      autoCorrect={false}
    />
  )
}
