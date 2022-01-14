import Slide1 from 'assets/1.jpg'
import Slide2 from 'assets/2.jpg'
import Slide3 from 'assets/3.jpg'

export interface SlidesTypes {
  [index: number]: {
    id: number
    header: string
    subHeader: string
    src: string
    content: string
  }
}

const dataSlider = [
  {
    id: 1,
    header: 'Quisque vulputate mi consectetur',
    subHeader: 'Quisque vulputate mi consectetur',
    src: Slide1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.',
  },
  {
    id: 2,
    header: 'Pellentesque eleifend, dui sit amet',
    subHeader: 'Mauris diam fermentum massa.',
    src: Slide2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.',
  },
  {
    id: 3,
    header: 'Nam rhoncus nec nibh sit amet',
    subHeader: 'Donec mauris dolor, suscipit a felis auctor.',
    src: Slide3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.',
  },
]

export default dataSlider
