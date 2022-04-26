import ColoredButton from './components/ColoredButton'
import styled from 'styled-components'
import './App.css'
import { ColoredText } from './styles/styles'

const TitleStyle = styled.h1`
  color: 'Blue';
  text-align: center;
`

function App() {
  document.title = 'Flora Lê Colored button'
  return (
    <div className="App">
      <TitleStyle>
        My <ColoredText colorValue={'154d54'}>colored</ColoredText> button
      </TitleStyle>
      <h2>
        by{' '}
        <i>
          <ColoredText colorValue={'154ddd'}>Flora Lê</ColoredText>
        </i>
      </h2>
      <ColoredButton />
    </div>
  )
}

export default App
