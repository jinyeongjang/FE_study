// 기본 타입 (string, number, boolean, null, any)
// string - 문자열
var myString = '안녕 타입스크립트!';
console.log('String:', myString);
// number - 숫자값
var myNumber = 20;
console.log('Number:', myNumber);
// boolean - 불리언 (true, false)
var myBoolean1 = true;
console.log('Boolean:', myBoolean1);
var myBoolean0 = false;
console.log('Boolean:', myBoolean0);
// null - 비어있는 값
var myNull = null;
console.log('Null:', myNull);
// any - 어떤 값이든 될 수 있다
var myAny = '아무것도 없어요';
console.log('Any string:', myAny);
myAny = 10;
console.log('숫자 값 변환:', myAny);
myAny = false;
console.log('불리언 값 변환:', myAny);
