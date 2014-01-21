Kickstarter.Views.UserView = Backbone.View.extend ({
  template: JST['users/profile'],
  className: 'user-profile',
  
  render: function () {
    var content = this.template( model: Kickstarter.Models.User);
	this.$el.html(content);
  }
});