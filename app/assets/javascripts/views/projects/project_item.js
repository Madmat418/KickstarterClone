Kickstarter.Views.ProjectItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['projects/item'],

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);
    return this;
  }
})