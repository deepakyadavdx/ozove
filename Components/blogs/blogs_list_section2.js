// "use client";
// import React, { useEffect, useState } from "react";
// import { Card, CardBody } from "reactstrap";
// import Search from "../../public/svg/search.svg";
// import Blog1 from "../../public/Images/blogs/new/first.jpg";
// import Blog2 from "../../public/Images/blogs/new/Second.jpg";
// import Blog3 from "../../public/Images/blogs/new/Third.jpg";
// import Blog4 from "../../public/Images/blogs/new/Forth.jpg";
// import Blog5 from "../../public/Images/blogs/new/Five.jpg";
// import Blog6 from "../../public/Images/blogs/new/six.jpg";
// import Blog7 from "../../public/Images/blogs/new/Seven.jpg";
// import Image from "next/image";
// import Link from "next/link";

// function SectionTwo() {
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
//       <div className="mt-2">
//         <div className="container">
//           <div className="main_blog_list_section">
//             <div className="mt-1 mb-2 row w-100 align-items-center">
//               <div className="col-12">
//                 <div className="d-flex align-items-center">
//                   <p className="allposttitle">All Posts</p>
//                   <div className="search-container ps-5">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search"
//                     />
//                     <Search className="search-icon" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className={`justify-content-lg-center ${isMobile ? "row mb-1 keysection_inner_section flex-lg-nowrap" : "row mb-4 keysection_inner_section flex-wrap"}`}>
//               <div className="col-12 d-flex">
//                 <p className="px-2 py-1 my-2 mt-2 blogskey bg-socialiconyellow me-3">
//                   Technology
//                 </p>
//                 <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
//                   Innovation
//                 </p>
//                 <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
//                   Delivery
//                 </p>
//                 <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
//                   Entrepreneurship
//                 </p>
//                 <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
//                   Driver Stories
//                 </p>
//                 <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
//                   Group Rides
//                 </p>
//               </div>
//               <div className="d-flex jusatify-content-center">
//                 <hr style={{ color: "black", width: "100%", marginTop: isMobile ? "0.4rem" : "1rem", marginBottom: isMobile ? "0.4rem" : "1rem" }} />
//               </div>
//             </div>
//             <div className="px-0 mx-0 row w-100 px-lg-2">
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/revolutionising-local-delivery-services" target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog1} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         Revolutionising Local Delivery Services: The Unrevealed
//                         Advantages of OZ OVE
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         In today&apos;s competitive market, the importance of local
//                         delivery services cannot be overstated. As businesses strive
//                         to gain an edge over their competitors, the need for speed,
//                         simplicity, and customer-centric experiences in delivery
//                         services has become paramount. This is where OZ OVE, a
//                         game-changer in the industry, comes into play. In this blog,
//                         we will delve into the benefits and features of OZ OVE&apos;s
//                         local delivery services that set it apart from the rest.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/unlocking-the-power-of-logistics" target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog2} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         Unlocking the Power of Logistics: Boosting Retail Success
//                         with OZ OVE&apos;s Efficient Delivery Services in Australia
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         The retail business is growing at a rapid rate today. In
//                         this age of e-commerce businesses, retail stores are highly
//                         dependent upon logistics for streamlined and hassle-free
//                         delivery of goods. Retail logistics proves to be an
//                         excellent combination to ensure a speedy delivery with the
//                         use of the latest technology and complete customer
//                         satisfaction. This is where OZ OVE, a game-changer in the
//                         industry, comes into play.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/oz-ove-empowering" target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog3} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         OZ OVE: Pioneering Next-Generation Mobility Solutions in
//                         Australia
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         In the ever-evolving landscape of modern transportation,
//                         ride-sharing and delivery services have emerged as integral
//                         components of our daily lives. Yet, a need for faster, more
//                         efficient, and customer-centric services persists. Bridging
//                         this gap is Australia&apos;s latest player in this domain, OZ
//                         OVE.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/simplyfy-group-bookings-with-oz-ove" target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog4} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         Simplify Group Bookings with OZ OVE: Uncover Flexibility,
//                         Savings and Innovative Features
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         Navigating the landscape of group travel often feels like a
//                         daunting task. From coordinating schedules to managing
//                         costs, the challenges can sometimes overshadow the joy of
//                         travel itself. With the introduction of OZ OVE, Australia&apos;s
//                         newest pioneer in mobility solutions, the tides are
//                         changing.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/logistics-trends-2022-23 " target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog5} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         Logistics Trends 2022-23: Embracing the On-Demand Economy in
//                         Australia
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         The logistics industry is currently undergoing an
//                         unprecedented transformation. Buoyed by the rapid
//                         development of technology and changes in consumer behaviour,
//                         the industry has seen several noteworthy trends emerge. One
//                         of the most prominent trends is the shift towards the
//                         on-demand economy.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/revolutionising-mobility" target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog6} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         Revolutionising Mobility: Exploring OZ OVE Use Cases
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         In the era of digitization and instant gratification, the
//                         concept of mobility has taken on a new meaning. It’s no
//                         longer about simply getting from point A to point B. It’s
//                         about convenience, efficiency, personalization, and
//                         sustainability. Enter OZ OVE, a dynamic platform
//                         revolutionising mobility in Australia.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <Link href="/company/blogs/hyperlocal-deliveries-ascend" target="_blank">
//                   <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
//                     <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog7} alt="blog1" /></div>
//                     <div style={{ height: "38%" }}>
//                       <p className="mt-2 blogtitle">
//                         Hyperlocal Deliveries Ascend: Digitally Transforming
//                         Logistics with OZ Ove in Australia
//                       </p>
//                       <p className="mt-2 blogdesc">
//                         The e-commerce landscape has seen a significant pivot
//                         towards hyperlocal deliveries, a trend accelerated by
//                         consumer&apos;s increasing demand for instant and same-day
//                         deliveries. OZ Ove, a front-runner in the Australian
//                         logistics industry, has embraced this shift, leveraging it
//                         to redefine logistics in the country.
//                       </p>
//                     </div>
//                     <p className="mt-1 blogDate text-darkgrey">
//                       {formattedDate}
//                     </p>
//                   </div>
//                 </Link>
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

