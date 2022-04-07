// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

let trim = function(){
    console.log("after tremming"  ,"   functionup ".trim())
}

let changeLcase= function(){
    console.log("after lowercasing:",'FunCtIon'.toLowerCase())
}
let changeUcase= function(){
    console.log("after uppercasing:",'FunCtIon'.toUpperCase())
}

    module.exports.trinmString = trim
    module.exports.stringLcase = changeLcase
    module.exports.stringeUcase = changeUcase
