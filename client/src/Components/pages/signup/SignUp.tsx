
export function SignUp() {
  return (
    <div>
      <h1>SIGNUP</h1>
      <a href="/" onClick={()=> {
        localStorage.setItem("user","dvid");

      }}>Login</a>
    </div>
  );
};