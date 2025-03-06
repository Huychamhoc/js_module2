function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";


    let caption = document.createElement("div");
    caption.id = "caption";
    caption.innerText = previewPic.alt;
    caption.style.position = "absolute";
    caption.style.bottom = "10px";
    caption.style.left = "50%";
    caption.style.transform = "translateX(-50%)";
    caption.style.background = "rgba(0, 0, 0, 0.7)";
    caption.style.color = "white";
    caption.style.padding = "5px 10px";
    caption.style.borderRadius = "5px";
    caption.style.fontSize = "16px";


    let oldCaption = document.getElementById("caption");
    if (oldCaption) {
        oldCaption.remove();
    }

    imageDiv.appendChild(caption);
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";


    let oldCaption = document.getElementById("caption");
    if (oldCaption) {
        oldCaption.remove();
    }
}


document.querySelectorAll(".previewPic").forEach(img => {
    img.addEventListener("mouseover", function() {
        upDate(this);
    });
    img.addEventListener("mouseout", undo);
});
