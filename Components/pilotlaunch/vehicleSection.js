// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Box from "../../public/Images/pilot_launch/moving.png";
// import Ute from "../../public/Images/pilot_launch/ute.png";
// import Van from "../../public/Images/pilot_launch/van.png";
// import Truck from "../../public/Images/pilot_launch/truck.png";
// import BusSection from "../../public/svg/ride_with_us/Ride_Business/Bus1.png";
// import VanSection from "../../public/svg/ride_with_us/Ride_Business/Van1.png";
// import Car from "../../public/Images/pilot_launch/ride.png";
// import Yellowcar from "../../public/Images/pilot_launch/rideHover.png";
// import YellowBoxes from "../../public/Images/pilot_launch/deliveryHover.png";
// import Boxes from "../../public/Images/pilot_launch/delivery.png";
// import CarMob from "../../public/Images/pilot_launch/rideMob.png";
// import YellowCarMob from "../../public/Images/pilot_launch/rideMobHover.png";
// import YellowBoxesMob from "../../public/Images/pilot_launch/deliveryMobHover.png";
// import BoxesMob from "../../public/Images/pilot_launch/deliveryMob.png";

// function VehicleSection() {
//   const [activeTab, setActiveTab] = useState('pills-box');
//   const [isTablet, setIsTablet] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isLaptop, setIsLaptop] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 767) {
//         setIsMobile(!isMobile);
//       }
//       if (window.innerWidth <= 991) {
//         setIsTablet(!isTablet);
//       }
//       if (window.innerWidth <= 1500) {
//         setIsLaptop(!isLaptop);
//       }
//     }
//   }, []);

//   const handleTabClickToggle = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const myLoader = ({ src }) => {
//     return `${src}`;
//   };

