// "use client";
// import React, { useEffect, useState } from "react";
// import BannerForm from "../../../Components/delivery/business/bannerForm"
// import Link from "next/link";

// function DeliveryBanner() {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         if (typeof window !== undefined) {
//             if (window.innerWidth <= 991) {
//                 setIsMobile(!isMobile);
//             }
//         }
//     }, []);
//     return (
//         <>
//             <div className="delivery_business_section">
//                 <div className="delivery_business_banner d-flex align-items-center">
//                     <div className="container h-100">
//                         <div className={`h-100 ${isMobile ? "d-flex align-items-center" : "row w-100 mx-0"}`}>
//                             <div className={`d-flex py-4 py-lg-5 align-items-center ${isMobile ? "" : "col-md-7"}`}>
//                                 <div className="d-flex justify-content-center flex-column">
//                                     <h1 className="order-1 fw-600 text-capitalize banner_title">
//                                         Hyper local Last-mile delivery
//                                     </h1>
//                                     <p className="order-2 my-3 banner_desc_1">
//                                         Unleash Accelerated Growth With Smart Logistics
//                                     </p>
//                                     <div className="order-4 order-lg-3">
//                                         <button className="px-2 py-1 rounded bg-socialiconyellow text-dark fw-600 deliver_btn">
//                                             <Link href={`/launch`} target="_blank" className="text-dark">
//                                                 Deliver now
//                                             </Link>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             {isMobile ? (
//                                 <></>
//                             ) : (
//                                 <div className="px-0 mx-0 col-md-5 right_side">
//                                     <BannerForm />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 {isMobile ? (
//                     <div className="container delivery_no_banner">
//                         <BannerForm />
//                     </div>
//                 ) : (
//                     <></>
//                 )}
//             </div>
//         </>
//     );
// }

// export default DeliveryBanner;

"use client";
import React, { useEffect, useState } from "react";
import BannerForm from "../../../Components/delivery/business/bannerForm";
import Link from "next/link";

function DeliveryBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Initial call to set initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependency array is empty since this effect runs once on mount

  return (
    <>
      <div className="delivery_business_section">
        <div className="delivery_business_banner d-flex align-items-center">
          <div className="container h-100">
            <div
              className={`h-100 ${
                isMobile ? "d-flex align-items-center" : "row w-100 mx-0"
              }`}
            >
              <div
                className={`d-flex py-4 py-lg-5 align-items-center ${
                  isMobile ? "" : "col-md-7"
                }`}
              >
                <div className="d-flex justify-content-center flex-column">
                  <h1 className="order-1 fw-600 text-capitalize banner_title">
                    Hyper local Last-mile delivery
                  </h1>
                  <p className="order-2 my-3 banner_desc_1">
                    Unleash Accelerated Growth With Smart Logistics
                  </p>
                  <div className="order-4 order-lg-3">
                    <button className="px-2 py-1 rounded bg-socialiconyellow text-dark fw-600 deliver_btn">
                      <Link
                        href={`/launch`}
                        target="_blank"
                        className="text-dark"
                      >
                        Deliver now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {isMobile ? (
                <></>
              ) : (
                <div className="px-0 mx-0 col-md-5 right_side">
                  <BannerForm />
                </div>
              )}
            </div>
          </div>
        </div>
        {isMobile ? (
          <div className="container delivery_no_banner">
            <BannerForm />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default DeliveryBanner;
