import React, { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const recaptchaContainer = useRef(null);
  const recaptchaWidgetId = useRef(null);
  const SITE_KEY = "6LfkzZIrAAAAADbA7SGk3R_zTv73z7qHvgNyS2u1"; // Replace with your site key

  // Success callback
  function onRecaptchaSuccess(token) {
    setRecaptchaToken(token);
  }

  // Expired callback
  function onRecaptchaExpired() {
    setRecaptchaToken("");
  }

  // Render reCAPTCHA widget
  function renderRecaptcha() {
    if (!window.grecaptcha) {
      console.error("reCAPTCHA not loaded");
      return;
    }

    recaptchaWidgetId.current = window.grecaptcha.render(
      recaptchaContainer.current,
      {
        sitekey: SITE_KEY,
        size: "normal",
        callback: onRecaptchaSuccess,
        "expired-callback": onRecaptchaExpired,
      }
    );
  }

  // Reset reCAPTCHA
  function resetRecaptcha() {
    if (recaptchaWidgetId.current !== null) {
      window.grecaptcha.reset(recaptchaWidgetId.current);
      setRecaptchaToken("");
    }
  }

  // Load reCAPTCHA when component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        renderRecaptcha();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    console.log({ name, email, message, recaptchaToken });

    resetRecaptcha();
  };

  return (
   <section className="w-full px-6 sm:px-12 md:px-20 pb-14 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 id="contact" className="pt-24 pb-20 text-3xl md:text-4xl font-bold">
          <span className="inline-block border-b-4 border-blue-400 pb-5">
            Connect
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.229!2d121.0437!3d14.5534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z!5e0!3m2!1sen!2sPH!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 rounded-xl"
          ></iframe>
        </div>

        {/* Form Start */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl bg-gray-900 p-10"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name M.I. Last Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            ></textarea>

            <div className="flex justify-between items-center">
              

              <button
                type="submit"
                className="px-6 py-2 rounded-full border border-gray-600 text-white hover:bg-gray-800 transition"
              >
                Submit
              </button>
              <div className="flex justify-end mt-2">
              <div ref={recaptchaContainer}></div>
            </div>
            </div>

            
          </form>
        </div>
        {/* Form End */}
      </div>
    </section>
  );
}
