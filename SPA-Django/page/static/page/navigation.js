document.addEventListener('click', (e) => {
    const {target} = e;

    if (!target.matches("nav a"))
    {
        console.log("Dev: Didn't match 'nav a' ");
        return ;
    }
    e.preventDefault();
    urlRoute();
});

async function loadGame(endpoints)
{
    const gameHtml = await fetch(endpoints[0])
    .then(response => response.text());
    const gameJs = await fetch(endpoints[1])
    .then(response => response.text());
    
    const script = document.createElement('script');
    const app = document.getElementById('app');
    
    isRunning = true;
    app.innerHTML = await gameHtml;
    script.type = "module";
    script.innerHTML = gameJs;
    app.appendChild(script);
    delete script;
}

async function fetchFileUrl(url)
{
    var html;

    await fetch(url)
    .then(response => response.text())
    .then(text => {
        // console.log(text);
        html = text;
    })
    return (html);
}

const urlRoutes = {
    /* 404 Page */
    404: {
        url: "/404",
        endpoints: {
            0: "game/5",
        },
        title: "404",
        description: "",
    },
    /* Home Page */
    "/": {
        url: "/",
        endpoints: {
            0: "game/4",
        },
        title: "Home",
        description: "",
    },
    /* Profile Page */
    "/profiles": {
        url: "/profile",
        endpoints: {
            0: "game/3",
        },
        title: "Profile",
        description: "",
    },
    /* Game Page */
    "/play-pong" : {
        url: "/play-pong",
        endpoints: {
            0: "game/1",
            1: "game/2"
        },
        title: "Pong Game",
        description: "",
    },
};

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const loadPage = async (endpoints, url) => {
    if (url == "/play-pong")
    {
        loadGame(endpoints);
        return (0);
    }
    isRunning = false;
    const html = await fetch(endpoints[0])
    .then(response => response.text());

    console.log(html);

    const app = document.getElementById("app");

    app.innerHTML = "";
    app.innerHTML = html;
};

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0)
    {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    document.title = route.title;
    console.log('window.title refresh');
    loadPage(route.endpoints, route.url);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();