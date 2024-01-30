let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        try{
            if (e.target.innerHTML == '=') {
                if (string.trim() === "") {
                    // If no input is entered, you can display an appropriate message or handle it in a way you prefer.
                    alert('Please enter a valid expression.');
                }
                else{
            string = eval(string);
            if (isNaN(string) || string === undefined) {
                input.value = 'undefined';
                string = "";
                setTimeout(() => {
                    input.value = '';
                }, 1000); // Clear the error message after 1 second (adjust as needed)
            } else {
                input.value = string;
            }
                
        }
    }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            input.scrollLeft = 0;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            input.scrollLeft = input.scrollWidth
        }
        else if (e.target.classList.contains('scientific')) {
            handleScientificFunction(e.target.innerHTML);
        
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
            input.scrollLeft = input.scrollWidth
        }
    
    } 
    catch(error){
        input.value="error"
        string=""
        input.scrollLeft = 0;
        setTimeout(function(){
            input.value=""
        },1000)
        

    }
    })
})
function handleScientificFunction(func) {
    switch (func) {
        case 'sin':
            string = Math.sin(eval(string));
            break;
        case 'cos':
            string = Math.cos(eval(string));
            break;
        case 'tan':
            string = Math.tan(eval(string));
            break;
        case 'log':
            string = Math.log10(eval(string));
            break;
        case 'ln':
            string = Math.log(eval(string));
            break;
        case 'sqrt':
            string = Math.sqrt(eval(string));
            break;
        case'^':
        string+="**"
        break;
        case'1/x':
       string+="1/"
        break;
        // Add more scientific functions as needed
    }
    input.value = string;
    input.scrollLeft = input.scrollWidth;
}