import styled, { css } from 'styled-components/native'

export type StyleButtonTypeProps = 'primary' | 'secondary'

type StyledButtonProps = {
  type?: StyleButtonTypeProps
}

export const Container = styled.TouchableOpacity<StyledButtonProps>`
  ${({ theme, type }) => css`
    flex: 1;

    justify-content: center;
    align-items: center;

    min-height: 56px;
    max-height: 56px;

    padding: 0 24px;

    border-width: 1px;
    border-radius: 6px;

    background-color: ${theme.colors.gray[600]};

    ${type === 'secondary' &&
    css`
      border-color: ${theme.colors.gray[600]};

      background-color: ${theme.colors.white};
    `}
  `}
`

type StyledTitleProps = {
  type?: StyleButtonTypeProps
}

export const Title = styled.Text<StyledTitleProps>`
  ${({ theme, type }) => css`
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 12px;

    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.body};

    ${type === 'secondary' &&
    css`
      color: ${theme.colors.gray[600]};
    `}
  `};
`
