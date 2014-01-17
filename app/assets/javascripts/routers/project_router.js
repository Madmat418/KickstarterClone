Kickstarter.Routers.ProjectRouter = Backbone.Router.extend ( {
  initialize: function (projects, $rootEl) {
    this.projects = projects;
    this.$rootEl = $rootEl;
    console.log('work, damn it')
  },

  routes: {
    '': 'index',
    'projects/:category': 'browse',
    'projects/:id': 'show',
    'projects/new': 'new'
  },

  index: function () {
    var projectIndex = new Kickstarter.Views.ProjectIndex ( {
      category: 'all'
    });

    this._swapView(projectIndex);
  },

  browse: function (category) {
    var categoryIndex = new Kickstarter.Views.ProjectIndex ( {
      category: category
    });

    this._swapView(categoryIndex);
  },

  show: function (id) {
    var projectShow = new Kickstarter.Views.ProjectShow ( {
      model: this.projects.get(id)
    });

    this._swapView(projectShow);
  },

  new: function () {
    var newProject = new Kickstarter.Views.NewProject();

    this._swapView(newProject);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});