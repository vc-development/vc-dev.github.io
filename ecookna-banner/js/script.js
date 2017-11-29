$(function() {

    $(".sparkley").sparkleh({
        color: "rainbow", // color: ["#ff0080", "#ff0080", "#0000FF"] // rainbow as a color generates random rainbow colros
        count: 100, // count determines number of sparkles
        // speed: 0.4, // speed allows us to control... the ... velocity
        overlap: 10 // overlap allows sparkles to migrate... watch out for other dom elements though.
    });

});

$.fn.sparkleh = function(options) {

    return this.each(function(k, v) {

        var $this = $(v).css("position", "relative");

        var settings = $.extend({
            width: $this.outerWidth(),
            height: $this.outerHeight(),
            color: "#FFFFFF",
            count: 30,
            overlap: 0,
            speed: 1
        }, options);

        var sparkle = new Sparkle($this, settings);

        $this.on({
            "mouseover focus": function(e) {
                sparkle.over();
            },
            "mouseout blur": function(e) {
                sparkle.out();
            }
        });

    });

}

function Sparkle($parent, options) {
    this.options = options;
    this.init($parent);
}

Sparkle.prototype = {

    "init": function($parent) {

        var _this = this;

        this.$canvas =
            $("<canvas>")
            .addClass("sparkle-canvas")
            .css({
                position: "absolute",
                top: "-" + _this.options.overlap + "px",
                left: "-" + _this.options.overlap + "px",
                "pointer-events": "none"
            })
            .appendTo($parent);

        this.canvas = this.$canvas[0];
        this.context = this.canvas.getContext("2d");

        this.sprite = new Image();
        this.sprites = [0, 6, 13, 20];
        this.sprite.src = this.datauri;

        this.canvas.width = this.options.width + (this.options.overlap * 2);
        this.canvas.height = this.options.height + (this.options.overlap * 2);


        this.particles = this.createSparkles(this.canvas.width, this.canvas.height);

        this.anim = null;
        this.fade = false;

    },

    "createSparkles": function(w, h) {

        var holder = [];

        for (var i = 0; i < this.options.count; i++) {

            var color = this.options.color;

            if (this.options.color == "rainbow") {
                color = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
            } else if ($.type(this.options.color) === "array") {
                color = this.options.color[Math.floor(Math.random() * this.options.color.length)];
            }

            holder[i] = {
                position: {
                    x: Math.floor(Math.random() * w),
                    y: Math.floor(Math.random() * h)
                },
                style: this.sprites[Math.floor(Math.random() * 4)],
                delta: {
                    x: Math.floor(Math.random() * 1000) - 500,
                    y: Math.floor(Math.random() * 1000) - 500
                },
                size: parseFloat((Math.random() * 2).toFixed(2)),
                color: color
            };

        }

        return holder;

    },

    "draw": function(time, fade) {

        var ctx = this.context;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = 0; i < this.options.count; i++) {

            var derpicle = this.particles[i];
            var modulus = Math.floor(Math.random() * 7);

            if (Math.floor(time) % modulus === 0) {
                derpicle.style = this.sprites[Math.floor(Math.random() * 4)];
            }

            ctx.save();
            ctx.globalAlpha = derpicle.opacity;
            ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);

            if (this.options.color) {

                ctx.globalCompositeOperation = "source-atop";
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = derpicle.color;
                ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);

            }

            ctx.restore();

        }

    },

    "update": function() {

        var _this = this;

        this.anim = window.requestAnimationFrame(function(time) {

            for (var i = 0; i < _this.options.count; i++) {

                var u = _this.particles[i];

                var randX = (Math.random() > Math.random() * 2);
                var randY = (Math.random() > Math.random() * 3);

                if (randX) {
                    u.position.x += ((u.delta.x * _this.options.speed) / 1500);
                }

                if (!randY) {
                    u.position.y -= ((u.delta.y * _this.options.speed) / 800);
                }

                if (u.position.x > _this.canvas.width) {
                    u.position.x = -7;
                } else if (u.position.x < -7) {
                    u.position.x = _this.canvas.width;
                }

                if (u.position.y > _this.canvas.height) {
                    u.position.y = -7;
                    u.position.x = Math.floor(Math.random() * _this.canvas.width);
                } else if (u.position.y < -7) {
                    u.position.y = _this.canvas.height;
                    u.position.x = Math.floor(Math.random() * _this.canvas.width);
                }

                if (_this.fade) {
                    u.opacity -= 0.02;
                } else {
                    u.opacity -= 0.005;
                }

                if (u.opacity <= 0) {
                    u.opacity = (_this.fade) ? 0 : 1;
                }

            }

            _this.draw(time);

            if (_this.fade) {
                _this.fadeCount -= 1;
                if (_this.fadeCount < 0) {
                    window.cancelAnimationFrame(_this.anim);
                } else {
                    _this.update();
                }
            } else {
                _this.update();
            }

        });

    },

    "cancel": function() {

        this.fadeCount = 100;

    },

    "over": function() {

        window.cancelAnimationFrame(this.anim);

        for (var i = 0; i < this.options.count; i++) {
            this.particles[i].opacity = Math.random();
        }

        this.fade = false;
        this.update();

    },

    "out": function() {

        this.fade = true;
        this.cancel();

    },

    "datauri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="

};

