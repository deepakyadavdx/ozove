// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { ErrorMessage, Form, Formik } from "formik";
// import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
// import ValidationSchema from "../../validations/individual";
// import Image from "next/image";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Orig4 from "../../public/svg/Group132.png";

// function IndividualForm({ subject }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const dateRef = useRef();

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
//     <Formik
//       initialValues={{
//         full_name: "",
//         date_of_birth: "",
//         occupation: "",
//         contact_no: "",
//         email: "",
//       }}
//       validationSchema={ValidationSchema}
//       onSubmit={async (values, { resetForm }) => {
//         setLoading(true);
//         const sentObj = {
//           subject: `${subject} individual request`,
//           type: 1,
//           ...values,
//         };
//         const result = await axios.post(`/api/sent-mail`, sentObj);
//         if (result.data && result.data.status === 200) {
//           toast.success(result.data.message, {
//             position: toast.POSITION.TOP_CENTER,
//           });
//           resetForm();
//         } else {
//           toast.error(result.data.message, {
//             position: toast.POSITION.TOP_CENTER,
//           });
//         }
//         setLoading(false);
//       }}
//     >
//       {({ values, handleBlur, handleChange, handleSubmit }) => {
//         return (
//           <>
//             {/* {loading ? (
//               <Spinner />
//             ) : ( */}
//             <Form onSubmit={handleSubmit} className="ridebusinessform">
//               <div className="px-3 inner_bussinessform">
//                 {!isMobile ? (
//                   <>
//                     <p
//                       className="small-paragraph first_title"
//                       style={{ width: "90%" }}
//                     >
//                       To sign up, please click {`'`}Sign Up{`'`} on
//                       <br />
//                       the Top.
//                     </p>
//                     <p
//                       className="mt-2 small-paragraph second_title"
//                       style={{ width: "90%" }}
//                     >
//                       Or get in touch with our sales by filling out the
//                       <br />
//                       form below.
//                     </p>
//                     <div className="mb-2 border-custom w-25"></div>
//                   </>
//                 ) : (
//                   <p className="small-paragraph third_title">Sign up</p>
//                 )}
//                 <FormGroup className="form-group_business">
//                   <Label>
//                     <b className="bold_text">Tell us about yourself</b>
//                   </Label>
//                   <Input
//                     name="full_name"
//                     id="full_name"
//                     placeholder={"Full Name"}
//                     value={values.full_name}
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <ErrorMessage
//                     component={"small"}
//                     name="full_name"
//                     className="error-message"
//                   />
//                 </FormGroup>

//                 <FormGroup className="form-group_business">
//                   <Input
//                     type="date"
//                     placeholder="Date of Birth"
//                     name="date_of_birth"
//                     id="dateInput"
//                     innerRef={dateRef}
//                     value={values.date_of_birth}
//                     onChange={handleChange}
//                     max={new Date()?.toISOString()?.split("T")[0]}
//                   />
//                   <ErrorMessage
//                     component={"small"}
//                     name="date_of_birth"
//                     className="error-message"
//                   />
//                 </FormGroup>

//                 <FormGroup className="form-group_business">
//                   <Input
//                     name="occupation"
//                     id="occupation"
//                     placeholder={"Occupation"}
//                     value={values.occupation}
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <ErrorMessage
//                     component={"small"}
//                     name="occupation"
//                     className="error-message"
//                   />
//                 </FormGroup>

//                 <FormGroup className="form-group_business">
//                   <Label>
//                     <b className="bold_text">Contact Details</b>
//                   </Label>
//                   <Input
//                     name="contact_no"
//                     id="contact_no"
//                     placeholder={"Contact Number"}
//                     value={values.contact_no}
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <ErrorMessage
//                     component={"small"}
//                     name="contact_no"
//                     className="error-message"
//                   />
//                 </FormGroup>

