

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



/*====================================
 Nesting
=====================================*/


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var stack = [];
    var i;
    for(i = 0; i < S.length; i++){
        if(S[i] === '('){
            stack.push(true)
        }else{
            var poped = stack.pop();
            if(poped === undefined){
                return 0;
            }
        } 
    }
    return stack.length === 0 ? 1 : 0;
}


/*====================================
 StoneWall
=====================================*/


function solution(H) {
    var stack = [];
    var count = 1;
    for(var i = 0; i < H.length - 1; i++){
      i === 0 ? stack.push(H[i]) : null;
      if(H[i] !== H[i + 1]){
          if(H[i] > H[i + 1]){
            stack.pop()
            if(stack.indexOf(H[i + 1]) !== -1){
              count--;    
            }else{
              stack.push(H[i + 1]);
            }
          }else{
            //stack = [];
            //H[i - 1] || 0 > H[i] ? stack = [] : null;
            stack.push(H[i + 1]);
          }
          count++;    
      }
    }
    return count;
    // write your code in JavaScript (ECMA-262, 5th edition)
}

function solution(H) {
    var stack = [H[0]];
    var count = 1;
    var num = H[0];
    var down = false;
    for(var i = 1; i < H.length; i++){ 
        if(H[i] > num){
          down ? stack = [] : null;
          down = false;
          stack.push(H[i]);
          count++;
        }else if(H[i] < num){
          stack.pop();
          var loc = stack.indexOf(H[i]);
          if(loc === -1){
            var j = 0;
            while(stack[j] < H[i]){
              j++;
            }
            count++;
            stack = stack.slice(0, j);
          }else{
            stack = stack.slice(0, loc);
          }
          down === false ? stack.push(H[i]) : null;
          down = true;
        }
        num = H[i];
    }
    return count;
    // write your code in JavaScript (ECMA-262, 5th edition)
}

function solution(H) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var stack = [H[0]];
    var count = 1;
    for(var i = 0; i < H.length; i++){
        if(H[i] < H[i + 1]){
            stack.push(H[i + 1]);
            count++;
        }else if(H[i] > H[i + 1]){
            stack.pop();
            while(stack[stack.length - 1] > H[i + 1]){
                stack.pop();
            }
            stack[stack.length - 1] === H[i + 1] ? count-- : null;
            stack.push(H[i + 1]);
            count++;
        }
    }
    return count;
}


/*====================================
 Fish
=====================================*/


function solution(A, B) {
    var Alen = A.length;
    for(var i = Alen - 2; i >= 0; i--){
        if(B[i] === 1){
            var stop = false;
            var j = 1;
            while(!stop){
                if(B[i + j] === 1){
                  j++;
                }else if(A[i + j] === undefined){
                  stop = true;
                }else if(A[i] > A[i + j] && B[i + j] === 0){
                  A.splice(i + j, 1);
                  B.splice(i + j, 1);
                }else if(A[i] < A[i + j] && B[i + j] === 0){
                  A.splice(i, 1);
                  B.splice(i, 1);
                  stop = true;
                }
            }
        }
    }
    return A.length;
    // write your code in JavaScript (ECMA-262, 5th edition)
}

function solution(A, B) {
    var Alen = A.length;
    var oneWay = false;
    for(var i = Alen - 2; i >= 0; i--){
        if(B[i] === 1){
            var stop = false;
            var j = 1;
            while(!stop && !oneWay){
                if(B[i + j] === 1){
                  j++;
                  oneWay = true;
                }else if(A[i + j] === undefined){
                  stop = true;
                }else if(A[i] > A[i + j] && B[i + j] === 0){
                  A.splice(i + j, 1);
                  B.splice(i + j, 1);
                }else if(A[i] < A[i + j] && B[i + j] === 0){
                  A.splice(i, 1);
                  B.splice(i, 1);
                  oneWay = false;
                  stop = true;
                }
            }
        }
    }
    return A.length;
    // write your code in JavaScript (ECMA-262, 5th edition)
}


