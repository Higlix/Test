let isRunning = false;

async function fetchFileUrl(url)
{
    await fetch(url)
    .then(response => response.text())
    .then(text => {
        return (text);
    })
    return ("");
}


// async function test2() {
//     console.log("test2 is called...");
//     await fetch('game/2')
//     .then(response => response.text())
//     .then(text => {
//         console.log(text);

//         const app = document.getElementById("app");
//         const script = document.createElement("script");
//         let canvasl = document.createElement("canvas");
//         isRunning = true;
//         app.innerHTML = "";
//         canvasl.id = "myCanvas";

//         app.appendChild(canvasl);
//         script.type = "module";
//         script.innerHTML = text;
//         app.appendChild(script);
//         script.remove();
//     })
// }

// document.getElementById("bt").addEventListener("click", test);
// document.getElementById("btn").addEventListener("click", test2);