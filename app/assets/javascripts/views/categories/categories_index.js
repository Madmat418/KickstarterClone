Kickstarter.Views.CategoriesIndex = Backbone.View.extend ({
  template: JST['categories/index'],
  tagName: 'ul',
  className: 'hero-unit',
  
  render: function() {
    var that = this
    var content = this.template
    this.$el.html(content);
	var views = [];
	this.collection.each( function (category) {
	  var view = new Kickstarter.Views.CategoryItem({model: category});
	  that.$el.append(view.render().$el);	
	});
   return this;
  }
})