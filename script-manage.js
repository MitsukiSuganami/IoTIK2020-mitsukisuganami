$(function() {

  // button要素をクリックしたら発動
  $('button').click(function() {

    // セレクトボックスで選択したvalue値を変数に格納
    var hid = $('#house-select').val();

    // p要素にvauleを出力
    $('p').text(hid);

  });
});

//換気扇ここから
function update1() {
  const kanki = document.getElementById("kanki");
  if (kanki.checked) {
    document.getElementById("span-kanki").textContent = "ON";
  } else {
    document.getElementById("span-kanki").textContent = "OFF";
  }
}
//換気扇ここまで

//かん水ここから
function update2() {
  const kansui = document.getElementById("kansui");
  if (kansui.checked) {
    document.getElementById("span-kansui").textContent = "ON";
  } else {
    document.getElementById("span-kansui").textContent = "OFF";
  }
}
//かん水ここまで

//加温器ここから
function update3() {
  const kaonki = document.getElementById("kaonki");
  if (kaonki.checked) {
    document.getElementById("span-kaonki").textContent = "ON";
  } else {
    document.getElementById("span-kaonki").textContent = "OFF";
  }
}
//加温器ここまで
