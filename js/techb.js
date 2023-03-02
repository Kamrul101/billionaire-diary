const loadAllBillionaire = () => {
    const URL = `https://forbes400.onrender.com/api/forbes400`;
    fetch(URL)
    .then(res => res.json())
    .then(allData => showRichTech(allData))
    };

const showRichTech = (allData) => {
    // window.open("rich-industry.html");
    const allBillcontainer = document.getElementById('all-bill-container');
    allData.slice(0,6).forEach((billionairePerson)=>{
        console.log(billionairePerson);
        const billDiv = document.createElement('div');
        billDiv.classList.add('col');
        billDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${billionairePerson.squareImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${billionairePerson.personName}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
        `;
        allBillcontainer.appendChild(billDiv);

        
    })
    

}

loadAllBillionaire();