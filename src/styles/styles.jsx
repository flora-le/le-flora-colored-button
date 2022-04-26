import styled from 'styled-components'

export const ColoredText = styled.span`
  color: ${({ colorValue }) =>
    colorValue !== '' ? `#${colorValue}` : 'black'};
`