function solution(A, B) {
    var Alen = A.length;
    var oneWay = false;
    for(var i = Alen - 2; i >= 0; i--){
        if(B[i] === 1){
            var stop = false;
            var j = 1;
            while(!stop && !oneWay){
                if(B[i + j] === 1){
                  j++;
                  oneWay = true;
                }else if(A[i + j] === undefined){
                  stop = true;
                }else if(A[i] > A[i + j] && B[i + j] === 0){
                  A.splice(i + j, 1);
                  B.splice(i + j, 1);
                }else if(A[i] < A[i + j] && B[i + j] === 0){
                  A.splice(i, 1);
                  B.splice(i, 1);
                  oneWay = false;
                  stop = true;
                }
            }
        }else{
            oneWay = false;
        }
    }
    return A.length;
    // write your code in JavaScript (ECMA-262, 5th edition)
}



/*====================================
 Dominator
=====================================*/


function solution(A) {
    var Alen = A.length;
    var AlenHalf = Alen / 2;
    var storage = {};
    for(var i = 0; i < Alen; i++){
        storage[A[i]] = storage[A[i]] || 0;
        storage[A[i]]++;
        if(AlenHalf < storage[A[i]]){
            return i;
        }
    }
    return -1;
    // write your code in JavaScript (ECMA-262, 5th edition)
}


/*====================================
 EquiLeader
=====================================*/

// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var leaderArr = [];
    var leader = {val: undefined, count: undefined};
    var count = {};
    var result = 0;
    var Alen = A.length;
    for(var i = 0; i < Alen - 1; i++){
        count[A[i]] = count[A[i]] || 0;
        count[A[i]]++;
        if(count[A[i]] > ((i + 1) / 2)){
          leader.val = A[i];   
          leader.count = count[A[i]];
        }
        leader.count > ((i + 1) / 2) ? leaderArr.push(leader): leaderArr.push(undefined);
    }
    leader = {val: undefined, count: undefined};
    count = {};
    for(var j = Alen; j > 0; j--){
        count[A[j]] = count[A[j]] || 0;
        count[A[j]]++;
        if(count[A[j]] > ((Alen - j + 1) / 2)){
          leader = A[i];   
        }
        leader = leader || A[i];
        leader === leaderArr[Alen - j] ? result++ : null;
    }
    return result;
}


/*====================================
 MaxProfit
=====================================*/

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length;
    var min = A[0];
    var profit = 0;
    for(var i = 1; i < Alen; i++){
        min > A[i] ? min = A[i] : null;
        profit < A[i] - min ? profit = A[i] - min : null;
    }
    return profit;
}


/*====================================
 MaxDoubleSliceSum
=====================================*/

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var sum;
    var max = 0;
    var min;
    var Alen = A.length;
    for(var i = 1; i < Alen - 1; i++){
        if(sum === undefined && A[i] > 0){
            sum = sum || 0;
            sum += A[i];
            min = A[i];
            sum -= min;
        }else if(sum >= 0){
            sum += A[i];
            if(A[i] < min){
                sum += min;
                min = A[i];
                sum -= min;
            }
        }else{
            sum = 0;
        }
        sum > max ? max = sum : null;
    }
    return max;
}


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var sum;
    var max = 0;
    var min = 0;
    var Alen = A.length;
    for(var i = 1; i < Alen - 1; i++){
        if(sum === undefined && A[i] > 0){
            sum = sum || 0;
            sum += A[i];
            min = A[i];
            sum -= min;
        }else if(sum >= 0){
            sum += A[i];
            if(A[i] < min){
                sum += min;
                min = A[i];
                sum -= min;
            }
        }else if(A[i] > 0){
            sum += A[i];
        }else{
            sum = 0;
            min = 0;
        }
        sum > max ? max = sum : null;
    }
    return max;
}


