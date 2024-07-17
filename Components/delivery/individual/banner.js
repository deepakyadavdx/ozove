// "use client";
// import React, { useEffect, useState } from "react";
// import BannerForm from "../../../Components/delivery/individual/bannerForm"
// import Link from "next/link";

// function DeliveryIndividualBanner() {
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
//             <div className="delivery_individual_section">
//                 <div className="delivery_individual_banner d-flex align-items-center">
//                     <div className="container h-100">
//                         <div className={`h-100 ${isMobile ? "d-flex align-items-center" : "row w-100 mx-0"}`}>
//                             <div className={`d-flex py-4 py-lg-5 align-items-center ${isMobile ? "" : "col-md-7"}`}>
//                                 <div className={`d-flex justify-content-center flex-column ${isMobile ? "" : "w-75"}`}>
//                                     <h1 className="order-1 fw-600 text-capitalize banner_title">
//                                         On-Demand
//                                         <br />
//                                         Delivery
//                                     </h1>
//                                     <p className="order-2 my-3 banner_desc_1 d-none d-lg-block">
//                                         Unleash accelerated growth with smart logistics
//                                     </p>
//                                     <div className="order-4 order-lg-3">
//                                         <button className="px-2 py-1 rounded bg-socialiconyellow text-dark fw-600 deliver_btn">
//                                             <Link href={`/launch`} target="_blank" className="text-dark">
//                                                 Deliver now
//                                             </Link>
//                                         </button>
//                                     </div>
//                                     <p className="order-3 my-3 banner_desc_2 order-lg-4">
//                                         Get started right away and
//                                         <br />
//                                         schedule a delivery
//                                     </p>
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

// export default DeliveryIndividualBanner;

"use client";
import React, { useEffect, useState } from "react";
import BannerForm from "../../../Components/delivery/individual/bannerForm";
import Link from "next/link";

function DeliveryIndividualBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Call once to set initial value

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, so this effect runs only once on mount

  return (
    <>
      <div className="delivery_individual_section">
        <div className="delivery_individual_banner d-flex align-items-center">
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
                <div
                  className={`d-flex justify-content-center flex-column ${
                    isMobile ? "" : "w-75"
                  }`}
                >
                  <h1 className="order-1 fw-600 text-capitalize banner_title">
                    On-Demand
                    <br />
                    Delivery
                  </h1>
                  <p className="order-2 my-3 banner_desc_1 d-none d-lg-block">
                    Unleash accelerated growth with smart logistics
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
                  <p className="order-3 my-3 banner_desc_2 order-lg-4">
                    Get started right away and
                    <br />
                    schedule a delivery
                  </p>
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

export default DeliveryIndividualBanner;
