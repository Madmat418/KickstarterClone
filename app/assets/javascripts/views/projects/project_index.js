Kickstarter.Views.ProjectIndex = Backbone.View.extend({
  template: JST['projects/index'],
  className: 'projects-index',

  render: function () {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.forEach(function (project) {
	  if (project.get('ongoing')) {
        var view = new Kickstarter.Views.CollectionItem({ model: project });
        that.$('#projects').append(view.render().$el);
	  }
    });
    return this;
  }
})