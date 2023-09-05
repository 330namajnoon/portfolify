import { useContext, useState } from "react";
import "./styles/SelectLanguage.scss";
import AppContext from "../../../contexts/AppContext";

export function SelectLanguage() {
    const appContext:any = useContext(AppContext);
    const [selectedLanguage,setSLanguage] = useState<number>(0); 
    return (
        <div className="selectLanguage_container">
            <h3>Select language</h3>
            <div></div>
            <select onChange={(e)=> {
                appContext.translate.setLanguage(parseInt(e.target.value));
                appContext.setRender(appContext.render++);
            }}>
                {appContext.translate.languages.map((l:string,index:number) => (
                    <option value={index}>{l}</option>
                ))}
            </select>
        </div>
    );
}