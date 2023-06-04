import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    top: 56px;

    padding: 24px;

    background-color: ${theme.colors.green[100]};
  `}
`
