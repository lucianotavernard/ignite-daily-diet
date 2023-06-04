import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    justify-content: center;
    align-items: center;

    padding: 0 24px;

    background-color: ${theme.colors.gray[100]};
  `}
`

export const VStack = styled.View`
  align-items: center;
`

type StyledHeadingProps = {
  color: 'primary' | 'secondary'
}

export const Heading = styled.Text<StyledHeadingProps>`
  ${({ theme, color }) => css`
    margin-top: 12px;
    margin-bottom: 12px;

    color: ${color === 'primary'
      ? theme.colors.green[700]
      : theme.colors.red[700]};

    font-size: ${theme.fontSizes.xl}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.body};
  `}
`
