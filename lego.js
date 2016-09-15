'use strict';

// Метод, который будет выполнять операции над коллекцией один за другим
module.exports.query = function (collection) {
        var phoneBook = collection;
        for (var i = 1; i < arguments.length; i++) {
            phoneBook = arguments[i](phoneBook);
        }
        return phoneBook;
    };


// Оператор reverse, который переворачивает коллекцию
module.exports.reverse = function () {
    return function (collection) {
        var changedCollection = collection.reverse();

        // Возращаем изменённую коллекцию
        return changedCollection;
        console.log(changedCollection);
    };
};

// Оператор limit, который выбирает первые N записей
module.exports.limit = function (n) {
    // Магия
};

module.exports.select = function select () {
    collection.forEach(function(item, i, phoneBook) {
          console.log( i + ": " + item + " (массив:" + phoneBook + ")" );
     });
}


module.exports.filterIn = function filterIn (favoriteFruit) {
};


module.exports.sortBy = function sortBy () {
    var arrSort = phoneBook.sort();
    console.log(arrSort);

};


module.exports.format = function format () {};


// Вам необходимо реализовать остальные операторы:
// select, filterIn, filterEqual, sortBy, format, limit

// Будет круто, если реализуете операторы:
// or и and
