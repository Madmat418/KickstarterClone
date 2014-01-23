Kickstarter.Views.CategoryItem = Backbone.View.extend ( {
  template: JST['categories/item'],
  tagName: 'li',
  
  render: function() {
    console.log(this.model);
    var content = this.template({cat: this.model});
	this.$el.html(content);
	
	return this;
  }
});