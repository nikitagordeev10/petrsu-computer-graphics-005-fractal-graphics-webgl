var k = Math.sqrt(3) / 2;
var S = 16;
var H = 512;
var W = Math.floor(H / k);

document.body.innerHTML = ('<canvas id="webgl" width="' + W + '" height="' + H + '"></canvas>');

var canvas = document.getElementById('webgl');
var ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, W, H);

for (var x = 0; x <= Math.floor(W / 2); x++) {
    for (var y = 0; y < H; y++) {
        var A = y;
        var a = A % S;
        var B = y / 2 + x * k;
        var b = B % S;
        var C = y / 2 - x * k;
        var c = C % S;

        if (a > b && C > 0 && B > 0) {
            if ((B / S) & (C / S)) ctx.fillStyle = '#ffffff';
            else ctx.fillStyle = '#191970';
        }
        else ctx.fillStyle = '#fff';

        ctx.fillRect(Math.floor(W / 2) - x, y, 1, 1);
        if (x != 0) ctx.fillRect(Math.floor(W / 2) + x, y, 1, 1);
    }
}