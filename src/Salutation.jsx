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
    else if (str === "t"){
        return ["Sevgili", "Sana mutlu noeller ve mutlu bir yeni yıl diliyorum!", "Aşk"]
    }
    else {
        return ["Dear", "I wish you a Merry Christmas and a Happy New Year!", "Love"]
    }
}

export default salut;