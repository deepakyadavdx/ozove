// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Related1 from "../../../public/Images/blogs/related1.png";
// import Related2 from "../../../public/Images/blogs/related2.png";
// import Related3 from "../../../public/Images/blogs/related3.png";
// import Link from "next/link";

// function SectionThree() {
//   const [isMobile, setIsMobile] = useState(false);
//   const currentDate = new Date(); // Assuming today is January 7, 2023
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}-${months[currentDate.getMonth()]
//     }-${currentDate.getFullYear()}`;

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);
//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };
//   return (
//     <>
//       <div className="section_3_bg">
//         <div className="container">
//           <h1 className="related_posts">Related Posts</h1>
//           <div className="mx-0 my-3 row w-100">
//             <div className="my-3 col-md-4">
//               <div className="px-3 py-3 card h-100">
//                 <div style={{ height: "60%" }}>
//                   <Image loader={myLoader} className="w-100 h-100" src={Related1} alt="related1" />
//                 </div>
//                 <div style={{ height: "33%" }}>
//                   <p className="mt-2 related_head">
//                     Entrepreneurial Insights: Lessons Learned from Ozove&apos;s Founders
//                   </p>
//                   <p className="mt-2 text-black related_post_desc">
//                     Gain valuable insights from the minds behind Ozove as they share their entrepreneurial experiences, triumphs, and setbacks.
//                   </p>
//                 </div>
//                 <p className="mt-1 blogDate text-darkgrey">
//                   {formattedDate}
//                 </p>
//               </div>
//             </div>
//             <div className="my-3 col-md-4">
//               <div className="px-3 py-3 card h-100">
//                 <div style={{ height: "60%" }}>
//                   <Image loader={myLoader} className="w-100 h-100" src={Related2} alt="related2" />
//                 </div>
//                 <div style={{ height: "33%" }}>
//                   <p className="mt-2 related_head">
//                     The Role of AI and Machine Learning in Ozove&apos;s On-Demand Services
//                   </p>
//                   <p className="mt-2 text-black related_post_desc">
//                     Unravel the role of artificial intelligence and machine learning in optimizing Ozove&apos;s on-demand services. Learn how AI-driven algorithms analyze vast amounts of data to predict demand.
//                   </p>
//                 </div>
//                 <p className="mt-1 blogDate text-darkgrey">
//                   {formattedDate}
//                 </p>
//               </div>
//             </div>
//             <div className="my-3 col-md-4">
//               <div className="px-3 py-3 card h-100">
//                 <div style={{ height: "60%" }}>
//                   <Image loader={myLoader} className="w-100 h-100" src={Related3} alt="related3" />
//                 </div>
//                 <div style={{ height: "33%" }}>
//                   <p className="mt-2 related_head">
//                     Transforming the Last Mile: How Ozove Redefines Delivery Logistics
//                   </p>
//                   <p className="mt-2 text-black related_post_desc">
//                     Discover how Ozove&apos;s innovative approach to last-mile logistics is revolutionizing the final stage of delivery. Explore their adaptive delivery strategies, real-time route optimization.
//                   </p>
//                 </div>
//                 <p className="mt-1 blogDate text-darkgrey">
//                   {formattedDate}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-grey sign_upSection">
//         <div className="container">
//           <div className="mt-4 mb-2 row w-100 justify-content-center align-items-center">
//             <div className="col-lg-12 d-flex justify-content-center align-items-center flex-column flex-lg-row">
//               <p className="text-center sign_uptitle">
//                 sign up for our Newsletter
//               </p>
//               <button className="px-4 py-1 text-center bg-white rounded ms-4 text-grey fw-700 text-capitalize">
//                 <Link href={`/launch`} target="_blank" className="text-dark">
//                   sign up
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionThree;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Related1 from "../../../public/Images/blogs/related1.png";
import Related2 from "../../../public/Images/blogs/related2.png";
import Related3 from "../../../public/Images/blogs/related3.png";
import Link from "next/link";

function SectionThree() {
  const [isMobile, setIsMobile] = useState(false);
  const currentDate = new Date(); // Assuming today is January 7, 2023
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}-${
    months[currentDate.getMonth()]
  }-${currentDate.getFullYear()}`;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="section_3_bg">
        <div className="container">
          <h1 className="related_posts">Related Posts</h1>
          <div className="mx-0 my-3 row w-100">
            <div className="my-3 col-md-4">
              <div className="px-3 py-3 card h-100">
                <div style={{ height: "60%" }}>
                  <Image
                    loader={myLoader}
                    className="w-100 h-100"
                    src={Related1}
                    alt="related1"
                  />
                </div>
                <div style={{ height: "33%" }}>
                  <p className="mt-2 related_head">
                    Entrepreneurial Insights: Lessons Learned from Ozove&apos;s
                    Founders
                  </p>
                  <p className="mt-2 text-black related_post_desc">
                    Gain valuable insights from the minds behind Ozove as they
                    share their entrepreneurial experiences, triumphs, and
                    setbacks.
                  </p>
                </div>
                <p className="mt-1 blogDate text-darkgrey">{formattedDate}</p>
              </div>
            </div>
            <div className="my-3 col-md-4">
              <div className="px-3 py-3 card h-100">
                <div style={{ height: "60%" }}>
                  <Image
                    loader={myLoader}
                    className="w-100 h-100"
                    src={Related2}
                    alt="related2"
                  />
                </div>
                <div style={{ height: "33%" }}>
                  <p className="mt-2 related_head">
                    The Role of AI and Machine Learning in Ozove&apos;s
                    On-Demand Services
                  </p>
                  <p className="mt-2 text-black related_post_desc">
                    Unravel the role of artificial intelligence and machine
                    learning in optimizing Ozove&apos;s on-demand services.
                    Learn how AI-driven algorithms analyze vast amounts of data
                    to predict demand.
                  </p>
                </div>
                <p className="mt-1 blogDate text-darkgrey">{formattedDate}</p>
              </div>
            </div>
            <div className="my-3 col-md-4">
              <div className="px-3 py-3 card h-100">
                <div style={{ height: "60%" }}>
                  <Image
                    loader={myLoader}
                    className="w-100 h-100"
                    src={Related3}
                    alt="related3"
                  />
                </div>
                <div style={{ height: "33%" }}>
                  <p className="mt-2 related_head">
                    Transforming the Last Mile: How Ozove Redefines Delivery
                    Logistics
                  </p>
                  <p className="mt-2 text-black related_post_desc">
                    Discover how Ozove&apos;s innovative approach to last-mile
                    logistics is revolutionizing the final stage of delivery.
                    Explore their adaptive delivery strategies, real-time route
                    optimization.
                  </p>
                </div>
                <p className="mt-1 blogDate text-darkgrey">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey sign_upSection">
        <div className="container">
          <div className="mt-4 mb-2 row w-100 justify-content-center align-items-center">
            <div className="col-lg-12 d-flex justify-content-center align-items-center flex-column flex-lg-row">
              <p className="text-center sign_uptitle">
                sign up for our Newsletter
              </p>
              <button className="px-4 py-1 text-center bg-white rounded ms-4 text-grey fw-700 text-capitalize">
                <Link href={`/launch`} target="_blank" className="text-dark">
                  sign up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
