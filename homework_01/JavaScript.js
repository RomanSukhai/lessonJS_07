function selectByIdData() {
    alert(conect)
    console.log(window['hold-conect']);
}

function checkBackGround() {
    let AddColorElement = document.getElementById('conect')
    let color = AddColorElement.style.background

    switch (color) {
        case 'red':
            AddColorElement.style.background = 'yellow'
            break;

        case 'yellow':
            AddColorElement.style.background = 'blue'
            break;
        case 'blue':
            AddColorElement.style.background = 'white'
            break;
        case 'white':
            AddColorElement.style.background = 'black'
            break;
        case 'black':
            AddColorElement.style.background = 'purple'
            break;
        default:
            AddColorElement.style.background = 'red'
            break;
    }

}
function selectByTagName() {
    let tableElement = document.getElementById("custom-Table")
    let elemen = tableElement.getElementsByTagName('input')
    for (let i = 0; i < elemen.length; i++) {
        var checkedElement = elemen[i];
        console.log(checkedElement.attributes.value.nodeValue + checkedElement.checked);
    }

}
function useQuerySelector() {
    let list = document.querySelectorAll('ul>li:last-child')


    for (let i = 0; i < list.length; i++) {
        let current =list[i].innerHTML;
        console.log(current);
            switch (current) {
                case 'This':
                    current = 'Tel'
                    list[i].innerHTML = current
                    break;
                case 'Tel':
                    current = 'Ber'
                    list[i].innerHTML = current
                        break;
                case 'Ber':
                    current = 'Lol'
                    list[i].innerHTML = current
                    break;
                
                default:
                    current = 'Tel'
                    list[i].innerHTML = current
                    break;
            }
        
        
    }
}
function CheckNaturalObject() {
    let current =document.getElementById('data')
    console.log(current.getAttribute('data-home-person') );
    console.log(current.getAttribute('data-home-age'));
}

let sum;
function lengthForWord1(){
    let first = document.querySelectorAll('ul>li')
    for (let i = 0; i < first.length; i++) {
        first[i].innerHTML = 'Hi';
        first[i+1].innerHTML = 'Bro'
        first[i+2].innerHTML = 'It\'s'
        first[i+3].innerHTML = 'My'
        first[i+4].innerHTML = 'Cool'
        first[i+5].innerHTML = 'Life'
        first[i+6].innerHTML = 'Keep a sharp eye'
        break;
    }
    for (let i = 0; i< first.length; i++) {
        first[i].classList.add('colorForMesseger')
    }
    
};


