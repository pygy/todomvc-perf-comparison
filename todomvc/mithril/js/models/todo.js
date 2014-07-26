

var app = app || {};

(function () {
    'use strict';

    // Todo Model
    app.Todo = function(data) {
        this.title = m.prop(data.title);
        this.completed = m.prop(false);
    };
    
    // List of Todos
    app.storageKey = "todos-mithril"

    app.TodoList = function() {
        var tmp = window.localStorage.getItem(app.storageKey)
        var list = [] //tmp ? JSON.parse(tmp).map(function(data) { return new app.Todo(data) }) : [];
        return list
    };

})();

