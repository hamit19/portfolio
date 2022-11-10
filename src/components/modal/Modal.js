import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { Puff } from "react-loader-spinner";

const Modal = ({ open, setOpen }) => {
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);

  if (!open) return null;

  const handleModalOpen = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        "service_b4l06ch",
        "template_7laudol",
        formRef.current,
        "bkycFJjM9qLpmI0A5"
      )
      .then(
        (result) => {
          formRef.current.reset();
          toast(
            "Great! Your message successfully sent, please check your spam in inbox of email if you have not gotten any reply yet."
          );
          setOpen(false);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Something went wrong! please wait a moment and resend your message"
          );
          setIsSending(false);
        }
      );
  };

  return (
    <div
      onClick={(e) => handleModalOpen(e)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-80 bg-slate-900"
    >
      <AiOutlineClose
        size={32}
        className="absolute cursor-pointer top-8 right-8 text-gray-50 hover:text-rose-600 custom-transition"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-full sm:w-[500px] p-8 overflow-hidden rounded-lg bg-slate-800 "
      >
        <h1 className="pb-8 text-indigo-300 font-lg ">
          Send Your Message to Me!
        </h1>
        <form
          onSubmit={(e) => sendEmail(e)}
          ref={formRef}
          className="flex flex-col w-full gap-4 m-auto text-xs sm:w-96"
        >
          <input
            required
            className="px-4 py-2 text-indigo-300 border border-indigo-300 rounded-md outline-none custom-transition focus:shadow-2xl focus:border-indigo-400 bg-slate-700"
            type="text"
            name="from_name"
            placeholder="Enter your full name"
          />
          <input
            required
            className="px-4 py-2 text-indigo-300 border border-indigo-300 rounded-md outline-none custom-transition focus:shadow-2xl focus:border-indigo-400 bg-slate-700"
            type="email"
            name="from_email"
            placeholder="Enter your E-mail"
          />
          <input
            required
            className="px-4 py-2 text-indigo-300 border border-indigo-300 rounded-md outline-none custom-transition focus:shadow-2xl focus:border-indigo-400 bg-slate-700"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            required
            className="px-4 py-2 text-indigo-300 border border-indigo-300 rounded-md outline-none custom-transition focus:shadow-2xl focus:border-indigo-400 bg-slate-700"
            name="message"
            placeholder="Please write your message here..."
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center primary-btn "
          >
            {isSending ? (
              <Puff height="25" width="25" color={"#fff"} />
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
