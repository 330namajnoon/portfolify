import { useState } from "react";

export function Test(){
    const [imputmsg,setImputmsg] = useState("");
    return (
        <>
            <br />
            <input onChange={(e)=> {
                setImputmsg(e.target.value);
            }} type="text" value={imputmsg}/>
            <br />
            <input type="button" value="Enviar" onClick={alertcall}/>
        </>
    )
    function alertcall(){
        alert(imputmsg);
    }
}