function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var sum;
    var max = 0;
    var min = 0;
    var Alen = A.length;
    for(var i = 1; i < Alen - 1; i++){
        if(sum === undefined && A[i] > 0){
            sum = sum || 0;
            sum += A[i];
            min = A[i];
            sum -= min;
        }else if(sum >= 0){
            sum += A[i];
            if(A[i] < min){
                sum += min;
                min = A[i];
                sum -= min;
            }
        }else if(A[i] > 0){
            sum += A[i];
        }else{
            sum = 0;
            min = 0;
        }
        sum > max ? max = sum : null;
    }
    return max;
}



/*====================================
 MinPerimeterRectangle
=====================================*/


function solution(N) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var result = 2 * ( 1 + N);
    for(var i = 1; i <= N; i++){
        if(N % i === 0){
            var perimeter = 2 * (i + N / i);
            perimeter < result ? result = perimeter : null;
        }
    }
    return result;
}


function solution(N) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var result = 2 * ( 1 + N);
    var max = Math.floor(Math.sqrt(N));
    for(var i = max; i > 0; i--){
        if(N % i === 0){
            var perimeter = 2 * (i + N / i);            
            if(perimeter < result){
              return perimeter;
            }
        }
    }
    return result;
}



function solution(N) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var max = Math.floor(Math.sqrt(N));
    for(var i = max; i > 0; i--){
        if(N % i === 0){       
            return 2 * (i + N / i);
        }
    }
}



/*====================================
 CountFactors
=====================================*/

function solution(N) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var sqrtN = Math.floor(Math.sqrt(N));
    var count = 2;
    for(var i = 2; i <= sqrtN; i++){
        N % i === 0 ? count += 2 : null;
    }
    sqrtN * sqrtN === N ? count-- : null;
    return count;
}



/*====================================
 Peaks
=====================================*/

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length - 1;
    var peak = [];
    for(var i = 1; i < Alen; i++){
        A[i - 1] < A[i] && A[i] > A[i + 1] ? peak.push(i) : null;
    }
    var peakLen = peak.length;
    if(peakLen === 0){
        return 0;
    }
    var divisor = Math.ceil((Alen + 1) / peakLen);
    var start = peak[0] > divisor ? peak[0] : divisor;
    for(var j = start; j < Alen; j++){
        if((Alen + 1) % start === 0){
            for(var k = 0; k < peakLen; k++){
                
            }
        }           
    }    
}



function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var Alen = A.length - 1;
    var peak = [];
    var found = false;
    for(var i = 1; i < Alen; i++){
        A[i - 1] < A[i] && A[i] > A[i + 1] ? peak.push(i) : null;
    }
    var peakLen = peak.length;
    if(peakLen === 0){
        return 0;
    }
    var divisor = Math.ceil((Alen + 1) / peakLen);
    var check = peak[0] > divisor ? peak[0] : divisor;
    Alen++;
    while(check <= Alen && !found){
      if(Alen % check === 0){        
          var j = 0;
          var k = 0;
          while(Math.floor(peak[j] / check) === k || Math.floor(peak[j] / check) === k - 1){
              if(Math.floor(peak[j] / check) === k){
                k++;
              }
              j++;
              if(k === Alen / check){
                  found = true;
              }
          }
      }
      check++;
    }
    return Alen / (check - 1);
}


/*====================================
 Flags
=====================================*/


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js)
    var Alen = A.length;
    var peak = [];
    for(var i = 1; i < Alen - 1; i++){        
        if(A[i - 1] < A[i] && A[ i ] > A[i + 1]){
           peak.push(i)
           i++;
        }
    }
    console.log(peak);
    var peakLen = peak.length;
    var flags = peakLen;
    var found = false;
    while(flags > 1 && !found){
      
    }
}

