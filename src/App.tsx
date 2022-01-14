import Menu from 'components/Menu/Menu'
import Slider from 'components/Slider/Slider'
import dataSlider from 'utils/dataSlider'

const App = () => {
  return (
    <>
      <Menu />
      <Slider slides={dataSlider} />
    </>
  )
}

export default App
