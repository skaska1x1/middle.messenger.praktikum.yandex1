import Handlebars from "handlebars";
import tpl from "bundle-text:./index.hbs";
import "./style.css";
import button from "./components/button";
import fieldset from "./components/fields";
import link from "./components/link";
import input from "./components/input";
import oneChat from "./pages/chats/components/oneChat";

import page1 from "./pages/page1";
import page2 from "./pages/page2";

import login from "./pages/login";
import register from "./pages/register";
import errorPage404 from "./pages/error/errorPage404"
import errorPage500 from "./pages/error/errorPage500"
import chats from "./pages/chats"
import chat from "./pages/chats/chat"
import profile from "./pages/profile";

// console.log(tpl);

 const comp = Handlebars.compile(tpl);
 const res = comp({
    fname: "students",
    btn: button ("btn", "Click this")
});

const root = document.getElementById("root").innerHTML = res;





// -----
// document.getElementById("root").innerHTML = Handlebars.compile(tpl)({
//     fname: "students",
//     btn: button ("btn", "Click this")
// });
// -----

// -----
// import tpl from "./index.hbs";

// const data = {h1: 'Title', content: 'Содержимое'}
// console.log(tpl(data));

// document.getElementById("root").innerHTML = tpl(data)
// -----

// -----
const routes = {
    '/pages/login' : login,
    '/pages/register' : register,
    '/pages/error/errorPage500' : errorPage500,
    '/pages/chats' : chats,
    '/': `<a href='/pages/register'>register</a>---<a href='/pages/login'>login</a>`
}

window.onload = function(evt) {
    const path = window.location.pathname;
    if(Object.keys(routes).find((el)=>el===path)) {
        root.innerHTML = routes[path];
    } else {
        root.innerHTML = errorPage404;
    }
}
// -----