//                 <FormGroup className="form-group_business">
//                   <Input
//                     name="email"
//                     id="email"
//                     placeholder={"Email"}
//                     value={values.email}
//                     type="text"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <ErrorMessage
//                     component={"small"}
//                     name="email"
//                     className="error-message"
//                   />
//                 </FormGroup>
//                 {!isMobile ? (
//                   <>
//                     <div className="row ">
//                       <div className="text-center col-12">
//                         {/* <Orig4 /> */}
//                         <Image
//                           loader={myLoader}
//                           className="h-auto object-fit-contain"
//                           style={{ width: "5%" }}
//                           src={Orig4}
//                           alt="Group 132.png"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//               </div>
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className={`${
//                   isMobile
//                     ? "ridebusinessbtn mx-3 py-1 my-2"
//                     : "ridebusinessbtn w-100 py-2"
//                 }`}
//               >
//                 Submit
//                 {loading && (
//                   <span className="mr-1 spinner-border spinner-border-sm"></span>
//                 )}
//               </Button>
//             </Form>
//             {/* )} */}
//           </>
//         );
//       }}
//     </Formik>
//   );
// }

// export default IndividualForm;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Button, FormGroup, Input, Label } from "reactstrap";
import ValidationSchema from "../../validations/individual";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import Orig4 from "../../public/svg/Group132.png";

function IndividualForm({ subject }) {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const dateRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Initial call to set value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, runs once on mount

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <Formik
      initialValues={{
        full_name: "",
        date_of_birth: "",
        occupation: "",
        contact_no: "",
        email: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const sentObj = {
          subject: `${subject} individual request`,
          type: 1,
          ...values,
        };
        const result = await axios.post(`/api/sent-mail`, sentObj);
        if (result.data && result.data.status === 200) {
          toast.success(result.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          resetForm();
        } else {
          toast.error(result.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        setLoading(false);
      }}
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <>
          <Form onSubmit={handleSubmit} className="ridebusinessform">
            <div className="px-3 inner_bussinessform">
              {!isMobile ? (
                <>
                  <p
                    className="small-paragraph first_title"
                    style={{ width: "90%" }}
                  >
                    To sign up, please click {`'`}Sign Up{`'`} on
                    <br />
                    the Top.
                  </p>
                  <p
                    className="mt-2 small-paragraph second_title"
                    style={{ width: "90%" }}
                  >
                    Or get in touch with our sales by filling out the
                    <br />
                    form below.
                  </p>
                  <div className="mb-2 border-custom w-25"></div>
                </>
              ) : (
                <p className="small-paragraph third_title">Sign up</p>
              )}
              <FormGroup className="form-group_business">
                <Label>
                  <b className="bold_text">Tell us about yourself</b>
                </Label>
                <Input
                  name="full_name"
                  id="full_name"
                  placeholder={"Full Name"}
                  value={values.full_name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="full_name"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="form-group_business">
                <Input
                  type="date"
                  placeholder="Date of Birth"
                  name="date_of_birth"
                  id="dateInput"
                  innerRef={dateRef}
                  value={values.date_of_birth}
                  onChange={handleChange}
                  max={new Date()?.toISOString()?.split("T")[0]}
                />
                <ErrorMessage
                  component={"small"}
                  name="date_of_birth"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="form-group_business">
                <Input
                  name="occupation"
                  id="occupation"
                  placeholder={"Occupation"}
                  value={values.occupation}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="occupation"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="form-group_business">
                <Label>
                  <b className="bold_text">Contact Details</b>
                </Label>
                <Input
                  name="contact_no"
                  id="contact_no"
                  placeholder={"Contact Number"}
                  value={values.contact_no}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="contact_no"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="form-group_business">
                <Input
                  name="email"
                  id="email"
                  placeholder={"Email"}
                  value={values.email}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="email"
                  className="error-message"
                />
              </FormGroup>
              {!isMobile ? (
                <>
                  <div className="row ">
                    <div className="text-center col-12">
                      {/* <Orig4 /> */}
                      <Image
                        loader={myLoader}
                        className="h-auto object-fit-contain"
                        style={{ width: "5%" }}
                        src={Orig4}
                        alt="Group 132.png"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className={`${
                isMobile
                  ? "ridebusinessbtn mx-3 py-1 my-2"
                  : "ridebusinessbtn w-100 py-2"
              }`}
            >
              Submit
              {loading && (
                <span className="mr-1 spinner-border spinner-border-sm"></span>
              )}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default IndividualForm;
