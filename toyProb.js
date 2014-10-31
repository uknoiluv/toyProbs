

/*====================================
 TapeEquilibrium
=====================================*/

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var min;
    for(var i = 1; i < Alen; i++){
      var j = 0;
      var x = 0;
      while(j !== Alen){
          if(j < i){
            x += A[j]              
          }else{
            x -= A[j]   
          }
          j++;
      }
      x = x < 0 ? -x : x;
      min === undefined || min > x ? min = x : null;
    }
    return min
}

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var sum = 0;
    var sumMin;
    var min;
    for(var i = 0; i < Alen; i++){
        sum += A[i]
      }
      for(var j = 0; j < Alen - 1; j++){
          sum -= 2 * A[j];
          sumMin = sum < 0 ? sumMin = -sum : sumMin = sum;
          if(min === undefined || sumMin < min){
              min = sumMin;  
          }
      }
    return min
}


/*====================================
 PermMissingElem
=====================================*/

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var NplusOne = A.length + 1;
    var sum = (1 / 2) * NplusOne * (NplusOne + 1);
    for(var i = 0; i < NplusOne - 1;i++){
        sum -= A[i];
    }
    return sum;
}


/*====================================
 FrogRiverOne
=====================================*/

function solution(X, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var obj = {};
    var Alen = A.length;
    for(var i = 0; i < Alen; i++){
        obj[A[i]] = true;
        if(Object.keys(obj).length >= X){
            return i;
        }
    }
    return -1;
}

function solution(X, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var obj = {};
    var Alen = A.length;
    var sum = (1/2) * X * (X + 1);
    for(var i = 0; i < Alen; i++){
        if(obj[A[i]] === undefined){
            obj[A[i]] = true;
            sum -= A[i];
            if(sum === 0){
                return i;
            }
        }
    }
    return -1;
}


/*====================================
 PermCheck
=====================================*/


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var sum = (1/2) * Alen * (Alen + 1);
    for(var i = 0; i < Alen; i++){
        sum -= A[i]
    }
    return sum === 0 ? 1 : 0;
}

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var sum = (1/2) * Alen * (Alen + 1);
    var filterObj = {};
    for(var i = 0; i < Alen; i++){
        if(filterObj[A[i]] === undefined){
            filterObj[A[i]] = true;
            sum -= A[i];
        }
    }
    return sum === 0 ? 1 : 0;
}

/*====================================
 MaxCounters
=====================================*/



function solution(N, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var result = new Array(N+1).join('0').split('').map(parseFloat);
    var max = 0;
    for(var i = 0; i < Alen; i++) {
        if(A[i] === N + 1){
            for(var j = 0; j < N; j++){
                result[j] = max;
            }
        }else{
            result[A[i] - 1]++;
            result[A[i] - 1] > max ? max = result[A[i] - 1] : null;
        }
    }
    return result;
}


/*====================================
MissingInteger
=====================================*/


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var j = 1;
    var Alen = A.length;
    var filterObj = {};
    for(var i = 0; i < Alen; i++){
      if(A[i] > 0 && filterObj[A[i]] === undefined){
        filterObj[A[i]] = true;
      }
    }
    while(filterObj[j] === true){
      j++;
    }
    return j;
}


/*====================================
PassingCars
=====================================*/



function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var countZero = 0;
    var count = 0;
    for(var i = 0; i < Alen; i++){
        A[i] === 0 ? countZero++ : null;
        A[i] === 1 ? count += countZero : null;
    }
    return count;
}

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var countZero = 0;
    var count = 0;
    for(var i = 0; i < Alen; i++){
        A[i] === 0 ? countZero++ : null;
        A[i] === 1 ? count += countZero : null;
    }
    return count > Math.pow(10, 9) ? -1 : count;
}

/*====================================
 Genomic Range Query
=====================================*/



function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    // A,C,G,T 1,2,3,4
    var Plen = P.length;
    var result = [];
    var ACGT = {A:1, C:2, G:3, T:4};
    for(var i = 0; i < Plen; i++){
        var min = undefined;
        for(var j = P[i]; j <= Q[i]; j++){
          min = min || ACGT[S[j]];
          min > ACGT[S[j]] ? min = ACGT[S[j]] : null;
          if(min === 1){
            break;
          }
        }
        result.push(min);
    }
    return result;
}

