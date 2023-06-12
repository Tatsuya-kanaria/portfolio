// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;

// HTMLの要素取得
const untypedField = document.getElementById('untyped');
const typedField = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');

// テキスト
const textLists = [
    'Hello World','This is my App','How are you?',
    'Today is sunny','I love JavaScript!','Good morning',
    'I am Japanese','Let it be','Samurai',
    'Typing Game','Information Technology',
    'I want to be a programmer','What day is today?',
    'I want to build a web app','Nice to meet you',
    'Chrome Firefox Edge Safari','machine learning',
    'Brendan Eich','John Resig','React Vue Angular',
    'Netscape Communications','undefined null NaN',
    'Thank you very much','Google Apple Facebook Amazon',
    'ECMAScript','console.log','for while if switch',
    'var let const','Windows Mac Linux iOS Android',
    'programming',
];

// テキストの表示
const createText = () => {
    // 正タイプした文字列をクリア
    typed = '';
    typedField.textContent = typed;

    // ランダムなインデックス数
    textIndex = Math.floor(Math.random() * textLists.length)

    untyped = textLists[textIndex];
    untypedField.textContent = untyped;
};

// キー入力の判定
const keyPress = e => {
    // 誤タイプ
    if (e.key !== untyped.substring(0, 1)) {
        wrap.classList.add('mistyped');
        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    }

    // 正タイプ
    wrap.classList.remove('mistyped');
    score++;
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedField.textContent = typed;
    untypedField.textContent = untyped;

    if (untyped === '') {
        createText();
    }
};

// タイピングスキルのランクを判定
const rankCheck = score => {
    let text = '';
    let rank = '';

    const ranks = [
        {rank: 'C', nextPassingLine: 100},
        {rank: 'B', nextPassingLine: 200},
        {rank: 'A', nextPassingLine: 300},
        {rank: 'S', nextPassingLine: 400},
        {rank: '最高'}
    ];

    // ランク判定
    for (let index = 0; index < ranks.length; index++) {
        console.log(ranks[index].rank)
        if (ranks[index].nextPassingLine > score) {
            rank = ranks[index].rank
            nextRankDiff = ranks[index].nextPassingLine - score
            nextRank = ranks[index + 1].rank

            rankText = `あなたのランクは${rank}です。\n`
            nextRankText = `${nextRank}ランクまであと${nextRankDiff}文字です。`

            text = rankText + nextRankText
            break;
        }
        text = `あなたのランクは最高ランクです。\nおめでとう!!`
    }


    // 生成したメッセージと一緒に文字列を返す
    return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ゲーム終了
const gameOver = id => {
    clearInterval(id);

    const result = confirm(rankCheck(score));

    if (result == true) {
        window.location.reload();
    }
};

// カウントダウンタイマー
const timer = () => {
    // タイマー初期値
    let time = count.textContent;

    const id = setInterval(() => {
        // カウントダウンする
        time--;
        count.textContent = time;

        // タイマーの終了値
        if(time <= 0) {
            gameOver(id);
        }
    }, 1000);
};

// ゲームスタート
start.addEventListener('click', () => {
    // タイマー開始
    timer();

    createText();
    // スタートボタン非表示
    start.style.display = 'none';

    // キーボードのイベント処理
    document.addEventListener('keypress', keyPress);
});

untypedField.textContent = 'スタートボタンで開始';
