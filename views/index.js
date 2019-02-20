var userFeed = new Instafeed({
    get: 'user',
    userId: '10690061576',
//    limit: 12,
//    resolution: 'standard_resolution',
    resolution: 'thumbnail',
    accessToken: '10690061576.1677ed0.949908866ee542aeaba6709318c26900',
    sortBy: 'most-recent',
    template: '<div class="col-lg-3 gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid instaImg" style="border: 3px solid grey; border-radius: 3px;"/></a></div>'
});
userFeed.run();

// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery:{
        enabled:true
    }
});

$("#contactForm").submit(function(e) {
    if($("#email") && $("#message")) {
        $(".modal-footer").css("display", "block");
        setTimeout(function () {
            // after 2 seconds
            window.location = "/";
        }, 3000)
    };
});
        