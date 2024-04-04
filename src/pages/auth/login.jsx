import React from "react";
import { Formik, Form, Field } from "formik";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Link from "next/link";

const login = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="cont text-center">
                <section className="contact section-padding">
                  <div className="container">
                    <div className="row">
                     
                      <div className="col-lg-6">
                        <h3 className="">Your Welcome</h3>
                        <p className="p-10">We are a university focused on knowledge and sports across international borders, with your support and empathy, dear readers, we will strive to improve knowledge as much as possible.</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="form md-mb50">
                          <h4 className="extra-title mb-50">Register Form</h4>

                          <Formik
                            initialValues={{
                              name: "",
                              email: "",
                              message: "",
                            }}
                            onSubmit={async (values) => {
                              await sendMessage(500);
                              alert(JSON.stringify(values, null, 2));
                              // show message

                              messageRef.current.innerText =
                                "Your Message has been successfully sent. I will contact you soon.";
                              // Reset the values
                              values.name = "";
                              values.email = "";
                              values.message = "";
                              // clear message
                              setTimeout(() => {
                                messageRef.current.innerText = "";
                              }, 2000);
                            }}
                          >
                            {({ errors, touched }) => (
                              <Form id="register-form">
                                <div
                                  className="messages"
                                  ref={messageRef}
                                ></div>

                                <div className="controls">
                                  <div className="form-group">
                                    <Field
                                      id="form_name"
                                      type="text"
                                      name="name"
                                      placeholder="Name"
                                      required="required"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <Field
                                      id="form_name"
                                      type="text"
                                      name="userName"
                                      placeholder="userName"
                                      required="required"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <Field
                                      validate={validateEmail}
                                      id="form_email"
                                      type="email"
                                      name="email"
                                      placeholder="Email"
                                      required="required"
                                    />
                                    {errors.email && touched.email && (
                                      <div>{errors.email}</div>
                                    )}
                                  </div>
                                  <div className="form-group">
                                    <Field
                                      validate={validateEmail}
                                      id="form_email"
                                      type="number"
                                      name="phone"
                                      placeholder="phone"
                                      required="required"
                                    />
                                    {errors.email && touched.email && (
                                      <div>{errors.email}</div>
                                    )}
                                  </div>

                                  <div className="form-group">
                                    <Field
                                      type="password"
                                      id="form_password"
                                      name="password"
                                      placeholder="password"
                                      rows="4"
                                      required="required"
                                    />
                                  </div>
                                  <div className="form-group">
                                  <p >Do'nt have a acount? 
                                  <Link href="/auth/register">
                                  <a className="sec-head custom-font text-center" >
                                          <h6
                                            className="wow fadeIn"
                                            data-wow-delay=".5s"
                                          >
                                            Register
                                          </h6>
                                        </a>
                                  </Link>
                                  </p>
                                  </div>
                                  
                                  <button
                                    type="submit"
                                    className="btn-curve btn-lit"
                                  >
                                    
                                    <span>SingUp</span>
                                  </button>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </DarkTheme>
  );
};

export default login;
