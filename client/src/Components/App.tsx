import { SignUp } from "./pages/signup/SignUp";

function App() {
  return (
    <div>
      {!localStorage.getItem("user") ? (
        <SignUp/>
      ) : 
      (
        <h1>Login</h1>
      )}
    </div>
  );
}

export default App;
