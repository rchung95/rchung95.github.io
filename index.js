function changeTheme() {
    var classList = document.body.classList;
    if (classList.length > 0) {
        classList.remove('dark-theme');
    } else {
        classList.add('dark-theme');
    }   
}
