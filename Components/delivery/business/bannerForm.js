// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Forms from "../../../Components/delivery/forms"

// function BannerForm() {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         if (typeof window !== undefined) {
//             if (window.innerWidth <= 767) {
//                 setIsMobile(!isMobile);
//             }
//         }
//     }, []);
//     return (
//         <>
//             <div className="px-0 py-4 d-flex justify-content-center justify-content-lg-end">
//             <div className={`px-0 form-width`}>
//                     <div className="inner_banner_form">
//                         <div className="bg-transparent sub_inner_banner_form card">
//                             <div className="p-0 card-body">
//                                 <nav className="d-lg-block d-none">
//                                     <div
//                                         className="nav nav-tabs"
//                                         id="nav-tab"
//                                         role="tablist"
//                                     >
//                                         <Link className="d-flex justify-content-center dropdown-item w-50" href={`/delivery/individual`}>
//                                             <button
//                                                 className="py-3 text-center bg-white nav-link form_title w-100 fw-700 nav-btn-ride"
//                                                 id="nav-individual-tab"
//                                                 data-bs-toggle="tab"
//                                                 data-bs-target="#nav-individual"
//                                                 type="button"
//                                                 role="tab"
//                                                 aria-controls="nav-individual"
//                                                 aria-selected="true"
//                                                 style={{
//                                                     color: "#333333",
//                                                     borderTopLeftRadius: "20px"
//                                                 }}
//                                             >
//                                                 Individual
//                                             </button>
//                                         </Link>
//                                         <button
//                                             className="py-3 text-center nav-link w-50 form_title fw-bold active bg-socialiconyellow"
//                                             id="nav-business-tab"
//                                             data-bs-toggle="tab"
//                                             data-bs-target="#nav-business"
//                                             type="button"
//                                             role="tab"
//                                             aria-controls="nav-business"
//                                             aria-selected="false"
//                                             style={{
//                                                 color: "#333333",
//                                                 borderRadius: "0px 20px 0px 0px ",
//                                             }}
//                                         >
//                                             Business
//                                         </button>
//                                     </div>
//                                 </nav>
//                                 <Forms />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default BannerForm;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Forms from "../../../Components/delivery/forms";

function BannerForm() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
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
      <div className="px-0 py-4 d-flex justify-content-center justify-content-lg-end">
        <div className={`px-0 form-width`}>
          <div className="inner_banner_form">
            <div className="bg-transparent sub_inner_banner_form card">
              <div className="p-0 card-body">
                <nav className="d-lg-block d-none">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link href={`/delivery/individual`} passHref>
                      <button
                        className={`nav-link form_title w-100 fw-700 nav-btn-ride py-3 bg-white text-center ${
                          isMobile ? "active" : ""
                        }`}
                        id="nav-individual-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-individual"
                        type="button"
                        role="tab"
                        aria-controls="nav-individual"
                        aria-selected={isMobile ? "true" : "false"}
                        style={{
                          color: "#333333",
                          borderTopLeftRadius: "20px",
                        }}
                      >
                        Individual
                      </button>
                    </Link>
                    <button
                      className={`nav-link w-100 form_title fw-bold py-3 bg-socialiconyellow text-center ${
                        isMobile ? "" : "active"
                      }`}
                      id="nav-business-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-business"
                      type="button"
                      role="tab"
                      aria-controls="nav-business"
                      aria-selected={isMobile ? "false" : "true"}
                      style={{
                        color: "#333333",
                        borderRadius: isMobile
                          ? "0px 20px 0px 0px"
                          : "0px 20px 20px 0px",
                      }}
                    >
                      Business
                    </button>
                  </div>
                </nav>
                <Forms />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerForm;
