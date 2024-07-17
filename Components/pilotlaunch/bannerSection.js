// "use client"
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import SubInner from "../../public/Images/pilot_launch/SubBanner.png";
// import Logo2 from "../../public/Images/png/logo2.png"

// function bannerSection() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 768) {
//         setIsMobile(!isMobile);
//       }
//       if (window.innerWidth <= 991) {
//         setIsTablet(!isTablet);
//       }
//     }
//   }, []);

//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };
//   return (
//     <>
//       <div className="pilotbannersection">
//         <div className="container">
//           <div className="mx-2 blogBannerdesc">
//             <h1 className="pilotlaunchtitle">Welcome to<span className="text-socialiconyellow"> OZ Ove</span>
//               <br />
//               Your<span className="text-socialiconyellow"> Ride</span>, Your Way!</h1>
//             <p className="mt-2 bannerdescription d-none d-lg-block">Witness the dawn of a transformative travel era. OZ Ove&apos;s pilotlaunch isn&apos;t just a test, it&apos;s a promise.</p>
//             <button className={`launchingnowbtn bg-yellow text-white text-capitalize fw-600 py-2 ${isTablet ? "px-1 my-2" : "px-4 my-3"} `} style={{ width: isTablet ? '60%' : '' }}>launching soon</button>
//           </div>
//         </div>
//       </div>
//       <div className="pilotdescriptionmainsection">
//         <div className="container">
//           <div className="my-5 row subinner align-items-center">
//             <div className="px-0 col-md-5">
//               <div className="d-flex justify-content-start justify-content-md-center">
//                 <Image loader={myLoader}
//                   className="d-none d-lg-block"
//                   src={Logo2}
//                   alt="SubInner"
//                   // objectFit="contain"
//                   // objectPosition="center"
//                   style={{
//                     position: 'unset',
//                     width: '75%',
//                     height: '100%',
//                     // animation: 'rotateAnimation 10s linear infinite',
//                     // objectFit: 'contain'
//                   }}
//                 />
//                 <Image loader={myLoader}
//                   className="d-block d-lg-none"
//                   src={Logo2}
//                   alt="SubInner"
//                   // objectFit="contain"
//                   // objectPosition="center"
//                   style={{
//                     position: 'unset',
//                     width: '50%',
//                     height: '100%',
//                     // animation: 'rotateAnimation 10s linear infinite',
//                     // objectFit: 'contain'
//                   }}
//                 />
//               </div>
//               <div><p className="text-dark text-uppercase fw-700 text-nowrap hyper_text">Beyond Rides, Total Logistics</p></div>
//             </div>
//             <div className="px-0 col-md-7">
//               <p className="subdescription">
//                 G&rsquo;day, Perth! OZ Ove is rolling into town, and we&rsquo;re
//                 absolutely stoked to kickstart our pilot launch right here in
//                 WA&rsquo;s sun-kissed capital. Whether you&rsquo;re zipping
//                 between the CBD and Fremantle, or just sending something across
//                 the Swan River, we&rsquo;ve got you covered. Dive into a
//                 customised ride experience or pick the perfect delivery vehicle,
//                 all with a true-blue Perth flavor. So, come on, Perthies! Jump
//                 aboard and be among the first to embrace the new era of mobility
//                 and logistics.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default bannerSection;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SubInner from "../../public/Images/pilot_launch/SubBanner.png";
import Logo2 from "../../public/Images/png/logo2.png";

function BannerSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setIsMobile(window.innerWidth <= 768);
        setIsTablet(window.innerWidth <= 991);
      }
    };

    handleResize(); // Call once on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run once on mount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="pilotbannersection">
        <div className="container">
          <div className="mx-2 blogBannerdesc">
            <h1 className="pilotlaunchtitle">
              Welcome to<span className="text-socialiconyellow"> OZ Ove</span>
              <br />
              Your<span className="text-socialiconyellow"> Ride</span>, Your
              Way!
            </h1>
            <p className="mt-2 bannerdescription d-none d-lg-block">
              Witness the dawn of a transformative travel era. OZ Ove&apos;s
              pilotlaunch isn&apos;t just a test, it&apos;s a promise.
            </p>
            <button
              className={`launchingnowbtn bg-yellow text-white text-capitalize fw-600 py-2 ${
                isTablet ? "px-1 my-2" : "px-4 my-3"
              } `}
              style={{ width: isTablet ? "60%" : "" }}
            >
              launching soon
            </button>
          </div>
        </div>
      </div>
      <div className="pilotdescriptionmainsection">
        <div className="container">
          <div className="my-5 row subinner align-items-center">
            <div className="px-0 col-md-5">
              <div className="d-flex justify-content-start justify-content-md-center">
                <Image
                  loader={myLoader}
                  className="d-none d-lg-block"
                  src={Logo2}
                  alt="SubInner"
                  style={{
                    position: "unset",
                    width: "75%",
                    height: "100%",
                  }}
                />
                <Image
                  loader={myLoader}
                  className="d-block d-lg-none"
                  src={Logo2}
                  alt="SubInner"
                  style={{
                    position: "unset",
                    width: "50%",
                    height: "100%",
                  }}
                />
              </div>
              <div>
                <p className="text-dark text-uppercase fw-700 text-nowrap hyper_text">
                  Beyond Rides, Total Logistics
                </p>
              </div>
            </div>
            <div className="px-0 col-md-7">
              <p className="subdescription">
                G&rsquo;day, Perth! OZ Ove is rolling into town, and we&rsquo;re
                absolutely stoked to kickstart our pilot launch right here in
                WA&rsquo;s sun-kissed capital. Whether you&rsquo;re zipping
                between the CBD and Fremantle, or just sending something across
                the Swan River, we&rsquo;ve got you covered. Dive into a
                customised ride experience or pick the perfect delivery vehicle,
                all with a true-blue Perth flavor. So, come on, Perthies! Jump
                aboard and be among the first to embrace the new era of mobility
                and logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
