// "use client";
// import React, { useState, useEffect } from "react";
// import BlackArrow from "../../public/Images/pilot_launch/blackArrow.png"
// import PilotForm from "../../Components/forms/pilot";
// import PilotLogo from "../../public/svg/pilotlogo.svg";
// import Journey from "../../public/Images/pilot_launch/journey.png"
// import Image from "next/image";
// import PilotFormI from "../../public/Images/pilot_launch/bannerFrame.png";

// function JourneySection() {
//   const [ispilotForm, setIspilotForm] = useState(false);
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

//   const toggleDropdown = () => {
//     setIspilotForm(!isOpen);
//   };

//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };

//   return (
//     <>
//       <div className={`${isTablet ? "" : "bg-socialiconyellow"}`}>
//         <div className="outer_journey_section">
//           <div className="main_journey_section">
//             <div className="container section-spacer">
//               <div className="row">
//                 <div className="col-7">
//                   <p className="mb-3 journey_title">
//                     Your Ticket to Tomorrow&apos;s Transport Today! Let&apos;s redefine
//                     commuting
//                   </p>
//                   <div className="mx-0 row w-100">
//                     <div className="px-0 col-5">
//                       <p className="dropdown_title_name">
//                         Start Your Journey As
//                       </p>
//                     </div>
//                     <div className="px-0 col-6">
//                       <div className={`${ispilotForm ? "d-none" : "d-block"}`}>
//                         <div
//                           className="driver_tab d-flex align-items-center justify-content-center"
//                           data-bs-toggle="collapse"
//                           href="#pilotformtransition"
//                           role="button"
//                           aria-expanded="false"
//                           // aria-expanded={!ispilotForm}
//                           aria-controls="pilotformtransition"
//                         >
//                           <p className="py-1 abc text-nowrap">Driver Partner</p>
//                           <Image loader={myLoader} className="h-auto object-fit-contain ms-3" style={{ width: "8%" }} src={BlackArrow} alt="BlackArrow" />
//                         </div>
//                         <div
//                           className="collapse driver_tab"
//                           id="pilotformtransition"
//                         >
//                           <p
//                             className="py-2 abc"
//                             data-bs-toggle="collapse"
//                             href="#pilotformtransition"
//                             role="button"
//                             aria-expanded="false"
//                             // aria-expanded={!ispilotForm}
//                             aria-controls="pilotformtransition"
//                             onClick={() => {
//                               setIspilotForm(true);
//                             }}
//                           >
//                             Individual
//                           </p>
//                           <p
//                             className="py-2 abc"
//                             data-bs-toggle="collapse"
//                             href="#pilotformtransition"
//                             role="button"
//                             aria-expanded="false"
//                             // aria-expanded={!ispilotForm}
//                             aria-controls="pilotformtransition"
//                             onClick={() => {
//                               setIspilotForm(true);
//                             }}
//                           >
//                             Business
//                           </p>
//                           <p
//                             className="py-2 abc"
//                             data-bs-toggle="collapse"
//                             href="#pilotformtransition"
//                             role="button"
//                             aria-expanded="false"
//                             // aria-expanded={!ispilotForm}
//                             aria-controls="pilotformtransition"
//                             onClick={() => {
//                               setIspilotForm(true);
//                             }}
//                           >
//                             Fleet Management
//                           </p>
//                         </div>
//                       </div>
//                       <div
//                         className={`${!ispilotForm
//                           ? "d-none"
//                           : "d-block pilotformtransition pilotformtransition collapse"
//                           }`}
//                       // id="pilotformtransition"
//                       >
//                         <div
//                           className="pilotformSection"
//                         // id="pilotformtransition"
//                         >
//                           <div
//                             className="my-3 cursor-pointer d-flex justify-content-center"
//                             onClick={() => {
//                               setIspilotForm(false); // Close the form
//                             }}
//                           >
//                             <PilotLogo
//                               style={{
//                                 height: "40%",
//                                 width: "50%",
//                                 textAlign: "center",
//                               }}
//                             />
//                           </div>
//                           <div className="px-3">
//                             <p className="text-black fw-700">Register</p>
//                             <p className="border-yellow w-50"></p>
//                           </div>
//                           <PilotForm />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="col-5">
//                   <Image src={Journey} />
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container d-block d-lg-none">
//           <div className="border-0 mobilejourneysection bg-socialiconyellow card">
//             <div className="main_journey_section">
//               <div className="mx-0 row justify-content-center w-100">
//                 <div className="px-0 col-12 d-flex justify-content-center">
//                   <Image loader={myLoader} className="w-100 journey_img" src={Journey} alt="pilotform" />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <p className="text-white journey_title text-capitalize">
//                     Your Ticket to Tomorrow&apos;s Transport Today! Let&apos;s redefine
//                     commuting
//                   </p>
//                   <div className="mx-0 row">
//                     <div className="px-0 col-12">
//                       <p className="text-white dropdown_title_name fs-30 fw-600">Start Your Journey As</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-3 row">
//                 <div className="col-12">
//                   <div className="bg-white border-0 pilotformSection card">
//                     <div>
//                       <p className="px-3 text-black text-capitalize fs-30 fw-600">sign up</p>
//                     </div>
//                     <div className="px-3">
//                       <p className="text-black fw-600">Register As</p>
//                     </div>
//                     <PilotForm />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default JourneySection;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BlackArrow from "../../public/Images/pilot_launch/blackArrow.png";
import PilotForm from "../../Components/forms/pilot";
import PilotLogo from "../../public/svg/pilotlogo.svg";
import Journey from "../../public/Images/pilot_launch/journey.png";
import PilotFormI from "../../public/Images/pilot_launch/bannerFrame.png";

