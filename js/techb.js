const loadAllBillionaire = () => {
    const URL = `https://forbes400.onrender.com/api/forbes400`;
    fetch(URL)
    .then(res => res.json())
    .then(allData => showRichTech(allData.slice(0,6)))
    };

    

    const showRichTech = (allData) => {
    
    const allBillcontainer = document.getElementById('all-bill-container');
    allBillcontainer.innerHTML = '';
    allData.forEach((billionairePerson)=>{
        console.log(billionairePerson);
        const billDiv = document.createElement('div');
        billDiv.classList.add('col');
        billDiv.innerHTML = `
        <div class="card h-100">
                    <img class="p-3" src="${billionairePerson.squareImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${billionairePerson.personName}</h5>
                      <p class="card-text">${billionairePerson.bios[0]}</p>
                    </div>
                    <div class="card-footer">
                      <h6>Citizenship: ${billionairePerson.countryOfCitizenship}</h6>
                      <h6>City: ${billionairePerson.city} </h6>
                      <h6>Rank: ${billionairePerson.rank}</h6>
                    </div>
                  </div>
        `;
        allBillcontainer.appendChild(billDiv);

    })
    

}

const showAllBillionaire = () => {
    const URL = `https://forbes400.onrender.com/api/forbes400`;
    fetch(URL)
    .then(res => res.json())
    .then(allData => showRichTech(allData))
    };


loadAllBillionaire();