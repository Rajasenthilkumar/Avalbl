// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const Carousel = () => {
//   const items = [
//     'https://picsum.photos/seed/6/400/300',
//     'https://picsum.photos/seed/1/400/300',
//     'https://picsum.photos/seed/2/400/300',
//     'https://picsum.photos/seed/3/400/300',
//     'https://picsum.photos/seed/4/400/300',
//     'https://picsum.photos/seed/5/400/300',
//     'https://picsum.photos/seed/7/400/300',
//     'https://picsum.photos/seed/8/400/300',
//     'https://picsum.photos/seed/9/400/300',
//     'https://picsum.photos/seed/10/400/300',
//     'https://picsum.photos/seed/11/400/300',
//   ];

//   const responsive = {
//     0: { items: 1 },
//     600: { items: 2 },
//     1024: { items: 3 },
//   };
//   return (
//     <div>
//       <AliceCarousel
//         responsive={responsive}
//         autoPlayInterval={200000}
//         controlsStrategy="responsive "
//         autoPlayDirection="ltr"
//         disableButtonsControls={true}
//         paddingRight={0}
//         paddingLeft={0}
//         autoPlay={true}
//         activeIndex={2}>
//         {items.map((item, index) => (
//           <div>
//             <img key={index} src={item} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </AliceCarousel>
//     </div>
//   );
// };

// export default Carousel;
import React from 'react'

function Carousel() {
  return (
    <div>Carousel</div>
  )
}

export default Carousel
// import { Card, CardMedia } from '@mui/material';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";x

// import React from 'react';
// import { Card, CardMedia } from '@mui/material';
// import {
//   CarouselProvider as PureCarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// interface CarouselProps {
//   naturalSlideWidth: number;
//   naturalSlideHeight: number;
//   totalSlides: number;
//   visibleSlides: number;
//   step: number;
//   dragEnabled: false;
//   peekNext: number;
// }

// const images = [
//   {
//     id: 1,
//     url: 'https://picsum.photos/seed/1/400/300',
//     title: 'Image 1',
//     description: 'This is the first image',
//   },
//   {
//     id: 2,
//     url: 'https://picsum.photos/seed/2/400/300',
//     title: 'Image 2',
//     description: 'This is the second image',
//   },
//   {
//     id: 3,
//     url: 'https://picsum.photos/seed/3/400/300',
//     title: 'Image 3',
//     description: 'This is the third image',
//   },
//   {
//     id: 4,
//     url: 'https://picsum.photos/seed/4/400/300',
//     title: 'Image 4',
//     description: 'This is the fourth image',
//   },
//   {
//     id: 5,
//     url: 'https://picsum.photos/seed/5/400/300',
//     title: 'Image 5',
//     description: 'This is the fifth image',
//   },
// ];

// const Carousel: React.FC<CarouselProps> = () => {
//   const totalSlides = images.length;

//   return (
//     <PureCarouselProvider
//       naturalSlideWidth={1500}
//       naturalSlideHeight={700}
//       totalSlides={totalSlides}
//       visibleSlides={3}
//       step={1}
//       dragEnabled={false}
//       // Number of slides peeking on both sides
//     >
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Slider className="slider">
//           {images.map((image, index) => (
//             <Slide index={index} key={image.id}>
//               <Card sx={{ maxWidth: 345, margin: '0 5px' }}>
//                 <CardMedia component="img" height="200" image={image.url} alt={image.title} />
//               </Card>
//             </Slide>
//           ))}
//         </Slider>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </div>
//     </PureCarouselProvider>
//   );
// };

// export default Carousel;
// export type { CarouselProps };

// <CarouselProvider
//   naturalSlideWidth={1500}
//   naturalSlideHeight={700}
//   totalSlides={images.length}
//   visibleSlides={3}
//   step={1}
// >
//   <Slider>
//     {images.map((image) => (
//       <Slide index={image.id} key={image.id}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia component="img" height="200" image={image.url} alt={image.title} />
//         </Card>
//       </Slide>
//     ))}
//   </Slider>
//   <div style={{ marginLeft: '578px', marginTop: '20px' }}>
//     <ButtonBack>.</ButtonBack>
//     <ButtonNext>.</ButtonNext>
//   </div>
// </CarouselProvider>
