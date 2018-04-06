function initDownloadPhoto() {
    var photoKey = getPhotoKey()
    var photoURL = "//" + API_URL + "/api/passport-photos/" + photoKey + "/bytes";

    // getWidthandHeight(photoURL);

    $('#download-photo-image').attr("src", photoURL);
    $('.download-link').attr("href", photoURL);
    $('.sqs-block-button-element').attr("href", photoURL);
    $('.sqs-block-button-element').attr("download", "PassportPhoto.jpg");
    setTimeout(function () {
        transitionFromTo($('#loading'), $('#download-photo-content'));
        $('#download-photo-content').addClass('centered')
        $('.sqs-block-button-element').text("Download Photo");
    }, 1000);
}
function loadImagetoCanvas(){
    var photoKey = getPhotoKey()
    var photoURL = "//" + API_URL + "/api/passport-photos/" + photoKey + "/bytes";
    var img = new Image();
    img.src = photoURL;
    img.crossOrigin = "Anonymous";
    img.onload = function(){
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 200, 300, 600, 600);
        ctx.drawImage(img, 1000, 300, 600, 600);
        var fourBySixImg = canvas.toDataURL("image/png");
        document.write('<img src="'+fourBySixImg+'"/>');
    }
};
// function getWidthandHeight(url){
//     $("<img/>",{
//         load : function(){
//             console.log("Width= " + this.width + " Height= "+ this.height);
//         },
//         src  : url
//     });
// }