// OP3DSG project page — small helpers

// Copy the BibTeX block to the clipboard
function copyBibtex(btn) {
  const text = document.getElementById('bibtex-content').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const label = btn.querySelector('span:last-child');
    const original = label.innerText;
    label.innerText = 'Copied!';
    setTimeout(() => { label.innerText = original; }, 1500);
  });
}

// Smooth-scroll for in-page anchor links (e.g. the BibTeX button)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
