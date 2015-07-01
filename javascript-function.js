
var A = [10, 2, 44, 15, 39, 20];

function solution(A) {	
	var B = Math.max.apply(Math, A);
	var C = Math.min.apply(Math, A);
	var D = eval(Math.abs(B-C));
  console.log(D);
  return D;
}

solution(A);
