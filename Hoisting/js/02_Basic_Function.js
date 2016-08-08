function getNumber() {
    var loadNumber = function() {
        return 100;
    }

    return loadNumber();

    var loadNumber = function() {
        return 200;
    }
}

console.log(getNumber());
