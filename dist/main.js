// Fetch the secret message from the backend (/message) and show it on the page
fetch('/message')
  .then((res) => res.json())
  .then((data) => {
    const p = document.createElement('p');
    p.textContent = 'Backend says: ' + data.secret;
    document.body.appendChild(p);
  })
  .catch((err) => console.error('Failed to load message:', err));
