const text = document.querySelector('#text');
const selected = document.querySelector('select')

selected.addEventListener("click", () => text.value = document.querySelector(`[value=${selected.value}]`).textContent.trim());

button.onclick = function() {
  if (text.value.trim().length > 0) { 
    document.querySelector(`[value=${selected.value}]`).textContent = text.value;
    text.value = document.querySelector(`[value=${selected.value}]`).textContent.trim();
  }
}

