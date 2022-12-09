let w = JSON.parse(localStorage.getItem('shoes'))

console.log(w);

w.forEach(adminShoe => {
    console.log(adminShoe);
    let p = document.querySelector('tbody');
    p.innerHTML += `
        <tr>
            <td>${adminShoe.id}</td>
            <td>${adminShoe.img}</td>
            <td>${adminShoe.Name}</td>
            <td>${adminShoe.Price}</td>
            <td>${adminShoe.Size}</td>
            <td><button class="addTocheckout" onclick="href="#">Delete</button></td>
            <td><button class="addTocheckout" onclick="href="#">Edit</button></td>
        </tr>
    `
});