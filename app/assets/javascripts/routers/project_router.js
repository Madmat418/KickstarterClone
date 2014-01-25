Kickstarter.Routers.ProjectRouter = Backbone.Router.extend ( {
  initialize: function (projects, users, categories, $rootEl) {
    var that = this
    this.users = users;
	this.categories = categories
    this.projects = projects;
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'index',
    'projects/new': 'new',
    'projects/:id': 'show',
	'users/:id': 'profile', 
    'categories/:category_id/projects': 'category'
  },
  
  profile: function (id) {
    console.log(id);
	console.log(this.users);
    var profileView = new Kickstarter.Views.UserView ( {
	  model: this.users.get(id)
	});
	
	this._swapView(profileView);
  },
  
  category: function (category_id) {
    var that = this
	var projects = new Kickstarter.Collections.Projects ( {
	    category_id: category_id
	  })
	projects.fetch({ success: function () {
	  var projectIndex = new Kickstarter.Views.ProjectIndex ( {
        collection: projects
      })
	    that._swapView(projectIndex);
	  }  
    });	
  },

  index: function () {
	var categoryIndex = new Kickstarter.Views.CategoriesIndex ( {
	  collection: this.categories
    })	
	this._swapView(categoryIndex);
  },

  show: function (id) {
    var projectShow = new Kickstarter.Views.ProjectShow ( {
      model: this.projects.get(id)
    });

    this._swapView(projectShow);
  },

  new: function () {
    var newProject = new Kickstarter.Views.NewProject({
      collection: this.projects,
      model: new Kickstarter.Models.Project()
    });

    this._swapView(newProject);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});