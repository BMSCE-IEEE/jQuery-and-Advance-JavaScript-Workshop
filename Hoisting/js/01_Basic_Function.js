function getNumber() {
    function loadNumber() {
        return 100;
    }

    return loadNumber();

    function loadNumber() {
        return 200;
    }
}

console.log(getNumber());
