import { useContext, useEffect, useState } from "react";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
<<<<<<< HEAD
import { Login } from "./pages/login/Login";
=======
import { FirstPage } from "./pages/firstPage/FirstPage";
import { IPages } from "../interfaces/IPages";
import { Home } from "./pages/home/Home";
import { Languages } from "../Languages";
import AppContext from "../contexts/AppContext";
>>>>>>> 8ecdabcd1506d019bc1f5b1859af78c5d29a5183
function App() {
  const [render,setRender] = useState<number>(0);
  const translate = new Languages();
  const pages:IPages = {
    firstPage: <FirstPage/>,
    login: <Login/>,
    signUp: <SignUp/>,
    home: <Home/>
  }
  const [page,setPage] = useState<any>(pages.firstPage);
  useEffect(()=> {
    localStorage.getItem("user") ? setPage(pages.home) : setPage(pages.firstPage);
  },[])
  return (
<<<<<<< HEAD
    <div>
      {!localStorage.getItem("user") ? (
        <SignUp/>
      ) : 
      (
        <Login/>
      )}
    </div>
=======
    <AppContext.Provider value={{translate,render,setRender}} >
      <div>

        {page}
      </div>
    </AppContext.Provider>
>>>>>>> 8ecdabcd1506d019bc1f5b1859af78c5d29a5183
  );
}

export default App;
