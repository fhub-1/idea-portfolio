import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFonts text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&#39;s Next?
      </p>
      <h2 className="font-titleFonts text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Thank you for considering reaching out to me. I would love to hear from
        you! Whether you have a question, suggestion, or just want to say hello,
        we are here to listen. Please feel free to use the button below to get in
        touch with me.I do my best to respond to your message as soon
        as possible.
      </p>
      <Link href="mailto:flutterhub1.21.0@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFonts text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </Link>
    </section>
  );
}

export default Contact;
