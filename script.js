//SYSTEM TIME
const date = new Date();

setInterval(() => {    
    let date = new Date();
    
    let hour = (date.getHours());
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear().toString();

    document.getElementById("hour").innerHTML = hour + ":" + minutes;
    document.getElementById("date").innerHTML = day + "-" + month + "-" + year;
}, 1000);

//VERIFY WINDOWS

setInterval(() => {
    windowqty = document.getElementsByClassName("window").length
    if(windowqty > 0){
        document.getElementById("open-window-point").style.transform = "scale(1)"
        setTimeout(() => {
            document.getElementById("open-window-point").style.display = "block"
        }, 100);        
    }else{
        document.getElementById("open-window-point").style.transform = "scale(0)"
        setTimeout(() => {
            document.getElementById("open-window-point").style.display = "none"
        }, 100);        
    }
}, 100);


//CLOSE WINDOW

document.addEventListener('click', function(event) {
    if (event.target.closest('.window-controls') && event.target.closest('#close-window')) {
        let windowElement = event.target.closest('.window');
        windowElement.style.opacity = "0";
        windowElement.style.transform = "scale(0.9)";
        setTimeout(() => {
            windowElement.remove();
        }, 100);
    }
});

//END CLOSE WINDOW

//MAXIMIZE MMINIMIZE WINDOW

document.addEventListener('click', function(event) {
    if (event.target.closest('.window-controls') && event.target.closest('#maximize-window')) {
        let windowElement = event.target.closest('.window');
        if (!windowElement.classList.contains('maximized')) {
            windowElement.style.top = "0";
            windowElement.style.left = "0";
            windowElement.style.width = "100%";
            windowElement.style.height = "100%";
            windowElement.classList.add('maximized');
        } else {
            windowElement.style.top = "";
            windowElement.style.left = "";
            windowElement.style.width = "";
            windowElement.style.height = "";
            windowElement.classList.remove('maximized');
        }
    }
});

//MAXIMIZE MMINIMIZE WINDOW

//MOVE WINDOWS

let offsetX, offsetY;
let isDragging = false;
let zIndexWindow = 1;

function startDragging(e) {
    if (e.target.id.includes('window-controls')) {
        offsetX = e.clientX - e.target.parentElement.parentElement.getBoundingClientRect().left;
        offsetY = e.clientY - e.target.parentElement.parentElement.getBoundingClientRect().top;
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging && e.target.id.includes('window-controls')) {
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        e.target.parentElement.parentElement.style.left = x + 'px';
        e.target.parentElement.parentElement.style.top = y + 'px';
        e.target.parentElement.parentElement.style.zIndex  = zIndexWindow;
        document.getElementById("menu-bar").style.zIndex = zIndexWindow + 1;
    }
}

function stopDragging(e) {
    isDragging = false;
    zIndexWindow++;
}

//END MOVE WINDOWS

//CREATE NEW WINDOW

let openWindow = document.getElementById('explorer-folder');
let openGba = document.getElementById('gba');

openGba.addEventListener('click', function () {
    var newWindow = document.createElement('div');
    newWindow.classList.add('window');
    newWindow.id = 'window';
    newWindow.style.opacity = "0";
    newWindow.style.transform = "scale(0.9)";

    var borderWindow = document.createElement('div');
    borderWindow.classList.add('border-window');
    borderWindow.id = 'border-window';

    var windowControls = document.createElement('div');
    windowControls.classList.add('window-controls');
    windowControls.id = 'window-controls';

    var minimizeButton = document.createElement('div');
    minimizeButton.innerHTML = '<img src="assets/icons/minimize.png" alt="">';

    var maximizeButton = document.createElement('div');
    maximizeButton.id = 'maximize-window';
    maximizeButton.innerHTML = '<img src="assets/icons/maximize.png" alt="">';

    var closeButton = document.createElement('div');
    closeButton.id = 'close-window';
    closeButton.innerHTML = '<img src="assets/icons/close.png" alt="">';

    windowControls.appendChild(minimizeButton);
    windowControls.appendChild(maximizeButton);
    windowControls.appendChild(closeButton);

    var iframe = document.createElement('iframe');
    iframe.src = 'assets/gba.js.org/index.html';

    borderWindow.appendChild(windowControls);    

    newWindow.appendChild(borderWindow);
    newWindow.appendChild(iframe);

    var desktop = document.getElementById('desktop');

    desktop.appendChild(newWindow);
    setTimeout(() => {
        newWindow.style.opacity = "";
        newWindow.style.transform = "";
    }, 100);
});

openWindow.addEventListener('click', function () {
    var newWindow = document.createElement('div');
    newWindow.classList.add('window');
    newWindow.id = 'window';
    newWindow.style.opacity = "0";
    newWindow.style.transform = "scale(0.9)";

    var borderWindow = document.createElement('div');
    borderWindow.classList.add('border-window');
    borderWindow.id = 'border-window';

    var windowControls = document.createElement('div');
    windowControls.classList.add('window-controls');
    windowControls.id = 'window-controls';

    var minimizeButton = document.createElement('div');
    minimizeButton.innerHTML = '<img src="assets/icons/minimize.png" alt="">';

    var maximizeButton = document.createElement('div');
    maximizeButton.id = 'maximize-window';
    maximizeButton.innerHTML = '<img src="assets/icons/maximize.png" alt="">';

    var closeButton = document.createElement('div');
    closeButton.id = 'close-window';
    closeButton.innerHTML = '<img src="assets/icons/close.png" alt="">';

    windowControls.appendChild(minimizeButton);
    windowControls.appendChild(maximizeButton);
    windowControls.appendChild(closeButton);

    var iframe = document.createElement('iframe');
    iframe.src = 'explorer.html';

    borderWindow.appendChild(windowControls);    

    newWindow.appendChild(borderWindow);
    newWindow.appendChild(iframe);

    var desktop = document.getElementById('desktop');

    desktop.appendChild(newWindow);
    setTimeout(() => {
        newWindow.style.opacity = "";
        newWindow.style.transform = "";
    }, 100);
});

//END CREATE NEW WINDOW