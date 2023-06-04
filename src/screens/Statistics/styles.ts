import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.green[100]};
  `}
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 48px;
  margin-bottom: 48px;

  border-radius: 10px;
`

export const Heading = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};

    font-size: ${theme.fontSizes['2xl']}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};

    font-size: ${theme.fontSizes.xs}px;
    font-family: ${theme.fonts.heading};

    text-align: center;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};

    font-size: ${theme.fontSizes.sm}px;
    font-family: ${theme.fonts.body};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;

    padding: 40px 24px;

    border-radius: 20px;

    background-color: ${theme.colors.white};
  `}
`
