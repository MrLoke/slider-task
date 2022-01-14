import { MutableRefObject, useEffect } from 'react'
import { SlidesTypes } from 'utils/dataSlider'

const useSlider = (
  slideImage: MutableRefObject<HTMLDivElement | null>,
  slideHeader: MutableRefObject<HTMLDivElement | null>,
  slideSubHeader: MutableRefObject<HTMLDivElement | null>,
  slideContent: MutableRefObject<HTMLDivElement | null>,
  images: SlidesTypes
) => {
  useEffect(() => startSlider())

  const animateSlide = () => {
    slideImage.current?.classList.add('fadeIn')
    setTimeout(() => {
      slideImage.current?.classList.remove('fadeIn')
    }, 700)
  }

  const startSlider = () => {
    slideImage.current!.style.backgroundImage = `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
            ), url(${images[0].src})`
    slideHeader.current!.innerHTML = images[0].header
    slideSubHeader.current!.innerHTML = images[0].subHeader
    slideContent.current!.innerHTML = images[0].content
  }

  const changeSlide = (slideIndex: number) => {
    startSlider()
    animateSlide()

    slideImage.current!.style.backgroundImage = `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
          ),url(${images[slideIndex].src})`
    slideHeader.current!.innerHTML = images[slideIndex].header
    slideSubHeader.current!.innerHTML = images[slideIndex].subHeader
    slideContent.current!.innerHTML = images[slideIndex].content
    animateSlide()
  }

  return { changeSlide }
}

export default useSlider
