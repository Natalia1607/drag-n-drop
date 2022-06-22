//Помещаем в переменную все элементы из группы Тегов
const tagDragged = document.querySelectorAll('.Tag_dragged');
//Помещаем в переменную все элементы из группы Писем
const letterDragged = document.querySelectorAll('.Letter_dragged');

const tagsDropzone = document.querySelector('.Tags_dropzone');

// Перебираем все элементы из группы тегов и присваиваем значение draggable 
tagDragged.forEach ((tagItem) => {
    tagItem.draggable = true;
//Будем отслеживать события dragstart, dragend и drap
    tagItem.addEventListener('dragstart', dragStart);
    tagItem.addEventListener('dragend', dragEnd);
    tagItem.addEventListener('drag', Drag);
});
    
// Перебираем все элементы из группы писем
letterDragged.forEach ((letterItem) => {
//Будем отслеживать события dragenter, dragleave, dragover и drop 
    letterItem.addEventListener('dragenter', dragEnter);
    letterItem.addEventListener('dragleave', dragLeave);
    letterItem.addEventListener('dragover', dragOver);
    letterItem.addEventListener('drop', Drop);
});

tagsDropzone.addEventListener('dragover', overZone);
tagsDropzone.addEventListener('drop', dropZone);

function dragStart(evt) {
    evt.dataTransfer.setData('content', evt.target.id);
    evt.target.classList.add('selected');
}

function dragEnd(evt) {
    evt.target.classList.remove('selected');
}

function Drag(evt) {
    console.log('Drag');
}

//Для создания дополнительных визуальных подсказок во время перетаскивания можно использовать обработчики событий dragenter, dragover и dragleave.
function dragEnter(evt) {
    evt.target.classList.add('Letter_dragovered');
}

function dragLeave(evt) {
    evt.target.classList.remove('Letter_dragovered');
}

function dragOver(evt) {
// Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
    evt.target.classList.remove('Letter_dropped');
}

function overZone(evt) {
   evt.preventDefault();
}

function Drop(evt) {
    let obj = document.getElementById(evt.dataTransfer.getData('content'));
    evt.target.append(obj);
    evt.target.classList.add('Letter_dropped');  
}

function dropZone(evt) {
    let obj = document.getElementById(evt.dataTransfer.getData('content'));
    evt.target.append(obj);
}