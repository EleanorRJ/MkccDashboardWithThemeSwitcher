const themeSwitch = document.getElementById('checkbox');

themeSwitch.addEventListener('change', () => {
    console.log('hello');
    document.body.classList.toggle('dark');
});