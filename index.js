document.addEventListener('DOMContentLoaded', () => {
  const sampleText = document.querySelector('.sampleText');
  const rangeInput = document.querySelector('.rangeInput');
  const fontSelector = document.querySelector('.fontSelector');

  rangeInput.addEventListener('input', () => {
    sampleText.style.fontSize = rangeInput.value + 'px';
  });

  fontSelector.addEventListener('change', () => {
    sampleText.style.fontFamily = fontSelector.value;
  });
});
