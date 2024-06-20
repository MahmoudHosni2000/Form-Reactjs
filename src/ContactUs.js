import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.name.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please enter your name.",
      }));
      return;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }

    if (formData.email.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter your email address.",
      }));
      return;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (formData.phone.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter your phone number.",
      }));
      return;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }

    // All validations passed, submit the form
    console.log("Form Data:", formData);
    toast.success("Successfully toasted!");

    // Clear form inputs
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="flex flex-1 w-full flex-col md:flex-row bg-white">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="relative flex-1 flex flex-col-reverse md:flex-row-reverse items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-6 space-y-4 md:me-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-purple-700 font-normal mb-4 text-center md:text-right">
                CONTACT US
              </h1>
              <p className="text-gray-900 mb-6 text-center md:text-right">
                Greetings! We value your interest. Feel free to contact us for
                any information you need.
              </p>
              <hr />
              <div className="flex flex-col gap-5">
                <div className="rounded-lg shadow-xl border flex items-center border-gray-300 py-2">
                  <input
                    className={`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ${
                      formErrors.name && "border-red-500"
                    }`}
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
                <div className="rounded-lg shadow-xl border flex items-center border-gray-300 py-2">
                  <input
                    className={`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ${
                      formErrors.email && "border-red-500"
                    }`}
                    type="email"
                    placeholder="E-mail"
                    aria-label="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
                <div className="rounded-lg shadow-xl border flex items-center border-gray-300 py-2">
                  <input
                    className={`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ${
                      formErrors.phone && "border-red-500"
                    }`}
                    type="tel"
                    placeholder="Phone"
                    aria-label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-red-500 text-sm">{formErrors.phone}</p>
                )}
                <div className="rounded-lg shadow-xl border flex items-center border-gray-300 py-2">
                  <textarea
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Message"
                    aria-label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="flex">
                  <button className="mx-auto w-1/2 md:w-1/3 justify-center bg-gradient-to-b from-purple-600 to-pink-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full flex-1 md:w-1/2 flex items-center">
            <img
              className="absolute w-full h-screen md:relative md:max-w-full blur-md md:blur-none"
              src="/2812768.svg"
              alt="Contact Us"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
