Kickstarter.Views.UserView = Backbone.View.extend ({
  template: JST['users/show'],
  className: 'user-show',
  
  render: function () {
    var that = this;
	console.log(this.model);
    var content = this.template( {user: this.model});
	this.$el.html(content);
	this.model.get('supported_projects').forEach(function (project) {
	  var view = new Kickstarter.Views.ProjectItem({ model: project });
	  that.$('#supports').append(view.render().$el);
	});
	
	that.model.get('created_projects').forEach(function (project) {
	  var view = new Kickstarter.Views.ProjectItem({ model: project });
	  that.$('#created').append(view.render().$el);
	});
	
	return that;
  }
});