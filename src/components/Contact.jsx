import React, { useRef, useState, useTransition } from 'react';
import 'react-vertical-timeline-component/style.min.css';


export default function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setDone(false);

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLScvLt4ymU0HLTwxi3dFkcCJ89pW9a_zCYnVheEqCRqRU8F0xw/formResponse';
    const formData = new FormData(formRef.current);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      formRef.current.reset();

      startTransition(() => {
        setDone(true);
      });
    } catch (err) {
      console.log('error on form submission', err);
      setError('Something went wrong. Please try again.');
    }
  };

  // Input handler to hide success message on new user input
  const handleInputChange = () => {
    if (done) setDone(false);
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center text-white relative z-10 px-4"
    >
      <div className="w-full text-center mb-12">
       <h3 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch – Let's Collaborate 🚀</h3>
          <p className="text-md md:text-lg text-gray-300">
            Have questions or ideas? I'm just a message away ✨
        </p>

      </div>

      <div className="w-full max-w-[600px] bg-[rgba(17,25,40,0.83)] border border-[rgba(255,255,255,0.125)] rounded-lg shadow-lg">
        <div className="p-6 md:p-8 w-full">
          <h4 className="text-2xl font-semibold text-white mb-6">Email Me 📩</h4>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 rounded-xl w-full shadow-lg"
          >
            <input
              type="text"
              name="entry.2092238618"
              placeholder="Your Name"
              required
              onChange={handleInputChange}
              className="bg-transparent border border-gray-500 text-white p-3 rounded-md placeholder:text-gray-300"
            />
            <input
              type="email"
              name="entry.1556369182"
              placeholder="Your Email"
              required
              onChange={handleInputChange}
              className="bg-transparent border border-gray-500 text-white p-3 rounded-md placeholder:text-gray-300"
            />
            <input
              type="text"
              name="entry.479301265"
              placeholder="Subject"
              required
              onChange={handleInputChange}
              className="bg-transparent border border-gray-500 text-white p-3 rounded-md placeholder:text-gray-300"
            />
            <textarea
              name="entry.1750324900"
              rows="5"
              placeholder="Your Message"
              required
              onChange={handleInputChange}
              className="bg-transparent border border-gray-500 text-white p-3 rounded-md placeholder:text-gray-300"
            ></textarea>

            <button
              type="submit"
              disabled={isPending}
              className="mt-4 inline-block bg-[#854CE6] text-white px-6 py-3 cursor-pointer rounded-full shadow-md transition duration-300 disabled:opacity-50"
            >
              {isPending ? 'Sending...' : 'Send'}
            </button>

            {done && <p className="text-green-400 mt-2">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
