import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};
const App: React.FC = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      {user ? <LogoutButton></LogoutButton> : <LoginButton></LoginButton>}
    </div>
  );
};
export default App;
