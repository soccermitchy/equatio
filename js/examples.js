// Some examples

E.examples = {};

E.examples.list = {
    "munching squares": ["(x^y)*(t/100)"],
    "munching triangles": ["(x&y)*(t/100)"],
    "noise": ["(function(){var n=Math.random()*0xFF;return n<<16|n<<8|n;})()", "Math.random()*255", 1, 0.3],
    "mandelbrot": ["(function(){var it;var jx=jy=0.0;for(it=0;it<10&&jx*jx+jy*jy<=4;++it){var tmp=2*jx*jy;jx=jx*jx-jy*jy+(-2+3*x/255);jy=tmp+(-1+2*y/255);};return Math.pow(it,5);})()"],
    "unnamed1": ["x<<t>>y", "s<<t>>s", 1, 0.3],
    "tejeez": ["(((50*s)/50)*(((50*s)/50)>>5|(s)>>8))>>((50*s/50)>>16)*(x^y)", "(((50*s)/50)*(((50*s)/50)>>5|(s)>>8))>>((50*s/50)>>16)"]
    "fractal thing?":["x<<y|y/2<<x|((x<<8|x/2<<16|x/4)&(y<<8|y/2<<16|y/4))/4&(t<<8|t%Math.random()<<16|t%Math.random())"]
    "i have no idea.":["t>>x|y<<td|y/x<<t<<td<<td/8|x/y<<t<<td<<td/8|x*y<<t<<td<<td/8|y-x<<t<<td<<td/8|y+x<<t<<td<<td/8"]
    "grany tv image":["td<<t%(y%x)|td<<t*(x*y)+((y/6)%(x+600))"]
};

E.examples.load = function() {
    var list = E.examples.list;

    for (var name in E.examples.list) {
        if (list.hasOwnProperty(name)) {
            var obj = $("<option>" + name + "</option>");
            obj.appendTo($("#examples"));
        }
    }
}

E.examples.select = function(name) {
    var list = E.examples.list;

    if (list.hasOwnProperty(name)) {
        var gfxc = list[name][0] || "";
        var sfxc = list[name][1] || "";

        E.back();
        E.graphics.setCode(gfxc);
        E.sound.setCode(sfxc);
        $("#gfxcode")[0].value = gfxc;
        $("#sfxcode")[0].value = sfxc;

        if (gfxc != "")
            E.graphics.toggle(true);
        else
            E.graphics.toggle(false);
        if (sfxc != "")
            E.sound.set(true);
        else
            E.sound.set(false);

        E.setSpeed(list[name][2] || 1);
        E.sound.setVolume(list[name][3] || 0.5);
        E.pause(false);
    }
}
