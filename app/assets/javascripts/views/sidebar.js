Kickstarter.Views.Sidebar = Backbone.View.extend ( {
  template: JST['sidebar'],
  render: function () {
    var that = this
    var content = this.template( {});
	this.$el.html(content);
	this.collection.each(function (category) {
	  var view = new Kickstarter.Views.CategorySingleItem( {model: category})
	  that.$('.dropdown-menu').append(view.render().$el);
	});

    return this;
  }

})