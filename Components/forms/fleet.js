// "use client";
// import React, { useEffect, useState } from "react";
// import { ErrorMessage, Form, Formik } from "formik";
// import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
// import ValidationSchema from "../../validations/fleet";
// import axios from "axios";
// import { toast } from "react-toastify";

// function BusinessForm() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== undefined) {
//       if (window.innerWidth <= 991) {
//         setIsMobile(!isMobile);
//       }
//     }
//   }, []);

//   const [loading, setLoading] = useState(false);
//   return (
//     <Formik
//       initialValues={{
//         full_name: "",
//         role: "",
//         company_name: "",
//         contact_no: "",
//         email: "",
//         region: "",
//         no_of_driver: "",
//       }}
//       validationSchema={ValidationSchema}
//       onSubmit={async (values, { resetForm }) => {
//         setLoading(true);
//         const sentObj = {
//           subject: "Fleet management request",
//           type: 3,
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
//               <Form onSubmit={handleSubmit} className="fleetmanageformsec">
//                 <div className="px-3 fleetmanageformsec_form">
//                   {!isMobile ? (
//                     <></>
//                   ) : (
//                     <>
//                       <p className="fs-24 fw-700 third_title text-grey">Sign up</p>
//                     </>
//                   )}
//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">Tell us about yourself <span className="error-message">*</span></b>
//                     </Label>
//                     <Input
//                       name="full_name"
//                       id="full_name"
//                       placeholder={"Full Name"}
//                       value={values.full_name}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="full_name"
//                       className="error-message"
//                     />
//                   </FormGroup>

//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">What is your role in your Fleet? <span className="error-message">*</span></b>
//                     </Label>
//                     <Input
//                       name="role"
//                       id="role"
//                       placeholder={"Role"}
//                       value={values.role}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="role"
//                       className="error-message"
//                     />
//                   </FormGroup>

//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">Tell us about your Fleet <span className="error-message">*</span></b>
//                     </Label>
//                     <Input
//                       name="company_name"
//                       id="company_name"
//                       placeholder={"Company Name"}
//                       value={values.company_name}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="company_name"
//                       className="error-message"
//                     />
//                   </FormGroup>

//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">Phone number <span className="error-message">*</span> </b>
//                     </Label>
//                     <Input
//                       name="contact_no"
//                       id="contact_no"
//                       placeholder={"Contact Number"}
//                       value={values.contact_no}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="contact_no"
//                       className="error-message"
//                     />
//                   </FormGroup>

//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">Email <span className="error-message">*</span> </b>
//                     </Label>
//                     <Input
//                       name="email"
//                       id="email"
//                       placeholder={"Email"}
//                       value={values.email}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="email"
//                       className="error-message"
//                     />
//                   </FormGroup>

//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">Which region is your Fleet in? <span className="error-message">*</span> </b>
//                     </Label>
//                     <Input
//                       name="region"
//                       id="region"
//                       placeholder={"Region"}
//                       value={values.region}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="region"
//                       className="error-message"
//                     />
//                   </FormGroup>

//                   <FormGroup className="px-0 inner_fleetbussinessform">
//                     <Label>
//                     <b className="bold_text">How many drivers would you like register? <span className="error-message">*</span> </b>
//                     </Label>
//                     <Input
//                       name="no_of_driver"
//                       id="no_of_driver"
//                       placeholder={"No of Driver"}
//                       value={values.no_of_driver}
//                       type="text"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       component={"small"}
//                       name="no_of_driver"
//                       className="error-message"
//                     />
//                   </FormGroup>
//                 </div>
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className={`${
//                     isMobile
//                       ? "ridebusinessbtn my-2 mx-3"
//                       : "ridebusinessbtn w-100 py-3 mt-3"
//                   }`}
//                 >
//                   Submit
//                   {loading && (
//                 <span className="mr-1 spinner-border spinner-border-sm"></span>
//               )}
//                 </Button>
//               </Form>
//             {/* )} */}
//           </>
//         );
//       }}
//     </Formik>
//   );
// }

// export default BusinessForm;

"use client";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Button, FormGroup, Input, Label } from "reactstrap";
import ValidationSchema from "../../validations/fleet";
import axios from "axios";
import { toast } from "react-toastify";

function BusinessForm() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <Formik
      initialValues={{
        full_name: "",
        role: "",
        company_name: "",
        contact_no: "",
        email: "",
        region: "",
        no_of_driver: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const sentObj = {
          subject: "Fleet management request",
          type: 3,
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
          <Form onSubmit={handleSubmit} className="fleetmanageformsec">
            <div className="px-3 fleetmanageformsec_form">
              {!isMobile ? (
                <></>
              ) : (
                <>
                  <p className="fs-24 fw-700 third_title text-grey">Sign up</p>
                </>
              )}
              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    Tell us about yourself{" "}
                    <span className="error-message">*</span>
                  </b>
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

              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    What is your role in your Fleet?{" "}
                    <span className="error-message">*</span>
                  </b>
                </Label>
                <Input
                  name="role"
                  id="role"
                  placeholder={"Role"}
                  value={values.role}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="role"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    Tell us about your Fleet{" "}
                    <span className="error-message">*</span>
                  </b>
                </Label>
                <Input
                  name="company_name"
                  id="company_name"
                  placeholder={"Company Name"}
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

              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    Phone number <span className="error-message">*</span>
                  </b>
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

              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    Email <span className="error-message">*</span>
                  </b>
                </Label>
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

              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    Which region is your Fleet in?{" "}
                    <span className="error-message">*</span>
                  </b>
                </Label>
                <Input
                  name="region"
                  id="region"
                  placeholder={"Region"}
                  value={values.region}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="region"
                  className="error-message"
                />
              </FormGroup>

              <FormGroup className="px-0 inner_fleetbussinessform">
                <Label>
                  <b className="bold_text">
                    How many drivers would you like register?{" "}
                    <span className="error-message">*</span>
                  </b>
                </Label>
                <Input
                  name="no_of_driver"
                  id="no_of_driver"
                  placeholder={"No of Driver"}
                  value={values.no_of_driver}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component={"small"}
                  name="no_of_driver"
                  className="error-message"
                />
              </FormGroup>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className={`${
                isMobile
                  ? "ridebusinessbtn my-2 mx-3"
                  : "ridebusinessbtn w-100 py-3 mt-3"
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

export default BusinessForm;
