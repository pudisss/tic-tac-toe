
class Tic {
    constructor() {
        this.header = document.getElementById("header1");
        this.player = "";

        // Block
        this.block1 = document.getElementById("block1");
        this.block2 = document.getElementById("block2");
        this.block3 = document.getElementById("block3");
        this.block4 = document.getElementById("block4");
        this.block5 = document.getElementById("block5");
        this.block6 = document.getElementById("block6");
        this.block7 = document.getElementById("block7");
        this.block8 = document.getElementById("block8");
        this.block9 = document.getElementById("block9");

    }
    random() {
        // Random 
        let randomPerson = Math.floor(Math.random() * 3);
        let sentence = "";
        switch (randomPerson) {
            case 1:
                this.player = "x";
                sentence = "You are x";
                break;

            case 2:
                this.player = "o";
                sentence = "You are o";
                break;
                
        }

        this.header.innerText = sentence;

        


    }
    appendImage(blockPosition) {
        let gameImage = document.createElement("img");
        if (this.player == "x") {

            gameImage.setAttribute("src", "../../assets/images/x.svg");
            gameImage.setAttribute("id", "tictactoe");
            blockPosition.appendChild(gameImage);

            // Change player
            this.player = "o";

            // Change header
            this.header.innerText = "Your player is o";
        } else {

            gameImage.setAttribute("src", "../../assets/images/o.svg");
            gameImage.setAttribute("id", "tictactoe");
            blockPosition.appendChild(gameImage);

            // Change player 
            this.player = "x";
            // Change header
            this.header.innerText = "Your player is x";


        }
        
    }
    pressButton(position) {
        

        switch(position) {
            case 1:
                this.appendImage(this.block1);
                break;
            case 2:
                this.appendImage(this.block2);
                
                break;
            case 3:
                this.appendImage(this.block3);
               
                break;
            case 4:
                this.appendImage(this.block4);
                break;
            case 5:
                this.appendImage(this.block5);
                break;
            case 6:
                this.appendImage(this.block6);
                break;
            case 7:
                this.appendImage(this.block7);
                break;
            case 8:
                this.appendImage(this.block8);
                break;
            case 9:
                this.appendImage(this.block9);
                break;
        }


    }
    restart() {
        document.location().reload(true);
    }

}


const t = new Tic();

t.random();