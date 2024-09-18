var curModalIdx = null;
var fullResSrcs = [];
var counter = 0;


function addArtPiece(id, collection, caption="") {
    var thumbnailSrc = "images/gallery/" + collection + "/" + id + "_thumb.png";
    var fullResSrc = "images/gallery/" + collection + "/" + id + ".png";
    id = collection+id;
    fullResSrcs.push(fullResSrc);

    // Create the art piece HTML
    var artPieceHtml = '<div class="art-piece">';
    artPieceHtml += '<img src="' + thumbnailSrc + '" alt="' + caption + '" id="' + id + '" index=' + counter + '>';
    if (caption != "") {
        artPieceHtml += '<p>' + caption + '</p>';
    }
    artPieceHtml += '</div>';
    counter++;

    // Add the art piece and modal to the page
    var gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', artPieceHtml);
    // gallery.insertAdjacentHTML('afterend', modalHtml);

    // Get the image and modal elements
    var image = document.getElementById(id);

    // Add event listeners to the image and close button
    image.addEventListener("click", function() {
        curModalIdx = parseInt(image.getAttribute("index"));
        document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
        document.getElementById("modal").style.display = "block";
        document.getElementById("leftarrow").style.display = "block";
        document.getElementById("rightarrow").style.display = "block";
    });
}

function addArtVideo(id, collection, url, caption="") {
    var thumbnailSrc = "images/gallery/" + collection + "/" + id + ".mp4";

    // Create the art piece HTML
    var artPieceHtml = '<div class="art-piece">'
    artPieceHtml += '<a href="' + url + '" target="_blank">';
    artPieceHtml += '<video width="100%" playsinline="" autoplay="" loop="" preload="" muted="">';
    artPieceHtml += '<source src="' + thumbnailSrc + '" id="' + id + '" type=video/mp4></video></a>';
    if (caption != "") {
        artPieceHtml += '<p>' + caption + '</p>';
    }
    artPieceHtml += '</div>';

    // Add the art piece and modal to the page
    var gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', artPieceHtml);
}

function addCollection(collection, ids, caption="", captions=null) {
    if (captions == null) {
        captions = [];
        for (var i in ids) {
            captions.push("");
        }
    }
    let gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', '<div class="gallery-row">');
    for (var i = 0; i < ids.length; i++) {
        addArtPiece(ids[i], collection, captions[i]);
    }
    if (caption != "") {
        gallery.insertAdjacentHTML('beforeend', "<p>"+caption+"</p>");
    }
    gallery.insertAdjacentHTML('beforeend', "</div>");
}

function goLeft() {
    if (curModalIdx > 0) {
        curModalIdx--;
    } else {
        curModalIdx = fullResSrcs.length - 1;
    };
    document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
}

function goRight() {
    if (curModalIdx < fullResSrcs.length - 1) {
        curModalIdx++;
    } else {
        curModalIdx = 0;
    };
    document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
}

window.onload = function() {
    var leftarrow = document.getElementById("leftarrow");
    var rightarrow = document.getElementById("rightarrow");
    document.addEventListener("keydown", function(event) {
        if (curModalIdx != null) {
        switch (event.key) {
        case "ArrowRight":
            goRight();
            break;
        case "ArrowLeft":
            goLeft();
            break;
        case "Escape":
            document.getElementById("modal").style.display = "none";
            leftarrow.style.display = "none";
            rightarrow.style.display = "none";
            curModalIdx = null;
            break;
        }
        }
    });
    document.addEventListener("click", function(event) {
        if (event.target == leftarrow) {
            goLeft();
        }
        else if (event.target == rightarrow) {
            goRight();
        }
        else if (!event.target.matches('img')) {
            document.getElementById("modal").style.display = "none";
            leftarrow.style.display = "none";
            rightarrow.style.display = "none";
            curModalIdx = null;
            // activeModal.style.display = "none";
            // activeModal = null;
        }
    });

    let gallery = document.getElementById("gallery");

    addCollection("grilled", ["09", "16", "17"], "",
        ['Grilled violin.',
        'Grilled tennis ball.',
        'Grilled light bulb.']);

    gallery.insertAdjacentHTML('beforeend', '<div class="gallery-row">');
    addArtVideo("orange", "vids", "https://www.instagram.com/p/CnPWggDOJVM/", "Diabolical orange.")
    addArtVideo("town", "vids", "https://www.instagram.com/p/CoVKKUjDqc1/", "Hidden village.")
    addArtVideo("pokemon", "vids", "https://www.instagram.com/p/CnfFzESOTj8/", "Unnatural selection.")
    gallery.insertAdjacentHTML('beforeend', "</div>");

    addCollection("misc", ["lavoix", "gcal", "pain"], '',
        ['La voix de l\'invisible.',
        'Find time on my calendar.',
        'Pain.']);

    gallery.insertAdjacentHTML('beforeend', '<div class="gallery-row">');
    addArtVideo("neural_network", "vids", "https://www.instagram.com/p/CoXZhlZj5NJ/", "Backpropagation.")
    addArtVideo("computer", "vids", "https://www.instagram.com/p/CoShZcRDLqM/", "System update.")
    addArtVideo("mdew", "vids", "https://www.instagram.com/p/CnZ9Fm6OS2J/", "Mountain Dew.")
    gallery.insertAdjacentHTML('beforeend', "</div>");

    addCollection("misc", ["chatgpt", "ssb_sq", "mlisa"], '',
        ['Due in 1 hour.',
        'Nostalgia.',
        'Womanhood.']);

    addCollection("misc", ["geico", "bear", "nascar"], "",
        ['Kart insurance salesman.',
        'Bear market.',
        'Retirement goals.'])
}