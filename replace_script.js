var probs;

chrome.storage.sync.get({
    crazyProb: null,
    normalProb: null,
    grayProb: null,
    gifProb: null
}, function(retrievedProbs) {
    probs = retrievedProbs;

    imgs = document.getElementsByTagName('img');
    for (i = 0; i<imgs.length; i++) {
        img = imgs[i];
        original = img.src;
        width = img.width;
        height = img.height;
        if ((width > 0) && (height > 0)) {
            img.src = buildAddress(original, width.toString(), height.toString());
        }
    }

});

function buildAddress(original, width, height) {
    base = buildBaseAddress();
    if (base === undefined) {
        return original;
    }
    return base + width + "/" + height;
}

function buildBaseAddress() {
    baseString = "http://www.placecage.com/";

    r = parseInt(Math.random() * 100);
    if (r <= probs.crazyProb) {
        return baseString + "c/";
    }

    r = parseInt(Math.random() * 100);
    if (r <= probs.normalProb) {
        return baseString;
    }

    r = parseInt(Math.random() * 100);
    if (r <= probs.grayProb) {
        return baseString + "g/";
    }

    r = parseInt(Math.random() * 100);
    if (r <= probs.gifProb) {
        return baseString + "gif/";
    }

}
