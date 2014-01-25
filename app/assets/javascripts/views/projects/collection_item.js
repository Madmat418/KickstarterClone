Kickstarter.Views.CollectionItem = Backbone.View.extend({
  template: JST['projects/collection_item'],

  render: function () {
  console.log(this.model);
    var content = this.template({ project: this.model });
    this.$el.html(content);
    return this;
  }
})