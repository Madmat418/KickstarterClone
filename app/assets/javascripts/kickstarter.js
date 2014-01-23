window.Kickstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $('#main');
    var projects = new Kickstarter.Collections.Projects({
	  category_id: 0 });
	var users = new Kickstarter.Collections.Users();
    var view = new Kickstarter.Views.Sidebar();
    $('#sidebar').html(view.render().$el);
    users.fetch();
 
    projects.fetch({
      success: function () {
        new Kickstarter.Routers.ProjectRouter(projects, users, $rootEl);
        Backbone.history.start();
      },
      error: function () {
        console.log('Experienced an error in fetching data');
      }
    });
  }
};

$(Kickstarter.initialize);