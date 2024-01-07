/*
処理の内容	関数名	例
○○を追加する	add○○	addProduct（商品を追加する）
○○を削除する	remove○○	removeProduct（商品を削除する）
○○が存在するかどうかチェックする	has○○	hasProduct（商品が存在するかチェックする）
○○の状態になっているかどうかチェックする	is○○	isPurchased（購入されたかどうかチェックする）
○○が起こったときに処理を行う	on○○	onPushedButton（ボタンが押されたときに処理を行う）
*/

const sayGoodMorning = () => {
  console.log('おはようございます！')
  console.log('昨日はよく寝れましたか？')
  console.log('今日も一日頑張りましょう！')
}

const sayGoodEvening = () => {
  console.log('こんばんは！')
  console.log('今日も一日お疲れ様でした。')
}

sayGoodMorning();

sayGoodEvening();

const calculateTotal = (price) => {
  console.log(price + 500 + '円');
}

calculateTotal(1200);

const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + '円')
}

addTwoArguments(1200, 500);

const double = (num) => {
  return num * 2;
}

console.log(double(30));


const useVariable = () => {
  const userName = '侍太郎';
  console.log(userName);
}

useVariable();
console.log(userName);
