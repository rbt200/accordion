window.onclick = function(e) {    
    foldAll();
    const imgObj = { 'main':0, 'func':1, 'error':2, 'object':3, 'event':4 };    
    const elm = e.target || event.srcElement;
    const classArr = elm.className;
    classArr.includes('ac-list__img') && elm.src.includes('down') === true ? unfold(elm) : fold(elm);
}

function unfold(element) {
    element.src = `./images/${element.name}-up.png`;
    const foldedElem = document.getElementsByName(`${element.name}-content`)[0];
    foldedElem.className = foldedElem.className.replace("ac-list__img-content_visibility_invisible",
        "ac-list__img-content_visibility_visible");
}

function fold(element) {
    element.src = `./images/${element.name}-down.png`;
    const foldedElem = document.getElementsByName(`${element.name}-content`)[0];
    foldedElem.className = foldedElem.className.replace("ac-list__img-content_visibility_visible",
        "ac-list__img-content_visibility_invisible");
}

function foldAll() {
    const unfolded = document.getElementsByClassName("ac-list__img-content_visibility_visible");
    Array.from(unfolded).filter(item => {          
            item.className = item.className.replace("ac-list__img-content_visibility_visible",
            "ac-list__img-content_visibility_invisible");
            const menuItem = document.getElementsByName(item.name.substring(0,item.name.length - 8))[0];            
            menuItem.src = `./images/${item.name.substring(0,item.name.length - 8)}-down.png`;
    });
}