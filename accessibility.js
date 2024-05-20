function increaseFontSize() {
  const size = parseInt(document.getElementsByTagName('html')[0].style.fontSize) || 16;
  document.getElementsByTagName('html')[0].style.fontSize = `${size + 2}px`;
}

function decreaseFontSize() {
  const size = parseInt(document.getElementsByTagName('html')[0].style.fontSize) || 16;
  document.getElementsByTagName('html')[0].style.fontSize = `${size - 2}px`;
}

function highContrast() {
  document.body.classList.contains('highcontrast')
    ? document.body.classList.remove('highcontrast')
    : document.body.classList.add('highcontrast');
}

window.addEventListener('DOMContentLoaded', function () {
  const hcIcon = document.getElementById('high-contrast-icon');
  const hcLabel = document.getElementById('high-contrast-label');

  hcIcon.addEventListener('mouseover', () => hcLabel.style.visibility = 'visible');
  hcIcon.addEventListener('mouseout', () => hcLabel.style.visibility = 'hidden');

  const fiIcon = document.getElementById('font-increase-icon');
  const fiLabel = document.getElementById('font-increase-label');

  fiIcon.addEventListener('mouseover', () => fiLabel.style.display = 'block');
  fiIcon.addEventListener('mouseout', () => fiLabel.style.display = 'none');

  const fdIcon = document.getElementById('font-decrease-icon');
  const fdLabel = document.getElementById('font-decrease-label');

  fdIcon.addEventListener('mouseover', () => fdLabel.style.display = 'block');
  fdIcon.addEventListener('mouseout', () => fdLabel.style.display = 'none');
})
