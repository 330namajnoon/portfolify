


export class Languages {
    public languages:any[] = ["english","spanish"];
    private selectedLanguage:string = this.languages[0];
    private language:string = ""


    private translate:any = {
        wellcome: {
            english:"Wellcome to Portfolify",
            spanish:"Bienvenido a Portfolify"
        }
    }


    getWord(word:string):string {
        return this.translate[word][this.selectedLanguage];
    }
    setLanguage(language:number) {
        this.selectedLanguage = this.languages[language];
    }   
}