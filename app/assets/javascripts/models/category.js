Kickstarter.Models.Category = Backbone.Model.extend( {
  initialize: function(options) {
    this.id = options.id;
	this.collection = new Kickstarter.Collections.Projects({
	  category_id: this.id
    });
  }
})