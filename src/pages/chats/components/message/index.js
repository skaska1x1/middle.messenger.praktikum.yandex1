import Handlebars from "handlebars";
import tpl from "bundle-text:./tpl.hbs";


Handlebars.registerPartial('chats',tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}