'use strict'
(function dragNdrop() {

    let coordX,
        coordY;

    const tagDragged = document.querySelectorAll('.Tag_dragged');
    const letterDragged = document.querySelectorAll('.Letter_dragged');

    for (let i = 0; i < tagDragged.length; ++i) {
        tagDragged[i].draggable = true;

        tagDragged[i].addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/html", "dragstart");
            coordX = e.offsetX;
            coordY = e.offsetY;
        });

        tagDragged[i].addEventListener("dragend", (e) => {
            tagDragged[i].style.position = 'absolute';
            tagDragged[i].style.top = (e.pageY - coordY) + 'px';
            tagDragged[i].style.left = (e.pageX - coordX) + 'px'; 
            console.log("end");
        });
    }
})();