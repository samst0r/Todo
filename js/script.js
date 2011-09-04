
$(document).ready(function ($) {
  // put all your jQuery goodness in here.

	Todo = Backbone.Model.extend({
    //Create a model to hold friend atribute
    name: null,
	done: false
  });

  Todos = Backbone.Collection.extend({
    //This is our Friends collection and holds our Friend models
    initialize: function (models, options) {
      this.bind("add", options.view.addTodoLi);
      //Listen for new additions to the collection and call a view function if so
    }
  });

  AppView = Backbone.View.extend({
    el: $(".content"),
    initialize: function () {
      this.todos = new Todos( null, { view: this });
    },
    events: {
      "click #addTask":  "addTodoLi",
    },
    addTodoLi: function (model) {
      //The parameter passed is a reference to the model that was added
	  var todo_model = new Todo({name: 'x'});
	  this.Todos.add( todo_model );
      $("#todo-list").append("<li>" + model.get('name') + "</li>");
      //Use .get to receive attributes of the model
    }
  });

  var appview = new AppView;
 
 	return false;

});








