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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio expedita
        incidunt quo? Voluptates cumque blanditiis aspernatur quas eius aliquam
        possimus!
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
