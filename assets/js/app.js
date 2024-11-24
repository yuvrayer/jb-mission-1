let numberRows = 0
let stringOfData = []

function getInformation() {
    const name = document.getElementById(`name`).value
    const price = document.getElementById(`price`).value
    const chosenOption = document.getElementById(`option`).value
    const options = [`Drinks`, `Meat`, `Dairy`, `Snacks`, `Basic`]
    const option = options[chosenOption]
    const url = document.getElementById(`url`).value
    const numRows = numberRows++
    if (name === `` || price === `` || url === ``) {
        return alert("you didn`t enter a field")
    }
    return {
        name: name,
        price: price,
        option: option,
        url: url,
        numRows: numRows
    }
}

function generateHTML(data) {
    const newHTML = ` 
        <tr>
            <td>${data.name}</td>
            <td>${data.price}</td>
            <td>${data.option}</td>
            <td><img src="${data.url}"></td>
             <td><button onclick="deleteRow(${data.numRows})">delete</button></td>
            </tr> `
    return newHTML
}

function renderHTML(newHTML) {
    const table = document.getElementById('table')
    table.innerHTML += newHTML
    stringOfData.push(newHTML)
}

function clearForm() {
    const cartForm = document.getElementById('cartForm')
    cartForm.reset()
}

function addRow(event) {
    event.preventDefault()
    const data = getInformation()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    clearForm()
}

function deleteRow(numRows) {
    stringOfData[numRows]= `&nbsp;`
    document.getElementById(`table`).innerHTML= stringOfData
}