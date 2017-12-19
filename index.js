module.exports = function (element) {
  var window = global;
  var doc = window.document.documentElement;
  var dimensions = element.getBoundingClientRect();

  return {
    width: Math.max(doc.clientWidth, window.innerWidth || 0) - Math.round(dimensions.left),
    height: Math.max(doc.clientHeight, window.innerHeight || 0) - Math.round(dimensions.top),
  }
}
