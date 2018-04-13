(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-70814234-1', 'auto');
ga('send', 'pageview');


var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        container: 'body',
        html: true,
        placement: 'top',
        trigger: 'focus',
        content: function() {
            // get the url for the full size img
            var url1 = $(this).data('text');
            var url = $(this).data('full');
            if (url) {
                return url1 + ' <br><img src="' + url + '" style="max-width:100%;"> ';
            } else {
                return url1;
            }


        }
    });
});

// $(document).ready(function() {
//     $("#myModal").on("hidden.bs.modal", function() {
//         $("#iframeYoutube").attr("src", "#");
//     })
// })

// function changeVideo(vId) {
//     var iframe = document.getElementById("iframeYoutube");
//     iframe.src = "https://www.youtube.com/embed/" + vId;

//     $("#myModal").modal("show");
// }

$(window).on('load', function() {
    $('#myModal').modal('show');
});

var currentCallback;

// override default browser alert
window.alert = function(msg, callback) {
    $('.message').text(msg);
    $('.customAlert').css('animation', 'fadeIn 0.3s linear');
    $('.customAlert').css('display', 'inline');
    setTimeout(function() {
        $('.customAlert').css('animation', 'none');
    }, 300);
    currentCallback = callback;
}

$(function() {

    // add listener for when our confirmation button is clicked
    $('.confirmButton').click(function() {
        $('.customAlert').css('animation', 'fadeOut 0.3s linear');
        setTimeout(function() {
            $('.customAlert').css('animation', 'none');
            $('.customAlert').css('display', 'none');
        }, 300);
        // currentCallback();
    })


});

function highlightBlock(id) {
  workspace.highlightBlock(id);
}
        Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');