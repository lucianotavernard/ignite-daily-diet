import styled, { css } from 'styled-components/native'

export type StyledContainerProps = {
  color?: 'default' | 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<StyledContainerProps>`
  ${({ theme, color = 'default' }) => css`
    justify-content: center;
    align-items: center;

    height: 112px;

    padding: 20px 16px;

    border-radius: 8px;

    background-color: ${color === 'primary'
      ? theme.colors.green[100]
      : color === 'secondary'
      ? theme.colors.red[100]
      : theme.colors.gray[200]};
  `}
`

export const VStack = styled.View`
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const HStack = styled.View`
  flex-direction: row;
`

type StyledHeadingProps = {
  size?: 'xl' | '2xl'
}

export const Heading = styled.Text<StyledHeadingProps>`
  ${({ theme, size = '2xl' }) => css`
    color: ${theme.colors.gray[600]};

    font-size: ${theme.fontSizes[size]}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};

    font-size: ${theme.fontSizes.sm}px;
    font-family: ${theme.fonts.body};

    text-align: center;
  `}
`
