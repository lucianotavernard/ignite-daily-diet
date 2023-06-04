import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    padding: 0 24px;

    background-color: ${theme.colors.gray[100]};
  `}
`

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: 48px;
  margin-bottom: 32px;
`

export const Content = styled.View`
  flex: 1;
`

export const Heading = styled.Text`
  ${({ theme }) => css`
    margin-top: 12px;
    margin-bottom: 12px;

    color: ${theme.colors.gray[600]};

    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Photo = styled.Image`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;

    border-radius: 9999px;
    border-width: 2px;
    border-color: ${theme.colors.gray[600]};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.body};
  `}
`

export const Empty = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};

    text-align: center;

    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.body};
  `}
`
