import styled from 'styled-components'
import { useState } from 'react'

const ButtonStyle = styled.button`
background-color: ${({ colorValue }) =>
    colorValue !== "" ? `#${colorValue}` : 'white'};
`

function ColoredButton(){
  const [colorValue, setColorValue] = useState('white')
  
  return (
    <ButtonStyle onClick={() =>{
      console.log('change color')
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);

      setColorValue(randomColor)
    }} colorValue={colorValue}>Change my color !</ButtonStyle>
    );
}

export default ColoredButton