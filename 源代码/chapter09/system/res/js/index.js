$(function () {
  'use strict'
  // 调用replace方法，具有data-feather属性的所有元素将被与其data-feather属性值相对应的SVG标记替换
  feather.replace()
  //  激活菜单函数
  $(document).ready(function () {
    $('#menulist li > a').click(function (e) {
      $('#menulist li > a').removeClass('active')
      $(this).addClass('active')
    })
  })
}())