Kickstarter.Views.ProjectIndex = Backbone.View.extend({
  template: JST['projects/index'],
  className: 'projects-index',

  render: function () {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function (project) {
      var view = new Kickstarter.Views.ProjectItem({ model: project });
      that.$('#projects').append(view.render().$el);
    });
    return this;
  }
})