function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    // A,C,G,T 1,2,3,4
    var Plen = P.length;
    var result = [];
    var ACGT = {A:1, C:2, G:3, T:4};
    for(var i = 0; i < Plen; i++){
        var filterObj = {};
        for(var j = P[i]; j <= Q[i]; j++){
          filterObj[ACGT[S[j]]] === undefined ? filterObj[ACGT[S[j]]] = true : null;
        }
        for(var k = 1; k <= 4;k++){
          if(filterObj[k] !== undefined){
              result.push(k);
              break;
          }
        }
    }                                                                       
    return result;
}

function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    // A,C,G,T 1,2,3,4
    var Slen = S.length;
    var Plen = P.length;
    var stoArr = [];
    var result = [];
    var ACGT = {A:1, C:2, G:3, T:4};
    for(var i = 0; i < Slen; i++){
        stoArr.push(ACGT[S[i]]);
    }
    for(var j = 0; j < Plen; j++){
        result.push(Math.min.apply(null, stoArr.slice(P[j], Q[j] + 1)));
    }
    return result;
}


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');


function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var SLen = S.length;
    var PLen = P.length;
    var rec = {};
    var stoArr = [];
    var factor = ['A', 'C', 'G', 'T'];
    var result = [];
    for(var i = 0; i < SLen; i++) {
        rec[S[i]] = rec[S[i]] || 0;
        rec[S[i]]++;
        stoArr.push(JSON.parse(JSON.stringify(rec)));
    }
    for(var j = 0; j < PLen; j++){
        var k = 1;
        var stoArrSubt = Q[j] === 0 ? {A:0, C:0, G:0, T:0} : stoArr[Q[j] - 1];
        while(stoArr[P[j]][factor[k - 1]] - stoArrSubt[factor[k - 1]] === 0){
            k++;
        }
        result.push(k);
    }    
    return result;
}


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var SLen = S.length;
    var PLen = P.length;
    var rec = {A:0, C:0, G:0, T:0};
    var stoArr = [];
    var factor = ['A', 'C', 'G', 'T'];
    var result = [];
    for(var i = 0; i < SLen; i++) {
        rec[S[i]]++;
        stoArr.push(JSON.parse(JSON.stringify(rec)));
    }
    for(var j = 0; j < PLen; j++){
        var k = 1;
        var stoArrSubt = P[j] === 0 ? {A:0, C:0, G:0, T:0} : stoArr[P[j] - 1];
        while(stoArr[Q[j]][factor[k - 1]] - stoArrSubt[factor[k - 1]] === 0){
            k++;
        }
        result.push(k);
    }    
    return result;
}


function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var SLen = S.length;
    var PLen = P.length;
    var rec = {A:0, C:0, G:0, T:0};
    var stoArr = [{A:0, C:0, G:0, T:0}];
    var factor = ['A', 'C', 'G', 'T'];
    var result = [];
    for(var i = 0; i < SLen; i++) {
        rec[S[i]]++;
        stoArr.push(JSON.parse(JSON.stringify(rec)));
    }
    for(var j = 0; j < PLen; j++){
        var k = 1;
        while(stoArr[Q[j] + 1][factor[k - 1]] - stoArr[P[j]][factor[k - 1]] === 0){
            k++;
        }
        result.push(k);
    }    
    return result;
}


function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var SLen = S.length;
    var PLen = P.length;
    var rec = [0, 0, 0, 0];
    var stoArr = [[0, 0, 0, 0]];
    var orderObj = {A:0, C:1, G:2, T:3};
    var result = [];
    for(var i = 0; i < SLen; i++) {
        rec[orderObj[S[i]]]++;
        stoArr.push(rec.slice(0));
    }
    for(var j = 0; j < PLen; j++){
        var k = 1;
        while(stoArr[Q[j] + 1][k - 1] - stoArr[P[j]][k - 1] === 0){
            k++;
        }
        result.push(k);
    }    
    return result;
}


/*====================================
 Count Div
=====================================*/



function solution(A, B, K) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    return Math.floor((B) / K) - Math.floor((A - 1) / K);
}

