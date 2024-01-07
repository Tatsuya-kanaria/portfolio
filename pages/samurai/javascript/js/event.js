const output_btn = document.getElementById('output-btn');

output_btn.addEventListener('click', () => {
  console.log('クリックされました。');
});

const addBtn = document.getElementById('add-btn');

const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
  // 新しくli要素を作成し、定数に代入する
  const childList = document.createElement('li');

  // 作成したli要素にテキストを追加する
  childList.textContent = 'これは作成したリスト要素です'
  parentList.appendChild(childList);
});

// フォーム内の文字数をカウントする
const countBtn = document.getElementById('count-btn');

countBtn.addEventListener('click', () => {
  const text = document.forms.textForm.textBox.value;

  console.log(text.length + '文字');
});

// ラジオボタンの値を出力する
const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click', () => {
  const area = document.forms.areaForm.area.value;

  console.log(area);
});

const osBtn = document.getElementById('os-btn');

osBtn.addEventListener('click', () => {
  const items = document.forms.osForm.os;

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});
