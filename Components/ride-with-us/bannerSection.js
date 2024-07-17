// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// function BannerSection() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 767) {
//         setIsMobile(!isMobile);
//       }
//       if (window.innerWidth <= 991) {
//         setIsTablet(!isTablet);
//       }
//     }
//   }, []);
//   return (
//     <>
//       <div className="businessbanner_section d-flex align-items-center">
//         <div className="container">
//           <div className="first_div px-lg-5">
//             <div className="px-3 second_div">
//               <h1 className="mb-3 ride_individual_title">
//                 Corporate travel, <br />
//                 simplified!
//               </h1>
//               <p className="my-3 ride_individual_subtitle">
//                 The Smart Choice for <br />
//                 Business Rides
//               </p>
//               <button>
//                 <Link href={`/launch`} target="_blank" className="text-dark">
//                   Register now
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BannerSection;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function BannerSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile((prev) => !prev); // Functional update
      }
      if (window.innerWidth <= 991) {
        setIsTablet((prev) => !prev); // Functional update
      }
    }
  }, [isMobile, isTablet]); // Add dependencies isMobile and isTablet to the array
  return (
    <>
      <div className="businessbanner_section d-flex align-items-center">
        <div className="container">
          <div className="first_div px-lg-5">
            <div className="px-3 second_div">
              <h1 className="mb-3 ride_individual_title">
                Corporate travel, <br />
                simplified!
              </h1>
              <p className="my-3 ride_individual_subtitle">
                The Smart Choice for <br />
                Business Rides
              </p>
              <button>
                <Link href={`/launch`} target="_blank" className="text-dark">
                  Register now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
