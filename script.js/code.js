localStorage.setItem('shoes', JSON.stringify([
    {
        "id": 1,
        "img":"https://i.postimg.cc/RS65Smr3/img2.jpg",
        "Name":"Nike Women's Blazer Mid 77",
        "Price": "R1500",
        "Size": "UK6"

    },
    {
        "id": 2,
        "img":"https://i.postimg.cc/FNcSfkbp/img3.jpg",
        "Name":"Nike Neutral AF1 lady's",
        "Price": "R1250",
        "Size": "UK9"

    },
    {
        "id": 3,
        "img":"https://i.postimg.cc/QCYYDVqN/img4.jpg",
        "Name":"Air Jordan 4 'Metallic Purple'",
        "Price": "R2500",
        "Size": "UK4"

    },
    {
        "id": 4,
        "img":"https://i.postimg.cc/Jh72LTfL/img7.jpg",
        "Name":"Women's New Balance",
        "Price": "R1100",
        "Size": "UK5"

    },
    {
        "id": 5,
        "img":"https://i.postimg.cc/7Dz1zRwS/img12.jpg",
        "Name":"Men Adidas  Lowcut Trainers",
        "Price":"R1600",
        "Size": "UK4.5"

    },
    {
        "id": 6,
        "img":"https://i.postimg.cc/brWqVyWW/img9.jpg",
        "Name":" Nike Air Max 97  Black Men's",
        "Price": "R1200",
        "Size": "UK9"

    },
    {
        "id": 7,
        "img":"https://i.postimg.cc/W3B6wrSk/img10.jpg",
        "Name": " Men's Nike Air Max",
        "Price": "R1300",
        "Size": "UK7.5"

    },
    {
        "id": 8,
        "img":"https://i.postimg.cc/LXZtTRX0/img11.jpg",
        "Name":"Lacoste Sideline Men's Look",
        "Price": "R1600",
        "Size": "UK7"

    },
    
]));

let sneakers = JSON.parse(localStorage.getItem('shoes'));

console.log(sneakers);
function displaydata(){
    
let showSneaker = document.querySelector("#productContainer");
    Object.keys(sneakers).forEach((item) => {
        let y = sneakers[item];
        console.log(sneakers[item]);
        showSneaker.innerHTML +=`
            <div class= "card">
                <img src="${y.img}" alt="image"/>
                <h4>${y.Name}</h4>
                <h6>${y.Size}</h6>
                <h5>${y.Price}</h5>
                <button class="checkout" onclick= "addTocheckout (${y.id})">Add to checkout</button>
            </div>
        `

    });
}

displaydata();

let check = JSON.parse(localStorage.getItem ('checkout'));


function addTocheckout(id) {
    check.push(sneakers[id -1])
    localStorage.setItem('checkout', JSON.stringify(check))
}

