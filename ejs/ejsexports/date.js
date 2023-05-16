module.exports.getDay = getDay;
module.exports.getMonth = getMonth;

var date = new Date();
function getDay(){
    options={
        day:"numeric",
    }
    return date.toLocaleDateString("en-US", options);
}

function getMonth(){
    options={
        month:"long",
    }
    var month = date.toLocaleDateString("en-US", options);
    return month;
}

module.exports.getYear = function(){
    options={
        year : "numeric",
    }
    return date.toLocaleDateString("en-US", options);
}