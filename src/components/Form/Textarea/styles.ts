import styled, { css } from 'styled-components/native'

type StyledTextareaProps = {
  isInvalid?: boolean
  isFocused?: boolean
}

export const Container = styled.TextInput<StyledTextareaProps>`
  ${({ theme, isFocused }) => css`
    min-height: 120px;

    padding: 16px;

    border-width: 1px;
    border-color: ${theme.colors.gray[300]};
    border-radius: 6px;

    color: ${theme.colors.gray[700]};
    background-color: ${theme.colors.gray[100]};

    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.body};

    ${isFocused &&
    css`
      border-color: ${theme.colors.red[700]};
    `}

    ${isFocused &&
    css`
      border-color: ${theme.colors.green[400]};
      background-color: ${theme.colors.white};
    `}
  `}
`
