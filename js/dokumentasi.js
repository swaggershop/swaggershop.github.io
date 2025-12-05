function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);

    submenu.classList.toggle('show');
    icon.classList.toggle('rotate-180'); // panah berputar
}