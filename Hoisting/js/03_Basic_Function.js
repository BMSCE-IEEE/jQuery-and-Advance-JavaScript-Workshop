function getNumber() {
    return loadNumber();

    var loadNumber = function() {
        return 100;
    }

    var loadNumber = function() {
        return 200;
    }
}

console.log(getNumber());
