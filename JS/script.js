
TweenMax.to("#heading", 1, {scale: 2});

TweenMax.to( "#heading", 1, {scale: 1 , delay: 1});

var tl = new TimelineMax({repeat:-1});

tl.staggerTo("li", 0.5, {autoAlpha:1, repeat:1, yoyo:true}, 1);
