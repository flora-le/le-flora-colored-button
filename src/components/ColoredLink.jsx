import styled from 'styled-components'

const LinkStyle = styled.a`
  text-decoration: none;
  color: ${({ colorValue }) =>
    colorValue !== '' ? `#${colorValue}` : 'white'};
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
    color: ${({ colorValue }) =>
      colorValue !== '' ? `#${colorValue}` : 'white'};
  }
  &: hover {
    text-decoration: underline !important;
    color: 'green' !important;
  }
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a:first-of-type {
    margin-right: 20px;
  }
`

function ColoredLink({ colorValue }) {
  return (
    <div>
      {' '}
      <LinkWrapper>
        <LinkStyle
          href="https://flora-le.github.io/la-maison-jungle/"
          colorValue={colorValue}
        >
          Plants over here
        </LinkStyle>
        <LinkStyle href="https://flora-le.github.io/shiny-agency/">
          Shiny Agency
        </LinkStyle>
      </LinkWrapper>
    </div>
  )
}

export default ColoredLink
