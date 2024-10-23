"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bookingDate: "",
    email: "",
    mobile: "",
    eventType: "",
    howDidYouKnow: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState(null); // Error handling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setIsSubmitted(false);
    setErrorMessage(null);

    setLoader(true)
    try {
      // Make the API call to submit the form
      const response = await fetch(`https://pw3tie9glj.execute-api.ap-south-1.amazonaws.com/production/create-record`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "B5511B23DD5B6EBFC645484A64458"
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log("Form Data Submitted:", result);
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          bookingDate: "",
          email: "",
          mobile: "",
          eventType: "",
          howDidYouKnow: "",
          message: "",
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
        setLoader(false);
      }
  };

  return (
    <>
      <div className="h-screen bg-gray-200 p-4 w-full bg-cover bg-center">
        <div className="pt-12 sm:pl-24">
          <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="255.712" height="46.87" viewBox="0 0 255.712 46.87" fill="#000">
              <g id="Group_1" data-name="Group 1" transform="translate(52 459)">
                <path id="Path_15" data-name="Path 15" d="M783.892,222.331l4.214,7.3h-2.118l-4.178-7.237h-4.026v7.237H775.95V212.31H783.1a5.042,5.042,0,0,1,.787,10.021Zm-6.107-1.122v-7.325h5.32a3.467,3.467,0,0,1,0,6.934l-3.951.038-1.369,1.53v-1.178Z" transform="translate(-717.368 -643.627)" fillRule="evenodd"/>
                <path id="Path_16" data-name="Path 16" d="M453.331,229.631h12.582V228h-9.7l9.653-15.41v-.28H454.706l-1.456,1.631h9.76l-9.679,15.41v.28Z" transform="translate(-443.801 -643.627)" fillRule="evenodd"/>
                <path id="Path_17" data-name="Path 17" d="M930.471,222.759l2.661,6.462h-1.859l-2.607-6.462h-.055l-2.919-7.237a19.862,19.862,0,0,1-.633,1.955L920.3,229.219H918.31l6.567-15.72-.717-1.778h1.766l4.546,11.037h0Z" transform="translate(-838.053 -643.127)" fillRule="evenodd"/>
                <path id="Path_18" data-name="Path 18" d="M606.844,227.042a7.208,7.208,0,1,1,7.208-7.208,7.208,7.208,0,0,1-7.208,7.208Zm8.864-7.208a8.864,8.864,0,1,0-8.864,8.864,8.864,8.864,0,0,0,8.864-8.864Z" transform="translate(-566.495 -642.491)" fillRule="evenodd"/>
                <path id="Path_19" data-name="Path 19" d="M458.573,69.861h1.835V54.171h5.323V52.54H454.71l-1.46,1.631h5.323v15.69Z" transform="translate(-443.801 -508.183)" fillRule="evenodd"/>
                <path id="Path_20" data-name="Path 20" d="M742.52,69.861h10.9V68.23h-9.068V60.64l1.443-1.6h6.326v1.6h-7.77V54.171h8.712V52.54H742.52V69.861Z" transform="translate(-689.028 -508.183)" fillRule="evenodd"/>
                <path id="Path_21" data-name="Path 21" d="M596.33,69.861h1.833V60.64h9.272v9.221h1.833V52.54h-1.833v6.5h-7.829l-1.443,1.6v-8.1H596.33V69.861Z" transform="translate(-565.096 -508.183)" fillRule="evenodd"/>
                <path id="Path_22" data-name="Path 22" d="M88.688,83.753l3.992,6.908H75.5L84.077,75.8l.011-.017L85.813,72.8l.011-.03,12.063-20.9H49.66l5.554,9.65h3.473l-3.82-6.6h17.1L63.311,69.793h0l-1.666,3.024L49.66,93.71H97.887l-5.726-9.954H88.689ZM72.046,90.661H54.867L73.774,57.917l7.811,13.528,1.226-3.879-7.3-12.659h17.17l-4.775,8.278V63.2L84.09,69.8h0L79.7,77.383l-5.92,10.254L66,74.173l-1.274,3.822,7.319,12.668Z" transform="translate(-101.66 -507.606)"/>
                <line id="Line_1" data-name="Line 1" y2="41.952" transform="translate(108.124 -455.829)" fill="white" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.19"/>
                <g id="Group" transform="translate(119.712 -459)">
                  <text id="DELHI_" data-name="DELHI " transform="translate(0 12)" fontSize="13" fontFamily="Interstate-Bold, Interstate" fontWeight="700"><tspan x="0" y="0">DELHI </tspan></text>
                  <text id="CONVENTION_" data-name="CONVENTION " transform="translate(0 27.935)" fontSize="13" fontFamily="Interstate-Light, Interstate" fontWeight="300"><tspan x="0" y="0">CONVENTION </tspan></text>
                  <text id="CENTER" transform="translate(0 43.87)" fontSize="13" fontFamily="Interstate-Light, Interstate" fontWeight="300"><tspan x="0" y="0">CENTER</tspan></text>
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <div className="flex justify-start sm:justify-around gap-10 xl:gap-0 pt-[5rem] w-full flex-wrap">
          <div className="max-w-[400px]">
            <h1 className="contact_logo text-4xl mb-8">Save the Date</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>

          {/* Show success message or error message */}
          {isSubmitted && (
            <div className="absolute top-8 mb-6 text-blue-500 text-center font-semibold">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {errorMessage && (
            <div className="absolute top-8 mb-6 text-red-500 text-center font-semibold">
              Error: {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-[600px] w-full">
            <div className="grid grid-cols-2 gap-4 mb-2 w-full">
              <div>
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                placeholder="Booking Date"
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded px-3 py-3 bg-gray-100 outline-none"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                placeholder="Event type you are looking?"
                type="text"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <input
                placeholder="How Do Know About this?"
                type="text"
                name="howDidYouKnow"
                value={formData.howDidYouKnow}
                onChange={handleChange}
                className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded py-3 text-black px-3 outline-none"
                required
                placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="border text-white bg-black outline-none py-3 px-8 hover:bg-black-200 hover:text-white transition duration-300"
              >
                Send Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
