Kickstarter.Views.Sidebar = Backbone.View.extend ( {
  template: JST['sidebar'],
  render: function () {
    console.log('arrrrrrrrrrrrrrrrrrrgh');
	console.log(this.collection);
    var that = this
    var content = this.template( {});
	this.$el.html(content);
	this.collection.each(function (category) {
	  console.log('blargh');
	  var view = new Kickstarter.Views.CategoryItem( {model: category})
	  that.$('.dropdown-menu').append(view.render().$el);
	});

    return this;
  }

})