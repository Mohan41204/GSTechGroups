// import React, { useState, useEffect } from "react";
// import Preloader from "./preloader";
// import mainVideo from "./assets/Main.mp4";

// const Homepage = () => {
//   const [loading, setLoading] = useState(true);
//   const [bubbles, setBubbles] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     const generateBubbles = () => {
//       const newBubbles = Array.from({ length: 20 }).map(() => ({
//         id: Math.random(),
//         size: Math.random() * 10 + 5,
//         left: Math.random() < 0.5 ? Math.random() * 10 + 2 : 90 + Math.random() * 10,
//         duration: Math.random() * 5 + 3,
//         color: `hsl(${Math.random() * 360}, 100%, 70%)`,
//       }));
//       setBubbles(newBubbles);
//     };

//     generateBubbles();
//   }, []);

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <section
//       data-section="hero"
//       className="relative flex flex-col justify-center min-h-[600px] md:min-h-[720px] bg-cover bg-center transition-transform"
//     >
//       {/* Background Video */}
//       {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
//         <source src={mainVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Bubbles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {bubbles.map((bubble) => (
//           <div
//             key={bubble.id}
//             className="bubble absolute bottom-0 rounded-full opacity-80 animate-bubble"
//             style={{
//               left: `${bubble.left}%`,
//               width: `${bubble.size}px`,
//               height: `${bubble.size}px`,
//               backgroundColor: bubble.color,
//               animationDuration: `${bubble.duration}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative flex-grow flex items-center py-8 md:py-12">
//         <div className="container mx-auto max-w-5xl px-4 text-white space-y-6">
//           {/* Welcome Line */}
//           <h3 className="text-xl border-l-4 border-green-400 pl-4 animate-3d-glow">
//             Welcome to
//           </h3>

//           {/* Company Name */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold glow-text hover:glow-hover transition-all duration-500">
//               GS Tech Groups
//             </h1>
//             <div className="flex gap-6 mt-2 text-sm uppercase">
//               <p className="transition-transform duration-300 hover:scale-105 hover:text-green-400">
//                 UEI: KET7DRM3BM85
//               </p>
//               <p className="transition-transform duration-300 hover:scale-105 hover:text-green-400">
//                 CAGE: 0QXD9
//               </p>
//             </div>
//           </div>

//           {/* Description Box */}
//           <div className="description-box bg-black/60 border-2 border-green-400 p-5 rounded-lg shadow-lg transition hover:scale-105 hover:shadow-green-500">
//             <p className="text-lg leading-relaxed">
//               GS Tech Groups specializes in cloud computing, cybersecurity, and artificial intelligence.
//               We provide federal agencies with secure, scalable, and innovative IT solutions. As a
//               Service-Disabled Veteran-Owned Small Business (SDVOSB) based in El Paso, TX, we assist in
//               achieving mission-critical objectives efficiently and compliantly.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Homepage;












































// import React, { useState, useEffect } from "react";
// import Preloader from "./preloader";
// import mainVideo from "./assets/Main.mp4";

// const Homepage = () => {
//   const [loading, setLoading] = useState(true);
//   const [bubbles, setBubbles] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     const generateBubbles = () => {
//       const newBubbles = Array.from({ length: 15 }).map(() => ({
//         id: Math.random(),
//         size: Math.random() * 8 + 4,
//         left: Math.random() < 0.5 ? Math.random() * 15 + 2 : 85 + Math.random() * 15,
//         duration: Math.random() * 6 + 4,
//         color: `hsl(${210 + Math.random() * 30}, 80%, 65%)`,
//       }));
//       setBubbles(newBubbles);
//     };

//     generateBubbles();
//   }, []);

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <section
//       data-section="hero"
//       className="relative flex flex-col justify-center min-h-[600px] md:min-h-[720px] bg-cover bg-center transition-transform"
//     >
//       {/* Background Video */}
//       {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
//         <source src={mainVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}

//       {/* Professional Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-navy-800/90" />

//       {/* Subtle Bubbles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {bubbles.map((bubble) => (
//           <div
//             key={bubble.id}
//             className="bubble absolute bottom-0 rounded-full opacity-60 animate-bubble"
//             style={{
//               left: `${bubble.left}%`,
//               width: `${bubble.size}px`,
//               height: `${bubble.size}px`,
//               backgroundColor: bubble.color,
//               animationDuration: `${bubble.duration}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative flex-grow flex items-center py-8 md:py-16">
//         <div className="container mx-auto max-w-6xl px-6 text-white space-y-8">
//           {/* Professional Header */}
//           <div className="space-y-2">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="w-12 h-0.5 bg-blue-400"></div>
//               <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">
//                 ENTERPRISE IT SOLUTIONS
//               </span>
//             </div>
            
//             {/* Company Name */}
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
//               GS Tech Groups
//             </h1>
//             <div className="w-20 h-1 bg-blue-500 mb-4"></div>
            
//             {/* Tagline */}
//             <p className="text-xl text-blue-100 font-light max-w-2xl">
//               Delivering Secure, Scalable Technology Solutions for Federal Agencies
//             </p>
//           </div>

