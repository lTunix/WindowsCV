function showContextMenu(event) {
    event.preventDefault();
    
    var contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
    
    document.addEventListener("click", function hideContextMenu() {
      contextMenu.style.display = "none";
      document.removeEventListener("click", hideContextMenu);
    });
  }
  
  // Manejar eventos de contexto dentro de los iframes
  function handleIframeContextMenu(event) {
    event.preventDefault();
    
    var contextMenu = parent.document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    
    var iframe = event.currentTarget;
    var iframeRect = iframe.getBoundingClientRect();
    
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = (iframeRect.top + event.clientY) + "px";
    
    parent.document.addEventListener("click", function hideContextMenu() {
      contextMenu.style.display = "none";
      parent.document.removeEventListener("click", hideContextMenu);
    });
  }
  
  // Obtener todos los iframes y agregarles un manejador de eventos para el menú contextual
  var iframes = document.getElementsByTagName("iframe");
  for (var i = 0; i < iframes.length; i++) {
    iframes[i].contentWindow.document.addEventListener("contextmenu", handleIframeContextMenu);
  }
  