var secondGroups = document.querySelectorAll('.sols-and-mods');


secondGroups.forEach(function (secondGroup) {
    var solution = secondGroup.childNodes[1];
    var module = secondGroup.childNodes[3];

    //Fill background on mouse click
    secondGroup.addEventListener('click', () => {
        //console.log('solution: ' + solution + ' and module: '+ module);
        solution.classList.toggle('active_bg');
        module.classList.toggle('active_bg');
    })

    //Toggle background on mouseover/mouseout
    secondGroup.addEventListener('mouseover', () => {
        //console.log('solution: ' + solution + ' and module: '+ module);
        solution.classList.add('hovered_bg');
        module.classList.add('hovered_bg');
    })

    secondGroup.addEventListener('mouseout', () => {
        //console.log('solution: ' + solution + ' and module: '+ module);
        solution.classList.remove('hovered_bg');
        module.classList.remove('hovered_bg');
    })
})

