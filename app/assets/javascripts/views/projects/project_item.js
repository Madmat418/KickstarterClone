Kickstarter.Views.ProjectItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['projects/item'],
  initialize: function() {
    console.log('wat');
    this.percentage = (this.current_funding / this.goal);
	console.log(this.current_funding);
	console.log(this.goal);
	console.log(this.current_funding / this.goal);
	console.log(this);
  },

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);
    return this;
  }
})