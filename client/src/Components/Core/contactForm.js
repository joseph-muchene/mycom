import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  //onchange handler
  //onChange handler
  const { name, email, message } = formData;
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //submit handler
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ formData });
    const response = await fetch("http://localhost:8000/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          setSuccess("Message sent");
        } else if (resData.status === "fail") {
          setSuccess("Message failed to send");
        }
      })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  };
  return (
    <div>
      <section class="contact ">
        <div class="container">
          <h1 class="text-center text-capitalize" id="contact">
            Contact Us
          </h1>
          {success && (
            <div className="container bg-success">
              <h3 className="text-center p-2 ">{success}</h3>
            </div>
          )}
          <form onSubmit={submitEmail}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                onChange={onchange}
                value={name}
                ariadescribedby="emailHelp"
                placeholder="Provide Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                onChange={onchange}
                value={email}
                placeholder="Provide email"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Message</label>
              <input
                type="text"
                class="form-control"
                name="message"
                onChange={onchange}
                value={message}
                placeholder="Provide Message"
              />
            </div>

            <button type="submit" class="btn btn-dark btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
