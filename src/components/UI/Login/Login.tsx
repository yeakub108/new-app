"use client";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        console.log("Login component mounted");

        return () => {
            console.log("Login component unmounted");
        };
    }, []);

    return (
        <div>
            <h1>This is Login</h1>
        </div>
    );
};

export default Login;
