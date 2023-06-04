import { TextInputProps } from 'react-native'

import { theme } from '@/styles/theme'
import { Container } from './styles'

type TextareaProps = TextInputProps & {
  value?: string
}

export function Textarea(props: TextareaProps) {
  return (
    <Container
      {...props}
      multiline
      numberOfLines={4}
      placeholderTextColor={theme.colors.gray[300]}
      returnKeyType="done"
      autoCorrect={false}
    />
  )
}
