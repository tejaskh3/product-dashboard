import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <button
          onClick={() => loginWithRedirect()}
          className="px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
