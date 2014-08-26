var ObservableCollection = require("observable-collection");
module.exports = FilteredCollection;

function FilteredCollection (items, filter) {
    this._filter = filter;
    this._unfiltered = items;
    this._reset = ObservableCollection.prototype.reset;
    ObservableCollection.call(this, this._filtered());
    var self = this;
    filter.on('change', function () {
        self._reset(self._filtered());
    })
}

FilteredCollection.prototype = Object.create(ObservableCollection.prototype);

FilteredCollection.prototype._filtered = function () {
    return this._unfiltered.filter(this._filter);
}

FilteredCollection.prototype.reset = function (unfiltered) {
    this._unfiltered = unfiltered;
    this._reset(this._filtered());
}