import { useContext, useEffect, useState } from "react";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { FirstPage } from "./pages/firstPage/FirstPage";
import { IPages } from "../interfaces/IPages";
import { Home } from "./pages/home/Home";
import { Languages } from "../Languages";
import AppContext from "../contexts/AppContext";
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

    <AppContext.Provider value={{translate,render,setRender}} >
      <div>

        {page}
      </div>
    </AppContext.Provider>
  );
}

export default App;
