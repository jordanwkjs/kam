import global from "./utils/global";

export function register(name, component) {
    if (typeof global !== "undefined" && !global.__components) {
        global.__components = {};
    }

    global.__components[name] = component;
}

export function useComponents() {
    return global.__components;
}