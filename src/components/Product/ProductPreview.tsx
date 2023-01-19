import React, { useState } from "react"

import styles from "../../styles/ProductPreview.module.scss"

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
    <div className={styles["product-preview"]}>
      <div className={styles["product-preview__side-slider"]}>
        {images?.map((img, index) => (
          <button key={img} onClick={() => handleSelect(index)}>
            <img
              src={img}
              alt={String(index)}
              className={styles["product-preview__side-slider__img"]}
            />
          </button>
        ))}
      </div>
      <div className={styles["product-preview__active-img"]}>
        <img
          className={styles["product-preview__active-img__img"]}
          src={images[activeImageIndex]}
          alt="Preview"
        />
        <div className={styles["product-preview__active-img__navigation"]}>
          <button
            onClick={handlePrev}
            className={styles["product-preview__active-img__navigation_btn"]}
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className={styles["product-preview__active-img__navigation_btn"]}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  )
}
