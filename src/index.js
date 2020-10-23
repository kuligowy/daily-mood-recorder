import addCalendarEvent from './calendarService.js';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  element.innerHTML = "This is via webpack";
  button.innerHTML = 'Click me to add event and check the console!';
  
  button.onclick = addCalendarEvent;

  element.appendChild(button);
  return element;
}

document.body.appendChild(component());