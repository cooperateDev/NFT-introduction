import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '@assets/css/components/Carousel.css'

const responsiveItem = {
  0: {
    items: 1,
  },
  1024: {
    items: 3,
  },
  1216: {
    items: 4,
  },
}

interface Props {
  items: any
}

const Carousel: React.FC<Props> = ({ items }) => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls={true}
      keyboardNavigation={true}
      responsive={responsiveItem}
      autoPlayInterval={1000}
      infinite
      autoPlay={false}
    />
  )
}

export default Carousel
