// // "use client";
// // import React, { useEffect, useState } from "react";

// // function SectionOne() {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     if (typeof window !== undefined) {
// //       if (window.innerWidth <= 991) {
// //         setIsMobile(!isMobile);
// //       }
// //     }
// //   }, []);
// //   return (
// //     <>
// //       <div className="blogbannersection">
// //         <div className="container my-3">
// //           <div className="mx-2 blogBannerdesc">
// //             {isMobile ? (
// //               <h1 className="mainblogtitle">
// //                 Revolutionising On-Demand
// //                 <br />
// //                 Delivery: <span className="text-socialiconyellow">
// //                   The Tech Behind Ozove&apos;s Success
// //                 </span>
// //               </h1>
// //             ) : (
// //               <h1 className="mainblogtitle">
// //                 Revolutionising On-Demand Delivery: <br />
// //                 <span className="text-socialiconyellow">
// //                   The Tech Behind Ozove&apos;s Success
// //                 </span>
// //               </h1>
// //             )}
// //             {isMobile ? (
// //               <p className="mt-2 mainblogdesc">
// //                 Discover the cutting-edge technological advancements
// //                 <br />
// //                 that have propelled Ozove to the forefront of on-demand
// //                 <br />
// //                 group ride and delivery services.
// //               </p>
// //             ) : (
// //               <p className="mt-2 mainblogdesc">
// //                 Discover the cutting-edge technological advancements that have propelled Ozove to the
// //                 <br />
// //                 forefront of on-demand group ride and delivery services. Learn how their innovative
// //                 <br />
// //                 platform integrates real-time tracking, smart routing algorithms, and seamless user
// //                 <br />
// //                 interfaces to redefine convenience for customers and businesses alike.
// //               </p>
// //             )}
// //             <div className="mb-3 d-flex">
// //               <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
// //                 Technology
// //               </div>
// //               <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
// //                 Innovation
// //               </div>
// //               <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
// //                 Delivery
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default SectionOne;

// "use client";
// import React, { useEffect, useState } from "react";

// function SectionOne() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       // Update isMobile based on current window width
//       setIsMobile(window.innerWidth <= 991);
//     }
//   }, []); // Dependency array is empty to run this effect only once on component mount

//   return (
//     <>
//       <div className="blogbannersection">
//         <div className="container my-3">
//           <div className="mx-2 blogBannerdesc">
//             <h1 className="mainblogtitle">
//               Revolutionising On-Demand Delivery:{" "}
//               <span className="text-socialiconyellow">
//                 The Tech Behind Ozove's Success
//               </span>
//             </h1>
//             <p className="mt-2 mainblogdesc">
//               Discover the cutting-edge technological advancements{" "}
//               {isMobile ? (
//                 <>
//                   that have propelled Ozove to the forefront of on-demand group
//                   ride and delivery services.
//                 </>
//               ) : (
//                 <>
//                   that have propelled Ozove to the forefront of on-demand group
//                   ride and delivery services. Learn how their innovative
//                   platform integrates real-time tracking, smart routing
//                   algorithms, and seamless user interfaces to redefine
//                   convenience for customers and businesses alike.
//                 </>
//               )}
//             </p>
//             <div className="mb-3 d-flex">
//               <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
//                 Technology
//               </div>
//               <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
//                 Innovation
//               </div>
//               <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
//                 Delivery
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionOne;

"use client";
import React, { useEffect, useState } from "react";

function SectionOne() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      // Update isMobile based on current window width
      setIsMobile(window.innerWidth <= 991);
    }
  }, []); // Dependency array is empty to run this effect only once on component mount

  return (
    <>
      <div className="blogbannersection">
        <div className="container my-3">
          <div className="mx-2 blogBannerdesc">
            <h1 className="mainblogtitle">
              Revolutionising On-Demand Delivery:{" "}
              <span className="text-socialiconyellow">
                The Tech Behind Ozove&apos;s Success
              </span>
            </h1>
            <p className="mt-2 mainblogdesc">
              Discover the cutting-edge technological advancements{" "}
              {isMobile ? (
                <>
                  that have propelled Ozove to the forefront of on-demand group
                  ride and delivery services.
                </>
              ) : (
                <>
                  that have propelled Ozove to the forefront of on-demand group
                  ride and delivery services. Learn how their innovative
                  platform integrates real-time tracking, smart routing
                  algorithms, and seamless user interfaces to redefine
                  convenience for customers and businesses alike.
                </>
              )}
            </p>
            <div className="mb-3 d-flex">
              <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
                Technology
              </div>
              <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
                Innovation
              </div>
              <div className="px-2 py-1 mt-2 blogskey bg-darkgrey me-2">
                Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
