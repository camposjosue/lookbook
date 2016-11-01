function loadTurntable(divId, folder, numImages) {
    var arrayImages = [];
    for (var i = 1; i < numImages + 1; i++) {
        arrayImages.push(folder + '/' + i + '.jpg');
    }
    loadTurntableFromArraytoDiv(divId, arrayImages);
}

function loadTurntableFromArraytoDiv(divId, imageArray) {
    // Add Beginning Tags
    var html = '';
    html += "<ul>";

    // Load Each Image
    for (var i = 0; i < imageArray.length; i++) {
        html += "<li data-img-src='"+ imageArray[i]+ "'></li>"; 
    }

    // Add End Tags
    html += "</ul>";
    document.getElementById(divId).innerHTML = html;
    $('#' + divId).turntable();
}

function createGalleryObject(mainImg, imageNum, title) {
    var folders = mainImg.split("/");
    // New Turntable Div
    var div = folders[folders.length - 2];  
    // Path to Turntable Folder
    var folderPath = "";
    for (var i = 0; i < folders.length - 1; i++) {
        folderPath += folders[i] + '/';
    }
    var galleryObject = {
        mainImg: mainImg,
        numImages: imageNum,
        caption: title,
        folder: folderPath,
        divId: div,
    };
    console.log("gallery object: ", galleryObject);
    return galleryObject;
} 

function loadFancyBoxAndTurntable(galleryObjectArray) {
    var html = "";
    for (var i = 0; i < galleryObjectArray.length; i++){
        html += "<a class='fancybox' href='"+ galleryObjectArray[i].mainImg + "' data-fancybox-group='gallery' title='"+ galleryObjectArray[i].caption +"'>";
        html += "<div id='" + galleryObjectArray[i].divId + "' class='turntable'></div>"
        html += "</a>"
    }
    document.getElementById("container").innerHTML = html;
    
    // Load Turntable into new div
    for (var i = 0; i < galleryObjectArray.length; i++){
        loadTurntable(galleryObjectArray[i].divId, galleryObjectArray[i].folder, galleryObjectArray[i].numImages);
    }
    $(document).ready(function() {
        $('.fancybox').fancybox();
    });
}