//   return (
//     <>
//       <div className="pt-5 vehicle_section py-lg-5" style={{ backgroundColor: isTablet ? "" : "#F2F2F2" }}>
//         <div className={`container`}>
//           <div className={`${isTablet ? "card p-3" : ""}`} style={{ backgroundColor: isTablet ? "#F2F2F2" : "" }}>
//             <div className="row w-100 justify-content-lg-center">
//               <div className="col-lg-8">
//                 <h2 className="text-center vehicle_title">
//                   Any vehicle to match your delivery needs
//                 </h2>
//               </div>
//             </div>
//             <div className="row justify-content-center Hyper_Local_Section_Options d-none d-lg-flex">
//               <ul className="border-0 nav nav-pills d-flex justify-content-evenly row" id="pills-tab" role="tablist">
//                 <li className="my-3 nav-item col-lg-3 main-li" role="presentation">
//                   <button
//                     className="px-1 nav-link w-100 d-flex align-items-center justify-content-center pills-ride"
//                     data-bs-toggle="pill"
//                     data-bs-target="#pills-ride"
//                     aria-controls="pills-ride"
//                     id="pills-ride-tab"
//                     type="button"
//                     role="tab"
//                     aria-selected="true"
//                   >
//                     <Image loader={myLoader} style={{ width: isLaptop ? "80%" : "100%" }} className="object-fit-contain tab_icon_hover" src={Yellowcar} alt='Yellowcar' />
//                     <Image loader={myLoader} style={{ width: isLaptop ? "80%" : "100%" }} className="object-fit-contain tab_icon" src={Car} alt='CarImage' />
//                   </button>
//                 </li>
//                 <li className="my-3 nav-item col-lg-3 main-li" role="presentation">
//                   <button
//                     className="px-1 nav-link w-100 d-flex align-items-center justify-content-center"
//                     id="pills-delivery-tab"
//                     data-bs-toggle="pill"
//                     data-bs-target="#pills-delivery"
//                     type="button"
//                     role="tab"
//                     aria-controls="pills-delivery"
//                     aria-selected="false"
//                   >
//                     <Image loader={myLoader} style={{ width: isLaptop ? "80%" : "100%" }} className="object-fit-contain tab_icon_hover" src={YellowBoxes} alt='YellowBoxes' />
//                     <Image loader={myLoader} style={{ width: isLaptop ? "80%" : "100%" }} className="object-fit-contain tab_icon" src={Boxes} alt='BoxesImage' />
//                   </button>
//                 </li>
//               </ul>
//               <div className="mt-5 tab-content" id="pills-tabContent">
//                 <div className="text-black tab-pane fade show" id="pills-ride" role="tabpanel" aria-labelledby="pills-ride-tab">
//                   <div className="mt-5 bg-transparent row justify-content-center w-100 ridetabsection">
//                     <div className="col-6">
//                       <Link href={`/ride-with-us/individual`}>
//                         <div className="svg-container1 d-flex justify-content-center">
//                           <Image loader={myLoader}
//                             src={BusSection}
//                             alt="svg-container"
//                             height="100%"
//                           />
//                         </div>
//                         <p className="text-center text-black fs-1 font-montserrat fw-600">
//                           Bus
//                         </p>
//                       </Link>
//                     </div>
//                     <div className="col-6">
//                       <Link href={`/ride-with-us/individual`}>
//                         <div className="svg-container1 d-flex justify-content-center">
//                           <Image loader={myLoader}
//                             src={VanSection}
//                             alt="svg-container"
//                             height="100%"
//                           />
//                         </div>
//                         <p className="text-center text-black fs-1 font-montserrat fw-600">
//                           Van
//                         </p>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-black tab-pane fade" id="pills-delivery" role="tabpanel" aria-labelledby="pills-delivery-tab">
//                   <ul className="border-0 nav nav-pills d-flex justify-content-evenly row" id="pills-tab" role="tablist">
//                     <li className="nav-item nav_cards my-md-3" role="presentation">
//                       <Link href="/delivery/individual">
//                         <button
//                           className="px-1 nav-link w-100"
//                           id="pills-box-tab"
//                           data-bs-toggle="pill"
//                           data-bs-target="#pills-box"
//                           type="button"
//                           role="tab"
//                           aria-controls="pills-box"
//                           aria-selected="true"
//                         >
//                           <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Box} alt="Box" />
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="nav-item nav_cards my-md-3" role="presentation">
//                       <Link href="/delivery/individual">
//                         <button
//                           className="px-1 nav-link w-100"
//                           id="pills-ute-tab"
//                           data-bs-toggle="pill"
//                           data-bs-target="#pills-ute"
//                           type="button"
//                           role="tab"
//                           aria-controls="pills-ute"
//                           aria-selected="false"
//                         >
//                           <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Ute} alt="Ute" />
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="nav-item nav_cards my-md-3" role="presentation">
//                       <Link href="/delivery/individual">
//                         <button
//                           className="px-1 nav-link w-100"
//                           id="pills-van-tab"
//                           data-bs-toggle="pill"
//                           data-bs-target="#pills-van"
//                           type="button"
//                           role="tab"
//                           aria-controls="pills-van"
//                           aria-selected="false"
//                         >
//                           <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Van} alt="Van" />
//                         </button>
//                       </Link>
//                     </li>
//                     <li className="nav-item nav_cards my-md-3" role="presentation">
//                       <Link href="/delivery/individual">
//                         <button
//                           className="px-1 nav-link w-100"
//                           id="pills-truck-tab"
//                           data-bs-toggle="pill"
//                           data-bs-target="#pills-truck"
//                           type="button"
//                           role="tab"
//                           aria-controls="pills-truck"
//                           aria-selected="false"
//                         >
//                           <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Truck} alt="Truck" />
//                         </button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className='my-2 d-block d-lg-none'>
//               <div className='mob-section'>
//                 <ul className="border-0 nav nav-pills d-flex justify-content-evenly row" id="pills-tab" role="tablist">
//                   <li className={`nav-item px-0 ${activeTab === 'pills-ride1' ? "" : "my-3"}`} role="presentation">
//                     <button
//                       className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-ride1' ? 'active' : ''}`}
//                       id="pills-ride1-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#pills-ride1"
//                       type="button"
//                       role="tab"
//                       aria-controls="pills-ride1"
//                       aria-selected={activeTab === 'pills-ride1'}
//                       onClick={() => handleTabClickToggle('pills-ride1')}
//                     >
//                       <Image loader={myLoader} className="w-50 object-fit-contain tab_icon_hover" src={YellowCarMob} alt='YellowCarMob' />
//                       <Image loader={myLoader} className="w-50 object-fit-scale tab_icon" src={CarMob} alt='CarMobImage' />
//                     </button>
//                   </li>
//                   <div
//                     className={`tab-pane fade px-0 ${activeTab === 'pills-ride1' ? 'show active' : ''}`}
//                     id="pills-ride1"
//                     role="tabpanel"
//                     aria-labelledby="pills-ride1-tab"
//                   >
//                     <div className="px-0 row d-flex">
//                       <div className="mt-5 bg-transparent row justify-content-center w-100 ridetabsection">
//                         <div className="col-6">
//                           <Link href={`/ride-with-us/individual`}>
//                             <div className="svg-container1 d-flex justify-content-center">
//                               <Image loader={myLoader}
//                                 src={BusSection}
//                                 alt="svg-container"
//                                 height="100%"
//                               />
//                             </div>
//                             <p className="text-center text-black fs-1 font-montserrat fw-600">
//                               Bus
//                             </p>
//                           </Link>
//                         </div>
//                         <div className="col-6">
//                           <Link href={`/ride-with-us/individual`}>
//                             <div className="svg-container1 d-flex justify-content-center">
//                               <Image loader={myLoader}
//                                 src={VanSection}
//                                 alt="svg-container"
//                                 height="100%"
//                               />
//                             </div>
//                             <p className="text-center text-black fs-1 font-montserrat fw-600">
//                               Van
//                             </p>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <li className={`nav-item px-0 ${activeTab === 'pills-delivery1' ? "" : "my-3"}`} role="presentation">
//                     <button
//                       className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-delivery1' ? 'active' : ''}`}
//                       id="pills-delivery1-tab"
//                       data-bs-toggle="pill"
//                       data-bs-target="#pills-delivery1"
//                       type="button"
//                       role="tab"
//                       aria-controls="pills-delivery1"
//                       aria-selected={activeTab === 'pills-delivery1'}
//                       onClick={() => handleTabClickToggle('pills-delivery1')}
//                     >
//                       <Image loader={myLoader} className="w-50 object-fit-contain tab_icon_hover" src={YellowBoxesMob} alt='YellowBoxesMob' />
//                       <Image loader={myLoader} className="w-50 object-fit-contain tab_icon" src={BoxesMob} alt='BoxesMobImage' />
//                     </button>
//                   </li>
//                   <div
//                     className={`tab-pane fade ${activeTab === 'pills-delivery1' ? 'show active' : ''}`}
//                     id="pills-delivery1"
//                     role="tabpanel"
//                     aria-labelledby="pills-delivery1-tab"
//                   >
//                     <ul className="border-0 nav nav-pills d-flex justify-content-evenly row" id="pills-tab" role="tablist">
//                       <li className="nav-item nav_cards my-md-3" role="presentation">
//                         <Link href="/delivery/individual">
//                           <button
//                             className="px-1 nav-link w-100"
//                             id="pills-box-tab"
//                             data-bs-toggle="pill"
//                             data-bs-target="#pills-box"
//                             type="button"
//                             role="tab"
//                             aria-controls="pills-box"
//                             aria-selected="true"
//                           >
//                             <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Box} alt="Box" />
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="nav-item nav_cards my-md-3" role="presentation">
//                         <Link href="/delivery/individual">
//                           <button
//                             className="px-1 nav-link w-100"
//                             id="pills-ute-tab"
//                             data-bs-toggle="pill"
//                             data-bs-target="#pills-ute"
//                             type="button"
//                             role="tab"
//                             aria-controls="pills-ute"
//                             aria-selected="false"
//                           >
//                             <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Ute} alt="Ute" />
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="nav-item nav_cards my-md-3" role="presentation">
//                         <Link href="/delivery/individual">
//                           <button
//                             className="px-1 nav-link w-100"
//                             id="pills-van-tab"
//                             data-bs-toggle="pill"
//                             data-bs-target="#pills-van"
//                             type="button"
//                             role="tab"
//                             aria-controls="pills-van"
//                             aria-selected="false"
//                           >
//                             <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Van} alt="Van" />
//                           </button>
//                         </Link>
//                       </li>
//                       <li className="nav-item nav_cards my-md-3" role="presentation">
//                         <Link href="/delivery/individual">
//                           <button
//                             className="px-1 nav-link w-100"
//                             id="pills-truck-tab"
//                             data-bs-toggle="pill"
//                             data-bs-target="#pills-truck"
//                             type="button"
//                             role="tab"
//                             aria-controls="pills-truck"
//                             aria-selected="false"
//                           >
//                             <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={Truck} alt="Truck" />
//                           </button>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VehicleSection;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "../../public/Images/pilot_launch/moving.png";
import Ute from "../../public/Images/pilot_launch/ute.png";
import Van from "../../public/Images/pilot_launch/van.png";
import Truck from "../../public/Images/pilot_launch/truck.png";
import BusSection from "../../public/svg/ride_with_us/Ride_Business/Bus1.png";
import VanSection from "../../public/svg/ride_with_us/Ride_Business/Van1.png";
import Car from "../../public/Images/pilot_launch/ride.png";
import Yellowcar from "../../public/Images/pilot_launch/rideHover.png";
import YellowBoxes from "../../public/Images/pilot_launch/deliveryHover.png";
import Boxes from "../../public/Images/pilot_launch/delivery.png";
import CarMob from "../../public/Images/pilot_launch/rideMob.png";
import YellowCarMob from "../../public/Images/pilot_launch/rideMobHover.png";
import YellowBoxesMob from "../../public/Images/pilot_launch/deliveryMobHover.png";
import BoxesMob from "../../public/Images/pilot_launch/deliveryMob.png";

