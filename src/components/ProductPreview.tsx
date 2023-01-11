import React, { useState } from "react"

type Props = {
  images: string[]
}

export const ProductPreview = ({ images }: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleSelect = (num: number) => {
    setActiveImageIndex(num)
  }

  const handleNext = () => {
    const nextIndex = activeImageIndex + 1
    if (nextIndex < images.length) setActiveImageIndex(nextIndex)
    else setActiveImageIndex(0)
  }

  const handlePrev = () => {
    const prevIndex = activeImageIndex - 1
    if (prevIndex >= 0) setActiveImageIndex(prevIndex)
    else setActiveImageIndex(images.length - 1)
  }

  return (
    <div className="flex w-full md:p-6 gap-4 min-h-[640px]">
      <div className=" md:w-[72px] md:visible overflow-y-auto overflow-x-hidden hidden md:flex md:flex-col gap-2">
        {images?.map((img, index) => (
          <button key={img} onClick={() => handleSelect(index)}>
            <img
              src={img}
              alt={String(index)}
              className="h-[92px] w-[70px] bg-base-300 rounded-lg object-cover"
            ></img>
          </button>
        ))}
      </div>
      <div className="w-full aspect-[3/4] bg-base-300 rounded-lg grid place-items-center relative">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={images[activeImageIndex]}
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={handlePrev} className="btn btn-circle">
            ❮
          </button>
          <button onClick={handleNext} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  )
}
