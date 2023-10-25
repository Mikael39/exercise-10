const btnget = document.querySelector('#addBtn');
const charDisplay = document.querySelector('#charDisplay');
const input = document.querySelector('input');
const cardOutput = document.querySelector('#cardoutput');

const getChar = () => {
    fetch('https://www.swapi.tech/api/people/?name=' + input.value, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json();
            throw new Error('Failed to get Character');
        })
        .then(data => {
            console.log(data);

            displayCharStats(data)


            function displayCharStats(data) {
                const character = data.result[0];
                input.value = ''; 
                cardOutput.innerHTML = `
            
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                    ${character.properties.name}
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Längd: ${character.properties.height}</li>
                     <li class="list-group-item">Kön: ${character.properties.gender} </li>
                    <li class="list-group-item">Födelseår: ${character.properties.birth_year}</li>
                    <li class="list-group-item">Massa: ${character.properties.mass}</li>
                </ul>
                </div>
                `
            }
        })
        .catch(err => console.log('Error: ' + err));

}
btnget.addEventListener('click', getChar);