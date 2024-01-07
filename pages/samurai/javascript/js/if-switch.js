console.log(45 + 18);

console.log(45 > 18);

// 等価演算子を使った場合の戻り値を出力する True
console.log('5' == 5);

// 厳密等価演算子を使った場合の戻り値を出力する False
console.log('5' === 5);

// 0 ~ 4
let num = Math.floor(Math.random() * 5);

console.log(num);

if (num === 4) {
  console.log('大当たりです');
} else if (num === 3) {
  console.log('当たりです');
} else {
  console.log('ハズレです');
}

num = Math.floor(Math.random() * 5);

console.log(num);

switch(num) {
  case 2:
    console.log('小吉です')
    break;
  case 3:
    console.log('中吉です')
    break;
  case 4:
    console.log('大吉です')
    break;
  default:
    console.log('末吉です')
    break;

}
