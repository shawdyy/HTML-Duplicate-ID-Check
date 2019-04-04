import { stringify } from "querystring";

function check():void {
    let body: any = document.querySelectorAll('body');
    let ids: Array<string> = [];
    let duplicates: Array<Duplicates> = [];
    let num: number = 0;

    cNodes(body, ids, duplicates);

    // console.clear();
    console.log("%c------------------------", "color: darkred; font-weight: bold;");
    console.log("%c-= DUPLICATE ID CHECK =-", "color: darkyellow; font-weight: bold;");
    console.log("%c------------------------", "color: darkred; font-weight: bold;");
    console.log("");
    if(duplicates.length === 0) {
        console.log("%cNo duplicate ids! Congratulations!", "color: green; font-weight: bold;");
    }
    else{
        console.log("%cOh no, there are "+ num.toString() +" id duplicates:", "color: red; font-weight: bold;")
        for(let el of duplicates) {
            num++;
            console.group("ID: " + "%c" + el.elements[0].id, "color: orange; font-weight: bold;"); 
            console.group("Elements:")
            for (let i = 0; i < el.elements.length; i++) {
                console.log(el.elements[i]);
            } 
            console.groupEnd();
            console.groupEnd();
        }
    }
    console.log("");
}


function cNodes(l: any, ids: Array<string>, duplicates: Array<Duplicates>):void {
  
    for(let el of l) {
        if(el.children.length > 0) {
            cNodes(el.children, ids, duplicates);
        }
        else{
            // if(el.id !== "" && ids.includes(el.id)) {
            if(el.id !== "") {
                if(ids.includes(el.id)){
                    if(!duplicates.some(duplicateInArray, el.id)){
                        let d = new Duplicates(el.id);
                        document.querySelectorAll("#" + el.id).forEach((el) => {d.push(el)});
                        duplicates.push(d);
                    }
                }
                else {
                    ids.push(el.id);
                }
            } 
        }
    }
}

function duplicateInArray(el: Duplicates): boolean {
    console.log("el.id: " + el + " this: " + this);
    return !(el.id === this);
}

class Duplicates {

    id: string;
    elements: Array<Element>;

    constructor(id: string) {
        this.id = id;
        this.elements = [];
    }

    push(el: Element){
        this.elements.push(el);
    }

    *[Symbol.iterator](): IterableIterator<any> {
        for(let el of this.elements) {
            yield el;
        }
    }
}

check();