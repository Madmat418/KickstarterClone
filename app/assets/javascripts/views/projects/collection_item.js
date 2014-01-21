Kickstarter.Views.CollectionItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['projects/collection_item'],

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);
    return this;
  }
})