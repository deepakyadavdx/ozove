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
//       <div className="individualbanner_section d-flex align-items-center">
//         <div className="container">
//           <div className="first_div px-lg-5">
//             <div className="px-3 second_div">
//               <h1 className="mb-3 ride_individual_title">
//                 Travel united,
//                 <br />
//                 with tailored ease
//               </h1>
//               <p className="my-3 ride_individual_subtitle">
//                 Customized group rides for
//                 <br />
//                 every occasion.
//               </p>
//               <button>
//                 <Link href={`/launch`} target="_blank" className="text-dark">
//                   Book now
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth <= 991);
    };

    handleResize(); // Initial check on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="individualbanner_section d-flex align-items-center">
        <div className="container">
          <div className="first_div px-lg-5">
            <div className="px-3 second_div">
              <h1 className="mb-3 ride_individual_title">
                Travel united,
                <br />
                with tailored ease
              </h1>
              <p className="my-3 ride_individual_subtitle">
                Customized group rides for
                <br />
                every occasion.
              </p>
              <button>
                <Link href={`/launch`} target="_blank" className="text-dark">
                  Book now
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
