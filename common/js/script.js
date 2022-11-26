var cnt = [], water = [], percent = [], interval = [], maxPercent = [90, 80, 65], tmpN = 0;

$(document).ready(function () {
  $(document).on('click', '.box', function () {
    percentBox($('.box').index($(this)));
  });
});

function waterInit () {
  var i = 0;
  $(".box").each(function () {
    cnt[i] = $(this).find('.count');
    percent[i] = $(this).find('.count').html();
    water[i] = $(this).find('.water');
    i++;
  });
}

function percentBox(num) {
    percent[num] = 0;
    clearInterval(interval[num]);
    interval[num] = setInterval(function () {
      tmp(num);
    }, 60);
}

function tmp(n) {
    percent[n]++;
    cnt[n].html(percent[n]);
    water[n].css({ 'transform': 'translate(0' + ',' + (100 - percent[n]) + '%)' });
    if (percent[n] == maxPercent[n]) {
      clearInterval(interval[n]);
    }
}
