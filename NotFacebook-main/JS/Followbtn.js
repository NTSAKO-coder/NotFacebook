document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', function () {
    this.textContent = this.textContent === 'Follow' ? 'Following' : 'Follow';
    this.style.backgroundColor = this.textContent === 'Following' ? '#28a745' : '#0073e6';
    });
  });

