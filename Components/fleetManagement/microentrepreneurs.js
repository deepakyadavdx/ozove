// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import BannerDesc from "../../public/Images/fleet_management/banner-desc.png";

// function Microentrepreneurs() {
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
//       <div className="py-3 microentrepreneurs_section py-lg-5">
//         <div className="microentrepreneurs_sub_section">
//           <div className="container d-flex justify-content-center">
//             <div
//               className="py-4 mx-0 row align-items-center"
//               style={{ width: isMobile ? "100%" : "85%" }}
//             >
//               <div className="col-md-7 microentrepreneurs_title_section">
//                 <div className="microentrepreneurs_title">What we Offer</div>
//                 <p className="microentrepreneurs_desc w-75">
//                   Empower your fleet operations with OZ Ove&apos;s advanced
//                   Fleet Management Dashboard. Our platform provides robust
//                   infrastructure, technology and access to a comprehensive
//                   driver network, designed to optimize your business efficiency
//                   and profitability.
//                 </p>
//               </div>
//               <div className="col-md-5 microentrepreneursimg_section">
//                 <Image
//                   loader={myLoader}
//                   src={BannerDesc}
//                   alt="BannerDesc"
//                   className="microentrepreneursimg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Microentrepreneurs;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerDesc from "../../public/Images/fleet_management/banner-desc.png";

function Microentrepreneurs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Initial call to set value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, runs once on mount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="py-3 microentrepreneurs_section py-lg-5">
        <div className="microentrepreneurs_sub_section">
          <div className="container d-flex justify-content-center">
            <div
              className="py-4 mx-0 row align-items-center"
              style={{ width: isMobile ? "100%" : "85%" }}
            >
              <div className="col-md-7 microentrepreneurs_title_section">
                <div className="microentrepreneurs_title">What we Offer</div>
                <p className="microentrepreneurs_desc w-75">
                  Empower your fleet operations with OZ Ove&apos;s advanced
                  Fleet Management Dashboard. Our platform provides robust
                  infrastructure, technology and access to a comprehensive
                  driver network, designed to optimize your business efficiency
                  and profitability.
                </p>
              </div>
              <div className="col-md-5 microentrepreneursimg_section">
                <Image
                  loader={myLoader}
                  src={BannerDesc}
                  alt="BannerDesc"
                  className="microentrepreneursimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Microentrepreneurs;
