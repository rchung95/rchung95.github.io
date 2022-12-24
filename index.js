function changeTheme() {
    const DARK_THEME = 'dark-theme';
    let classList = document.body.classList;
    if (classList.length > 0) {
        classList.remove(DARK_THEME);
    } else {
        classList.add(DARK_THEME);
    }   
}
