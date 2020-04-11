$(function () {
    function picPopUp() {
        $("#pic-pop-out").removeClass("display-hide");
        $("#pic-pop-box").empty();
        var picNumber = document.getElementById(this.id).getAttribute("value");
        var picInnerHTML = `
    <div class="pic-pop-picture position-re" style="background-image: url(../image/drawing/draw${picNumber}.jpg);">
   </div>`
        var $picInnerHTML = $(picInnerHTML);
        $picInnerHTML.appendTo($("#pic-pop-box"));
        $("#pic-pop-bg").click(picExit);
        $("#pic-pop-box").click(picExit);

    }
    $("[id^=drawing-pic-]").click(picPopUp);

    function picExit() {
        $("#pic-pop-out").addClass("display-hide");
        // console.log("ggg");
    }

});