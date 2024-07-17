// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import DriverImage from "../../public/Images/png/driverImage.png"
// import Link from "next/link";

// function SectionSeven() {
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
//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };
//   return (
//     <>
//       <div className="home-section-7">
//         <div className="container">
//           <div className="py-3 row pb-lg-5 sub_container">
//             <div className="px-0 col-lg-6 d-flex justify-content-center">
//               <Image loader={myLoader} className="h-auto object-fit-contain" src={DriverImage} alt="driverImage" />
//             </div>
//             <div className="col-lg-6 d-flex align-items-center justify-content-center py-lg-3">
//               <div className="px-0 join-family">
//                 <div className={`text-black fw-600 join_heading`}>Join the Oz Ove Family - Drive Your
//                   <br />
//                   Success with Us</div>
//                 <div className="my-1 rounded my-lg-3 join-text-bottom" />
//                 <div className={`text-black fw-600 my-1 join_desc`}>Embark on a rewarding journey as an Oz Ove driver, and become a part of our mission to revolutionize transportation across Australia. Take the wheel and steer your success with Oz Ove today!</div>
//                 <button className={`py-2 px-4 bg-yellow rounded-1 text-black fw-600`}>
//                   <Link href={`/drive-with-us/apply-to-drive`}>
//                     Join Now
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionSeven;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DriverImage from "../../public/Images/png/driverImage.png";
import Link from "next/link";

function SectionSeven() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth <= 991);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run once on mount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="home-section-7">
        <div className="container">
          <div className="py-3 row pb-lg-5 sub_container">
            <div className="px-0 col-lg-6 d-flex justify-content-center">
              <Image
                loader={myLoader}
                className="h-auto object-fit-contain"
                src={DriverImage}
                alt="driverImage"
              />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center py-lg-3">
              <div className="px-0 join-family">
                <div className={`text-black fw-600 join_heading`}>
                  Join the Oz Ove Family - Drive Your
                  <br />
                  Success with Us
                </div>
                <div className="my-1 rounded my-lg-3 join-text-bottom" />
                <div className={`text-black fw-600 my-1 join_desc`}>
                  Embark on a rewarding journey as an Oz Ove driver, and become
                  a part of our mission to revolutionize transportation across
                  Australia. Take the wheel and steer your success with Oz Ove
                  today!
                </div>
                <button
                  className={`py-2 px-4 bg-yellow rounded-1 text-black fw-600`}
                >
                  <Link href={`/drive-with-us/apply-to-drive`} target="_blank">
                    Join Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionSeven;
