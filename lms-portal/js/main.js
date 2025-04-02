document.addEventListener("DOMContentLoaded", function() {
    console.log("LMS Portal Loaded");

    const menuItems = document.querySelectorAll('.sidebar ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