// // Fireworks (aminejs)
// document.addEventListener('DOMContentLoaded', function() {
//
//     window.human = false;
//
//     var canvasEl = document.querySelector('.fireworks');
//     var ctx = canvasEl.getContext('2d');
//     var numberOfParticules = 30;
//     var pointerX = 0;
//     var pointerY = 0;
//     var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
//     var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
//
//     function setCanvasSize() {
//         canvasEl.width = window.innerWidth * 2;
//         canvasEl.height = window.innerHeight * 2;
//         canvasEl.style.width = window.innerWidth + 'px';
//         canvasEl.style.height = window.innerHeight + 'px';
//         canvasEl.getContext('2d').scale(2, 2);
//     }
//
//     function updateCoords(e) {
//         pointerX = e.clientX || e.touches[0].clientX;
//         pointerY = e.clientY || e.touches[0].clientY;
//     }
//
//     function setParticuleDirection(p) {
//         var angle = anime.random(0, 360) * Math.PI / 180;
//         var value = anime.random(50, 180);
//         var radius = [-1, 1][anime.random(0, 1)] * value;
//         return {
//             x: p.x + radius * Math.cos(angle),
//             y: p.y + radius * Math.sin(angle)
//         }
//     }
//
//     function createParticule(x, y) {
//         var p = {};
//         p.x = x;
//         p.y = y;
//         p.color = colors[anime.random(0, colors.length - 1)];
//         p.radius = anime.random(16, 32);
//         p.endPos = setParticuleDirection(p);
//         p.draw = function() {
//             ctx.beginPath();
//             ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//             ctx.fillStyle = p.color;
//             ctx.fill();
//         }
//         return p;
//     }
//
//     function renderParticule(anim) {
//         for (var i = 0; i < anim.animatables.length; i++) {
//             anim.animatables[i].target.draw();
//         }
//     }
//
//     function animateParticules(x, y) {
//         var particules = [];
//         for (var i = 0; i < numberOfParticules; i++) {
//             particules.push(createParticule(x, y));
//         }
//         anime.timeline().add({
//                 targets: particules,
//                 x: function(p) {
//                     return p.endPos.x;
//                 },
//                 y: function(p) {
//                     return p.endPos.y;
//                 },
//                 radius: 0.1,
//                 duration: anime.random(1200, 1800),
//                 easing: 'easeOutExpo',
//                 update: renderParticule
//             });
//     }
//
//     var render = anime({
//         duration: Infinity,
//         update: function() {
//             ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
//         }
//     });
//
//     document.addEventListener(tap, function(e) {
//         window.human = true;
//         render.play();
//         updateCoords(e);
//         animateParticules(pointerX, pointerY);
//     }, false);
//
//     var centerX = window.innerWidth / 2;
//     var centerY = window.innerHeight / 2;
//
//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize, false);
//
// });
