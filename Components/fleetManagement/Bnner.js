// "use client";
// import React, { useEffect, useState } from "react";
// import BannerForm from "../../Components/delivery/individual/bannerForm";
// import Forms from "../../Components/drive-with-us/forms";
// import Link from "next/link";

// function Bnner() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);
//   return (
//     <>
//       <div className="py-4 fleet_managemet d-flex align-items-center">
//         <div className="container h-100">
//           <div className={`h-100 ${isMobile ? "" : "row w-100 mx-0 align-items-center"}`}>
//             <div
//               className={`d-flex py-4 py-md-5 align-items-center ${isMobile ? "" : "col-md-8"
//                 }`}
//             >
//               <div className="d-flex justify-content-center flex-column">
//                 <h1 className="fw-700 text-capitalize">
//                   MAXIMISE YOUR <br />
//                   FLEET'S POTENTIAL
//                 </h1>
//                 {isMobile ? (
//                   <p className="my-3 build_text">
//                     Built for Fleet owners, Oz Ove Fleet Management
//                     <br />
//                     empowers you to manage drivers and vehicles
//                     <br />
//                     more efficiently.
//                   </p>
//                 ) : (
//                   <p className="my-3 text-capitalize build_text">
//                     Built for Fleet owners, Oz Ove Fleet Management empowers you
//                     <br />
//                     to manage drivers and vehicles more efficiently.
//                   </p>
//                 )}
//                 {/* <div>
//                   <button className="px-3 py-2 text-white rounded bg-socialiconyellow fw-600 fs-4">
//                     <Link href={`/launch`} target="_blank" className="text-white">
//                       Deliver now
//                     </Link>
//                   </button>
//                 </div>
//                 <p className="my-3 get_text">
//                   Get started right away and
//                   <br />
//                   schedule a delivery
//                 </p> */}
//               </div>
//             </div>
//             {isMobile ? (
//               <></>
//             ) : (
//               <div className="px-0 mx-0 col-md-4 right_side">
//                 <Forms />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {isMobile ? (
//         <div className="container py-3 delivery_no_banner">
//           <Forms />
//         </div>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }

// export default Bnner;

"use client";
import React, { useEffect, useState } from "react";
import BannerForm from "../../Components/delivery/individual/bannerForm";
import Forms from "../../Components/drive-with-us/forms";
import Link from "next/link";

function Banner() {
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

  return (
    <>
      <div className="py-4 fleet_management d-flex align-items-center">
        <div className="container h-100">
          <div
            className={`h-100 ${
              isMobile ? "" : "row w-100 mx-0 align-items-center"
            }`}
          >
            <div
              className={`d-flex py-4 py-md-5 align-items-center ${
                isMobile ? "" : "col-md-8"
              }`}
            >
              <div className="d-flex justify-content-center flex-column">
                <h1 className="fw-700 text-capitalize">
                  MAXIMISE YOUR <br />
                  FLEET&apos;S POTENTIAL
                </h1>
                <p
                  className={`my-3 ${
                    isMobile ? "build_text" : "text-capitalize build_text"
                  }`}
                >
                  Built for Fleet owners, Oz Ove Fleet Management
                  <br />
                  {isMobile ? (
                    <>
                      empowers you to manage drivers and vehicles
                      <br />
                      more efficiently.
                    </>
                  ) : (
                    "empowers you to manage drivers and vehicles more efficiently."
                  )}
                </p>
              </div>
            </div>
            {!isMobile && (
              <div className="px-0 mx-0 col-md-4 right_side">
                <Forms />
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="container py-3 delivery_no_banner">
          <Forms />
        </div>
      )}
    </>
  );
}

export default Banner;
