console.log('処理1');
console.log('処理2');
console.log('処理3');

// setTimeout関数を使うことで、一定時間待ったあとに処理を実行する非同期処理を作成できる
setTimeout(() => {
  console.log('処理4(非同期処理)');
}, 2000);

console.log('処理5');
console.log('処理6');
