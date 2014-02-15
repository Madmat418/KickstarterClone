Kickstarter.Views.Home = Backbone.View.extend({
  template: JST['welcome'],
  render: function() {
    var content = this.template;
	this.$el.html(content);
	return this;
  }
})