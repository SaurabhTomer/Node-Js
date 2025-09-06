
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


// module.exports = {
//     addfn: add,
//     subfn:sub,
// }


// module.exports = {      //default exports
//      add,
//     sub,
// }


exports.add = ( a, b) => a + b;

exports.sub = ( a, b) => a + b;