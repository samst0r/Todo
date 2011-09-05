(function ($) {

    Todo = Backbone.Model.extend({
        //Create a model to hold todo atribute
        defaults: {
            name: 'Unnamed Task',
            done: false
        },
    });

    Todos = Backbone.Collection.extend({
        //This is our Todos collection and holds our Todo models
        initialize: function (models, options) {
            this.bind("add", options.view.addTodoLi);
            //Listen for new additions to the collection and call a view function if so
        }
    });

    AppView = Backbone.View.extend({
        el: $("body"),
        initialize: function () {
            this.todos = new Todos(null, {
                view: this
            });
            //Create a todos collection when the view is initialized.
            //Pass it a reference to this view to create a connection between the two
        },
        events: {
            "click #addTask": "getInput",
        },
        getInput: function () {
            var todo_name = $('#taskInput').val();
			var todo_model = null;
			
			if (todo_name == '')
            	todo_model = new Todo();	
			else 
				todo_model = new Todo({ name: todo_name })
				
            //Add a new todo model to our todo collection
            this.todos.add(todo_model);
        },
        addTodoLi: function (model) {
            //The parameter passed is a reference to the model that was added
            $("#todo-list").append("<a href='#'><li>" + model.get('name') + "</li></a>");
            //Use .get to receive attributes of the model
        }
    });

    var appview = new AppView;
})(jQuery);