document.querySelector('.btn').addEventListener('click', function () {
    var p1 = document.getElementById('player1').value;
    var p2 = document.getElementById('player2').value;
    var fromContainer = document.querySelector('.container1');
    var boxContainer = document.querySelector('.container');
    fromContainer.style.display = 'none';
    boxContainer.style.display = 'grid';
    StartGame(p1, p2);
});

function StartGame(p1, p2) {
    var currentPlayer = p1;
    updateCurrentPlayerDisplay(currentPlayer);

    var boxes = document.querySelectorAll(".box");
    var i = 1;

    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            var content = this.querySelector(".box-content");
            if (content.innerHTML === "") {
                if (i % 2 === 0) {
                    content.innerHTML = "O";
                } else {
                    content.innerHTML = "X";
                }
                i++;
                check();
                currentPlayer = currentPlayer === p1 ? p2 : p1;
                updateCurrentPlayerDisplay(currentPlayer);
            } else {
                alert("This box is already filled. Please choose another box.");
            }
        });
    });

    function check() {
        var C1 = document.getElementById("c1").innerHTML;
        var C2 = document.getElementById("c2").innerHTML;
        var C3 = document.getElementById("c3").innerHTML;
        var C4 = document.getElementById("c4").innerHTML;
        var C5 = document.getElementById("c5").innerHTML;
        var C6 = document.getElementById("c6").innerHTML;
        var C7 = document.getElementById("c7").innerHTML;
        var C9 = document.getElementById("c9").innerHTML;
        var C8 = document.getElementById("c8").innerHTML;

        if ((C1 !== "" && C1 === C2 && C2 === C3) ||
            (C4 !== "" && C4 === C5 && C5 === C6) ||
            (C7 !== "" && C7 === C8 && C8 === C9) ||
            (C1 !== "" && C1 === C4 && C4 === C7) ||
            (C2 !== "" && C2 === C5 && C5 === C8) ||
            (C3 !== "" && C3 === C6 && C6 === C9) ||
            (C1 !== "" && C1 === C5 && C5 === C9) ||
            (C3 !== "" && C3 === C5 && C5 === C7)) {
            displayWinner(currentPlayer);
            clearBox();
        } else if (C1 !== "" && C2 !== "" && C3 !== "" && C4 !== "" && C5 !== "" && C6 !== "" && C7 !== "" && C8 !== "" && C9 !== "") {
            clearBox();
            alert("It's a draw!");
        }
    }

    function displayWinner(C) {
        if (C === 'X') {
            alert(`${p1} Won`);
        } else {
            alert(`${p2} Won`);
        }
    }

    function clearBox() {
        boxes.forEach(function (box) {
            box.querySelector(".box-content").innerHTML = "";
        });
    }

    function updateCurrentPlayerDisplay(player) {
        document.getElementById('currentPlayer').textContent = `${player}'s Turn`;
    }
}