function solution(A) {
    // write your code in JavaScript (Node.js)    
    var Alen = A.length;
    var peak = [];
    for(var i = 1; i < Alen - 1; i++){        
        if(A[i - 1] < A[i] && A[ i ] > A[i + 1]){
           peak.push(i);
           i++;
        }
    }
    var dist = [];
    for(var j = 1; j < Alen; j++){
        dist.push(peak[j] - peak[j - 1]);
    }
    var peakLen = peak.length;
    var sqrt = (Alen - 2 > 0) ? Math.floor(Math.sqrt(Alen - 2)) + 1 : Alen;
    var count = sqrt > peakLen ? peakLen : sqrt;
    if(count <= 1){
      return count;
    }
    var found = false;
    while(count > 1 && !found){
      var point = count - 1;      
      var k = 0;
      var temp = 0;
      while(point > 0 && dist[k] !== undefined && !found){        
        if(dist[k] + temp >= count){
          point--;
          point === 0 ? found = true : null;
          temp = 0;          
        }else{
          temp += dist[k];
        }
        k++        
      }      
      found ? null : count--;      
    }
    return count;    
}


function solution(A) {
    // write your code in JavaScript (Node.js)    
    var Alen = A.length;
    var peak1 = undefined;
    var peak2 = undefined;
    var dist = [];    
    for(var i = 1; i < Alen - 1; i++){        
        if(A[i - 1] < A[i] && A[ i ] > A[i + 1]){
           peak1 = peak2;
           peak2 = i;
           peak1 && peak2 ? dist.push(peak2 - peak1) : null;
        }
    }
    var peakLen = dist.length + (dist.length || peak2 ? 1 : 0);
    var sqrt = (Alen - 2 > 0) ? Math.floor(Math.sqrt(Alen - 2)) + 1 : Alen;
    var count = sqrt > peakLen ? peakLen : sqrt;
    if(count <= 1){
      return count;
    }
    var found = false;
    while(count > 1 && !found){
      var point = count - 1;      
      var k = 0;
      var temp = 0;
      while(point > 0 && dist[k] !== undefined && !found){        
        if(dist[k] + temp >= count){
          point--;
          point === 0 ? found = true : null;
          temp = 0;          
        }else{
          temp += dist[k];
        }
        k++        
      }      
      found ? null : count--;      
    }
    return count;    
}


/*====================================
 CountSemiprimes
=====================================*/


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(N, P, Q) {
    // write your code in JavaScript (Node.js)
    var arr1 = [];
    var arr2 = [];
    var arrStore = [];
    var result = [];
    var sqrN = Math.floor(Math.sqrt(N));
    var pLen = P.length;
    for(var i = 2; i <= N; i++){
        arr1.push(i);
        arr2.push(i);
    }
    var nSqr = Math.floor(Math.sqrt(N));    
    var deleteNum = function(arr, n){
        var j = n + 1;
        while(arr[j] !== undefined){
            if(arr[j] % arr[n] === 0){
                arr.splice(j, 1);
            }else{
                j++;
            }
        }
        return arr;
    }    
    var m = 0;
    while(arr1[m] !== undefined){
        if(arr1[m] <= sqrN ){
          arr1 = deleteNum(arr1, m);    
        }        
        var l = 0;                
        var found = false;
        while(!found){
            if(arr2[l] === arr1[m]){
                found = true;
                arr2.splice(l, 1);
            }else{
                l++;
            }
        }
        m++;
    }
    var n = 0;
    while(arr2[n] !== undefined){
        if(arr2[n] <= Math.floor(N / 2)){
            arr2 = deleteNum(arr2, n);    
        }        
        n++;
    }
    var p = 0;
    var q = 0;
    arr2.push(N + 1);
    while(arr2[p] !== undefined){
        var interval = arr2[p] - ( p > 0 ? arr2[p - 1] : 0);
        for(var r = 0; r < interval; r++){
            arrStore.push(q);
        }
        q++;
        p++;
    }
    for(var s = 0; s < pLen; s++){
         result.push(arrStore[Q[s]] - arrStore[P[s] - 1]);
    }
    return result;
}



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 0.12)
    var numArr = [];
    var semiPrimeAccArr = [];
    var result = [];
    var num = 0;
    var sqrtN = Math.floor(Math.sqrt(N));

    for(var i = 0; i <= N; i++){
        i < 2 ? numArr.push(0) : numArr.push(1);
    }
    
    var sieve = function(arr, n, lim){        
        if(arr[n] && n <= lim){
            var x = 2;
            while(n * x <= N){
                arr[n * x] === 1 ? arr[n * x] -= 1 : null;
                x++;
            }
            return sieve(arr, ++n, lim);
        }else if(arr[n] === 0 && n <= lim){
            return sieve(arr, ++n, lim);
        }else{
            return arr;        
        }
    };
    
    var prime = sieve(numArr, 2, Math.floor(Math.sqrt(N)));

    for(var l = 2; l <= N; l++){
        prime[l] ? prime[l] = 0 : prime[l] = 1;
    }

    var semiPrime = sieve(prime, 4, Math.floor(N / 2));
    
    for(var j = 0; j <= N; j++){
        num += semiPrime[j];
        semiPrimeAccArr.push(num);
    }
    
    for(var k = 0; k < P.length; k++){
        result.push(semiPrimeAccArr[Q[k]] - semiPrimeAccArr[P[k]]);
    }
    
    return result;
}


