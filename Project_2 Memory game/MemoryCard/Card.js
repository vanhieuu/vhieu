 // Mảng các lá bài để giữ các lá bài
let cards = document.getElementsByClassName("cards");
let cards = [...cards];

//Bộ bài của toàn bộ game
const deck = document.getElementById("card-deck")

// đếm số lượng bước đi
let moves = 0;
let counter = document.querySelector("moves");

// Khai báo biến cho đánh giá sao
const stars = document.querySelectorAll(".fa-star");

//khai báo match cards
let matchedCard = document.getElementsByClassName("match")

var openedCards = [];


// Khởi tạo vòng lặp để thêm các lá bài 
    for (let i = 0; i < cards.length; i++) {
            cards[i] = addEventListener("click", displayCards)
    };
// Khi tác động vào lá bài hiện ra class để vô hiệu hóa lá bài
        var displayCards = function () {
            this.classList.toggle("open");
            this.classList.toggle("show");
            this.classList.toggle("disabled")
        }

function shuffle(arr) {
    // Khởi tạo giá trị index hiện tại = độ dài của mảng, giá trị index của mảng ngẫu nhiên và giá trị tạm thời
    var currentIndex = arr.length, randomIndex, temporaryValue  //
    
    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex); // Khởi tạo giá trị random của mảng và tráo mảng
        currentIndex -= 1;
        temporaryValue = arr[currentIndex]
        arr[randomIndex] = temporaryValue;

    }
    return arr;
}
// Khởi tạo giá trị bộ bài
// Khởi tạo giá trị .deck bên htm
    const deck = document.querySelector(".deck")
    function startGame(){
        var shuffleCards = shuffle(cards) // khởi tạo giá trị tráo bài
            for (let i = 0; i < shuffle.length; i++) {
                [].forEach.call(shuffleCards, function(items){
                    deck.appendChild(items)
                })
            }        
    }
    

    // Kiểm tra nếu lá bài trùng nhau hay không  
    // Thêm lá bài đã mở vào mảng những lá bài mở và kiểm tra nó có trùng hay không 


    // function cardOpen sẽ chạy mỗi khi ta click vào từng lá bài giống vs function displayCards
    // Mấu chốt của vấn đề khi kiểm tra xem lá bài có trùng nhay hay không là các đối tượng hình ảnh được truyền vào từng lá bài    
        function cardOpen() {
            openedCards.push(this);
            var len = openCards.length;
                if (len === 2){
                    moveCounter();
                        if (openedCards[0].type === openedCards[1].type) {
                                matched();
                        }
                        else{
                            unmatched();
                        }
                }
        };



            // Khi trùng 
        function matched() {
            openedCards[0].classList.add("match");
            openedCards[1].classList.add("match");
            openedCards[0].classList.remove("show", "open" );
            openedCards[1].classList.remove("show", "open" );
            openedCards = [];
        }


        // Khi không trùng
        function unmatched() {
            openedCards[0].classList.add("unmatched");
            openedCards[1].classList.add("unmatched");
            disable();
            setTimeout(function () {
                openedCards[0].classList.remove("show", "open", "unmatched");
                openedCards[1].classList.remove("show", "open", "unmatched");
                enable();
                openedCards = [];
            },1100);
        }

        // Vô hiệu hóa lá bài tạm thời
        function disable(){
            Array.prototype.filter.call(cards, function (cards){
                card.classList.add("disable")
            });
        }

        // kích hoạt lá bài và vô hiệu hóa các lá bài trùng nhau
        function enable() {
                Array.prototype.filter.call(cards, function (cards){
                    card.classList.remove("disable");
                        for (let i = 0; i < matchedCard.length; i++) {
                            matchedCard[i].classList.add("disable")
                        }
                });     
        }


        //tráo bài khi load lại trang
        document.body.onload.startGame();

        function startGame() {
            
            // Làm trống mảng những lá bài mở 
            openedCards = [];
            // Tráo bài

            cards = shuffle(cards);
                // xóa toàn bộ clas trong từng lá bài 
                for (var i = 0; i < cards.length; i++) {
                    deck.innerHTML = "";
                    [].forEach.call(cards, function (items) {
                            deck.appendChild(items)
                    });
                    cards[i].classList.remove("show", "open", "match", "disable");
                }
                // reset nước đi
                moves = 0;
                counter.innerHTML.moves;
                // reset đánh giá 
                for(var i  = 0; i< stars.length; i++){
                        stars[i].style.color = "#FFD700"; // màu
                        stars[i].style.visibility = "visible"; // hiển thị
                }
                //reset thời gian
                second  = 0;
                minute = 0;
                hour = 0;
                var timer = document.querySelector(".timer");
                timer.innerHTML = "0 mins 0 secs";
                clearInterval(interval);
        }


