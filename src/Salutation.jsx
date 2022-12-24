function salut(str){
    if (str === "m"){
        return ["Cher", "Joyeux Noël et Bonne Année!", "Gros Baisers"]
    }
    else if (str === "f"){
        return ["Chère", "Joyeux Noël et Bonne Année!", "Gros Baisers"]
    }
    else if (str === "p"){
        return ["Chers", "Joyeux Noël et Bonne Année!", "Gros Baisers"]
    }
    else {
        return ["Dear", "I wish you a Merry Christmas and a Happy New Year!", "Love"]
    }
}

export default salut;