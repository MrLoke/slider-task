import { useRef } from 'react'
import useSlider from 'hooks/useSlider'
import { SlidesTypes } from 'utils/dataSlider'
import Button from 'components/Button/Button'

const Slider = ({ slides }: { slides: SlidesTypes }) => {
  const slideImage = useRef<HTMLDivElement | null>(null)
  const slideHeader = useRef<HTMLDivElement | null>(null)
  const slideSubHeader = useRef<HTMLDivElement | null>(null)
  const slideContent = useRef<HTMLDivElement | null>(null)
  const { changeSlide } = useSlider(
    slideImage,
    slideHeader,
    slideSubHeader,
    slideContent,
    slides
  )

  return (
    <div className="slider" ref={slideImage}>
      <div className="flex flex-col justify-center">
        <div className="flex mb-4">
          {Array.from({ length: 3 }).map((_item, index) => (
            <div
              className="w-4 h-4 bg-white rounded-full mx-1 cursor-pointer"
              onClick={() => changeSlide(index)}
              key={index}
            ></div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2
              className="text-white font-workSans font-bold text-lg lg:text-2xl"
              ref={slideHeader}
            >
              &nbsp;
            </h2>
            <h2
              className="text-white ml-8 font-workSans font-light text-sm lg:text-xl"
              ref={slideSubHeader}
            >
              &nbsp;
            </h2>
            <div className="w-3/4 md:w-1/2 border-b-4 border-secondaryWhite h-1 mt-4">
              <span className="block w-24 h-1 bg-green"></span>
            </div>
            <p
              className="text-white font-barlow font-light text-xs lg:text-sm max-w-3xl my-10 truncate-text-content"
              ref={slideContent}
            ></p>

            <div className="flex flex-col md:flex-row">
              <Button text="DOLOR SIT AMET" filled={false} />
              <Button text="LOREM IPSUM" filled={true} />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-0 left-48 border-l-2 border-white">
          <p className="text-xs ml-3 mb-4 text-white">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slider
