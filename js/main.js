window.onload = function () {
    TweenMax.staggerFrom('.solution', .5, { opacity: 0, delay: 0.25 }, 0.1);
    TweenMax.staggerFrom('.module', .5, { opacity: 0, delay: 0.5 }, 0.1)
}

let secondGroups = document.querySelectorAll('.sols-and-mods');
let productInfo = document.getElementById('product-info');

secondGroups.forEach(function (secondGroup) {
    let solution = secondGroup.childNodes[1];
    let module = secondGroup.childNodes[3];
    let core = document.querySelector('.core_background');
    console.log(secondGroup);

    secondGroup.addEventListener('mouseover', () => {
        solution.classList.add('hovered_bg');
        module.classList.add('hovered_bg');

        switch (secondGroup) {
            case secondGroups[0]: {
                productInfo.innerHTML = `
                <h3>Complaints Management for Life Sciences</h3>
                
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit luctus iaculis ligula phasellus curabitur fringilla orci, scelerisque integer felis interdum nunc vehicula libero vitae neque per dapibus nisi montes. Sagittis hac lacus penatibus laoreet nulla lectus massa posuere vulputate tempus, ultricies ut neque fringilla mauris velit sem libero parturient porta, felis pellentesque platea vestibulum nullam faucibus malesuada vehicula netus. Cursus nam curabitur cubilia ultricies fringilla, imperdiet varius ad integer, tellus iaculis orci ornare.</p>
                
                <p>Quisque sociis integer vehicula mauris semper eu eget sed sociosqu magna libero, in laoreet nibh ligula justo varius curae metus inceptos. Netus cum suscipit montes commodo nulla egestas viverra ultrices, ad blandit sed vulputate dignissim venenatis orci. Risus vivamus varius mauris fermentum imperdiet rhoncus hendrerit, sodales nunc quam montes per pharetra ultricies laoreet, felis facilisi venenatis etiam elementum auctor.</p>`
                break;
            }
            case secondGroups[1]: {
                productInfo.innerHTML = `<h3>Quality by Design</h3>
                
                <p>Sagittis hac lacus penatibus laoreet nulla lectus massa posuere vulputate tempus, ultricies ut neque fringilla mauris velit sem libero parturient porta, felis pellentesque platea vestibulum nullam faucibus malesuada vehicula netus. Cursus nam curabitur cubilia ultricies fringilla, imperdiet varius ad integer, tellus iaculis orci ornare.</p>
                
                <p>Quisque sociis integer vehicula mauris semper eu eget sed sociosqu magna libero, in laoreet nibh ligula justo varius curae metus inceptos. Netus cum suscipit montes commodo nulla egestas viverra ultrices, ad blandit sed vulputate dignissim venenatis orci. Risus vivamus varius mauris fermentum imperdiet rhoncus hendrerit.</p>`
                break;
            }
            case secondGroups[2]: {
                productInfo.innerHTML = `<h3>Non-conformance Handling</h3>
                
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit lacus mauris rhoncus, imperdiet nascetur nibh mollis vitae dignissim iaculis tincidunt. Integer justo elementum eros aliquam semper gravida est suspendisse, donec euismod tortor quis ut taciti velit, sociis lectus fermentum metus imperdiet pharetra facilisi. Odio sociosqu cubilia hendrerit elementum tempus pharetra natoque, proin felis per nisl ut.</p>`
                break;
            }
            case secondGroups[4]: {
                productInfo.innerHTML = `<h3>Supply Chain Quality</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit potenti penatibus rutrum ante parturient, magnis nam eu ullamcorper iaculis nulla faucibus cras semper neque. Sit molestie dictum ipsum nibh nascetur consectetur phasellus volutpat, curae in pharetra euismod quam faucibus fusce, proin duis lobortis nec eget varius feugiat. </p>
                
                <p>Torquent hac congue cras adipiscing quisque ullamcorper nullam rutrum fames cursus vulputate consequat, dolor neque auctor ac pulvinar lectus venenatis ante egestas pellentesque lacus. Sodales mollis habitasse mi laoreet semper facilisis bibendum, potenti elit inceptos cum lobortis mauris metus ultrices, molestie ipsum turpis pulvinar congue praesent. </p>`
                break;
            }
            case secondGroups[3]: {
                productInfo.innerHTML = `<h3>Health & Safety</h3>
                <p>Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.</p>`
                break;
            }
            case secondGroups[5]: {
                productInfo.innerHTML = `<h3>Environmental Management</h3>
                <p>Torquent hac congue cras adipiscing quisque ullamcorper nullam rutrum fames cursus vulputate consequat, dolor neque auctor ac pulvinar lectus venenatis ante egestas pellentesque lacus. Sodales mollis habitasse mi laoreet semper facilisis bibendum, potenti elit inceptos cum lobortis mauris metus ultrices, molestie ipsum turpis pulvinar congue praesent.</p>
                
                <p>Quisque sociis integer vehicula mauris semper eu eget sed sociosqu magna libero, in laoreet nibh ligula justo varius curae metus inceptos. Netus cum suscipit montes commodo nulla egestas viverra ultrices, ad blandit sed vulputate dignissim venenatis orci. Risus vivamus varius mauris fermentum imperdiet rhoncus hendrerit.</p>`
                break;
            }
            case secondGroups[6]: {
                productInfo.innerHTML = `<h3>Enterprise Risk Management</h3>
                <p>Quisque sociis integer vehicula mauris semper eu eget sed sociosqu magna libero, in laoreet nibh ligula justo varius curae metus inceptos. Netus cum suscipit montes commodo nulla egestas viverra ultrices, ad blandit sed vulputate dignissim venenatis orci. Risus vivamus varius mauris fermentum imperdiet rhoncus hendrerit.</p>`
                break;
            }
        }
    })
    secondGroup.addEventListener('mouseout', () => {
        solution.classList.remove('hovered_bg');
        module.classList.remove('hovered_bg');
        productInfo.innerHTML = '';
    })

    secondGroup.addEventListener('click', () => {
        solution.classList.toggle('active_bg');
        module.classList.toggle('active_bg');

        if (solution.classList.contains('active_bg')) {
            core.classList.add('active_bg');
            solution.classList.remove('hovered_bg');
            module.classList.remove('hovered_bg');
        }
        if (document.querySelector(".sols-and-mods .active_bg") == null) {
            core.classList.remove('active_bg');
        }
    })
})
