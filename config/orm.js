//require connection
var connection = require("../config/connection");

function createQmarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//translate the string into sql readable query
function translateSql(obj) {
    var arr = [];
    for(var key in obj) {
        var value = obj[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
                arr.push(key + "=" + value)
         }
    }
    return arr.push();
}
// create a variable orm that will have insertions and queries
var orm = { 
    //select function
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM ??;";
        var data = [table]
        connection.query(dbQuery, data, function(err, res ){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //insert one function
    insertOne: function (table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString()+ ") " + "VALUES (" + createQmarks(vals.length) + ") ";

        console.log(dbQuery)
        connection.query(dbQuery, function(err, res ){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    //update function
    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log(dbQuery);
        connection.query(dbQuery, function(err, res ){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },

    deleteOne: function(table, condition, cb) {
        var dbQuery = " DELETE FROM " + table + " WHERE " + condtion; 
        console.log(dbQuery);
        connection.query(dbQuery, function(err, res ){
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;