function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 0.12)
    var numArr = [];
    var semiPrimeAccArr = [];
    var result = [];
    var num = 0;

    for(var i = 0; i <= N; i++){
        i < 2 ? numArr.push(0) : numArr.push(1);
    }
    
    var sieve = function(arr, n, lim){        
        if(arr[n] && n <= lim){
            var x = 2;
            while(n * x <= N){
                arr[n * x] === 1 ? arr[n * x] -= 1 : null;
                x++;
            }
            return sieve(arr, ++n, lim);
        }else if(arr[n] === 0 && n <= lim){
            return sieve(arr, ++n, lim);
        }else{
            return arr;        
        }
    };
    
    var prime = sieve(numArr, 2, Math.floor(Math.sqrt(N)));
    
    for(var l = 2; l <= N; l++){
        prime[l] ? prime[l] = 0 : prime[l] = 1;
    }
    
    var semiPrime = sieve(prime, 4, Math.floor(N / 2));
    
    for(var j = 0; j <= N; j++){
        num += semiPrime[j];
        semiPrimeAccArr.push(num);
    }
    
    
    for(var k = 0; k < P.length; k++){
        result.push(semiPrimeAccArr[Q[k]] - semiPrimeAccArr[P[k] - 1]);
    }
    
    return result;
}


function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 0.12)
    var numArr = [];
    var semiPrimeAccArr = [];
    var result = [];
    var num = 0;

    for(var i = 0; i <= N; i++){
        i < 2 ? numArr.push(0) : numArr.push(1);
    }
    
    var sieve = function(arr, n, lim){        
        if(arr[n] && n <= lim){
            var x = 2;
            while(n * x <= N){
                arr[n * x] === 1 ? arr[n * x] -= 1 : null;
                x++;
            }
            return sieve(arr, ++n, lim);
        }else if(arr[n] === 0 && n <= lim){
            var y = n + 1;
            while(arr[y] === 0){
              y++;
            }
            return sieve(arr, y, lim);
        }else{
            return arr;        
        }
    };
    
    var prime = sieve(numArr, 2, Math.floor(Math.sqrt(N)));
    
    for(var l = 2; l <= N; l++){
        prime[l] ? prime[l] = 0 : prime[l] = 1;
    }
    
    var semiPrime = sieve(prime, 4, Math.floor(N / 2));
    
    for(var j = 0; j <= N; j++){
        num += semiPrime[j];
        semiPrimeAccArr.push(num);
    }
    
    
    for(var k = 0; k < P.length; k++){
        result.push(semiPrimeAccArr[Q[k]] - semiPrimeAccArr[P[k] - 1]);
    }
    
    return result;
}