// export default SectionTwo;

"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import Search from "../../public/svg/search.svg";
import Blog1 from "../../public/Images/blogs/new/first.jpg";
import Blog2 from "../../public/Images/blogs/new/Second.jpg";
import Blog3 from "../../public/Images/blogs/new/Third.jpg";
import Blog4 from "../../public/Images/blogs/new/Forth.jpg";
import Blog5 from "../../public/Images/blogs/new/Five.jpg";
import Blog6 from "../../public/Images/blogs/new/six.jpg";
import Blog7 from "../../public/Images/blogs/new/Seven.jpg";
import Image from "next/image";
import Link from "next/link";

function SectionTwo() {
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
    function handleResize() {
      setIsMobile(window.innerWidth <= 991);
    }

    handleResize(); // Set initial state on mount

    window.addEventListener("resize", handleResize); // Listen to window resize event

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on component unmount
    };
  }, []); // Dependency array is empty to run this effect only once on component mount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="mt-2">
        <div className="container">
          <div className="main_blog_list_section">
            <div className="mt-1 mb-2 row w-100 align-items-center">
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <p className="allposttitle">All Posts</p>
                  <div className="search-container ps-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <Search className="search-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`justify-content-lg-center ${
                isMobile
                  ? "row mb-1 keysection_inner_section flex-lg-nowrap"
                  : "row mb-4 keysection_inner_section flex-wrap"
              }`}
            >
              <div className="col-12 d-flex">
                <p className="px-2 py-1 my-2 mt-2 blogskey bg-socialiconyellow me-3">
                  Technology
                </p>
                <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
                  Innovation
                </p>
                <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
                  Delivery
                </p>
                <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
                  Entrepreneurship
                </p>
                <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
                  Driver Stories
                </p>
                <p className="px-2 py-1 my-2 mt-2 blogskey bg-darkgrey me-3">
                  Group Rides
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <hr
                  style={{
                    color: "black",
                    width: "100%",
                    marginTop: isMobile ? "0.4rem" : "1rem",
                    marginBottom: isMobile ? "0.4rem" : "1rem",
                  }}
                />
              </div>
            </div>
            <div className="px-0 mx-0 row w-100 px-lg-2">
              <div className="col-lg-4 col-md-6">
                <Link
                  href="/company/blogs/revolutionising-local-delivery-services"
                  target="_blank"
                >
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog1} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        Revolutionising Local Delivery Services: The Unrevealed
                        Advantages of OZ OVE
                      </p>
                      <p className="mt-2 blogdesc">
                        In today&apos;s competitive market, the importance of
                        local delivery services cannot be overstated. As
                        businesses strive to gain an edge over their
                        competitors, the need for speed, simplicity, and
                        customer-centric experiences in delivery services has
                        become paramount. This is where OZ OVE, a game-changer
                        in the industry, comes into play. In this blog, we will
                        delve into the benefits and features of OZ OVE&apos;s
                        local delivery services that set it apart from the rest.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link
                  href="/company/blogs/unlocking-the-power-of-logistics"
                  target="_blank"
                >
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog2} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        Unlocking the Power of Logistics: Boosting Retail
                        Success with OZ OVE&apos;s Efficient Delivery Services
                        in Australia
                      </p>
                      <p className="mt-2 blogdesc">
                        The retail business is growing at a rapid rate today. In
                        this age of e-commerce businesses, retail stores are
                        highly dependent upon logistics for streamlined and
                        hassle-free delivery of goods. Retail logistics proves
                        to be an excellent combination to ensure a speedy
                        delivery with the use of the latest technology and
                        complete customer satisfaction. This is where OZ OVE, a
                        game-changer in the industry, comes into play.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/oz-ove-empowering" target="_blank">
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog3} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        OZ OVE: Pioneering Next-Generation Mobility Solutions in
                        Australia
                      </p>
                      <p className="mt-2 blogdesc">
                        In the ever-evolving landscape of modern transportation,
                        ride-sharing and delivery services have emerged as
                        integral components of our daily lives. Yet, a need for
                        faster, more efficient, and customer-centric services
                        persists. Bridging this gap is Australia&apos;s latest
                        player in this domain, OZ OVE.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link
                  href="/company/blogs/simplyfy-group-bookings-with-oz-ove"
                  target="_blank"
                >
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog4} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        Simplify Group Bookings with OZ OVE: Uncover
                        Flexibility, Savings and Innovative Features
                      </p>
                      <p className="mt-2 blogdesc">
                        Navigating the landscape of group travel often feels
                        like a daunting task. From coordinating schedules to
                        managing costs, the challenges can sometimes overshadow
                        the joy of travel itself. With the introduction of OZ
                        OVE, Australia&apos;s newest pioneer in mobility
                        solutions, the tides are changing.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link
                  href="/company/blogs/logistics-trends-2022-23 "
                  target="_blank"
                >
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog5} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        Logistics Trends 2022-23: Embracing the On-Demand
                        Economy in Australia
                      </p>
                      <p className="mt-2 blogdesc">
                        The logistics industry is currently undergoing an
                        unprecedented transformation. Buoyed by the rapid
                        development of technology and changes in consumer
                        behaviour, the industry has seen several noteworthy
                        trends emerge. One of the most prominent trends is the
                        shift towards the on-demand economy.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link
                  href="/company/blogs/revolutionising-mobility"
                  target="_blank"
                >
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog6} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        Revolutionising Mobility: Exploring OZ OVE Use Cases
                      </p>
                      <p className="mt-2 blogdesc">
                        In the era of digitization and instant gratification,
                        the concept of mobility has taken on a new meaning. It’s
                        no longer about simply getting from point A to point B.
                        It’s about convenience, efficiency, personalization, and
                        sustainability. Enter OZ OVE, a dynamic platform
                        revolutionising mobility in Australia.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link
                  href="/company/blogs/hyperlocal-deliveries-ascend"
                  target="_blank"
                >
                  <div className="px-1 py-3 my-1 blog_list_section px-lg-3 my-lg-4">
                    <div style={{ height: "55%" }}>
                      <Image loader={myLoader} src={Blog7} alt="blog1" />
                    </div>
                    <div style={{ height: "38%" }}>
                      <p className="mt-2 blogtitle">
                        Hyperlocal Deliveries Ascend: Digitally Transforming
                        Logistics with OZ Ove in Australia
                      </p>
                      <p className="mt-2 blogdesc">
                        The e-commerce landscape has seen a significant pivot
                        towards hyperlocal deliveries, a trend accelerated by
                        consumer&apos;s increasing demand for instant and
                        same-day deliveries. OZ Ove, a front-runner in the
                        Australian logistics industry, has embraced this shift,
                        leveraging it to redefine logistics in the country.
                      </p>
                    </div>
                    <p className="mt-1 blogDate text-darkgrey">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
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

export default SectionTwo;
