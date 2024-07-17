// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import WhatWeDo from "../../public/Images/about_us/what_we_do.png"

// function SectionFour() {
//   const [isTablet, setIsTablet] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsTablet(!isTablet);
//       }
//       if (window.innerWidth <= 767) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);
//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };
//   return (
//     <>
//       <div className="py-3 py-lg-5 about_section_4">
//         <div className={`container`}>
//           <div className={`${isTablet ? "card" : "py-2"}`}>
//             <div className="mx-0 row w-100 align-items-center">
//               <div className="px-0 col-lg-5 d-flex justify-content-start justify-content-lg-center">
//                 <div className={`${isTablet ? "d-flex justify-content-start justify-content-lg-center" : ""}`}>
//                   <Image loader={myLoader} className={`h-100 object-fit-contain section-4-img`} style={{ width: isTablet ? "50%" : "95%" }} src={WhatWeDo} alt="WhatWeDo" />
//                 </div>
//               </div>
//               <div className="px-0 col-lg-7">
//                 <div className="my-3">
//                   <h2 className="about_what_head">What we do</h2>
//                 </div>
//                 <div>
//                   <p className="about_what_desc">We provide an all-encompassing mobility solution by integrating delivery and group ride services. With OZ OVE, you can book on-demand group rides and streamline your logistics needs, experiencing an unmatched level of customization and convenience.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionFour;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import WhatWeDo from "../../public/Images/about_us/what_we_do.png";

function SectionFour() {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsTablet(window.innerWidth <= 991);
        setIsMobile(window.innerWidth <= 767);
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
      <div className="py-3 py-lg-5 about_section_4">
        <div className={`container`}>
          <div className={`${isTablet ? "card" : "py-2"}`}>
            <div className="mx-0 row w-100 align-items-center">
              <div className="px-0 col-lg-5 d-flex justify-content-start justify-content-lg-center">
                <div
                  className={`${
                    isTablet
                      ? "d-flex justify-content-start justify-content-lg-center"
                      : ""
                  }`}
                >
                  <Image
                    loader={myLoader}
                    className={`h-100 object-fit-contain section-4-img`}
                    style={{ width: isTablet ? "50%" : "95%" }}
                    src={WhatWeDo}
                    alt="WhatWeDo"
                  />
                </div>
              </div>
              <div className="px-0 col-lg-7">
                <div className="my-3">
                  <h2 className="about_what_head">What we do</h2>
                </div>
                <div>
                  <p className="about_what_desc">
                    We provide an all-encompassing mobility solution by
                    integrating delivery and group ride services. With OZ OVE,
                    you can book on-demand group rides and streamline your
                    logistics needs, experiencing an unmatched level of
                    customization and convenience.
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

export default SectionFour;
