
let btn = document.querySelector(".btn");
let choise = document.querySelectorAll(".choise");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let header = document.querySelector(".header");

choise[0].onclick = myself;
choise[1].onclick = works;
btn.addEventListener('click', () => {
    let box_state = document.querySelectorAll('.choise');
    let card = document.querySelector(".card");
    let btn_sign = document.querySelector(".btn_sign");
    btn.classList.toggle("stable");
    btn_sign.classList.toggle("back");
    card.classList.toggle("stable");
    for (let i = 0; i < box_state.length; i++) {
        box_state[i].classList.toggle('open');
    }
})
function works() {
    first.classList.add("none");
    second.classList.remove("none");
    header.textContent = "作品集";
}
function myself() {
    let myself = document.querySelector(".myself");
    let myself_content = `
【關於我】

我是簡顗哲，畢業於台中教育大學資訊工程學系。



【求學經歷】

大學期間熱衷於學習各類程式語言，對於JavaScript、python、PHP等程式語言均有學習，能夠開發具備完整功能的網站。在家中事務處理完畢之後在職訓中心期間努力學習CSS彌補自身對於版面設計能力的不足。



【工作經歷】

大學畢業後甫遇家父轉行全職農夫，要求協助家中農務，待其穩定後再做打算。遂回家支援，待其工作事務步入正軌之後，即參加職訓課程補足這段時間的空窗期。



【努力學習，積極溝通】

我清楚了解資訊領域的發展日新月異，因此我會在網路上與其他人討論與學習如何改善自身的程式設計能力並了解新技術的發展。並且對於各種功能的開發及版面的設計上樂於聽取他人意見並做出改善。

我相信溝通和學習是人生中不斷進步的關鍵，並努力透過這些方式來提高自己的專業技能和個人素質，以期符合公司對我的期待並勝任該職位。



感謝您百忙之中看我的履歷，希望有機會可以加入貴公司的團隊！
`;
    let myself_contents = myself_content.split("");

    header.textContent = "自傳";
    myself.textContent = "";
    first.classList.remove("none");
    second.classList.add("none");
    let lop = setInterval(() => {
        let word = document.createElement("span");
        let opc = 0;
        word.innerHTML = myself_contents.shift();
        if(word.innerHTML=="】"||word.innerHTML=="。"){
            word.innerHTML+="<br><br>";
        }
        myself.append(word);
        word.style.color = "transparent";
        let showord = setInterval(() => {
            opc++;
            word.style.opacity = opc / 10;
            if (opc == 10) {
                word.style.color = "var(--accent-200)";
                clearInterval(showord);
            }
        }, 50);
        if (myself_contents.length == 0) {
            clearInterval(lop);
        }
    }, 1);
}


let outside = document.querySelector(".works_content");
let destination = document.querySelectorAll(".box");
destination[parseInt(destination.length / 2)].classList.add("target");
outside.addEventListener("mouseout", () => {
    destination[parseInt(destination.length / 2)].classList.add("target");
});
for (let i = 0; i < destination.length; i++) {
    destination[i].addEventListener("mouseover", () => {
        destination[parseInt(destination.length / 2)].classList.remove("target");
        destination[i].classList.add("target");
    });
    destination[i].addEventListener("mouseout", () => {
        destination[i].classList.remove("target");
    });
}