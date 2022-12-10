let x = JSON.parse(localStorage.getItem('checkout'));

console.log(x);
let y = document.querySelector('#tableBodyCheck');

x.forEach(element => {
    y.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td>${element.Name}</td>
        <td>${element.img}</td>
        <td>${element.Price}</td>
        <td>${element.Size}</td>
        <td><button class="addTocheckout" onclick="href="#">clear</button></td>
    </tr>
    `
});
