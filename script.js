const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

// Agregar ícono al botón de menú
menuToggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';

menuToggle.onclick = function () {
    navigation.classList.toggle('active');

    // Alternar el ícono entre "menu" y "close"
    const icon = menuToggle.querySelector('ion-icon');
    icon.setAttribute(
        'name',
        navigation.classList.contains('active') ? 'close-outline' : 'menu-outline'
    );
};
