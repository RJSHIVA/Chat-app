import { useState } from "react";
import axios from "axios";
import "./App.css"; // Adjust the path based on the location of App.css

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page border bg-slate-700 bg-gradient-to-b from-purple-700 via-purple-600 to-blue-500 h-screen flex justify-center items-center p-4 sm:p-8 md:p-12">
      <div className="card border bg-[#B9D9EB] flex flex-col p-8 rounded-md shadow-md w-96">
        {/* Login Form */}
        <form onSubmit={onLogin} className="sm:mx-4 md:mx-8">
          <div className="title text-2xl font-bold mb-6">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="input bg-slate-800 rounded-md"
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
            className="input bg-slate-800 rounded-md mt-3"
          />
          <button
            type="submit"
            className="btn-primary mt-4 px-5 border mx-4 bg-[#E3F988] border-slate-700 rounded-md hover:bg-[#B9D9EB] focus:outline-none focus:ring focus:border-blue-300"
          >
            LOG IN
          </button>
        </form>

        {/* Sign Up Form */}
        <form onSubmit={onSignup} className="mt-6 sm:mx-4 md:mx-8">
          <div className="title text-2xl font-bold mb-6">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="input bg-slate-800 rounded-md"
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
            className="input bg-slate-800 rounded-md mt-3"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input bg-slate-800 rounded-md mt-3"
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            className="input bg-slate-800 rounded-md mt-3"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            className="input bg-slate-800 rounded-md mt-3"
          />
          <button
            type="submit"
            className="btn-primary mt-4 px-5 border mx-4 bg-[#E3F988] border-slate-700 rounded-md hover:bg-[#B9D9EB] focus:outline-none focus:ring focus:border-blue-300"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
