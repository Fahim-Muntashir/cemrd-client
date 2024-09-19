'use client'
import Container from "@/components/Shared/Container";
import { addMessage } from "@/services/actions/message";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const res = await addMessage(data);
    console.log(res);
  };

  return (
    <Container>
      <div className="font-[sans-serif] max-w-6xl max-lg:max-w-3xl mx-auto p-4">
        <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded p-8">
          <h2 className="text-3xl text-gray-800 font-extrabold text-center mb-12">
            Contact us
          </h2>

          <div className="grid lg:grid-cols-2 items-start gap-12">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-gray-800">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <input
                type="text"
                placeholder="Phone No."
                className="w-full bg-gray-100 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600"
                {...register("phoneNumber", { required: "Phone number is required" })}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-gray-100 rounded px-6 text-sm pt-3 focus:bg-transparent focus:outline-blue-600"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 rounded text-sm px-6 py-3 !mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
