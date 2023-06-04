import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.gray[300]};
  `}
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

export const Content = styled.ScrollView``

export const VStack = styled.View`
  flex: 1;
`

export const HStack = styled.View`
  flex: 1;
  flex-direction: row;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};

    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.body};
  `}
`

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red[700]};

    font-size: ${theme.fontSizes.sm}px;
    font-family: ${theme.fonts.body};
  `}
`

export const FormControl = styled.View`
  gap: 8px;
`

type StyledSelectOptionProps = {
  color?: 'default' | 'primary' | 'secondary'
}

export const SelectOption = styled.TouchableOpacity<StyledSelectOptionProps>`
  ${({ theme, color }) => css`
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 8px;

    min-height: 50px;
    padding: 16px;

    border-radius: 6px;
    border-width: 1px;

    border-color: ${color === 'primary'
      ? theme.colors.green[700]
      : color === 'secondary'
      ? theme.colors.red[700]
      : theme.colors.gray[200]};

    background-color: ${color === 'primary'
      ? theme.colors.green[100]
      : color === 'secondary'
      ? theme.colors.red[100]
      : theme.colors.gray[200]};
  `}
`

type StyledSelectOptionBallProps = {
  color?: 'primary' | 'secondary'
}

export const SelectOptionBall = styled.View<StyledSelectOptionBallProps>`
  ${({ theme, color }) => css`
    width: 8px;
    height: 8px;

    border-radius: 4px;

    background-color: ${color === 'primary'
      ? theme.colors.green[700]
      : theme.colors.red[700]};
  `};
`

export const SelectOptionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.fontSizes.sm}px;
    font-family: ${theme.fonts.heading};
  `};
`
