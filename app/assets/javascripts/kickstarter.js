window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialze: function () {
    var $rootEl = $('#content');
    var $sidebar = $('#sidebar');
    var projects = new Kickstarter.Collections.Projects();

    var sidebarView = new Kickstarter.Views.sidebarView();
    $sidebar.html(sidebarView.render().$el);

    projects.fetch({
      success: function () {
        new Kickstarter.Routers.ProjectRouter(projects, $rootEl);
        Backbone.history.start();
      },
      error: function () {
        console.log('Experienced an error in fetching data');
      }
    });
  }
};

