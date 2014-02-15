Kickstarter.Routers.ProjectRouter = Backbone.Router.extend ( {
  initialize: function (projects, users, categories, $rootEl) {
    var that = this
    this.users = users;
	this.categories = categories
    this.projects = projects;
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'home',
	'index': 'index',
    'projects/new': 'new',
    'projects/:id': 'show',
	'users/:id': 'profile', 
    'categories/:category_id/projects': 'category',
	'categories/0/projects/:id': 'show'
  },
  
  home: function () {
    var view = new Kickstarter.Views.Home();
	this._swapView(view);
  },
  
  profile: function (id) {
    this.users.fetch();
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
    var that = this;
    this.projects.fetch({ success: function () {
      var model = that.projects.get(id);
	  var projectShow = new Kickstarter.Views.ProjectShow ( {
        model: that.projects.get(id)
      });
      that._swapView(projectShow);
	},
	  error: function () {
	    console.log('error');
      }
	});
  },

  new: function () {
    var newProject = new Kickstarter.Views.NewProject({
      collection: this.projects
    });

    this._swapView(newProject);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});