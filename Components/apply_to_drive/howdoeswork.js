// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import One from "../../public/Images/apply_to_drive/one.png"
// import Two from "../../public/Images/apply_to_drive/two.png"
// import Three from "../../public/Images/apply_to_drive/three.png"
// import Mokup from "../../public/Images/apply_to_drive/how_does_mobile.png";
// import Link from "next/link";

// function howdoeswork() {
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
//     <div className="py-2 main_setfleetsection1 py-lg-5">
//       <div className="container">
//         <div className={`${isMobile ? "card" : ""}`} style={{ backgroundColor: isMobile ? "#faad1d40" : "" }}>
//           <div className="mb-2 row">
//             <div className="col-12 justify-content-center">
//               <p className={`${isMobile ? "set_fleet_title pt-3" : "set_fleet_title"}`}>How does it work?</p>
//             </div>
//           </div>
//           <div className="mb-5 row w-100 align-items-center">
//             <div className="col-lg-6 d-flex justify-content-lg-end justify-content-md-center">
//               <Image loader={myLoader} src={Mokup} alt="Mokup" className={`${isMobile ? "w-100" : "w-50"} object-fit-contain mokup`} />
//             </div>
//             <div className="col-lg-6 mainswiper_fleet_section d-flex flex-column">
//               <div className="my-3 opacity-25 swiper_fleet_section d-flex align-items-center">
//                 <Image loader={myLoader} className="h-auto object-fit-contain" src={One} alt="One" style={{ width: "4%" }} />
//                 <p className="ms-2 me-2 fleet_demo_title">
//                   View all available orders
//                 </p>
//               </div>
//               <div className="my-3 swiper_fleet_section d-flex align-items-start">
//                 <Image loader={myLoader} className="h-auto object-fit-contain" src={Two} alt="Two" style={{ width: "4%" }} />
//                 <p className="ms-2 me-2 fleet_demo_title">
//                   Select your order you wish to pick up
//                   {isMobile ? <>&nbsp;</> : <br />}
//                   and deliver
//                 </p>
//               </div>
//               <div className="my-3 opacity-25 swiper_fleet_section d-flex align-items-center">
//                 <Image loader={myLoader} className="h-auto object-fit-contain" src={Three} alt="Three" style={{ width: "4%" }} />
//                 <p className="ms-2 me-2 fleet_demo_title">
//                   Check your earnings at anytime
//                 </p>
//               </div>
//               <button className="px-3 py-2 launching_btn bg-socialiconyellow">
//                 <Link href={`/launch`} target="_blank" className="text-white">
//                   Download app now
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default howdoeswork;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import One from "../../public/Images/apply_to_drive/one.png";
import Two from "../../public/Images/apply_to_drive/two.png";
import Three from "../../public/Images/apply_to_drive/three.png";
import Mokup from "../../public/Images/apply_to_drive/how_does_mobile.png";
import Link from "next/link";

function HowDoesWork() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="py-2 main_setfleetsection1 py-lg-5">
      <div className="container">
        <div
          className={`${isMobile ? "card" : ""}`}
          style={{ backgroundColor: isMobile ? "#faad1d40" : "" }}
        >
          <div className="mb-2 row">
            <div className="col-12 justify-content-center">
              <p
                className={`${
                  isMobile ? "set_fleet_title pt-3" : "set_fleet_title"
                }`}
              >
                How does it work?
              </p>
            </div>
          </div>
          <div className="mb-5 row w-100 align-items-center">
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-md-center">
              <Image
                loader={myLoader}
                src={Mokup}
                alt="Mokup"
                className={`${
                  isMobile ? "w-100" : "w-50"
                } object-fit-contain mokup`}
              />
            </div>
            <div className="col-lg-6 mainswiper_fleet_section d-flex flex-column">
              <div className="my-3 opacity-25 swiper_fleet_section d-flex align-items-center">
                <Image
                  loader={myLoader}
                  className="h-auto object-fit-contain"
                  src={One}
                  alt="One"
                  style={{ width: "4%" }}
                />
                <p className="ms-2 me-2 fleet_demo_title">
                  View all available orders
                </p>
              </div>
              <div className="my-3 swiper_fleet_section d-flex align-items-start">
                <Image
                  loader={myLoader}
                  className="h-auto object-fit-contain"
                  src={Two}
                  alt="Two"
                  style={{ width: "4%" }}
                />
                <p className="ms-2 me-2 fleet_demo_title">
                  Select your order you wish to pick up
                  {isMobile ? <>&nbsp;</> : <br />}
                  and deliver
                </p>
              </div>
              <div className="my-3 opacity-25 swiper_fleet_section d-flex align-items-center">
                <Image
                  loader={myLoader}
                  className="h-auto object-fit-contain"
                  src={Three}
                  alt="Three"
                  style={{ width: "4%" }}
                />
                <p className="ms-2 me-2 fleet_demo_title">
                  Check your earnings at anytime
                </p>
              </div>
              <button className="px-3 py-2 launching_btn bg-socialiconyellow">
                <Link href={`/launch`} target="_blank" className="text-white">
                  Download app now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowDoesWork;
