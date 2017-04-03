var HN = [];

HN.factory = function(e) {
    return function() {
        HN.push([e].concat(Array.prototype.slice.call(arguments, 0)))
    };
}

HN.on = HN.factory('on')
HN.once = HN.factory('once')
HN.off = HN.factory('off')
HN.emit = HN.factory('emit')

export default HN.load = () => {
  var e = 'hn-button.js';
  if (document.getElementById(e)) return;
  var t = document.createElement('script');
  t.id = e, t.src = '//hn-button.herokuapp.com/hn-button.js';
  var n = document.getElementsByTagName('script')[0];
  n.parentNode.insertBefore(t, n)
}
