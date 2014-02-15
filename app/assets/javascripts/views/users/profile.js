Kickstarter.Views.UserView = Backbone.View.extend ({
  template: JST['users/show'],
  className: 'user-show',
  
  render: function () {
    var projects = new Kickstarter.Collections.Projects({category_id: 0})
	projects.fetch();
    var that = this;
    var content = this.template( {user: this.model});
	this.$el.html(content);

	this.model.supported_projects.forEach(function (project) {
	  console.log(project);
	  var view = new Kickstarter.Views.CollectionItem({ model: project });
	  that.$('#supports').append(view.render().$el);
	});
	
	that.model.created_projects.forEach(function (project) {
	  var view = new Kickstarter.Views.CollectionItem({ model: project });
	  that.$('#created').append(view.render().$el);
	});
	
	return that;
  }
});