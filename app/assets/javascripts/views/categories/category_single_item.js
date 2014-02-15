Kickstarter.Views.CategorySingleItem = Backbone.View.extend ( {
  template: JST['categories/single_item'],
  tagName: 'li',
  
  render: function() {
    var content = this.template({cat: this.model});
	this.$el.html(content);
	
	return this;
  }
});