import styled from 'styled-components'
import { useState } from 'react'

import ColoredLink from './ColoredLink'
import { ColoredText } from '../styles/styles'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ButtonStyle = styled.button`
  background-color: ${({ colorValue }) =>
    colorValue !== '' ? `#${colorValue}` : 'white'};
  height: 30px;
  width: fit-content;
  margin: auto;
  border-radius: 15px;
`

function ColoredButton() {
  const [colorValue, setColorValue] = useState('white')
  const [name, setName] = useState('Nice name')
  const [hiddenColorValue, setHiddenColorValue] = useState(false)

  const handleClickBtn = (e) => {
    console.log('change color')
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)

    setColorValue(randomColor)
    setName(e.target.getAttribute('name'))

    setHiddenColorValue(true)
  }

  const handleBlur = (e) => {
    console.log('hide color val')
    setHiddenColorValue(false)
  }

  return (
    <ButtonContainer>
      <ButtonStyle
        onClick={handleClickBtn}
        colorValue={colorValue}
        name={name}
        onBlur={handleBlur}
      >
        Change my color !
      </ButtonStyle>

      {hiddenColorValue && (
        <div>
          <p>My name : {name}</p>
          <p>
            My <ColoredText colorValue={colorValue}>color</ColoredText> : #
            <ColoredText colorValue={colorValue}>{colorValue}</ColoredText>
          </p>
        </div>
      )}

      <ColoredLink colorValue={colorValue}></ColoredLink>
    </ButtonContainer>
  )
}

export default ColoredButton
