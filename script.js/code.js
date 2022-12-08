localStorage.setItem('shoes', JSON.stringify([
    {
        "id": 1,
        "img":"https://i.postimg.cc/RS65Smr3/img2.jpg",
        "Name":"Nike Women's Blazer Mid 77",
        "Price": 1500,
        "Size": "UK6"

    },
    {
        "id": 2,
        "img":"https://i.postimg.cc/FNcSfkbp/img3.jpg",
        "Name":"Nike Neutral AF1 lady's",
        "Price": 1500,
        "Size": "UK9"

    },
    {
        "id": 3,
        "img":"https://i.postimg.cc/QCYYDVqN/img4.jpg",
        "Name":"Air Jordan 4 'Metallic Purple'",
        "Price": 1500,
        "Size": "Uk4"

    },
    {
        "id": 4,
        "img":"https://i.postimg.cc/GcjVbpSh/img7.jpg",
        "Name":"Adidas originals Forum Low Sneakers",
        "Price": 1500,
        "Size": "UK5"

    },
    {
        "id": 5,
        "img":"https://i.postimg.cc/7Dz1zRwS/img12.jpg",
        "Name":"Men Adidas  Lowcut Trainers",
        "Price": 1500,
        "Size": "UK4.5"

    },
    {
        "id": 6,
        "img":"https://i.postimg.cc/brWqVyWW/img9.jpg",
        "Name":" Nike Air Max 97  Black Men's",
        "Price": 1500,
        "Size": "UK7"

    },
    {
        "id": 7,
        "img":"https://i.postimg.cc/W3B6wrSk/img10.jpg",
        "Name":"Men Nike Air Max Trainer",
        "Price": 1500,
        "Size": "UK7.5"

    },
    
]));

let x = JSON.parse(localStorage.getItem('shoes'));

console.log(x);