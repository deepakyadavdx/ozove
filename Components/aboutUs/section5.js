// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import OurVision from "../../public/Images/about_us/ourVision.png"
// import OurMission from "../../public/Images/about_us/ourMission.png"

// function SectionFive() {
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
//       <div className="py-1 py-lg-5 about_section_5">
//         <div className={`container`}>
//           <div className={`${isMobile ? "card" : "py-2"}`}>
//             <div className="mx-0 row w-100 align-items-center justify-content-between">
//               <div className="order-1 px-0 col-lg-5">
//                 <div className="my-3">
//                   <p className="section_5_head">Our Vision</p>
//                 </div>
//                 <div>
//                   {isMobile ? (<p className="section_5_desc">
//                     Our vision is to enable commerce and empower
//                     <br />
//                     lives through inclusive mobility solutions. We're
//                     <br />
//                     building the fastest, most reliable, and inclusive
//                     <br />
//                     mobility network by enabling micro-entrepreneurs
//                     <br />
//                     through technology to deliver and transport,
//                     <br />
//                     anytime, anywhere.
//                   </p>
//                   ) : (
//                     <p className="section_5_desc">
//                       Our vision is to enable commerce
//                       <br />
//                       and empower lives through
//                       <br />
//                       inclusive mobility solutions. We're
//                       <br />
//                       building the fastest, most reliable,
//                       <br />
//                       and inclusive mobility network by
//                       <br />
//                       enabling micro-entrepreneurs
//                       <br />
//                       through technology to deliver
//                       <br />
//                       and transport, anytime,
//                       <br />
//                       anywhere.
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div className="order-2 px-0 mt-3 col-lg-7 mt-lg-1">
//                 <div>
//                   <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={OurVision} alt="OurVision" />
//                 </div>
//               </div>
//               <div className="order-4 px-0 mt-3 col-lg-5 mt-lg-1 order-lg-3">
//                 <div>
//                   <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={OurMission} alt="OurMission" />
//                 </div>
//               </div>
//               <div className="order-3 px-0 col-lg-6 order-lg-4">
//                 <div className="my-3">
//                   <p className="section_5_head">Our Mission</p>
//                 </div>
//                 <div>
//                   {isMobile ? (
//                     <p className="section_5_desc">
//                       Our mission is to create a comprehensive ecosystem
//                       <br />
//                       that provides an unprecedented level of
//                       <br />
//                       convenience and efficiency to our customers, while
//                       <br />
//                       also fostering a community of driver-partners and
//                       <br />
//                       mobility service providers. We empower them with
//                       <br />
//                       flexible earning opportunities and promote
//                       <br />
//                       entrepreneurship.
//                     </p>
//                   ) : (
//                     <p className="section_5_desc">
//                       Our mission is to create a comprehensive
//                       <br />
//                       ecosystem that provides an unprecedented level of
//                       <br />
//                       convenience and efficiency to our customers, while
//                       <br />
//                       also fostering a community of driver-partners and
//                       <br />
//                       mobility service providers. We empower them with
//                       <br />
//                       flexible earning opportunities and promote
//                       <br />
//                       entrepreneurship.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionFive;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OurVision from "../../public/Images/about_us/ourVision.png";
import OurMission from "../../public/Images/about_us/ourMission.png";

function SectionFive() {
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
      <div className="py-1 py-lg-5 about_section_5">
        <div className={`container`}>
          <div className={`${isMobile ? "card" : "py-2"}`}>
            <div className="mx-0 row w-100 align-items-center justify-content-between">
              <div className="order-1 px-0 col-lg-5">
                <div className="my-3">
                  <p className="section_5_head">Our Vision</p>
                </div>
                <div>
                  {isMobile ? (
                    <p className="section_5_desc">
                      Our vision is to enable commerce and empower
                      <br />
                      lives through inclusive mobility solutions. We&apos;re
                      <br />
                      building the fastest, most reliable, and inclusive
                      <br />
                      mobility network by enabling micro-entrepreneurs
                      <br />
                      through technology to deliver and transport,
                      <br />
                      anytime, anywhere.
                    </p>
                  ) : (
                    <p className="section_5_desc">
                      Our vision is to enable commerce
                      <br />
                      and empower lives through
                      <br />
                      inclusive mobility solutions. We&apos;re
                      <br />
                      building the fastest, most reliable,
                      <br />
                      and inclusive mobility network by
                      <br />
                      enabling micro-entrepreneurs
                      <br />
                      through technology to deliver
                      <br />
                      and transport, anytime,
                      <br />
                      anywhere.
                    </p>
                  )}
                </div>
              </div>
              <div className="order-2 px-0 mt-3 col-lg-7 mt-lg-1">
                <div>
                  <Image
                    loader={myLoader}
                    className="w-100 h-100 object-fit-contain"
                    src={OurVision}
                    alt="OurVision"
                  />
                </div>
              </div>
              <div className="order-4 px-0 mt-3 col-lg-5 mt-lg-1 order-lg-3">
                <div>
                  <Image
                    loader={myLoader}
                    className="w-100 h-100 object-fit-contain"
                    src={OurMission}
                    alt="OurMission"
                  />
                </div>
              </div>
              <div className="order-3 px-0 col-lg-6 order-lg-4">
                <div className="my-3">
                  <p className="section_5_head">Our Mission</p>
                </div>
                <div>
                  {isMobile ? (
                    <p className="section_5_desc">
                      Our mission is to create a comprehensive ecosystem
                      <br />
                      that provides an unprecedented level of
                      <br />
                      convenience and efficiency to our customers, while
                      <br />
                      also fostering a community of driver-partners and
                      <br />
                      mobility service providers. We empower them with
                      <br />
                      flexible earning opportunities and promote
                      <br />
                      entrepreneurship.
                    </p>
                  ) : (
                    <p className="section_5_desc">
                      Our mission is to create a comprehensive
                      <br />
                      ecosystem that provides an unprecedented level of
                      <br />
                      convenience and efficiency to our customers, while
                      <br />
                      also fostering a community of driver-partners and
                      <br />
                      mobility service providers. We empower them with
                      <br />
                      flexible earning opportunities and promote
                      <br />
                      entrepreneurship.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFive;
