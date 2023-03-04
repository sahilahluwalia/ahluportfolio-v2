import React, { useState } from "react";
import axios from "axios";
const SubscribeForm = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const FORM_URL = "https://app.convertkit.com/forms/4911146/subscriptions";
  const handleSubmit = async (event) => {
    event.preventDefault();

    const axios = require("axios");
      
    const response = await axios.get(
      "https://gmail.us21.list-manage.com/subscribe/post-json",
      {
        params: {
          u: "aa81d3bfc0c1f3ba793280b88",
          id: "b7f07f685e",
          f_id: "00238be1f0",
          c: "jQuery190028718274223582163_1677842180849",
          EMAIL: "satrader2000@gmail.com",
          b_aa81d3bfc0c1f3ba793280b88_b7f07f685e: "",
          subscribe: "Subscribe",
          _: "1677842180850",
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0",
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Referer: "http://127.0.0.1:5500/",
          "Sec-Fetch-Dest": "script",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
        },
      }
    );

    const data = new FormData(event.target);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });

      setEmail("");
      const json = await response.json();

      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch (err) {
      setStatus("ERROR");
      console.log(err);
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <>
      <div>
        {status === "SUCCESS" && (
          <>
            <p>
              Welcome aboard{name ? `, ${name}` : ""}{" "}
              <span role="img" aria-label="Ship">
                🚢
              </span>
            </p>
            <p>Please check your inbox to confirm the subscription!</p>
          </>
        )}
        {status === "ERROR" && (
          <>
            <p>Oops, something went wrong...</p>
            <p>
              Please,{" "}
              <button onClick={() => setStatus(null)}>try again.</button>
            </p>
          </>
        )}
        {status === null && (
          <>
            <form onSubmit={handleSubmit}>
              <input
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                onChange={handleNameChange}
                value={name}
              />
              <input
                aria-label="Your email address"
                name="email_address"
                placeholder="Your email address"
                required
                type="email"
                onChange={handleEmailChange}
                value={email}
              />
              <button>SUBSCRIBE</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default SubscribeForm;
