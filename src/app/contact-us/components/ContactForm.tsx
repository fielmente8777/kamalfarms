"use client";
import { MainHeading } from "@/components";
import { countries } from "@/data/countryCode";
import {
  Call,
  DropDownWhite,
  Interested,
  Mail,
  Message,
  User,
} from "@/icons/icons";
import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userInterestedIn, setUserInterestedIn] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "abhijeet",
          // Domain: "", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: `${countryCode} ${userPhone}`, // Combine country code and phone number
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        // setCountryCode("+91"); // Reset country code
        setFormRes(false);
        // router.push("/thank-you/");
        alert("Form submitted successfully!");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      icon: <User />,
      type: "text",
      name: "Name*",
      placeholder: "your full name*",
      required: true,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      icon: <Call />,
      name: "Phone Number*",
      placeholder: "Phone Number*",
      required: true,
      content: (
        <div className="flex gap-2 w-full text-base capitalize bg-white border border-white rounded-sm p-3">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-28 bg-white rounded-lg text-textdark focus:outline-none"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-white bg-secondary"
              >
                {`${country.code} ${country.name}`}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="Phone Number*"
            name="Phone Number*"
            placeholder="Mobile number*"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-white placeholder:text-[#A3A3A3] text-white no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      icon: <Mail />,
      type: "email",
      name: "Email Address*",
      placeholder: "email ID*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "div",
      icon: <Interested />,
      type: "select",
      name: "Interested in*",
      placeholder: "Select from below menu",
      required: true,
      value: userMessage,
      content: (
        <div className="relative text-[#A3A3A3] border border-white flex justify-between rounded-sm bg-white overflow-hidden">
          <select
            name="Interested in*"
            id="Interested in*"
            required
            value={userInterestedIn}
            onChange={(e) => setUserInterestedIn(e.target.value)}
            className="w-full appearance-none px-3 py-3 outline-none bg-white rounded-sm"
          >
            <option value="0">Select from below menu</option>
            <option value="1">one</option>
            <option value="2">two</option>
          </select>

          <div
            className="absolute right-3 top-4 pointer-events-none"
            id="select-svg"
          >
            <DropDownWhite />
          </div>
        </div>
      ),
    },
    {
      tag: "textarea",
      icon: <Message />,
      type: "text",
      name: "Message (if any)",
      placeholder:
        "Tell us something about your enquiry. For eg: the no. of guests, tentantive dates, etc. ",
      required: true,
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center gap-5 rounded-md shadow-md w-full h-full bg-bgclr lg:p-10 p-4">
        <MainHeading title="We would love to hear from you" className="heading4" />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            {formData.map((data, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 py-1  bg-white ${data.tag === "textarea" ? "row-span-2 max-md:order-last" : " row-span-1"}`}
              >
                <div key={index}>
                  {/* <label
                    htmlFor={data.name}
                    className="text-white text-base flex items-center gap-4 mb-3"
                  >
                    <span className="">{data.icon}</span>
                    {data.name}
                  </label> */}
                  {data.tag === "div"
                    ? data.content
                    : React.createElement(data.tag, {
                        id: data.name,
                        type: data.type,
                        name: data.name,
                        value: data.value,
                        onChange: data.onChange,
                        placeholder: data.placeholder,
                        required: data.required,
                        autoComplete: "off",
                        spellCheck: "false",
                        rows: "6",
                        className:
                          "w-full bg-white no-spinner lg:p-3 p-2 border border-white resize-none placeholder:text-[#A3A3A3] placeholder:capitalize focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary",
                      })}
                </div>
                {data.name === "phone" && errorMessage && (
                  <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
                )}
                {data.name === "email" && emailErrorMessage && (
                  <p className="text-sm text-red-500 mt-2">
                    {emailErrorMessage}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="text-white w-full bg-primary text-base py-3 px-4 font-semibold hover:bg-primary/80 transition-colors duration-300 ease-in-out"
              disabled={formRes}
            >
              {formRes ? "Submitting..." : "Submit Now"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
