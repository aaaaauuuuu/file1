let $id = function(id) { return document.getElementById(id); }
let $class = function(c, n) { n=n||0; return document.getElementsByClassName(c)[n]; }
let $classes = function(c)  { return document.getElementsByClassName(c); }
 

let SOUND_PATH = ""

let activeKey;
let pass = document.getElementById('js-pass');
pass.addEventListener('keydown', function() {

    if (activeKey !== undefined) {
        //関数deActiveKeyを実行
        deActiveKey(activeKey);
    }
    
    //変数keyに関数getTargetKeyの結果を代入
    let keyboard = getTargetKeyboard();

    //変数activeKeyに関数keyDownの結果を代入
    activeKey = keyDown(keyboard);

    makeSound(activeKey);
});

// アクティブになってるキーを非アクティブにする関数
function deActiveKey(activeKey) {
    // 変数activeKeyにactiveクラスがついてる場合、
    if (activeKey.classList.contains('active')) {
        //変数activeKeyからactiveクラスをはずす
        activeKey.classList.remove('active');
    }
}


// 白のキーボードまたは黒のキーボードの配列を返す
function getTargetKeyboard() {

    // js-whiteクラスを持ってる要素を変数に代入
    let whiteKeyboard = document.getElementsByClassName('js-white');

    // js-blackクラスを持ってる要素を変数に代入
    let blackKeyboard = document.getElementsByClassName('js-black');

    /**
     * 0から100までのランダムな数値を作成して変数numに代入
     * Math.floor() 四捨五入
     * Math.random() 0 - 1までのランダムな少数
     * ①1から0までのランダムな数を作成、②①に100をかける、③②を四捨五入するという流れ
     */ 
    let num = Math.floor(Math.random() * 100);

    // 変数numが偶数であれば
    if (num % 2 === 0) {
        // whiteKeyboardを返す
        return whiteKeyboard;
    } else {
        // blackkeyboardを返す
        return blackKeyboard;
    }
}

// キーボードの一覧からランダムに1つアクティブにする関数
function keyDown(keyboard) {
    // 変数keyboard(配列)の要素の数を取得
    let max = keyboard.length;

    // 0から変数maxの値までのランダムな数値を変数numに代入
    let num = Math.floor(Math.random() * max);

    // 変数keyboardのnum番目の要素にactiveクラスをつける
    keyboard[num].classList.add('active');

    // activeになったkeyを返す
    return keyboard[num];
}

// activeKeyの音を鳴らす処理
function makeSound(activeKey) {
    
}