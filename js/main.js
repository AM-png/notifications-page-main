document.querySelector('.markAll').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(item => item.style.cssText = "background: transparent")
    document.querySelector('span').textContent = '0'
})