console.log(document.head);
console.log(document.body);

console.log(window);

// idを取得
console.log(document.getElementById('first-list'));

// classを取得
console.log(document.getElementsByClassName('heading'));

const headings = document.getElementsByClassName('heading');
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

// CSSセレクタを取得
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// CSSセレクタ全て取得
console.log(document.querySelectorAll('li'));
console.log(document.querySelectorAll('.heading'));

const cssHeadings = document.querySelectorAll('li');
const cssLists = document.querySelectorAll('.heading');

for (let i = 0; i < cssHeadings.length; i++) {
  console.log(cssHeadings[i]);
}
for (let i = 0; i < cssLists.length; i++) {
  console.log(cssLists[i]);
}

// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3'
li.innerHTML = '<a href="#">' + li.textContent + '<a>'

// ul要素の末尾にli要素を追加
document.querySelector('ul').appendChild(li);
