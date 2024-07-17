// "use client";
// import { ErrorMessage, Form, Formik } from "formik";
// import React, { useEffect, useState } from "react";
// import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
// import ValidationSchema from "../../validations/business";
// import axios from "axios";
// import Image from "next/image";
// import { toast } from "react-toastify";
// // import Orig4 from "../../public/svg/Group_132.svg";
// import Orig4 from "../../public/svg/Group132.png";

// function BusinessForm({ subject }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [loading, setLoading] = useState(false);

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
//         company_name: "",
//         job_title: "",
//         contact_no: "",
//         email: "",
//       }}
//       validationSchema={ValidationSchema}
//       onSubmit={async (values, { resetForm }) => {
//         setLoading(true);
//         const sentObj = {
//           subject: `${subject} business request`,
//           type: 2,
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
//       {({ values, handleBlur, handleChange, handleSubmit }) => (
//         <>
//           {/* {loading ? (
//             <Spinner />
//           ) : ( */}
//           <Form onSubmit={handleSubmit} className="ridebusinessform">
//             <div className="px-3 inner_bussinessform">
//               {!isMobile ? (
//                 <>
//                   <p className="small-paragraph first_title" style={{ width: "90%" }}>
//                     To sign up, please click {`'`}Sign Up{`'`} on the Top.
//                   </p>
//                   <p className="mt-2 small-paragraph second_title" style={{ width: "90%" }}>
//                     Or get in touch with our sales by filling out the form below.
//                   </p>
//                   <div className="mb-2 border-custom w-25"></div>
//                 </>
//               ) : (
//                 <p className="small-paragraph third_title">Sign up</p>
//               )}
//               <FormGroup className="form-group_business">
//                 <Label>
//                   <b className="bold_text">Tell us about yourself</b>
//                 </Label>
//                 <Input
//                   name="full_name"
//                   id="full_name"
//                   placeholder={"Full Name"}
//                   value={values.full_name}
//                   type="text"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <ErrorMessage
//                   component={"small"}
//                   name="full_name"
//                   className="error-message"
//                 />
//               </FormGroup>

//               <FormGroup className="form-group_business">
//                 <Input
//                   name="company_name"
//                   id="company_name"
//                   placeholder={"Company Name"}
//                   value={values.company_name}
//                   type="text"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <ErrorMessage
//                   component={"small"}
//                   name="company_name"
//                   className="error-message"
//                 />
//               </FormGroup>

//               <FormGroup className="form-group_business">
//                 <Input
//                   name="job_title"
//                   id="job_title"
//                   placeholder={"Job Title"}
//                   value={values.job_title}
//                   type="text"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <ErrorMessage
//                   component={"small"}
//                   name="job_title"
//                   className="error-message"
//                 />
//               </FormGroup>

//               <FormGroup className="form-group_business">
//                 <Label>
//                   <b className="bold_text">Contact Details</b>
//                 </Label>
//                 <Input
//                   name="contact_no"
//                   id="contact_no"
//                   placeholder={"Contact Number"}
//                   value={values.contact_no}
//                   type="text"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <ErrorMessage
//                   component={"small"}
//                   name="contact_no"
//                   className="error-message"
//                 />
//               </FormGroup>

//               <FormGroup className="form-group_business">
//                 <Input
//                   name="email"
//                   id="email"
//                   placeholder={"Email"}
//                   value={values.email}
//                   type="text"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <ErrorMessage
//                   component={"small"}
//                   name="email"
//                   className="error-message"
//                 />
//               </FormGroup>
//               {!isMobile ? (
//                 <>
//                   <div className="row ">
//                     <div className="text-center col-12">
//                       {/* <Orig4 /> */}
//                       <Image loader={myLoader} className="h-auto object-fit-contain" style={{ width: "5%" }} src={Orig4} alt="Group 132.png" />

//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <></>
//               )}
//             </div>
//             <Button
//               type="submit"
//               disabled={loading}
//               className={`${isMobile
//                 ? "ridebusinessbtn mx-3"
//                 : "ridebusinessbtn w-100 py-2"
//                 }`}
//             >
//               Submit
//               {loading && (
//                 <span className="mr-1 spinner-border spinner-border-sm"></span>
//               )}
//             </Button>
//           </Form>
//           {/* )} */}
//         </>
//       )}
//     </Formik>
//   );
// }

// export default BusinessForm;

"use client";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import ValidationSchema from "../../validations/business";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import Orig4 from "../../public/svg/Group132.png";

function BusinessForm({ subject }) {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

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
        company_name: "",
        job_title: "",
        contact_no: "",
        email: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const sentObj = {
          subject: `${subject} business request`,
          type: 2,
          ...values,
        };
        try {
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
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("Failed to submit form", {
            position: toast.POSITION.TOP_CENTER,
          });
        } finally {
          setLoading(false);
        }
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
                    To sign up, please click {`'`}Sign Up{`'`} on the Top.
                  </p>
                  <p
                    className="mt-2 small-paragraph second_title"
                    style={{ width: "90%" }}
                  >
                    Or get in touch with our sales by filling out the form
                    below.
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
                  placeholder="Full Name"
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
                  name="company_name"
                  id="company_name"
                  placeholder="Company Name"
                  value={values.company_name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="company_name"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="form-group_business">
                <Input
                  name="job_title"
                  id="job_title"
                  placeholder="Job Title"
                  value={values.job_title}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="job_title"
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
                  placeholder="Contact Number"
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
                  placeholder="Email"
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

              {!isMobile && (
                <div className="row">
                  <div className="text-center col-12">
                    <Image
                      loader={myLoader}
                      className="h-auto object-fit-contain"
                      style={{ width: "5%" }}
                      src={Orig4}
                      alt="Group 132.png"
                    />
                  </div>
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={`ridebusinessbtn ${isMobile ? "mx-3" : "w-100 py-2"}`}
            >
              Submit
              {loading && <Spinner size="sm" className="ml-1" />}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default BusinessForm;