function JourneySection() {
  const [ispilotForm, setIspilotForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setIsMobile(window.innerWidth <= 767);
        setIsTablet(window.innerWidth <= 991);
      }
    };

    handleResize(); // Call once on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run once on mount

  const toggleDropdown = () => {
    setIspilotForm(!ispilotForm);
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className={`${isTablet ? "" : "bg-socialiconyellow"}`}>
      <div className="outer_journey_section">
        <div className="main_journey_section">
          <div className="container section-spacer">
            <div className="row">
              <div className="col-7">
                <p className="mb-3 journey_title">
                  Your Ticket to Tomorrow&apos;s Transport Today! Let&apos;s
                  redefine commuting
                </p>
                <div className="mx-0 row w-100">
                  <div className="px-0 col-5">
                    <p className="dropdown_title_name">Start Your Journey As</p>
                  </div>
                  <div className="px-0 col-6">
                    <div className={`${ispilotForm ? "d-none" : "d-block"}`}>
                      <div
                        className="driver_tab d-flex align-items-center justify-content-center"
                        data-bs-toggle="collapse"
                        href="#pilotformtransition"
                        role="button"
                        aria-expanded="false"
                        aria-controls="pilotformtransition"
                      >
                        <p className="py-1 abc text-nowrap">Driver Partner</p>
                        <Image
                          loader={myLoader}
                          className="h-auto object-fit-contain ms-3"
                          style={{ width: "8%" }}
                          src={BlackArrow}
                          alt="BlackArrow"
                        />
                      </div>
                      <div
                        className="collapse driver_tab"
                        id="pilotformtransition"
                      >
                        <p
                          className="py-2 abc"
                          onClick={() => {
                            setIspilotForm(true);
                          }}
                        >
                          Individual
                        </p>
                        <p
                          className="py-2 abc"
                          onClick={() => {
                            setIspilotForm(true);
                          }}
                        >
                          Business
                        </p>
                        <p
                          className="py-2 abc"
                          onClick={() => {
                            setIspilotForm(true);
                          }}
                        >
                          Fleet Management
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${
                        !ispilotForm
                          ? "d-none"
                          : "d-block pilotformtransition pilotformtransition collapse"
                      }`}
                    >
                      <div className="pilotformSection">
                        <div
                          className="my-3 cursor-pointer d-flex justify-content-center"
                          onClick={() => {
                            setIspilotForm(false); // Close the form
                          }}
                        >
                          <PilotLogo
                            style={{
                              height: "40%",
                              width: "50%",
                              textAlign: "center",
                            }}
                          />
                        </div>
                        <div className="px-3">
                          <p className="text-black fw-700">Register</p>
                          <p className="border-yellow w-50"></p>
                        </div>
                        <PilotForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="border-0 mobilejourneysection bg-socialiconyellow card">
            <div className="main_journey_section">
              <div className="mx-0 row justify-content-center w-100">
                <div className="px-0 col-12 d-flex justify-content-center">
                  <Image
                    loader={myLoader}
                    className="w-100 journey_img"
                    src={Journey}
                    alt="pilotform"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-white journey_title text-capitalize">
                    Your Ticket to Tomorrow&apos;s Transport Today! Let&apos;s
                    redefine commuting
                  </p>
                  <div className="mx-0 row">
                    <div className="px-0 col-12">
                      <p className="text-white dropdown_title_name fs-30 fw-600">
                        Start Your Journey As
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-12">
                  <div className="bg-white border-0 pilotformSection card">
                    <div>
                      <p className="px-3 text-black text-capitalize fs-30 fw-600">
                        sign up
                      </p>
                    </div>
                    <div className="px-3">
                      <p className="text-black fw-600">Register As</p>
                    </div>
                    <PilotForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneySection;
