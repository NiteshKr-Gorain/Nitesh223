import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    navigate("/home");
                } else {
                    setMessage(data.message);
                }
            })
            .catch((error) => {
                console.log(error);
                setMessage("Server error");
            });
    };

    return (
        <div>
            <Navbar />

            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <br />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Login
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;