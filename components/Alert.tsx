import { useState, useEffect } from "react";

const Alert = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } absolute right-0 top-0 m-4 rounded bg-blue-500 px-4 py-3 text-white`}
    >
      <p className="py-2 font-medium">
        Please note that my portfolio is currently a work in progress.
        <a className="font-semibold underline duration-150 hover:text-indigo-100">
          Thank you for your patience and understanding as I continue to update
          it.
        </a>
      </p>
    </div>
  );
};

export default Alert;