//           {/* Certification Badges */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             <div className="bg-blue-800/50 border border-blue-600 px-4 py-2 rounded-lg">
//               <p className="text-sm font-medium text-blue-200">
//                 UEI: KET7DRM3BM85
//               </p>
//             </div>
//             <div className="bg-blue-800/50 border border-blue-600 px-4 py-2 rounded-lg">
//               <p className="text-sm font-medium text-blue-200">
//                 CAGE: 0QXD9
//               </p>
//             </div>
//             <div className="bg-blue-800/50 border border-blue-600 px-4 py-2 rounded-lg">
//               <p className="text-sm font-medium text-blue-200">
//                 SDVOSB Certified
//               </p>
//             </div>
//           </div>

//           {/* Professional Description */}
//           <div className="max-w-3xl">
//             <div className="bg-white/10 backdrop-blur-sm border border-blue-700/30 p-8 rounded-xl shadow-2xl">
//               <p className="text-lg leading-relaxed text-blue-50 font-light">
//                 GS Tech Groups is a premier provider of advanced technology solutions specializing in 
//                 <span className="text-blue-300 font-semibold"> cloud computing</span>, 
//                 <span className="text-blue-300 font-semibold"> cybersecurity</span>, and 
//                 <span className="text-blue-300 font-semibold"> artificial intelligence</span>. 
//                 As a Service-Disabled Veteran-Owned Small Business headquartered in El Paso, TX, we 
//                 deliver enterprise-grade IT services that enable federal agencies to achieve their 
//                 mission-critical objectives with unparalleled security, scalability, and innovation.
//               </p>
              
//               {/* Core Competencies */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-blue-600/30">
//                 <div className="text-center p-4">
//                   <div className="w-8 h-8 mx-auto mb-2 bg-blue-600 rounded-full flex items-center justify-center">
//                     <span className="text-white text-lg">☁</span>
//                   </div>
//                   <h3 className="font-semibold text-blue-200 text-sm">Cloud Infrastructure</h3>
//                 </div>
//                 <div className="text-center p-4">
//                   <div className="w-8 h-8 mx-auto mb-2 bg-blue-600 rounded-full flex items-center justify-center">
//                     <span className="text-white text-lg">🛡</span>
//                   </div>
//                   <h3 className="font-semibold text-blue-200 text-sm">Cyber Security</h3>
//                 </div>
//                 <div className="text-center p-4">
//                   <div className="w-8 h-8 mx-auto mb-2 bg-blue-600 rounded-full flex items-center justify-center">
//                     <span className="text-white text-lg">🤖</span>
//                   </div>
//                   <h3 className="font-semibold text-blue-200 text-sm">AI & Automation</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Homepage;














import React, { useState, useEffect } from "react";
import Preloader from "./preloader";
import mainVideo from "./assets/Main.mp4";
import { motion } from "framer-motion";

const INFO_BADGES = ["UEI: KET7DRM3BM85", "CAGE: 0QXD9", "SDVOSB Certified"];
const SERVICES = [
  { icon: "☁", title: "Cloud Infrastructure" },
  { icon: "🛡", title: "Cyber Security" },
  { icon: "🤖", title: "AI & Automation" },
];

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);

    setBubbles(
      Array.from({ length: 18 }).map(() => ({
        id: crypto.randomUUID(),
        size: Math.random() * 10 + 6,
        left: Math.random() * 100,
        duration: Math.random() * 5 + 4,
        opacity: Math.random() * 0.4 + 0.3,
      }))
    );
  }, []);

  if (loading) return <Preloader />;

  return (
    <section className="relative flex flex-col justify-center min-h-[650px] md:min-h-[780px] overflow-hidden">
      
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
        <source src={mainVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-950/95 z-10" />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="absolute bottom-0 rounded-full bg-blue-300/30 backdrop-blur-md"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              opacity: b.opacity,
            }}
            animate={{ y: [0, -900], opacity: [b.opacity, 0] }}
            transition={{ duration: b.duration, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center py-10 md:py-20">
        <div className="container mx-auto max-w-6xl px-6 text-white space-y-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-14 h-0.5 bg-blue-400" />
              <span className="text-blue-200 text-sm font-semibold tracking-[0.2em] uppercase">
                Enterprise IT Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold">GS Tech Groups</h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Secure • Scalable • Intelligent Technology for Federal & Enterprise Systems
            </p>
          </motion.div>

          {/* Info Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {INFO_BADGES.map((text) => (
              <div
                key={text}
                className="bg-white/10 backdrop-blur-lg border border-blue-400/50 px-5 py-2 rounded-lg shadow-lg"
              >
                <p className="text-sm font-semibold">{text}</p>
              </div>
            ))}
          </motion.div>

          {/* Description + Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-blue-400/30 p-10 rounded-2xl shadow-2xl space-y-6">
              <p className="text-lg leading-relaxed font-light">
                GS Tech Groups delivers modern IT services specializing in{" "}
                <span className="text-blue-300 font-semibold">Cloud Transformation</span>,{" "}
                <span className="text-blue-300 font-semibold">Zero-Trust Cybersecurity</span>, and{" "}
                <span className="text-blue-300 font-semibold">AI-Driven Automation</span>.
              </p>

              {/* Core Services */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-blue-400/30">
                {SERVICES.map((item) => (
                  <div key={item.title} className="text-center p-4 hover:bg-white/10 rounded-xl transition-all">
                    <div className="w-12 h-12 mx-auto mb-3 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <h3 className="font-semibold text-blue-200 text-sm uppercase">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Homepage;
