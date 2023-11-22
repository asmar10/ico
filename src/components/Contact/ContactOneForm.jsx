import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactOneForm = () => {
  const [isLoading, setIsloading] = useState();

  emailjs.init("yxXhFP12b1kpSYyFr"); //prod

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = () => {
    setIsloading(true);
    if (name && email && isValidEmail(email)) {
      const serviceId = "service_1b7y4xn"; //prod

      const templateId = "template_u24ce2l"; //prod

      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => {
          if (response) {
            toast.success("Success", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setName("");
            setEmail("");
            setMessage("");
            setIsloading(false);
          }
          // window.location.reload();
        })

        .then((error) => {
          setIsloading(false);
        });
    } else {
      toast.error(`Invalid or Missing fields`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // console.log("failed");
      setIsloading(false);
    }
  };

  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();

  return (
    <div className="contact-form-wrap">
      {/* <form action="submit" onSubmit="#"> */}
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your Name"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              r
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter you email"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Enter your massage"
        ></textarea>
      </div>
      <div className="submit-btn text-center">
        <button
          disabled={isLoading}
          onClick={() => {
            submit();
          }}
          type="submit"
          className="btn"
        >
          Send Massage
        </button>
      </div>
    </div>
  );
};

export default ContactOneForm;
