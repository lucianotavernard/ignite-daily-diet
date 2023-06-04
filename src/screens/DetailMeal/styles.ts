import { SafeAreaView } from 'react-native-safe-area-context'

import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.green[100]};
  `};
`

export const Header = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin-top: 48px;
  margin-bottom: 32px;
`

export const Heading = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};

    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;

    padding: 24px;

    border-radius: 24px;

    background-color: ${theme.colors.white};
  `};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 4px;

    color: ${theme.colors.gray[700]};
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.heading};
  `};
`

export const Description = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 20px;

    color: ${theme.colors.gray[600]};
    font-size: ${theme.fontSizes.md}px;
  `};
`

export const DateHeading = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.fontSizes.md}px;
  `};
`

export const DateDescription = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 4px;

    color: ${theme.colors.gray[600]};
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.body};
  `};
`

export const TagContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;

    justify-content: center;
    align-items: center;

    width: 144px;
    height: 34px;

    margin-top: 12px;
    border-radius: 9999px;

    background-color: ${theme.colors.gray[200]};
  `}
`

export const TagIndicator = styled.View`
  width: 8px;
  height: 8px;

  margin-right: 4px;

  border-radius: 9999px;
`
