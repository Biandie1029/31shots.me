const pages =
["index.html","september.html","october.html","november.html","december.html"];

const currentUrl = window.location.href;
const i = pages.indexOf(currentUrl) 
const arrowUp = document.getElementById("up");
const arrowDown = document.getElementById("down");

function next(){
        i = i === pages.length - 1 // if index at end
            ? 0                    // go to start
            : i + 1;               // else go next
        let goTo = pages[i];
        window.location = goTo;
    }

function prev(){

        i = i === 0            // if index is at start
            ? pages.length - 1 // go to end
            : i - 1;           // else go back one
        let goTo = pages[i];
        window.location = goTo;
    }    

arrowUp.addEventListener("click",next());

arrowDown.addEventListener("click",prev());
  