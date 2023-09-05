import { useContext } from "react";
import { SelectLanguage } from "./SelectLanguage";
import "./styles/FirstPage.scss";
import AppContext from "../../../contexts/AppContext";

export function FirstPage() {
    const appContext:any = useContext(AppContext);
    console.log(appContext.translate)
    return (
        <div className="firstPage_container">
            <h1>{appContext.translate.getWord("wellcome")}</h1>
            <SelectLanguage/>
        </div>
    );
}