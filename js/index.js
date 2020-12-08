// 1. Создать страницу, которая выводит нумерованный список песен:

const playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];

    function showResult(res) {
        const result = document.getElementById('result1');
        const par = document.createElement('div');

        par.innerText = res;
        result.append(par);
    }
        
    playList.forEach(function(item, i) {
        for (let key in item) {
            let obj = `${key}: ${item[key]}`;
            if (key == 'author') {
                showResult(`${i + 1}. ${obj}`);
            } else {
                showResult(`${obj}`);
                
            }
        }
    });

// // 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
// На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. При клике на кнопку
// "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. 

const butt11 = document.getElementById('butt11');
const modal = document.getElementsByClassName('modal')[0];

butt11.addEventListener('click', () => {
    modal.style.display = 'block';
});

const butt12 = document.getElementById('butt12');

butt12.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

const butt2 = document.querySelector('#butt2');
const firstCircle = document.querySelectorAll('.circle')[0];
const secondCircle = document.querySelectorAll('.circle')[1];
const thirdCircle = document.querySelectorAll('.circle')[2];


    butt2.addEventListener('click', () =>{

        if (firstCircle.classList.contains('circle--red')) {
            firstCircle.classList.remove('circle--red');
            secondCircle.classList.add('circle--orange');
        } else if (secondCircle.classList.contains('circle--orange')) {
            secondCircle.classList.remove('circle--orange');
            thirdCircle.classList.add('circle--green');
        } else if (thirdCircle.classList.contains('circle--green')) {
            thirdCircle.classList.remove('circle--green');
            firstCircle.classList.add('circle--red');
        }
         
    });



