(() => {
  const form = document.querySelector('#guide-form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const select = form.elements.provider;
    const slug = select.selectedOptions[0].textContent.toLowerCase().replaceAll(' ', '-');
    const query = new URLSearchParams(new FormData(form));
    location.assign(`/states/${slug}/?${query}`);
  });
})();
