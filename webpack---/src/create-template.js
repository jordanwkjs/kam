import global from "./utils/global";

function createTemplate(component, {
    name
}) {
    component.displayName = name;

    if (typeof global !== "undefined") {
        if (!global.__templates) global.__templates = {};

        global.__templates[name] = component;

        return {
            Template: component,
            name
        };
    }
}

export default createTemplate;