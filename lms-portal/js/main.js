$(document).ready(function() {
    $(".menu a").click(function() {
        $(".menu a").removeClass("active");
        $(this).addClass("active");
    });

    $("table").on("click", ".meeting-link", function(event) {
        event.preventDefault();
        alert("Meeting link clicked!");
    });
});
