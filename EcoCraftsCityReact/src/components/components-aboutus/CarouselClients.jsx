// import React, { useState, useEffect, Children, useRef } from 'react';
// import { cloneElement } from 'react';
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// import {
//   DivCarouselAllItemsSC,
//   DivCarouselMainSC,
//   DivCarouselWindowSC,
//   DivArrowBackgroundSC,
//   DivBoxArrowsSC,
//   DivContainerClientsCarouselSC,
// } from '../../styled-components-css/styles.CarouselClients';
// import CardCarouselShow from './CardCarouselShow';
// import { CarouselClientsContext } from './CarouselClientsContext';
//
// const CarouselAboutUs = ({ children }) => {
//   const [items, setItems] = useState([]);
//   const [carouselNumber, setCarouselNumber] = useState(0);
//   const [width, setWidth] = useState(746);
//
//   const windowElRef = useRef();
//
//   useEffect(() => {
//     const resizeHandler = () => {
//       const _width = windowElRef.current.offsetWidth;
//       setWidth(_width);
//       setCarouselNumber(0);
//     };
//     resizeHandler();
//     window.addEventListener('resize', resizeHandler);
//
//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//     };
//   }, []);
//
//    useEffect(() => {
//     setItems(
//       Children.map(children, (child) => {
//         return cloneElement(child, {
//           style: {
//             height: '100%',
//             minWidth: `${width}px`,
//             maxWidth: `${width}px`,
//           },
//         });
//       }),
//     );
//   }, []);
//
//   const handleRighttArrow = () => {
//     setCarouselNumber((currentCarouselNumber) => {
//       const newOffset = currentCarouselNumber - width;
//       const maxOffset = -(width * (children.length - 1));
//       return Math.max(newOffset, maxOffset);
//     });
//   };
//
//   const handleLefttArrow = () => {
//     setCarouselNumber((currentCarouselNumber) => {
//       const newOffset = currentCarouselNumber + width;
//       return Math.min(newOffset, 0);
//     });
//   };
//
//   return (
//     <CarouselClientsContext.Provider value={{ width }}>
//       <DivContainerClientsCarouselSC>
//         <DivCarouselMainSC>
//           <DivCarouselWindowSC ref={windowElRef}>
//             <DivCarouselAllItemsSC carouselNumber={carouselNumber}>{items}</DivCarouselAllItemsSC>
//             <DivArrowBackgroundSC arrow={'left'} onClick={handleLefttArrow}>
//               <FiArrowLeft />
//             </DivArrowBackgroundSC>
//             <DivArrowBackgroundSC arrow={'right'} onClick={handleRighttArrow}>
//               <FiArrowRight />
//             </DivArrowBackgroundSC>
//           </DivCarouselWindowSC>
//         </DivCarouselMainSC>
//       </DivContainerClientsCarouselSC>
//     </CarouselClientsContext.Provider>
//   );
// };
//
// CardCarouselShow.CardCarouselShow = CardCarouselShow;
//
// export default CarouselAboutUs;
//
