import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const App: React.FC = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {user ? <LogoutButton></LogoutButton> : <LoginButton></LoginButton>}
      </h1>
    </div>
  );
};
export default App;
