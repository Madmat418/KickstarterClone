Kickstarter.Views.CollectionItem = Backbone.View.extend({
  template: JST['projects/collection_item'],
  className: 'col-md-4 hero-unit',
  attributes: {
    style: 'display:inline-block;'
  },

  initialize: function () {
    this.percentage = (this.model.get('current_funding') / this.model.goal) * 100;
  },
  render: function () {
    var content = this.template({ project: this.model, percentage: this.percentage });
    this.$el.html(content);
    return this;
  }
})