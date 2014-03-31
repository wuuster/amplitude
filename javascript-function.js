/*Write a function:

function solution(A);

that, given a non-empty zero-indexed array A consisting of N integers, returns its amplitude.

Assume that:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [0..5,000,000].
For example, given array A such that:

  A[0] = 10  A[1] = 2   A[2] = 44
  A[3] = 15  A[4] = 39  A[5] = 20
the function should return 42.
*/

var A = [10, 2, 44, 15, 39, 20];

function solution(A) {	
	var B = Math.max.apply(Math, A);
	var C = Math.min.apply(Math, A);
	var D = eval(Math.abs(B-C));
  console.log(D);
  return D;
}

solution(A);
