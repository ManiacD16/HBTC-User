// import React, { useEffect, useRef } from "react";
// import Video from "./Images/HBTC.mp4";
// import Photo from "./Images/HBTC.jpeg";

// const Background = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const playVideo = async () => {
//       if (videoRef.current) {
//         try {
//           await videoRef.current.play();
//         } catch (error) {
//           console.error("Video playback failed:", error);
//         }
//       }
//     };

//     playVideo();
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-black">
//       <video
//         ref={videoRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         playsInline
//         loop
//       >
//         <source src={Video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black opacity-40" />{" "}
//       {/* Dark overlay */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
//         <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
//           Welcome to HBTC
//         </h1>
//         <p className="text-white text-lg md:text-xl mt-4 drop-shadow-md max-w-md">
//           Your gateway to the world of blockchain technology and innovation.
//         </p>
//         <img
//           src={Photo}
//           alt="HBTC"
//           className="mt-8 rounded-lg shadow-xl w-3/4 md:w-1/2 max-w-lg"
//         />
//         <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Background;
