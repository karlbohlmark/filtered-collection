var ObservableCollection = require("observable-collection");
module.exports = FilteredCollection;

function FilteredCollection (items, filter) {
    var filteredItems = items.filter(filter);
    ObservableCollection.call(this, filteredItems);
    var self = this;
    filter.on('change', function () {
        self.reset(items.filter(filter));
    })
}

FilteredCollection.prototype = Object.create(ObservableCollection.prototype);