import { useState } from 'react';
import './styles/Login.css'

export function Login() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const check_login = (username:string, password:string) => {
        // check if user is correct
        console.log("Username: "+username+", Password: "+password); 
        return true; //it should return false if user does not exist
    }
    return (
        <>
            <form>
                <h1>Login</h1>
                <hr />
                <input type="text" value={user} placeholder=" Username" onChange={(e)=> setUser(e.target.value)}/>
                <br />
                <input type="password" value={pwd} placeholder=" Password" onChange={(e)=> setPwd(e.target.value)}/>
                <br />
                <input className="boton" type="button" value="Enviar" onClick={() => check_login(user, pwd)}/>
            </form>
            <br />
            <a  href="/" onClick={()=> {
                localStorage.removeItem("user");
            }}>logout</a>
            
        </>

    );
}