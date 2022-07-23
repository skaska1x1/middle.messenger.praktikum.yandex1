import Handlebars from "handlebars";
import tpl from "bundle-text:./tpl.hbs";
import "./style.css";
import button from "../../components/button";

Handlebars.registerPartial('register',tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}