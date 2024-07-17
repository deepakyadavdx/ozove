// "use client";
// import React, { useEffect, useState } from "react";
// import Orig from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig.svg";
// import Orig1 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig1.svg";
// import Orig2 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig2.svg";
// import Orig3 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig3.svg";
// import Orig4 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig4.svg";
// import Link from "next/link";
// import Forms from "../../Components/ride-with-us/forms";

// function WhyChooseFormSection() {
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
//       <div className="container">
//         <div className="row w-100 align-items-center justify-content-between">
//           <div className="px-0 col-lg-5 col-md-12">
//             <div className="main_banner_form_section">
//               <div className="row w-100 align-items-center d-flex justify-content-center">
//                 <div className="px-0 col-lg-9 col-md-12">
//                   <div className="inner_banner_form">
//                     <div className="sub_inner_banner_form card">
//                       <div className="p-0 card-body">
//                         {!isTablet ? (
//                           <nav>
//                             <div
//                               className="nav nav-tabs"
//                               id="nav-tab"
//                               role="tablist"
//                             >
//                               <Link className="d-flex justify-content-center dropdown-item w-50" href={`/ride-with-us/individual`}>
//                                 <button
//                                   className="py-4 text-center bg-white nav-link form_title w-100 fw-700 nav-btn-ride"
//                                   id="nav-delivery-tab"
//                                   data-bs-toggle="tab"
//                                   data-bs-target="#nav-delivery"
//                                   type="button"
//                                   role="tab"
//                                   aria-controls="nav-delivery"
//                                   aria-selected="true"
//                                   style={{
//                                     color: "#333333",
//                                     borderTopLeftRadius: "20px !important"
//                                   }}
//                                 >
//                                   Individual
//                                 </button>
//                               </Link>
//                               <button
//                                 className="py-4 text-center nav-link w-50 form_title fw-bold active bg-socialiconyellow"
//                                 id="nav-individual-tab"
//                                 data-bs-toggle="tab"
//                                 data-bs-target="#nav-individual"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="nav-individual"
//                                 aria-selected="false"
//                                 style={{
//                                   color: "#333333",
//                                   borderRadius: "0px 20px 0px 0px !important",
//                                 }}
//                               >
//                                 Business
//                               </button>
//                             </div>
//                           </nav>
//                         ) : (
//                           <></>
//                         )}

