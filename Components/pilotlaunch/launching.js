// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Versatility from "../../public/svg/ride_with_us/Ride_Business/versatility.svg";
// import ArrowDownYellow from "../../public/Images/pilot_launch/arrowDown.png";
// import OnDemandGroupRides from "../../public/Images/pilot_launch/On-DemandGroupRides.png";
// import OnDemandLogistics from "../../public/Images/pilot_launch/On-DemandLogistics.png";
// import BusinessLogistics from "../../public/Images/pilot_launch/BusinessLogistics.png";
// import FleetOwnersWheel from "../../public/Images/pilot_launch/FleetOwnersTaketheWheel.png";
// import ShoutOutDrivers from "../../public/Images/pilot_launch/ShoutOuttoPerthsDrivers.png";

// function Launching() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isExpanded, setIsExpanded] = useState({
//     "multiCollapseExample1": false,
//     "multiCollapseExample2": false,
//     "multiCollapseExample3": false,
//     "multiCollapseExample4": false,
//     "multiCollapseExample5": false,
//   });

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);

//   const handleCollapse = (id) => {
//     setIsExpanded((value) => {
//       return {
//         ...value,
//         [id]: !isExpanded[id]
//       }
//     })
//   };

//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };

//   return (
//     <>
//       <div className={`launching_section ${isMobile ? "pt-3" : "pt-5 pb-4"}`}>
//         <div className="row w-100">
//           <div className="col-12">
//             <h2 className="px-2 Launching_title">Launching Exclusively in Perth</h2>
//           </div>
//         </div>
//         <div className="container my-3">
//           <div className="flex-wrap row align-items-start justify-content-evenly">
//             <div className={`launching_card_1  ${isMobile ? "px-1 my-2" : "my-3"}`}>
//               <div
//                 className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample1'] ? 'expanded' : ''}`}
//                 data-bs-toggle="collapse"
//                 href="#multiCollapseExample1"
//                 role="button"
//                 aria-expanded={isExpanded ? "true" : "false"}
//                 onClick={() => { handleCollapse("multiCollapseExample1") }}
//                 aria-controls="multiCollapseExample1"
//               >
//                 <Image loader={myLoader} className={`object-fit-contain launching_img`} src={OnDemandGroupRides} alt="OnDemandGroupRides" />
//                 <p className="launchingmain_title">Group Rides</p>
//                 <p className="text-white fw-600 launchingsub_title">
//                   {" "}
//                   Gather Your Mates, We Drive
//                 </p>
//                 <div className="row">
//                   <div className="px-0 col ">
//                     <div
//                       className="bg-transparent collapse multi-collapse"
//                       id="multiCollapseExample1"
//                     >
//                       <div className="px-0 py-0 bg-transparent border-0 card card-body">
//                         <p className="px-0 launching_description ">
//                           Perth outings, from the city buzz to wine tours, we{`'`}ve
//                           got the perfect ride. Grab your mates, pick your spot,
//                           and we{`'`}ll handle the journey.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Image loader={myLoader} className="h-auto object-fit-contain arrow_width" src={ArrowDownYellow} alt="ArrowDownYellow" />
//               </div>
//             </div>
//             <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
//               <div
//                 className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample2'] ? 'expanded' : ''}`}
//                 data-bs-toggle="collapse"
//                 href="#multiCollapseExample2"
//                 role="button"
//                 aria-expanded={isExpanded ? "true" : "false"}
//                 onClick={() => { handleCollapse("multiCollapseExample2") }}
//                 aria-controls="multiCollapseExample2"
//               >
//                 <Image loader={myLoader} className={`object-fit-contain launching_img`} src={OnDemandLogistics} alt="OnDemandLogistics" />
//                 <p className="launchingmain_title">Delivery</p>
//                 <p className="text-white fw-600 launchingsub_title">No Fuss Deliveries</p>
//                 <div className="row">
//                   <div className="px-0 col ">
//                     <div
//                       className="bg-transparent collapse multi-collapse"
//                       id="multiCollapseExample2"
//                     >
//                       <div className="px-0 py-0 bg-transparent border-0 card card-body">
//                         <p className="px-0 launching_description ">
//                           Whether it{`'`}s a package from Perth to Padbury or a big
//                           move from Midland to Mandurah, we{`'`}re on it. Instant
//                           quotes, rapid deliveries, and hands-on-deck to help
//                           you out.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Image loader={myLoader} className="h-auto object-fit-contain arrow_width" src={ArrowDownYellow} alt="ArrowDownYellow" />
//               </div>
//             </div>
//             <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
//               <div
//                 className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample3'] ? 'expanded' : ''}`}
//                 data-bs-toggle="collapse"
//                 href="#multiCollapseExample3"
//                 role="button"
//                 aria-expanded={isExpanded ? "true" : "false"}
//                 onClick={() => { handleCollapse("multiCollapseExample3") }}
//                 aria-controls="multiCollapseExample3"
//               >
//                 <Image loader={myLoader} className={`object-fit-contain launching_img`} src={BusinessLogistics} alt="BusinessLogistics" />
//                 <p className="launchingmain_title">Business </p>
//                 <p className="text-white fw-600 launchingsub_title">
//                   Ride the Wave, Perth Businesses
//                 </p>
//                 <div className="row">
//                   <div className="px-0 col ">
//                     <div
//                       className="bg-transparent collapse multi-collapse"
//                       id="multiCollapseExample3"
//                     >
//                       <div className="px-0 py-0 bg-transparent border-0 card card-body">
//                         <p className="px-0 launching_description ">
//                           The daily grind of hyperlocal runs and equipment
//                           shipments just got simpler. OZ Ove is like having a
//                           logistics team at your fingertips.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Image loader={myLoader} className="h-auto object-fit-contain arrow_width" src={ArrowDownYellow} alt="ArrowDownYellow" />
//               </div>
//             </div>
//             <div className={`launching_card_2 ${isMobile ? "px-1 my-2" : "my-3"}`}>
//               <div
//                 className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample4'] ? 'expanded' : ''}`}
//                 data-bs-toggle="collapse"
//                 href="#multiCollapseExample4"
//                 role="button"
//                 aria-expanded={isExpanded ? "true" : "false"}
//                 onClick={() => { handleCollapse("multiCollapseExample4") }}
//                 aria-controls="multiCollapseExample4"
//               >
//                 <Image loader={myLoader} className={`object-fit-contain launching_img_4`} src={FleetOwnersWheel} alt="FleetOwnersWheel" />
//                 <p className="launchingmain_title">Fleet Owners</p>
//                 <p className="text-white fw-600 launchingsub_title">Take the Wheel</p>
//                 <div className="row">
//                   <div className="px-0 col ">
//                     <div
//                       className="bg-transparent collapse multi-collapse"
//                       id="multiCollapseExample4"
//                     >
//                       <div className="px-0 py-0 bg-transparent border-0 card card-body">
//                         <p className="px-0 launching_description ">
//                           Manage, train, track. Unearth your fleet{`'`}s full
//                           potential. Enhance service, boost visibility, and
//                           maximize idle time. A tool for the keen-eyed captain
//                           steering a ship, or in this case, a fleet.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Image loader={myLoader} className="h-auto object-fit-contain arrow_width1" src={ArrowDownYellow} alt="ArrowDownYellow" />
//               </div>
//             </div>
//             <div className={`launching_card_3 ${isMobile ? "px-1 mt-2" : "mt-3"}`}>
//               <div
//                 className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample5'] ? 'expanded' : ''}`}
//                 data-bs-toggle="collapse"
//                 href="#multiCollapseExample5"
//                 role="button"
//                 aria-expanded={isExpanded ? "true" : "false"}
//                 onClick={() => { handleCollapse("multiCollapseExample5") }}
//                 aria-controls="multiCollapseExample5"
//               >
//                 <Image loader={myLoader} className={`object-fit-contain launching_img_5`} src={ShoutOutDrivers} alt="ShoutOutDrivers" />
//                 <p className="launchingmain_title">Driver Partner</p>
//                 <p className="text-white fw-600 launchingsub_title">
//                   Drive, Earn, Repeat
//                 </p>
//                 <div className="row">
//                   <div className="px-0 col ">
//                     <div
//                       className="bg-transparent collapse multi-collapse"
//                       id="multiCollapseExample5"
//                     >
//                       <div className="px-0 py-0 bg-transparent border-0 card card-body">
//                         <p className="px-0 launching_description ">
//                           Perth{`'`}s open roads await. Join our crew, get more rides, and enjoy a wallet that{`'`}s always on the up!
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Image loader={myLoader} className="h-auto object-fit-contain arrow_width2" src={ArrowDownYellow} alt="ArrowDownYellow" />
//               </div>
//             </div>
//           </div>
//           <div className="py-2 d-flex justify-content-evenly d-block d-lg-none">
//             <div className="px-0 mx-0 d-flex justify-content-between row w-100">
//               <div className="px-1 rounded mob-section-2-img future-mini d-flex justify-content-center align-items-center">
//                 <div className="text-center d-flex flex-column align-items-center">
//                   <span className="text-uppercase fw-bolder fs-12 text-yellow">Oz Ove</span>
//                   <span className="text-white text-uppercase fw-600 fs-12">The Future of Transportation</span>
//                 </div>
//               </div>
//               <div className="px-1 rounded mob-section-2-img lead-mini d-flex justify-content-center align-items-center">
//                 <div className="text-center d-flex flex-column align-items-center">
//                   <span className="text-white text-capitalize" style={{ fontSize: '10px' }}>Lead the pack and ride</span>
//                   <span className="text-uppercase fw-bolder fs-12 text-yellow">Oz Ove</span>
//                   <span className="text-white text-capitalize" style={{ fontSize: '10px' }}>Book for your group today</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Launching;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Versatility from "../../public/svg/ride_with_us/Ride_Business/versatility.svg";
import ArrowDownYellow from "../../public/Images/pilot_launch/arrowDown.png";
import OnDemandGroupRides from "../../public/Images/pilot_launch/On-DemandGroupRides.png";
import OnDemandLogistics from "../../public/Images/pilot_launch/On-DemandLogistics.png";
import BusinessLogistics from "../../public/Images/pilot_launch/BusinessLogistics.png";
import FleetOwnersWheel from "../../public/Images/pilot_launch/FleetOwnersTaketheWheel.png";
import ShoutOutDrivers from "../../public/Images/pilot_launch/ShoutOuttoPerthsDrivers.png";

function Launching() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState({
    multiCollapseExample1: false,
    multiCollapseExample2: false,
    multiCollapseExample3: false,
    multiCollapseExample4: false,
    multiCollapseExample5: false,
  });

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== undefined) {
        return window.innerWidth <= 991;
      }
      return false;
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]); // Include isMobile in the dependency array

  const handleCollapse = (id) => {
    setIsExpanded((value) => ({
      ...value,
      [id]: !value[id],
    }));
  };

  const myLoader = ({ src }) => `${src}`;

  return (
    <>
      <div className={`launching_section ${isMobile ? "pt-3" : "pt-5 pb-4"}`}>
        {/* Rest of your component */}
      </div>
    </>
  );
}

export default Launching;
