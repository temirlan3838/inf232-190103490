class Point {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    static getLength(a, b) {
        var x = Math.abs(b.getX() - a.getX());
        var y = Math.abs(b.getY() - a.getY());
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
}
var num = prompt("Enter num", "0");
var numer = parseInt(num);
var arr = [];
//document.write(numer);
for (var i = 0; i < numer; i++) {
    var x = prompt("Enter coor X");
    var y = prompt("Enter coor Y");
    var p = new Point(parseInt(x), parseInt(y));
    arr.push(p);
    //    coorArr[i] = parseInt(coor);
}
//const first = new Point(0, 0);
//const second = new Point(2, 2);
//const third = new Point(-2, 2);
//const first = new Point(0, 0);
//const second = new Point(1, 0);
//const third = new Point(1, 0);
//const fourth = new Point(0, 1);
//const fourth = new Point(0, 1);
//N*(N-1)*(N-2)/6
//var arr = [first, second, third];
//var arr = [first, second, third, fourth];
var cnt = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (leng(arr[i], arr[j]) == leng(arr[i], arr[k]) || leng(arr[i], arr[j]) == leng(arr[j], arr[k]) || leng(arr[i], arr[k]) == leng(arr[j], arr[k])) {
                if (area(arr[0], arr[1], arr[2]) > 0) {
                    cnt++;
                }
            }
        }
    }
}

function leng(a, b) {
    //length of side
    var x = Math.abs(b.getX() - a.getX());
    var y = Math.abs(b.getY() - a.getY());
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function area(a, b, c) {
    //geron formula
    var p = (Point.getLength(a, b) + Point.getLength(b, c) + Point.getLength(a, c)) / 2; //polu perimetr
    var s = p * (p - Point.getLength(a, b)) * (p - Point.getLength(b, c)) * (p - Point.getLength(a, c)); // area of triangle
    return s;
}
document.getElementById("ans").innerHTML = "Answer is " + cnt;
