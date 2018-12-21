window.onload = function() {
  TweenMax.staggerFrom('.solution', .5, {opacity:0, delay:0.25},0.1);
  TweenMax.staggerFrom('.module', .5, {opacity:0, delay:0.5},0.1)
}

var solutions = document.querySelectorAll('.solution');
var modules = document.querySelectorAll('.module');
var groups = document.querySelectorAll('.group');

groups.forEach(function(group) {
   console.log(group)
    solutions.forEach(function(solution) {
        solution.addEventListener('mouseover', () => {
        solution.classList.add('active_bg');
        })    
        solution.addEventListener('mouseout', () => {
        solution.classList.remove('active_bg');
      })
    })
})