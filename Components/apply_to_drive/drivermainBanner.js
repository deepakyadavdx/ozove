// "use client";
// import React, { useEffect, useState } from "react";
// import Forms from "../../Components/drive-with-us/forms";
// import BecomeDriver from "../../Components/forms/driver";
// import Link from "next/link";

// function drivermainBanner() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 767) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);
//   return (
//     <>
//       <div className="driverbannersection">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-8">
//               <h1 className="main_own_rules_title">
//                 <span className="text-socialiconyellow">Make </span>your
//                 <br />
//                 own<span className="text-socialiconyellow"> Rules</span>
//               </h1>
//               <p className="my-3 main_own_rules_description">
//                 Drive when you want, earn what you need, and be a part
//                 <br />
//                 of the next big thing in mobility services.
//               </p>
//               <button className="px-3 py-2 launching_btn bg-socialiconyellow">
//                 <Link href={`/launch`} target="_blank" className="text-white">
//                   launching soon
//                 </Link>
//               </button>
//               {/* <p className="my-3 right_wat_text">Get started right away </p> */}
//             </div>
//             {isMobile ? (
//               <></>
//             ) : (
//               <div className="my-3 col-lg-4">
//                 <Forms />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {isMobile ? (
//         <div className="container pt-2 pb-4">
//           {/* // <div className="container main_apply_driver_form_section card">
//         //   <div className="px-0 pb-0 card-body inner_apply_driver_form"> */}
//           <Forms />
//           {/* //   </div>
//         // </div> */}
//         </div>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }

// export default drivermainBanner;

"use client";
import React, { useEffect, useState } from "react";
import Forms from "../../Components/drive-with-us/forms";
import BecomeDriver from "../../Components/forms/driver";
import Link from "next/link";

function DrivermainBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
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

  return (
    <>
      <div className="driverbannersection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="main_own_rules_title">
                <span className="text-socialiconyellow">Make </span>your
                <br />
                own<span className="text-socialiconyellow"> Rules</span>
              </h1>
              <p className="my-3 main_own_rules_description">
                Drive when you want, earn what you need, and be a part
                <br />
                of the next big thing in mobility services.
              </p>
              <button className="px-3 py-2 launching_btn bg-socialiconyellow">
                <Link href={`/launch`} target="_blank" className="text-white">
                  launching soon
                </Link>
              </button>
              {/* <p className="my-3 right_wat_text">Get started right away </p> */}
            </div>
            {isMobile ? (
              <></>
            ) : (
              <div className="my-3 col-lg-4">
                <Forms />
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className="container pt-2 pb-4">
          <Forms />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DrivermainBanner;
