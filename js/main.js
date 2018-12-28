window.onload = function () {
    TweenMax.staggerFrom('.solution', .5, { opacity: 0, delay: 0.25 }, 0.1);
    TweenMax.staggerFrom('.module', .5, { opacity: 0, delay: 0.5 }, 0.1)
}

var secondGroups = document.querySelectorAll('.sols-and-mods');

secondGroups.forEach(function (secondGroup) {
    let solution = secondGroup.childNodes[1];
    let module = secondGroup.childNodes[3];
    let core = document.querySelector('.core_background');

    secondGroup.addEventListener('mouseover', () => {
        solution.classList.add('hovered_bg');
        module.classList.add('hovered_bg');
    })
    secondGroup.addEventListener('mouseout', () => {
        solution.classList.remove('hovered_bg');
        module.classList.remove('hovered_bg');
    })

    secondGroup.addEventListener('click', () => {
        solution.classList.toggle('active_bg');
        module.classList.toggle('active_bg');

        if (solution.classList.contains('active_bg')) {
            core.classList.add('core_active_bg');
            solution.classList.remove('hovered_bg');
            module.classList.remove('hovered_bg');
        }
    })

})

