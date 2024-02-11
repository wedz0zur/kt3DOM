const cat = document.getElementById("perv")
        const cat1 = document.getElementById("perv2")
        const cat2 = document.getElementById("perv3")
        const cat3 = document.getElementById("perv4")

        function addPunct2(){
            let btn1 = document.getElementById("btn1")
            cat.classList.toggle("ccc")
            btn1.innerText =  btn1.innerText == "-" ? "+" : "-"
        }

        function addPunct3(){
            let btn2 = document.getElementById("btn2")
            cat1.classList.toggle("ccc")
            btn2.innerText =  btn2.innerText == "-" ? "+" : "-"
        }

        function addPunct3_2(){
            let btn3 = document.getElementById("btn4")
            cat2.classList.toggle("ccc")
            btn3.innerText =  btn3.innerText == "-" ? "+" : "-"
        }

        function addPunct2_2(){
            let btn4 = document.getElementById("btn3")
            cat3.classList.toggle("ccc")
            btn4.innerText =  btn4.innerText == "-" ? "+" : "-"
        }