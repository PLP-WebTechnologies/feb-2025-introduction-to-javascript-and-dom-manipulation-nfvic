function changeContent() {
    const desc = document.getElementById('description');
    desc.textContent = "The text has been changed!";
    desc.style.color = "blue";
    desc.style.fontWeight = "bold";
    desc.style.backgroundColor = "#e0f7fa";
  }
  
  function addElement() {
    const container = document.getElementById('dynamic-container');
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.textContent = '🟦 New Element Added';
    newDiv.style.padding = '10px';
    newDiv.style.margin = '5px 0';
    newDiv.style.border = '1px solid #333';
    container.appendChild(newDiv);
  }
  
  function removeElement() {
    const container = document.getElementById('dynamic-container');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }
  