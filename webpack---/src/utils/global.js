let obj;

if (typeof window !== "undefined") {
    obj = window;
} else if (typeof global !== "undefined") {
    obj = global;
}

export default obj;