/*====================================
 MinAvgTwoSlice
=====================================*/


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var min = 0;
    var average = (A[0] + A[1]) / 2;
    for(var i = 1; i < Alen - 1; i++){
        var comp = (A[i] + A[i + 1]) / 2;
        if(average > comp){
            average = comp;
            min = i;
        }
    }
    return min;
}

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var min = 0;
    var average = (A[0] + A[1]) / 2;
    for(var i = 1; i < Alen - 1; i++){
        var comp = (A[i] + A[i + 1]) / 2;
        if(average > comp || A[i + 2] < 0){
            average = comp;
            if(average > (A[i] + A[i + 1] + A[i + 2]) / 3){
                average = (average * 2 + A[i + 2]) / 3 ;
            }
            min = i;
        }
    }
    return min;
}

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var min = 0;
    var average = (A[0] + A[1]) / 2;
    for(var i = 1; i < Alen - 1; i++){
        var comp = (A[i] + A[i + 1]) / 2;
        if(average > comp){
            average = comp;    
            min = i;
        }
        if(A[i + 2] !== undefined && average > (A[i] + A[i + 1] + A[i + 2]) / 3){
            average = (A[i] + A[i + 1] + A[i + 2]) / 3 ;
            min = i;
        }
     
    }
    return min;
}


/*====================================
 Triangle
=====================================*/


function solution(A) {
    var Alen = A.length;
    A.sort(function(a,b){
        return b - a;
    });
    for(var i = 0; i < Alen - 2; i++){
        if(A[i] < A[i + 1] + A[i + 2]){
            return 1;
        }
    }
    return 0;
    // write your code in JavaScript (ECMA-262, 5th edition)
}

/*====================================
 MaxProductOfThree
=====================================*/


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    A.sort(function(a, b){
        return b - a;
    });
    var x = A[0] * A[1] * A[2];
    var y = A[0] * A[Alen - 1] * A[Alen - 2];
    return x > y ? x : y;
}


/*====================================
 Distinct
=====================================*/


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var obj = {};
    var Alen = A.length;
    var count = 0;
    for(var i = 0; i < Alen ; i++){
        if(obj[A[i]] === undefined){
            obj[A[i]] = true;
            count++;
        }
    }
    return count;
}



/*====================================
 NumberOfDiscIntersection
=====================================*/


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var count = 0;
    for(var i = 0; i < Alen - 1; i++){
        for(var j = i + 1 ; j < Alen; j++){
            i + A[i] >= j - A[j] ? count++ : null;
        }
    }
    return count;
}


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var count = 0;
    for(var i = 0; i < Alen - 1; i++){
        for(var j = i + 1 ; j < Alen; j++){
            if(i + A[i] >= j - A[j]){
                 count++;    
            }
            if(count > 10000000){
                return -1;
            }
        }
    }
    return count;
}

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var count = 0;
    for(var i = 0; i < Alen - 1; i++){
        for(var j = i + 1 ; j < Alen; j++){
            if(j <= i + A[i]){
                 count++; 
            }else if(i + A[i] >= j - A[j]){
                 count++;    
            }
            if(count > 10000000){
                return -1;
            }
        }
    }
    return count;
}


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var count = 0;
    for(var i = 0; i < Alen - 1; i++){
        count += (i + A[i]) < Alen ? A[i] : Alen - i - 1;
        for(var j = i + A[i] + 1; j < Alen; j++){
            if(i + A[i] >= j - A[j]){
                 count++;
            }
            if(count > 10000000){
                return -1;
            }
        }        
    }
    return count;
}


/*====================================
 Brackets
=====================================*/


function solution(S) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var pairObj = {'{': '}', '(': ')', '[': ']'};
    for(var i = 0; i < S.length - 1; i++){
        if(pairObj[S[i]] === S[i+1]){
           S = S.slice(0, i) + S.slice(i + 2);
           i -= 2;
        }
    }
    return S.length === 0 ? 1 : 0;
}

function solution(S) {
    var pairObj = {'{': '}', '(': ')', '[': ']'};
    var stack = [];
    for(var i = 0; i < S.length; i++){
        
      if(pairObj[S[i]]){
        stack.push(pairObj[S[i]]);
      }else{
        if(stack.pop() !== S[i]){
            return 0;
        }
      }
    }
    return 1;
    // write your code in JavaScript (ECMA-262, 5th edition)
}

function solution(S) {
    var pairObj = {'{': '}', '(': ')', '[': ']'};
    var stack = [];
    for(var i = 0; i < S.length; i++){
        
      if(pairObj[S[i]]){
        stack.push(pairObj[S[i]]);
      }else{
        if(stack.pop() !== S[i]){
            return 0;
        }
      }
    }
    return stack.length === 0 ? 1 : 0;
    // write your code in JavaScript (ECMA-262, 5th edition)
}
