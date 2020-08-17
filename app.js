const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('.result');
const ul = document.querySelector('.output');
const randomBtn = document.querySelector('#random');


form.addEventListener('submit' , function(e){
    e.preventDefault();
    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}` , true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li class="my-2">${joke.joke}</li>`;
                });
            }else{
                output += `<li class="my-2">Something Went Wrong </li>`;
            }
        ul.innerHTML = output;    
        }
    }

    xhr.send();
});

randomBtn.addEventListener('click', function (e) {
    // const number = document.querySelector('#number').value;
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';
            if (response.type === 'success') {
                // response.value.forEach(function (joke) {
                output += `<li class="my-2">${response.value.joke}</li>`;
                // });
            } else {
                output += `<li class="my-2">Something Went Wrong </li>`;
            }
            ul.innerHTML = output;
        }
    }

    xhr.send();
});
