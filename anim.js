function Boom() {
    var window = document.getElementById('window');
    var trees = document.getElementById('trees');
    var the_wall = document.getElementById('the_wall');
    var white_wall_shadow = document.getElementById('white_wall_shadow');
    var purple_wall_shadow = document.getElementById('purple_wall_shadow');
    var purple_wall = document.getElementById('purple_wall');
    var window_bar = document.getElementById('window_bar');
    var paper = document.getElementById('paper');
    var papers = document.getElementById('papers');
    var pen = document.getElementById('pen');
    
    document.getElementById('phone').classList.add('phone');
    document.getElementById('display_phone').classList.add('display_phone');
    document.getElementById('bulb').style.display = 'none';
    document.getElementById('mouth').style.transform = 'rotate(180deg) scale(1.3)';
    document.getElementById('forehand_and_paper').style.animationName = undefined;
    document.getElementById('arm_biceps').style.animationName = undefined;
    document.getElementById('eyes').style.animationName = undefined;
    document.getElementById('head').style.animationName = undefined;
    document.getElementById('red_armchair').style.animationName = undefined;
    document.getElementById('hand').style.animationName = undefined;
    document.getElementById('leg').style.animationName = undefined;
    document.getElementById('interviewer').style.animationName = undefined;
    
    window.style.fill = '#c71515';
    window.style.transition = '2s';
    trees.style.fill = '#6d2020';
    trees.style.transition = '2s';
    the_wall.style.fill = '#333333';
    the_wall.style.transition = '2s';
    white_wall_shadow.style.fill = '#1d1d1d';
    white_wall_shadow.style.transition = '2s';
    purple_wall_shadow.style.fill = '#1d1d1d';
    purple_wall_shadow.style.transition = '2s';
    purple_wall.style.fill = '#252525';
    purple_wall.style.transition = '2s';
    window_bar.style.fill = '#1d1d1d';
    window_bar.style.transition = '2s';
    paper.style.opacity = '0';
    paper.style.transform = 'translate(220px, -120px)';
    paper.style.transition = '2s';
    papers.style.opacity = '0';
    papers.style.transform = 'translate(130px, -160px)';
    papers.style.transition = '2s';
    pen.style.opacity = '0';
    pen.style.transform = 'translate(210px, -180px)';
    pen.style.transition = '2s';
}

document.getElementById('light').addEventListener('click', Boom);