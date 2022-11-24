window.addEventListener('DOMContentLoaded', () => {
  
  const textarea = document.querySelector('.textarea');
  const button = document.querySelector('.button');
  const allInput = document.querySelectorAll('.input');
  allInput.forEach(input => {
    input.addEventListener('keyup', () => {
      const data = value();
      stylingButton(data);
      textarea.value = setValue(data);
    });
  });
  
  function value() {
    let text = document.querySelector('#text').value.trim();
    let fontColor = document.querySelector('#font-color').value.trim();
    let border = document.querySelector('#border').value.trim();
    let fontSize = document.querySelector('#font-size').value.trim();
    let borderRadius = document.querySelector('#border-radius').value.trim();
    let paddingTop = document.querySelector('#pt').value.trim();
    let paddingRight = document.querySelector('#pr').value.trim();
    let paddingBottom = document.querySelector('#pb').value.trim();
    let paddingLeft = document.querySelector('#pl').value.trim();
    let bg = document.querySelector('#bg').value.trim();
    
    let data = {
      text: text,
      fontColor: fontColor,
      border: border,
      fontSize: fontSize,
      borderRadius: borderRadius,
      pt: paddingTop,
      pr: paddingRight,
      pb: paddingBottom,
      pl: paddingLeft,
      bg: bg
    }
    
    return data;
  }
  
  function stylingButton(data) {
    button.textContent = data.text == '' ? 'click here' : data.text;
    button.style.color = data.fontColor == '' ? 'black' : data.fontColor;
    button.style.fontSize = data.fontSize == '' ? '13px' : `${data.fontSize}px`;
    button.style.border = data.border == '' ? 'none' : data.border;
    button.style.borderRadius = data.borderRadius == '' ? '0' : `${data.borderRadius}px`;
    button.style.padding = `${data.pt}px ${data.pr}px ${data.pb}px ${data.pl}px`;
    button.style.background = data.bg == '' ? 'silver' : data.bg;
  }
  
  function setValue(data) {
    return `
    button {
      color: ${data.fontColor == '' ? 'black' : data.fontColor};
      font-size: ${data.fontSize == '' ? '13px' : `${data.fontSize}px`};
      border: ${data.border == '' ? 'none' : data.border};
      border-radius: ${data.borderRadius == '' ? '0' : `${data.borderRadius}px`};
      padding: ${`${data.pt}px ${data.pr}px ${data.pb}px ${data.pl}px`};
      background: ${data.bg == '' ? 'silver' : data.bg};
    }`;
  }
  
  const box = document.querySelector('.box-color');
  
  window.addEventListener('keyup', (event) => {
    if (event.target.classList.contains('font-color')) {
      const value = event.target.value.trim();
      box.style.background = (!value) ? '#000' : value;
    }
  });
  
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    if (textarea.value) {
      textarea.select();
      document.execCommand('copy');
      alert('berhasil disalin!');
    }
  });
  
});