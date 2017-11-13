
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    $(document).ready(function() {
        $('[data-toggle="popover"]').popover();
    });

    //     $(document).ready(function() {
    //     $("#myModal").on("hidden.bs.modal", function() {
    //         $("#iframeYoutube").attr("src", "#");
    //     })
    // })

    // function changeVideo(vId) {
    //     var iframe = document.getElementById("iframeYoutube");
    //     iframe.src = "https://www.youtube.com/embed/" + vId;

    //     $("#myModal").modal("show");
    // }
    // $(window).on('load', function() {
    //     $('#myModal').modal('show');
    // });