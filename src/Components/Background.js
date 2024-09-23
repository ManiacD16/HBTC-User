// import React, { useEffect, useRef, useState } from "react";
// import Back from "./Images/Back.mp4";

// const Background = () => {
//   const backVideoRef = useRef(null);
//   const playbackIntervalRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const handleVideo = async () => {
//       if (backVideoRef.current) {
//         try {
//           await backVideoRef.current.play();
//           setIsPlaying(true);
//           backVideoRef.current.addEventListener("ended", playBackward);
//         } catch (error) {
//           console.error("Background video playback failed:", error);
//         }
//       }
//     };

//     const playBackward = () => {
//       backVideoRef.current.pause();
//       backVideoRef.current.currentTime = backVideoRef.current.duration;

//       playbackIntervalRef.current = setInterval(() => {
//         if (backVideoRef.current.currentTime <= 0) {
//           clearInterval(playbackIntervalRef.current);
//           backVideoRef.current.currentTime = 0; // Reset to the start
//           handleVideo(); // Restart the playback sequence
//         } else {
//           backVideoRef.current.currentTime -= 0.1; // Decrement for backward playback
//         }
//       }, 90);
//     };

//     // Cleanup to prevent memory leaks
//     return () => {
//       clearInterval(playbackIntervalRef.current);
//       backVideoRef.current.removeEventListener("ended", playBackward);
//     };
//   }, []);

//   const startVideo = () => {
//     handleVideo();
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       <video
//         ref={backVideoRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         muted
//         playsInline
//       >
//         <source src={Back} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black opacity-40" />
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
//         <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
//           Welcome to HBTC
//         </h1>
//         <p className="text-white text-lg md:text-xl mt-4 drop-shadow-md max-w-md">
//           Your gateway to the world of blockchain technology and innovation.
//         </p>
//         {!isPlaying && (
//           <button
//             onClick={startVideo}
//             className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
//           >
//             Play Video
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Background;
