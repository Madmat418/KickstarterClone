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
	var categories = new Kickstarter.Collections.Categories();
    $('#sidebar').html(view.render().$el);
    users.fetch();
    categories.fetch({ success: function() {
      projects.fetch({
        success: function () {
          new Kickstarter.Routers.ProjectRouter(projects, users, categories, $rootEl);
          Backbone.history.start();
        },
        error: function () {
          console.log('Experienced an error in fetching data');
        }
      });
	}});
  }
};

$(Kickstarter.initialize);