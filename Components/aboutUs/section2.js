// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Introduction from "../../public/Images/about_us/introduction.png"

// function SectionTwo() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);
//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };
//   return (
//     <>
//       <div className="py-lg-5 about_us_introduction">
//         <div className={`container`}>
//           <div className={`${isMobile ? "card pt-2 pb-3 px-2 my-3" : "py-5"}`}>
//             <div className="mx-0 row w-100 align-items-center">
//               <div className="px-0 col-lg-5 d-flex justify-content-center">
//                 <Image loader={myLoader} className="object-fit-contain h-100" style={{ width: isMobile ? "100%" : "95%" }} src={Introduction} alt="Introduction" />
//               </div>
//               <div className="px-0 col-lg-7">
//                 <div className="my-3">
//                   <h2 className="intro_head">Introduction</h2>
//                 </div>
//                 <div className="intro_width">
//                   <p className="intro_desc">OZ OVE is a trailblazing force in Australia&apos;s mobility and logistics sector.</p>
//                   <p className="intro_desc">We&apos;re a technology-driven marketplace that serves as the bridge between traditional mobility service providers and the needs of the modern customer.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionTwo;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Introduction from "../../public/Images/about_us/introduction.png";

function SectionTwo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 991);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="py-lg-5 about_us_introduction">
        <div className="container">
          <div className={`${isMobile ? "card pt-2 pb-3 px-2 my-3" : "py-5"}`}>
            <div className="mx-0 row w-100 align-items-center">
              <div className="px-0 col-lg-5 d-flex justify-content-center">
                <Image
                  loader={myLoader}
                  className="object-fit-contain h-100"
                  style={{ width: isMobile ? "100%" : "95%" }}
                  src={Introduction}
                  alt="Introduction"
                />
              </div>
              <div className="px-0 col-lg-7">
                <div className="my-3">
                  <h2 className="intro_head">Introduction</h2>
                </div>
                <div className="intro_width">
                  <p className="intro_desc">
                    OZ OVE is a trailblazing force in Australia&apos;s mobility
                    and logistics sector.
                  </p>
                  <p className="intro_desc">
                    We&apos;re a technology-driven marketplace that serves as
                    the bridge between traditional mobility service providers
                    and the needs of the modern customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
