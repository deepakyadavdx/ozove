// "use client";
// import React, { useState, useEffect } from "react";
// import { our_position_section } from "../careers/our_position_section";

// function OurPosition() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);

//   const toggleAccordion = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <>
//       <div className="section-spacer our_position_section">
//         <div className="container">
//           <div className="mx-0 row w-100">
//             <div className="col-12">
//               {/* {isMobile ? (
//                 <p className="our_position_title">Coming Soon</p>
//               ) : ( */}
//                 <p className="our_position_title">Coming Soon</p>
//               {/* )} */}
//             </div>
//           </div>
//           {/* <div className="mainourpositionresponsive">
//             {our_position_section.map((item, index) => (
//               <div
//                 className="my-2 cursor-pointer row accordion scrolldownslownaccordion-body accordion-flush"
//                 key={index}
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="px-0 border-0 col-12 accordion-item">
//                   <div
//                     className={`main_section py-3 px-2 accordion-header accordion-button ${index === openIndex ? "" : "collapsed"
//                       }`}
//                     id={`flush-heading${index}`}
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#flush-collapse${index}`}
//                     aria-controls={`flush-collapse${index}`}
//                     aria-expanded={index === openIndex ? "true" : "false"} // Set aria-expanded based on openIndex
//                   >
//                     <div className="row justify-content-between">
//                       <div className="col-md-12 ">
//                         <div className="mb-2 inner_main_section d-flex justify-content-between">
//                           <div className="position_title d-flex align-items-start justify-content-between">
//                             {item.position_title}
//                           </div>
//                           <div className="inner_btn_section d-flex align-items-start justify-content-between">
//                             <button className="px-4 py-2 details_btn">
//                               {item.details_btn_text}
//                             </button>
//                             <button className="px-4 py-2 text-black details_btn ms-2 text-capitalize bg-socialiconyellow">
//                               {item.apply_btn_text}
//                             </button>
//                           </div>
//                         </div>
//                         <div className="my-4 inner_border"></div>
//                         <p className="positiondescription">
//                           {item.postion_description}
//                         </p>
//                         <div
//                           // id={`flush-collapse${index}`}
//                           className={`accordion-collapse collapse ${index === openIndex ? "show" : ""
//                             }`}
//                           // aria-labelledby={`flush-heading${index}`}
//                           data-bs-parent="#accordionFlushExample"
//                         >
//                           <p className="px-0 accordion-body scrolldownslownaccordion-body positiondescription">
//                             {item.postion_description_inner}
//                           </p>
//                         </div>
//                         {index === openIndex ? (
//                           <p className="my-2 cursor-pointer seemoretitle">
//                             {item.see_less_text}
//                           </p>
//                         ) : (
//                           <p className="my-2 cursor-pointer seemoretitle">
//                             {item.see_more_text}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurPosition;

"use client";
import React, { useState, useEffect } from "react";
import { our_position_section } from "../careers/our_position_section";

function OurPosition() {
  const [openIndex, setOpenIndex] = useState(null);
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
  }, []); // Empty dependency array because we only want this effect to run once

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="section-spacer our_position_section">
        <div className="container">
          <div className="mx-0 row w-100">
            <div className="col-12">
              <p className="our_position_title">Coming Soon</p>
            </div>
          </div>
          {isMobile && (
            <div className="mainourpositionresponsive">
              {our_position_section.map((item, index) => (
                <div
                  className="my-2 cursor-pointer row accordion scrolldownslownaccordion-body accordion-flush"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="px-0 border-0 col-12 accordion-item">
                    <div
                      className={`main_section py-3 px-2 accordion-header accordion-button ${
                        index === openIndex ? "" : "collapsed"
                      }`}
                      id={`flush-heading${index}`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-controls={`flush-collapse${index}`}
                      aria-expanded={index === openIndex ? "true" : "false"} // Set aria-expanded based on openIndex
                    >
                      <div className="row justify-content-between">
                        <div className="col-md-12 ">
                          <div className="mb-2 inner_main_section d-flex justify-content-between">
                            <div className="position_title d-flex align-items-start justify-content-between">
                              {item.position_title}
                            </div>
                            <div className="inner_btn_section d-flex align-items-start justify-content-between">
                              <button className="px-4 py-2 details_btn">
                                {item.details_btn_text}
                              </button>
                              <button className="px-4 py-2 text-black details_btn ms-2 text-capitalize bg-socialiconyellow">
                                {item.apply_btn_text}
                              </button>
                            </div>
                          </div>
                          <div className="my-4 inner_border"></div>
                          <p className="positiondescription">
                            {item.postion_description}
                          </p>
                          <div
                            // id={`flush-collapse${index}`}
                            className={`accordion-collapse collapse ${
                              index === openIndex ? "show" : ""
                            }`}
                            // aria-labelledby={`flush-heading${index}`}
                            data-bs-parent="#accordionFlushExample"
                          >
                            <p className="px-0 accordion-body scrolldownslownaccordion-body positiondescription">
                              {item.postion_description_inner}
                            </p>
                          </div>
                          {index === openIndex ? (
                            <p className="my-2 cursor-pointer seemoretitle">
                              {item.see_less_text}
                            </p>
                          ) : (
                            <p className="my-2 cursor-pointer seemoretitle">
                              {item.see_more_text}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OurPosition;
