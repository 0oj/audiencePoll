var socket = io.connect();
var option;
var pressed = false;

function getHSL(value) {
  return 'hsl(' + (value / 100) * 120 + ',100%,50%)';
}

function toInt(n) {
  return Math.round(Number(n));
};

if (pressed == false) {
  $('#options').click(function() {

    if ($('[value=a]').is(':checked')) {
      $('[for=a]').css('background-color', 'rgb(65, 215, 84)');
      $('[for=b]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=c]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=d]').css('background-color', 'rgb(235, 235, 235)');
      option = 'a';
    }
    if ($('[value=b]').is(':checked')) {
      $('[for=b]').css('background-color', 'rgb(65, 215, 84)');
      $('[for=a]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=c]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=d]').css('background-color', 'rgb(235, 235, 235)');
      option = 'b'
    }
    if ($('[value=c]').is(':checked')) {
      $('[for=c]').css('background-color', 'rgb(65, 215, 84)');
      $('[for=b]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=a]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=d]').css('background-color', 'rgb(235, 235, 235)');
      option = 'c';
    }
    if ($('[value=d]').is(':checked')) {
      $('[for=d]').css('background-color', 'rgb(65, 215, 84)');
      $('[for=b]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=c]').css('background-color', 'rgb(235, 235, 235)');
      $('[for=a]').css('background-color', 'rgb(235, 235, 235)');
      option = 'd';
    }
  });
}

socket.on('show', function(data) {
  var a_percent = toInt(data.a * 100 / data.total);
  var b_percent = toInt(data.b * 100 / data.total);
  var c_percent = toInt(data.c * 100 / data.total);
  var d_percent = toInt(data.d * 100 / data.total);

  if (pressed) {
    $('#options').unbind('click');

    $('[for=a]').text(a_percent + '%');
    $('[for=b]').text(b_percent + '%');
    $('[for=c]').text(c_percent + '%');
    $('[for=d]').text(d_percent + '%');

    $('[for=a]').css('background-color', getHSL(a_percent));
    $('[for=b]').css('background-color', getHSL(b_percent));
    $('[for=c]').css('background-color', getHSL(c_percent));
    $('[for=d]').css('background-color', getHSL(d_percent));

    $('[for=a]').hover(function() {
      $(this).text(data.a);
    }, function() {
      $(this).text(a_percent + '%');
    })
    $('[for=b]').hover(function() {
      $(this).text(data.b);
    }, function() {
      $(this).text(b_percent + '%');
    })
    $('[for=c]').hover(function() {
      $(this).text(data.c);
    }, function() {
      $(this).text(c_percent + '%');
    })
    $('[for=d]').hover(function() {
      $(this).text(data.d);
    }, function() {
      $(this).text(d_percent + '%');
    })

  }
});

$('button').click(function() {
  if (option == null) {
    alert('Select an option! You IDIOT!');
  } else {
    socket.emit('addPoll', option);
    $('button').css('pointer-events', 'none');

    pressed = true;
  }
});

socket.on('count', function(data) {
  $('.text-muted').text('Playing: ' + data.counter);
})
