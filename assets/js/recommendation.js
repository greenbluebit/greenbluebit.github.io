function readPressed(event, read) {
    if (event.stopPropagation) {
      event.stopPropagation();   // W3C model
    } else {
        event.cancelBubble = true; // IE model
    }

    if(read.className.includes("read-more")) {
        // currently read-more, moving to read-less
        read.className = "btn btn-default read read-less";
        read.textContent = "Read Less";
        read.parentNode.children[2].className = "recommendation-full";
    } else {
        // currently read-less, moving to read-more
        read.className = "btn btn-default read read-more";
        read.textContent = "Read More";
        read.parentNode.children[2].className = "recommendation-preview";
    }
}