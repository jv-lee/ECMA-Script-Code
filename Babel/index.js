'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var add = function add(a, b) {
	return a + b;
};

alert(add(1, 2));
alert(add(5, 3));

var Person = function () {
	_createClass(Person, null, [{
		key: 'A',
		value: function A() {
			alert('b');
		}
	}]);

	function Person() {
		_classCallCheck(this, Person);
	}

	return Person;
}();

var Car = function Car(color) {
	_classCallCheck(this, Car);

	this.color = '#000';

	Car.total_car += 1;
	this.color = color;
};

Car.total_car = 0;


new Car();
new Car();
new Car();

console.log(Car.total_car);
