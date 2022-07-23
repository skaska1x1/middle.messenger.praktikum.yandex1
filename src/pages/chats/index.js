import Handlebars from "handlebars";
import tpl from "bundle-text:./tpl.hbs";
import "./style.css";
import button from "../../components/button";
import oneChat from "./components/oneChat";
import link from "../../components/link";
import input from "../../components/input";

Handlebars.registerPartial('chats',tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}

// const root = document.getElementById("root").innerHTML = res;