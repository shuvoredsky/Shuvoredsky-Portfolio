import React, { useRef } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8e14lxn",
        "template_5nckh3t",
        form.current,
        "eTnf-L5u95p5qKM2E"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "✅ Thank you! I will get back to you soon.",
            confirmButtonColor: "#3b82f6", // Tailwind's primary color
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "❌ Failed to send your message. Please try again.",
            confirmButtonColor: "#ef4444", // Tailwind's red
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="bg-base-200 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Contact Information
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side - Info */}
          <div className="w-full lg:w-1/2 bg-base-100 shadow-md rounded-xl p-8 space-y-6 text-base-content">
            <div className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-primary text-xl" />
              <span>
                <span className="font-medium">Email:</span>{" "}
                kumarshuvo265@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaPhone className="text-primary text-xl" />
              <span>
                <span className="font-medium">Phone:</span> 01732629543
              </span>
            </div>

            <p className="mt-4 text-base">
              Feel free to reach out to me anytime — I’m always happy to
              connect!
            </p>
          </div>

          {/* Right Side - Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-base-100 shadow-md rounded-xl p-8 space-y-6"
          >
            <div className="form-control">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="input input-bordered w-full bg-base-100"
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
                className="input input-bordered w-full bg-base-100"
              />
            </div>

            <div className="form-control">
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="5"
                required
                className="textarea textarea-bordered w-full bg-base-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
