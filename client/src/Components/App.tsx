import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";

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