//                         <Forms />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={`col-lg-7 col-md-12 d-flex justify-content-center ${isTablet ? "card p-3" : ""}`} style={{ backgroundColor: isTablet ? "#f7f7f7" : "" }}>
//             <div className="mx-0 row" style={{ width: isTablet ? "100%" : "90%" }}>
//               <div className="col-12">
//                 <p className="whychoosemain_title1">why choose us</p>
//                 {!isTablet ? (
//                   <p className="my-2 inner_title">
//                     Oz Ove Business Account <br />
//                     Transform Your Corporate Travel
//                   </p>
//                 ) : (
//                   <p className="my-2 inner_title">
//                     Oz Ove Business Account Transform Your Corporate <br />
//                     Travel
//                   </p>
//                 )}
//                 {!isTablet ? (
//                   <div className="row">
//                     <div className="my-2 col-4 sub_section">
//                       <Orig viewBox="0 0 100 60" />
//                       <p className="title">One-Stop Billing</p>
//                       <p className="mt-0 desc">
//                         Streamline expenses with Oz Ove&apos;s Business account for
//                         easy management.
//                       </p>
//                     </div>
//                     <div className="my-2 col-4 sub_section">
//                       <Orig1 viewBox="0 0 100 60" />
//                       <p className="title">Smart Analytics</p>
//                       <p className="mt-0 desc">
//                         Optimize costs using detailed data reports on your
//                         company’s travel habits.
//                       </p>
//                     </div>
//                     <div className="my-2 col-4 sub_section">
//                       <Orig2 viewBox="0 0 100 60" />
//                       <p className="title">Priority Support</p>
//                       <p className="mt-0 desc">
//                         Enjoy priority assistance from our dedicated customer
//                         service team.
//                       </p>
//                     </div>
//                     <div className="my-2 col-4 sub_section">
//                       <Orig3 viewBox="0 0 100 60" />
//                       <p className="title">Tailored Solutions</p>
//                       <p className="mt-0 desc">
//                         Customize our offerings to align with your business’s
//                         unique needs.
//                       </p>
//                     </div>
//                     <div className="my-2 col-4 sub_section">
//                       <Orig viewBox="0 0 100 60" />
//                       <p className="title">Exclusive Savings</p>
//                       <p className="mt-0 desc">
//                         Benefit from special discounts and promotions to reduce
//                         expenses
//                       </p>
//                     </div>
//                     <div className="my-2 col-4 sub_section">
//                       <Orig4 viewBox="0 0 100 60" />
//                       <p className="title">Route optimization</p>
//                       <p className="mt-0 desc">
//                         Save time and fuel with the most efficient routes.
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="row w-100 flex-nowrap whychoose_inner_section">
//                     <div className={`col-10 sub_section ${isTablet ? "card" : ""}`} style={{ marginRight: "10px", marginBottom: "10px" }}>
//                       <Orig viewBox={isMobile ? "0 0 100 80" : ""} />
//                       <p className="title">One-Stop Billing</p>
//                       <p className="mt-1 mb-2 desc">
//                         Streamline expenses with Oz Ove’s Business account for
//                         easy management.
//                       </p>
//                     </div>
//                     <div className={`col-10 sub_section ${isTablet ? "card" : ""}`} style={{ marginRight: "10px", marginBottom: "10px" }}>
//                       <Orig1 viewBox={isMobile ? "0 0 100 80" : ""} />
//                       <p className="title">Smart Analytics</p>
//                       <p className="mt-1 mb-2 desc">
//                         Optimize costs using detailed data reports on your
//                         company’s travel habits.
//                       </p>
//                     </div>
//                     <div className={`col-10 sub_section ${isTablet ? "card" : ""}`} style={{ marginRight: "10px", marginBottom: "10px" }}>
//                       <Orig2 viewBox={isMobile ? "0 0 100 80" : ""} />
//                       <p className="title">Priority Support</p>
//                       <p className="mt-1 mb-2 desc">
//                         Enjoy priority assistance from our dedicated customer
//                         service team.
//                       </p>
//                     </div>
//                     <div className={`col-10 sub_section ${isTablet ? "card" : ""}`} style={{ marginRight: "10px", marginBottom: "10px" }}>
//                       <Orig3 viewBox={isMobile ? "0 0 100 80" : ""} />
//                       <p className="title">Tailored Solutions</p>
//                       <p className="mt-1 mb-2 desc">
//                         Customize our offerings to align with your business’s
//                         unique needs.
//                       </p>
//                     </div>
//                     <div className={`col-10 sub_section ${isTablet ? "card" : ""}`} style={{ marginRight: "10px", marginBottom: "10px" }}>
//                       <Orig viewBox={isMobile ? "0 0 100 80" : ""} />
//                       <p className="title">Exclusive Savings</p>
//                       <p className="mt-1 mb-2 desc">
//                         Benefit from special discounts and promotions to reduce
//                         expenses
//                       </p>
//                     </div>
//                     <div className={`col-10 sub_section ${isTablet ? "card" : ""}`} style={{ marginRight: "10px", marginBottom: "10px" }}>
//                       <Orig4 viewBox={isMobile ? "0 0 100 80" : ""} />
//                       <p className="title">Route optimization</p>
//                       <p className="mt-1 mb-2 desc">
//                         Save time and fuel with the most efficient routes.
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default WhyChooseFormSection;

"use client";
import React, { useEffect, useState } from "react";
import Orig from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig.svg";
import Orig1 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig1.svg";
import Orig2 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig2.svg";
import Orig3 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig3.svg";
import Orig4 from "../../public/svg/ride_with_us/Ride_Business/whychoose/orig4.svg";
import Link from "next/link";
import Forms from "../../Components/ride-with-us/forms";

function WhyChooseFormSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 767);
        setIsTablet(window.innerWidth <= 991);
      }
    };

    // Initial check when component mounts
    checkWindowWidth();

    // Event listener to update isMobile and isTablet when window is resized
    window.addEventListener("resize", checkWindowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <>
      <div className="container">
        <div className="row w-100 align-items-center justify-content-between">
          <div className="px-0 col-lg-5 col-md-12">
            <div className="main_banner_form_section">
              <div className="row w-100 align-items-center d-flex justify-content-center">
                <div className="px-0 col-lg-9 col-md-12">
                  <div className="inner_banner_form">
                    <div className="sub_inner_banner_form card">
                      <div className="p-0 card-body">
                        {!isTablet ? (
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <Link
                                className="d-flex justify-content-center dropdown-item w-50"
                                href={`/ride-with-us/individual`}
                              >
                                <button
                                  className="py-4 text-center bg-white nav-link form_title w-100 fw-700 nav-btn-ride"
                                  id="nav-delivery-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-delivery"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-delivery"
                                  aria-selected="true"
                                  style={{
                                    color: "#333333",
                                    borderTopLeftRadius: "20px !important",
                                  }}
                                >
                                  Individual
                                </button>
                              </Link>
                              <button
                                className="py-4 text-center nav-link w-50 form_title fw-bold active bg-socialiconyellow"
                                id="nav-individual-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-individual"
                                type="button"
                                role="tab"
                                aria-controls="nav-individual"
                                aria-selected="false"
                                style={{
                                  color: "#333333",
                                  borderRadius: "0px 20px 0px 0px !important",
                                }}
                              >
                                Business
                              </button>
                            </div>
                          </nav>
                        ) : (
                          <></>
                        )}

                        <Forms />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-7 col-md-12 d-flex justify-content-center ${
              isTablet ? "card p-3" : ""
            }`}
            style={{ backgroundColor: isTablet ? "#f7f7f7" : "" }}
          >
            <div
              className="mx-0 row"
              style={{ width: isTablet ? "100%" : "90%" }}
            >
              <div className="col-12">
                <p className="whychoosemain_title1">why choose us</p>
                {!isTablet ? (
                  <p className="my-2 inner_title">
                    Oz Ove Business Account <br />
                    Transform Your Corporate Travel
                  </p>
                ) : (
                  <p className="my-2 inner_title">
                    Oz Ove Business Account Transform Your Corporate <br />
                    Travel
                  </p>
                )}
                {!isTablet ? (
                  <div className="row">
                    <div className="my-2 col-4 sub_section">
                      <Orig viewBox="0 0 100 60" />
                      <p className="title">One-Stop Billing</p>
                      <p className="mt-0 desc">
                        Streamline expenses with Oz Ove&apos;s Business account
                        for easy management.
                      </p>
                    </div>
                    <div className="my-2 col-4 sub_section">
                      <Orig1 viewBox="0 0 100 60" />
                      <p className="title">Smart Analytics</p>
                      <p className="mt-0 desc">
                        Optimize costs using detailed data reports on your
                        company’s travel habits.
                      </p>
                    </div>
                    <div className="my-2 col-4 sub_section">
                      <Orig2 viewBox="0 0 100 60" />
                      <p className="title">Priority Support</p>
                      <p className="mt-0 desc">
                        Enjoy priority assistance from our dedicated customer
                        service team.
                      </p>
                    </div>
                    <div className="my-2 col-4 sub_section">
                      <Orig3 viewBox="0 0 100 60" />
                      <p className="title">Tailored Solutions</p>
                      <p className="mt-0 desc">
                        Customize our offerings to align with your business’s
                        unique needs.
                      </p>
                    </div>
                    <div className="my-2 col-4 sub_section">
                      <Orig viewBox="0 0 100 60" />
                      <p className="title">Exclusive Savings</p>
                      <p className="mt-0 desc">
                        Benefit from special discounts and promotions to reduce
                        expenses
                      </p>
                    </div>
                    <div className="my-2 col-4 sub_section">
                      <Orig4 viewBox="0 0 100 60" />
                      <p className="title">Route optimization</p>
                      <p className="mt-0 desc">
                        Save time and fuel with the most efficient routes.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="row w-100 flex-nowrap whychoose_inner_section">
                    <div
                      className={`col-10 sub_section ${isTablet ? "card" : ""}`}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <Orig viewBox={isMobile ? "0 0 100 80" : ""} />
                      <p className="title">One-Stop Billing</p>
                      <p className="mt-1 mb-2 desc">
                        Streamline expenses with Oz Ove’s Business account for
                        easy management.
                      </p>
                    </div>
                    <div
                      className={`col-10 sub_section ${isTablet ? "card" : ""}`}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <Orig1 viewBox={isMobile ? "0 0 100 80" : ""} />
                      <p className="title">Smart Analytics</p>
                      <p className="mt-1 mb-2 desc">
                        Optimize costs using detailed data reports on your
                        company’s travel habits.
                      </p>
                    </div>
                    <div
                      className={`col-10 sub_section ${isTablet ? "card" : ""}`}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <Orig2 viewBox={isMobile ? "0 0 100 80" : ""} />
                      <p className="title">Priority Support</p>
                      <p className="mt-1 mb-2 desc">
                        Enjoy priority assistance from our dedicated customer
                        service team.
                      </p>
                    </div>
                    <div
                      className={`col-10 sub_section ${isTablet ? "card" : ""}`}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <Orig3 viewBox={isMobile ? "0 0 100 80" : ""} />
                      <p className="title">Tailored Solutions</p>
                      <p className="mt-1 mb-2 desc">
                        Customize our offerings to align with your business’s
                        unique needs.
                      </p>
                    </div>
                    <div
                      className={`col-10 sub_section ${isTablet ? "card" : ""}`}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <Orig viewBox={isMobile ? "0 0 100 80" : ""} />
                      <p className="title">Exclusive Savings</p>
                      <p className="mt-1 mb-2 desc">
                        Benefit from special discounts and promotions to reduce
                        expenses
                      </p>
                    </div>
                    <div
                      className={`col-10 sub_section ${isTablet ? "card" : ""}`}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <Orig4 viewBox={isMobile ? "0 0 100 80" : ""} />
                      <p className="title">Route optimization</p>
                      <p className="mt-1 mb-2 desc">
                        Save time and fuel with the most efficient routes.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseFormSection;
