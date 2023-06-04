import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(Pressable)`
  ${({ theme }) => css`
    flex-direction: row;

    justify-content: space-between;
    align-content: center;
    align-items: center;

    width: 100%;

    padding: 14px 12px 14px 16px;

    border-width: 1px;
    border-color: ${theme.colors.gray[400]};
    border-radius: 6px;

    background-color: ${theme.colors.gray[100]};
  `}
`

export const HStack = styled.View`
  flex: 1;

  gap: 12px;
  flex-direction: row;

  align-items: center;
`

export const Status = styled.View`
  width: 14px;
  height: 14px;

  border-radius: 100%;
`

export const TextHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};

    font-size: ${theme.fontSizes.sm}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};
    font-size: ${theme.fontSizes.md}px;
  `}
`
