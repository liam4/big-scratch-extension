// Block color: Hue 23, Saturation 57, Brightness 80

// Base ===========================================================
var BSEBase = {};
BSEBase._shutdown = function() {};
BSEBase._getStatus = function() {
    return {status: 2, msg: 'Ready'};
};
BSEBase.alert = function(t) {
    window.alert(t);
};
BSEBase.unregister = function() {
    console.info("Unloading Big Scratch Extension");
    ScratchExtensions.unregister("BSE Logic");
    ScratchExtensions.unregister("BSE Math");
    ScratchExtensions.unregister("BSE Data");
    ScratchExtensions.unregister("Big Scratch Extension");
};
BSEBase.register = function() {
    console.info("Loading Big Scratch Extension");
    ScratchExtensions.register("Big Scratch Extension", this.descriptor, this);
    ScratchExtensions.register("BSE Data", BSEData.descriptor, BSEData);
    ScratchExtensions.register("BSE Logic", BSELogic.descriptor, BSELogic);
    ScratchExtensions.register("BSE Math", BSEMath.descriptor, BSEMath);
};
BSEBase.descriptor = {
    blocks: [
        [' ', 'unload BSE', 'unregister']
    ],
    url: "htmlpreview.github.io/"
};

// Logic ==========================================================
var BSELogic = {};
BSELogic._shutdown = function() {};
BSELogic._getStatus = function() {
    return {status: 2, msg: 'Ready'};
};
BSELogic.nand = function(x, y) {
    return !(x && y);
};
BSELogic.nor = function(x, y) {
    return !(x || y);
};
BSELogic.xor = function(x, y) {
    return (x || y) && !(x && y);
};
BSELogic.xnor = function(x, y) {
    return !((x || y) && !(x && y));
};
BSELogic.trueBool = function() {
    return true;
};
BSELogic.falseBool = function() {
    return false;
};
BSELogic.allOfArrayIsTrue = function(a) {
    for (var i = 0; i < a.length; i++) {
        if (!a) {
            return false;
        }
    }
    return true;
};
BSELogic.allOfArrayIsFalse = function(a) {
    for (var i = 0; i < a.length; i++) {
        if (a) {
            return false;
        }
    }
    return true;
};
BSELogic.descriptor = {
    blocks: [
        ['b', 'true', 'trueBool'],
        ['b', 'false', 'falseBool'],
        ['-'],
        ['b', '%b nand %b', 'nand'],
        ['b', '%b nor %b', 'nor'],
        ['b', '%b xor %b', 'xor'],
        ['b', '%b xnor %b', 'xnor'],
        ['-'],
//        ['b', 'all items in %m.list are true', 'allOfArrayIsTrue'],
//        ['b', 'all items in %m.list are false', 'allOfArrayIsFalse']
    ],
    menus: {
        trueFalse: [true, false]
    }
};

// Math ===========================================================
var BSEMath = {};
BSEMath._shutdown = function() {};
BSEMath._getStatus = function() {
    return {status: 2, msg: 'Ready'};
};
BSEMath.power = function(x, y) {
    return Math.pow(x, y);
};
BSEMath.constPi = function() {
    return Math.PI;
};
BSEMath.constEulersNumber = function() {
    return Math.E;
};
BSEMath.truncatingDivision = function(x, y) {
    return Math.floor(x / y);
};
BSEMath.remainderDivision = function(x, y) {
    return x / y - Math.floor(x / y);
};
BSEMath.descriptor = {
    blocks: [
        ['r', '%n ^ %n', 'power', 2, 5],
        ['r', '%n // %n', 'truncatingDivision', 10, 4],
        ['r', '%n \\\\\\\\ %n', 'remainderDivision', 10, 4],
        ['-'],
        ['r', 'pi', 'constPi'],
        ['r', 'e', 'constEulersNumber']
    ]
}

// Data ===========================================================
var BSEData = {};
BSEData._shutdown = function() {};
BSEData._getStatus = function() {
    return {status: 2, msg: 'Ready'}
};
BSEData.allOfArrayIs = function(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (!(a === b)) {
            return false;
        }
    }
    return true;
};
BSEData.descriptor = {
    blocks: [
        ['r', 'all items in %m.list are %s', 'allOfArrayIs']
    ]
}

// Registering ====================================================
BSEBase.unregister();
BSEBase.register();