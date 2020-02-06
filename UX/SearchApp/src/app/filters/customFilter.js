angular.module('searchApp').filter("filterReord", ['$filter',function ($filter) {
    return function (items, searchType, name, from, to) {
        var result = [];
        if (searchType == 'searchByName') {
            if (!items) {
                return;
            }
            else if (!name) {
                return items;
            }
            else {
                var term = name.toLowerCase();
                return items.filter(function (object) {
                    var termInFirstName = object.FIRST_NAME.toLowerCase().indexOf(term) > -1;
                    var termInLastName = object.LAST_NAME.toLowerCase().indexOf(term) > -1;
                    return termInFirstName || termInLastName;
                });
            }
        }
        else {
            if (from && !to) {
                result = [];
                for (var i = 0; i < items.length; i++) {
                    var stDate = new Date(items[i].START_DATE);
                    if (stDate >= from) {
                        result.push(items[i]);
                    }
                }
            }
            else if (!from && to) {
                result = [];
                for (var i = 0; i < items.length; i++) {
                    var edDate = new Date(items[i].END_DATE);
                    if (edDate <= to) {
                        result.push(items[i]);
                    }
                }
            }
            else if (from && to) {
                result = [];
                for (var i = 0; i < items.length; i++) {
                    var stDate = new Date(items[i].START_DATE);
                    var edDate = new Date(items[i].END_DATE);
                    if (stDate >= from && edDate <= to) {
                        result.push(items[i]);
                    }
                }
            }
            else {
                return items;
            }
        }
        return result;
    };
}]);