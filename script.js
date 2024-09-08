document.getElementById('busca').addEventListener('keyup', function() {
    const filter = this.value.toUpperCase();
    const items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        const text = item.textContent || item.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});