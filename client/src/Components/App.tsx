import { SignUp } from "./pages/signup/SignUp";
import { Login } from "./pages/login/Login";
function App() {
  return (
    <div>
      {!localStorage.getItem("user") ? (
        <SignUp/>
      ) : 
      (
        <Login/>
      )}
    </div>
  );
}

export default App;
