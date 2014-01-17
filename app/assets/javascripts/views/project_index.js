Kickstarter.Views.ProjectIndex = Backbone.Collection.extend({
  template: JST['projects/index'],
  tagName: 'ul',
  className: 'projects-index',


  render: function () {
    var that = this;
    that.$el.html(that.template({
      projects: that.collection
    }));
    return this
  },
})