function getPeople(str){
    let hashVal = str.indexOf("#")
    let recipient = str.slice(0,hashVal).replaceAll("%20", " ")
    let sender = str.slice(hashVal+1).replaceAll("%20", " ")
    return [recipient, sender]
}

export default getPeople