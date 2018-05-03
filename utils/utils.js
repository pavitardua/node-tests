module.exports.add = (a,b) => a+b;

module.exports.asyncAdd = (a,b,callback) => {
    setTimeout(()=>{
        callback(a+b);
    },10);
};

module.exports.square = (a) => a*a;

module.exports.asyncSquare = (x,callback) => {
    setTimeout(()=>{
        callback(x*x);
    },10);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(" ");
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
};
