$(function () {
  var tempTrans = function (f) { return Math.floor((f - 32) / 1.8); }
  var refer = { 'Sun': '周日', 'Mon': '周一', 'Tue': '周二', 'Wed': '周三', 'Thu': '周四', 'Fri': '周五', 'Sat': '周六' }
  var query = function () {
    if ($('input').val()) {
      $('#title').hide();
      $('form').addClass('active');
      $('#box').addClass('active');
      $('main div.contents').remove();
      $('main div.tag').remove();
      $('main').append('<svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="animation-play-state: running; animation-delay: 0s; background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#11acec" stroke-width="10" r="25" stroke-dasharray="117.80972450961724 41.269908169872416" transform="rotate(6.84781 50 50)" style="animation-play-state: running; animation-delay: 0s;"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" begin="0s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animateTransform></circle></svg>');
      $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql',
        data: {
          q: 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + $('input').val() + '")',
          format: 'json',
          env: 'store://datatables.org/alltableswithkeys'
        },
        success: function (data) {
          $('main svg').remove();
          console.log(data);
          if (data.query.results) {
            let condition = data.query.results.channel.item.condition;
            let forecast = data.query.results.channel.item.forecast;
            let weatherHtml = '<section class="selected">\
          <h3>'+ condition.date.replace(condition.date.slice(0, 3), refer[condition.date.slice(0, 3)]) + '</h3>\
          <i class="wi wi-yahoo-'+ condition.code + '"></i>\
          <p>\
            <span>'+ tempTrans(condition.temp) + '</span>\
            <span class="detail">\
              <span>°C</span>\
              <span>'+ condition.text + '</span>\
            </span>\
          </p>\
          <p>'+ tempTrans(forecast[0].low) + '~' + tempTrans(forecast[0].high) + '°C</p>\
          <p>'+ forecast[0].text + '</p>\
        </section>';
            $.each(forecast, (index, value) => {
              if (index !== 0 && index < 5) {
                weatherHtml += '<section>\
          <h3>'+ refer[value.day] + '</h3>\
          <p>'+ value.date + '</p>\
          <i class="wi wi-yahoo-'+ value.code + '"></i>\
          <p>'+ tempTrans(value.low) + '~' + tempTrans(value.high) + '°C</p>\
          <p>'+ value.text + '</p>\
        </section>';
              }
            });
            $('main').append($('<div></div>').addClass('tag').html('Weather for '+data.query.results.channel.location.city+', '+data.query.results.channel.location.region+', '+data.query.results.channel.location.country))
            $('main').append($('<div></div>').addClass('contents').html(weatherHtml).css('display', 'none'));
            $('main div.contents').fadeIn();
          }
          else {
            $('form').after($('<div></div>').addClass('error').text('输入的城市名有误，三秒后返回首页'));
            var reset = function () {
              setTimeout(function () {
                $('div.error').remove();
                location.reload();
              }, 3000);
            }
            reset();
          }
        }
      });
    }
  };
  $('#button').click(query);
  $('input').keyup(function(e){
    console.log(e.which);
    if (e.which == 13){
      query();
    }
  });
});