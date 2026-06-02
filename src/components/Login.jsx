import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = () => {
    if (!captchaValue) {
      alert("Please complete CAPTCHA");
      return;
    }

    console.log("Form submitted with captcha:", captchaValue);

    // 👉 Here you will call Django API
  };

  return (
    <div>
      <h2>Login</h2>

      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br /><br />

      {/* CAPTCHA HERE */}
      <ReCAPTCHA
        sitekey="6Lf77wYtAAAAALr2bznxIuCkcKe3Z8H-J44OybiY"
        onChange={(value) => setCaptchaValue(value)}
      />

      <br />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;