function VehicleSection() {
  const [activeTab, setActiveTab] = useState("pills-box");
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile); // Corrected logic using functional update
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet); // Corrected logic using functional update
      }
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop); // Corrected logic using functional update
      }
    }
  }, [isMobile, isTablet, isLaptop]); // Added dependencies to the useEffect array

  const handleTabClickToggle = (tabId) => {
    setActiveTab(tabId);
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div
        className="pt-5 vehicle_section py-lg-5"
        style={{ backgroundColor: isTablet ? "" : "#F2F2F2" }}
      >
        <div className={`container`}>
          <div
            className={`${isTablet ? "card p-3" : ""}`}
            style={{ backgroundColor: isTablet ? "#F2F2F2" : "" }}
          >
            <div className="row w-100 justify-content-lg-center">
              <div className="col-lg-8">
                <h2 className="text-center vehicle_title">
                  Any vehicle to match your delivery needs
                </h2>
              </div>
            </div>
            <div className="row justify-content-center Hyper_Local_Section_Options d-none d-lg-flex">
              <ul
                className="border-0 nav nav-pills d-flex justify-content-evenly row"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="my-3 nav-item col-lg-3 main-li"
                  role="presentation"
                >
                  <button
                    className="px-1 nav-link w-100 d-flex align-items-center justify-content-center pills-ride"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ride"
                    aria-controls="pills-ride"
                    id="pills-ride-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <Image
                      loader={myLoader}
                      style={{ width: isLaptop ? "80%" : "100%" }}
                      className="object-fit-contain tab_icon_hover"
                      src={Yellowcar}
                      alt="Yellowcar"
                    />
                    <Image
                      loader={myLoader}
                      style={{ width: isLaptop ? "80%" : "100%" }}
                      className="object-fit-contain tab_icon"
                      src={Car}
                      alt="CarImage"
                    />
                  </button>
                </li>
                <li
                  className="my-3 nav-item col-lg-3 main-li"
                  role="presentation"
                >
                  <button
                    className="px-1 nav-link w-100 d-flex align-items-center justify-content-center"
                    id="pills-delivery-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-delivery"
                    type="button"
                    role="tab"
                    aria-controls="pills-delivery"
                    aria-selected="false"
                  >
                    <Image
                      loader={myLoader}
                      style={{ width: isLaptop ? "80%" : "100%" }}
                      className="object-fit-contain tab_icon_hover"
                      src={YellowBoxes}
                      alt="YellowBoxes"
                    />
                    <Image
                      loader={myLoader}
                      style={{ width: isLaptop ? "80%" : "100%" }}
                      className="object-fit-contain tab_icon"
                      src={Boxes}
                      alt="BoxesImage"
                    />
                  </button>
                </li>
              </ul>
              <div className="mt-5 tab-content" id="pills-tabContent">
                <div
                  className="text-black tab-pane fade show"
                  id="pills-ride"
                  role="tabpanel"
                  aria-labelledby="pills-ride-tab"
                >
                  <div className="mt-5 bg-transparent row justify-content-center w-100 ridetabsection">
                    <div className="col-6">
                      <Link href={`/ride-with-us/individual`}>
                        <div className="svg-container1 d-flex justify-content-center">
                          <Image
                            loader={myLoader}
                            src={BusSection}
                            alt="svg-container"
                            height="100%"
                          />
                        </div>
                        <p className="text-center text-black fs-1 font-montserrat fw-600">
                          Bus
                        </p>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link href={`/ride-with-us/individual`}>
                        <div className="svg-container1 d-flex justify-content-center">
                          <Image
                            loader={myLoader}
                            src={VanSection}
                            alt="svg-container"
                            height="100%"
                          />
                        </div>
                        <p className="text-center text-black fs-1 font-montserrat fw-600">
                          Van
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="text-black tab-pane fade"
                  id="pills-delivery"
                  role="tabpanel"
                  aria-labelledby="pills-delivery-tab"
                >
                  <ul
                    className="border-0 nav nav-pills d-flex justify-content-evenly row"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      className="nav-item nav_cards my-md-3"
                      role="presentation"
                    >
                      <Link href="/delivery/individual">
                        <button
                          className="px-1 nav-link w-100"
                          id="pills-box-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-box"
                          type="button"
                          role="tab"
                          aria-controls="pills-box"
                          aria-selected="true"
                        >
                          <Image
                            loader={myLoader}
                            className="w-100 h-100 object-fit-contain"
                            src={Box}
                            alt="Box"
                          />
                        </button>
                      </Link>
                    </li>
                    <li
                      className="nav-item nav_cards my-md-3"
                      role="presentation"
                    >
                      <Link href="/delivery/individual">
                        <button
                          className="px-1 nav-link w-100"
                          id="pills-ute-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-ute"
                          type="button"
                          role="tab"
                          aria-controls="pills-ute"
                          aria-selected="false"
                        >
                          <Image
                            loader={myLoader}
                            className="w-100 h-100 object-fit-contain"
                            src={Ute}
                            alt="Ute"
                          />
                        </button>
                      </Link>
                    </li>
                    <li
                      className="nav-item nav_cards my-md-3"
                      role="presentation"
                    >
                      <Link href="/delivery/individual">
                        <button
                          className="px-1 nav-link w-100"
                          id="pills-van-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-van"
                          type="button"
                          role="tab"
                          aria-controls="pills-van"
                          aria-selected="false"
                        >
                          <Image
                            loader={myLoader}
                            className="w-100 h-100 object-fit-contain"
                            src={Van}
                            alt="Van"
                          />
                        </button>
                      </Link>
                    </li>
                    <li
                      className="nav-item nav_cards my-md-3"
                      role="presentation"
                    >
                      <Link href="/delivery/individual">
                        <button
                          className="px-1 nav-link w-100"
                          id="pills-truck-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-truck"
                          type="button"
                          role="tab"
                          aria-controls="pills-truck"
                          aria-selected="false"
                        >
                          <Image
                            loader={myLoader}
                            className="w-100 h-100 object-fit-contain"
                            src={Truck}
                            alt="Truck"
                          />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-2 d-block d-lg-none">
              <div className="mob-section">
                <ul
                  className="border-0 nav nav-pills d-flex justify-content-evenly row"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className={`nav-item px-0 ${
                      activeTab === "pills-ride1" ? "" : "my-3"
                    }`}
                    role="presentation"
                  >
                    <button
                      className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${
                        activeTab === "pills-ride1" ? "active" : ""
                      }`}
                      id="pills-ride1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-ride1"
                      type="button"
                      role="tab"
                      aria-controls="pills-ride1"
                      aria-selected={activeTab === "pills-ride1"}
                      onClick={() => handleTabClickToggle("pills-ride1")}
                    >
                      <Image
                        loader={myLoader}
                        className="w-50 object-fit-contain tab_icon_hover"
                        src={YellowCarMob}
                        alt="YellowCarMob"
                      />
                      <Image
                        loader={myLoader}
                        className="w-50 object-fit-scale tab_icon"
                        src={CarMob}
                        alt="CarMobImage"
                      />
                    </button>
                  </li>
                  <div
                    className={`tab-pane fade px-0 ${
                      activeTab === "pills-ride1" ? "show active" : ""
                    }`}
                    id="pills-ride1"
                    role="tabpanel"
                    aria-labelledby="pills-ride1-tab"
                  >
                    <div className="px-0 row d-flex">
                      <div className="mt-5 bg-transparent row justify-content-center w-100 ridetabsection">
                        <div className="col-6">
                          <Link href={`/ride-with-us/individual`}>
                            <div className="svg-container1 d-flex justify-content-center">
                              <Image
                                loader={myLoader}
                                src={BusSection}
                                alt="svg-container"
                                height="100%"
                              />
                            </div>
                            <p className="text-center text-black fs-1 font-montserrat fw-600">
                              Bus
                            </p>
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link href={`/ride-with-us/individual`}>
                            <div className="svg-container1 d-flex justify-content-center">
                              <Image
                                loader={myLoader}
                                src={VanSection}
                                alt="svg-container"
                                height="100%"
                              />
                            </div>
                            <p className="text-center text-black fs-1 font-montserrat fw-600">
                              Van
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <li
                    className={`nav-item px-0 ${
                      activeTab === "pills-delivery1" ? "" : "my-3"
                    }`}
                    role="presentation"
                  >
                    <button
                      className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${
                        activeTab === "pills-delivery1" ? "active" : ""
                      }`}
                      id="pills-delivery1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-delivery1"
                      type="button"
                      role="tab"
                      aria-controls="pills-delivery1"
                      aria-selected={activeTab === "pills-delivery1"}
                      onClick={() => handleTabClickToggle("pills-delivery1")}
                    >
                      <Image
                        loader={myLoader}
                        className="w-50 object-fit-contain tab_icon_hover"
                        src={YellowBoxesMob}
                        alt="YellowBoxesMob"
                      />
                      <Image
                        loader={myLoader}
                        className="w-50 object-fit-contain tab_icon"
                        src={BoxesMob}
                        alt="BoxesMobImage"
                      />
                    </button>
                  </li>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pills-delivery1" ? "show active" : ""
                    }`}
                    id="pills-delivery1"
                    role="tabpanel"
                    aria-labelledby="pills-delivery1-tab"
                  >
                    <ul
                      className="border-0 nav nav-pills d-flex justify-content-evenly row"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li
                        className="nav-item nav_cards my-md-3"
                        role="presentation"
                      >
                        <Link href="/delivery/individual">
                          <button
                            className="px-1 nav-link w-100"
                            id="pills-box-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-box"
                            type="button"
                            role="tab"
                            aria-controls="pills-box"
                            aria-selected="true"
                          >
                            <Image
                              loader={myLoader}
                              className="w-100 h-100 object-fit-contain"
                              src={Box}
                              alt="Box"
                            />
                          </button>
                        </Link>
                      </li>
                      <li
                        className="nav-item nav_cards my-md-3"
                        role="presentation"
                      >
                        <Link href="/delivery/individual">
                          <button
                            className="px-1 nav-link w-100"
                            id="pills-ute-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-ute"
                            type="button"
                            role="tab"
                            aria-controls="pills-ute"
                            aria-selected="false"
                          >
                            <Image
                              loader={myLoader}
                              className="w-100 h-100 object-fit-contain"
                              src={Ute}
                              alt="Ute"
                            />
                          </button>
                        </Link>
                      </li>
                      <li
                        className="nav-item nav_cards my-md-3"
                        role="presentation"
                      >
                        <Link href="/delivery/individual">
                          <button
                            className="px-1 nav-link w-100"
                            id="pills-van-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-van"
                            type="button"
                            role="tab"
                            aria-controls="pills-van"
                            aria-selected="false"
                          >
                            <Image
                              loader={myLoader}
                              className="w-100 h-100 object-fit-contain"
                              src={Van}
                              alt="Van"
                            />
                          </button>
                        </Link>
                      </li>
                      <li
                        className="nav-item nav_cards my-md-3"
                        role="presentation"
                      >
                        <Link href="/delivery/individual">
                          <button
                            className="px-1 nav-link w-100"
                            id="pills-truck-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-truck"
                            type="button"
                            role="tab"
                            aria-controls="pills-truck"
                            aria-selected="false"
                          >
                            <Image
                              loader={myLoader}
                              className="w-100 h-100 object-fit-contain"
                              src={Truck}
                              alt="Truck"
                            />
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleSection;
