"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Trigger validation manually
    const isValid = await trigger();
    if (!isValid) return;

    console.log("Form submitted:", data);
  };

  return (
    <div id="contact">
      <div className="w-full relative flex flex-col md:grid md:grid-cols-2 p-6 justify-center items-center min-h-screen">
        {/* <div className="absolute w-1/4 h-1/3 border left-0 border-cyan-300 rounded-t-4xl"></div> */}

        <div className="text-start mx-auto relative h-2/3 w-auto">
          {/* <Image
            src="/images/graph-1.png"
            alt="graph"
            width={900}
            height={600}
            className="absolute hidden md:flex top-12 -left-14 object-contain -z-10"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="absolute -top-18 -right-10 w-32 h-32 md:w-40 md:h-40 opacity-20 pointer-events-none"
          >
            <g fill="#00B8DB">
              <path d="M0 0v120a360 360 0 0 1 360 360h120A480 480 0 0 0 0 0Z"></path>
              <path d="M0 240v120a120 120 0 0 1 120 120h120A240 240 0 0 0 0 240Z"></path>
            </g>
          </svg>
          <p className="md:text-7xl text-5xl text-amber-300 text-shadow-lg hover:text-shadow-amber-50 text-shadow-[#D0083A]  font-obitron font-bold mx-6">
            Contact
          </p>
          <p className="md:text-7xl text-5xl text-amber-300 text-shadow-lg hover:text-shadow-amber-50 text-shadow-[#D0083A] font-bold font-obitron">
            ______Me
          </p>
          <p className="md:text-xl text-lg mt-8 text-amber-50 font-obitron">
            Let's connect!
          </p>
          <div className="absolute bottom-4 w-auto left-0 hidden md:block">
            <p className="text-lg  text-amber-50 font-obitron">
              You can contact me directly at
            </p>
            <p className="text-lg  text-amber-300 font-obitron">
              @thetwaihninsone@gmail.com
            </p>
            <p className="text-lg text-amber-50 font-obitron">
              or through the form instead!
            </p>
          </div>
        </div>
        <form
          method="POST"
          target="_blank"
          action="https://formsubmit.co/thetwaihninsone@gmail.com"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col relative gap-4 w-full md:w-2/3 rounded-t-4xl p-8 h-2/3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="absolute -top-10 -right-16 rotate-45 w-40 h-40 opacity-20 pointer-events-none"
          >
            <path
              d="m394.7 317.4-51.5-25.8a57.7 57.7 0 0 1 0-103.2l51.5-25.8a57.7 57.7 0 1 0-77.4-77.4l-25.7 51.6a57.7 57.7 0 0 1-103.2 0l-25.8-51.5a57.7 57.7 0 1 0-77.3 77.3l51.5 25.8a57.7 57.7 0 0 1 0 103.2l-51.5 25.8a57.7 57.7 0 1 0 77.3 77.3l25.8-51.5a57.7 57.7 0 0 1 103.2 0l25.8 51.5a57.7 57.7 0 1 0 77.4-77.4Z"
              fill="#00B8DB"
            />
          </svg>

          <input
            type="text"
            placeholder="YOUR NAME"
            className="w-full bg-transparent mb-2 border-0 border-b-2 border-cyan-500 text-white focus:border-cyan-300 focus:outline-none placeholder-white py-2"
            {...register("name", { required: true, maxLength: 100 })}
          />
          {errors.name && (
            <p className="text-red-400 text-sm">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" &&
                "Max length is 100 characters."}
            </p>
          )}

          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="w-full bg-transparent mb-2 border-0 border-b-2 border-cyan-500 text-white focus:border-cyan-300 focus:outline-none placeholder-white py-2"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          <textarea
            rows={4}
            placeholder="MESSAGE"
            className="w-full bg-transparent border-0 border-b-2 border-cyan-500 text-white focus:border-cyan-300 focus:outline-none placeholder-white py-2"
            {...register("message", { required: true, maxLength: 2000 })}
          />
          {errors.message && (
            <p className="text-red-400 text-sm">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 characters."}
            </p>
          )}

          <button
            type="submit"
            className="drop-shadow-[0_0_4px_black] mt-4 cursor-pointer font-obitron bg-[#D0083A] text-blue-200 font-semibold px-4 py-2 hover:bg-orange-400 rounded-md bg-blue hover:text-white transition duration-300"
          >
            SEND
          </button>
          <div className="mt-3 w-auto md:hidden">
            <p className="text-md text-amber-50 font-obitron">
              You can contact me directly at
            </p>
            <p className="text-md  text-amber-300 font-obitron">
              @thetwaihninsone@gmail.com
            </p>
            <p className="text-md text-amber-50 font-obitron">
              or through the form instead!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
