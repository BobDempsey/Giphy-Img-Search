// call this script @ end of body or will not funtion
	
var menus = document.getElementsByClassName('hamburger-menu');

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function () {
        m.classList.toggle('open');
    });
});

// call this script @ end of body or will not funtion