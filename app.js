/**
 * Created by Boaz on 08/02/2017.
 */

function OrderedMap (){
    this._arr = [];
    this._index = 0;
};

OrderedMap.prototype.shoveIt = function (shoveMe){//like push
    this._arr[this._index] = shoveMe;
    this._index++;
    return this._arr;
};

OrderedMap.prototype.pullIt = function (){//like pop
    var last = this._arr[this._arr.length -1];
    this._arr.length -= 1;
    return last;
};

OrderedMap.prototype.shoveItTostart = function (shoveMe) {//like unshift
    var supportArr = [];
    supportArr[0] = shoveMe;
    for (var i = 1; i < this._arr.length; i++){
        supportArr[i] = this._arr[i-1];
    }
    this._arr = supportArr;
};

OrderedMap.prototype.pullItFromStart = function (){// like shift
    var shiftItem = this._arr[0];
    var supportArr = [];
    for (var i = 1; i < this._arr.length; i++){
        supportArr[i - 1] = this._arr[i];
    }
    return shiftItem;
};

OrderedMap.prototype.runOnItems = function (func) {//like forEach
    for (var i = 0; i < this._arr.length; i++) {
        func(this._arr[i]);
    }
};

OrderedMap.prototype.toString = function () {//like toString
   var str = '[';
   for (var i = 0; i < this._arr.length; i++){
       str += this._arr[i] + ', ';
   }
   str += ']';

    return str;

};


var x = new OrderedMap();

x.shoveIt({me :'boaz'});
x.shoveIt(1);
x.shoveIt(5);
x.shoveIt(true);
x.shoveIt([1,2,3,4,5]);
x.pullIt();
x.pullIt();
x.pullIt();
x.pullIt();
x.pullIt();
console.log(x.toString());




