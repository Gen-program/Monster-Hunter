var quiz = [
    //後ろの数字が答えの番号
    ["モンスターハンターシリーズ最初のメインモンスターは何？", "ナルガクルガ", "リオレウス", "ジンオウガ", "ラギアクルス", 2],
    ["モンスターハンターライズ:サンブレイクのティザーPVで公開されたメインモンスターの名前は何？", "メル・ゼノ", "メル・ゼラ", "メル・ルナ", "メル・ゼナ", 4],
    ["この中に2つ名を持っていないモンスターがいます、それはどれ？", "ウラガンキン", "ナルガクルガ", "ラギアクルス", "ディアブロス", 3],
    ["この中で実在しているアイテムは何？", "銀嶺の牙", "銀嶺の冠", "銀嶺の角", "銀嶺の爪", 2]
];
var counter = 0;
var score = 0;
var end = false;

function set() {
    var order = document.getElementById("order");
    var question = document.getElementById("question");

    order.innerHTML = "【第" + (counter + 1) + "問】";
    question.innerHTML = quiz[counter][0];
    //下の5は問題数によって変わる(問題数+1)
    for (var i = 1; i < 5; i++) {
        var answer = document.getElementById("answer" + i);
        answer.innerHTML = quiz[counter][i];
    }
}

function judge(num) {
    if (end) {
        return;
    }
    var result = document.getElementById("result");
    var answer = quiz[counter][5];
    if (answer == num) {
        result.innerHTML = "正解！";
        score += 1;
    }
    else {
        result.innerHTML = "不正解...";
    }
    if (counter == quiz.length - 1) {
        result.innerHTML += quiz.length + "問中" + score + "問正解！"
        end = true;
    }
    else {
        counter += 1;
        set();
    }
}