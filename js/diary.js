const loadBillionaire = () => {
const URL = `https://forbes400.onrender.com/api/forbes400`;
fetch(URL)
.then(res => res.json())
.then(data => displayBillionaire(data))
};

const displayBillionaire = (data) =>{
// console.log(data);
const tableData = document.getElementById('billionaire-data');
data.slice(0,3).forEach((billionaire)=>{
    console.log(billionaire);
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${billionaire.personName}</td>
    <td>${billionaire.countryOfCitizenship}</td>
    <td>${billionaire.industries}</td>
    <td>${billionaire.rank}</td>
    <td>${billionaire.finalWorth}</td>
    `;
    tableData.appendChild(tableRow);
})

}

// loadBillionaire();