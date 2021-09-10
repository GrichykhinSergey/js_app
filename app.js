const text = document.querySelector('#text');
const selected = document.querySelector('select')

if (selected) {
  selected.addEventListener("click", () => text.value = document.querySelector(`[value=${selected.value}]`).textContent.trim());
}

button.onclick = function() {
  if (text.value.trim().length > 0) {
    text.style.borderColor = '#000000';
    document.querySelector(`[value=${selected.value}]`).textContent = text.value;
    text.value = document.querySelector(`[value=${selected.value}]`).textContent.trim();
  }
  else {
    text.style.borderColor = '#FF0000';
  }
}
