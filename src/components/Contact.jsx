import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div name="contact" className="h-screen w-full top-20">
      <div>
        <div className="flex flex-col justify-center p-4 m-auto max-w-screen-lg w-full h-full">
          <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
            <p>Contact</p>
          </div>
          <div className="text-2xl rounded-lg text-white p-2 bg-slate-900">
            <p>Please complete the form and click the submit button</p>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const emailRegex =
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                let errorMsg = "";
                if (!(name.length > 0)) {
                  errorMsg += "You must enter a name \n";
                }
                if (!(email.length > 0) || !emailRegex.test(email)) {
                  errorMsg += "You must enter a valid email address \n";
                }
                if (!(message.length > 0)) {
                  errorMsg += "You must enter a message ";
                }

                if (errorMsg.length > 0) {
                  alert(errorMsg);
                } else {
                  alert("Message sent. Thank you!!");
                  setName("");
                  setEmail("");
                  setMessage("");
                }
              }}
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-transparent p-2 my-2 w-full border-2 rounded-lg text-white focus:bg-gray-200 focus:text-slate-900"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Enter your email address"
                className="bg-transparent p-2 my-2 w-full border-2 rounded-lg text-white focus:bg-gray-200 focus:text-slate-900"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows="10"
                placeholder="Message"
                className="bg-transparent p-2 my-2 border-2 w-full rounded-lg text-white focus:bg-gray-200 focus:text-slate-900"
              ></textarea>
              <div>
                <div className="float-right">
                  <button
                    type="submit"
                    className="bg-gray-800 text-center text-gray-400 px-4 py-2 border rounded-lg hover:scale-110 hover:text-gray-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
