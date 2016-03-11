
var A = [10, 2, 44, 15, 39, 20];

function solution(A) {	
  A.sort(); return { A[A.length-1] - A[0] };
}

solution(A);
