function operate() {
  let hasClass = function (el, className) {
    var regex = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    return regex.test(el.className);
  }

  let addClass = function (el, className) {
    if (hasClass(el, className)) return false;
    el.className += ' ' + className;
    return true;
  }

  let removeClass = function (el, className) {
    if (hasClass(el, className)) {
      var regex = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
      el.className = el.className.replace(regex, '');
      return true;
    }
    return false;
  }
  let show = function (el) {
    el.style.zIndex = '999';
    addClass(el, 'in');
  }
  let hide = function (el) {
    let transition = window.getComputedStyle(el).transition.split(' '),
      transitionTime = transition[transition.indexOf('opacity') + 1];
    removeClass(el, 'in');
    setTimeout(() => { el.style.zIndex = '-1'; }, parseFloat(transitionTime) * 1000);//当模态框向上滑动并消失的时候网页的其它部分再显示出来；
  }
  return { hasClass: hasClass, addClass: addClass, removeClass: removeClass, show: show, hide: hide }
}
let $base = operate();