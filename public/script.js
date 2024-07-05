// let btn  = document.querySelectorAll("button")

// for(let i of btn){
//     i.addEventListener("click",(e)=>{
//     e.target.parentNode.remove()
//     })
// }

// let btn  = document.querySelectorAll("button")

// for(let i of btn){
//     i.addEventListener("click",(e)=>{
//     console.log(e.target.parentNode.children[0].textContent);
//     })
// }


let color = [
  "brown",
  "#009",
  "lightblue",
  "lightcoral",
  "lightgreen",
]

if(localStorage.getItem("name") == null ){
  location.replace("../index.html")
}else if(localStorage.getItem("name") == "bot"){}
else{
  let change_color = Math.floor(Math.random()*color.length)
  let change = document.getElementById('change')
  change.style.paddingTop = "12px"
  change.style.backgroundColor = color[change_color]
  change.style.color = "white"
  change.style.border = "1px solid #fff"
  change.style.color = "#000"
  change.textContent = localStorage.getItem("name").slice(0,1).toUpperCase()
  
    //    Name
    let oneWord = localStorage.getItem("name").slice(0,1).toUpperCase()
    let fullWord = localStorage.getItem("name").slice(1).toLowerCase()
    document.getElementById("btn2").innerHTML = oneWord +  fullWord
}


const logout = document.getElementById('logout')
logout.addEventListener("click",()=>{
  let confirm1 = confirm("Confirm to logout")
  if(confirm1){
    localStorage.removeItem("Name")
    window.location.replace("../index.html")
  }
})

const obj = {
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Hazel Gardner",
          reviewerEmail: "hazel.gardner@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      sku: "O5IF1NTA",
      weight: 5,
      dimensions: {
        width: 14.37,
        height: 13.94,
        depth: 14.6,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Carter Rivera",
          reviewerEmail: "carter.rivera@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 6,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "9444582199406",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: "beauty",
      price: 8.99,
      discountPercentage: 2.46,
      rating: 3.91,
      stock: 71,
      tags: ["beauty", "nail polish"],
      brand: "Nail Couture",
      sku: "YUIIIP4W",
      weight: 9,
      dimensions: {
        width: 8.11,
        height: 10.89,
        depth: 29.06,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Evan Reed",
          reviewerEmail: "evan.reed@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Evelyn Sanchez",
          reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 46,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "3212847902461",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      description:
        "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      category: "fragrances",
      price: 49.99,
      discountPercentage: 0.32,
      rating: 4.85,
      stock: 17,
      tags: ["fragrances", "perfumes"],
      brand: "Calvin Klein",
      sku: "DZM2JQZE",
      weight: 5,
      dimensions: {
        width: 11.53,
        height: 14.44,
        depth: 6.81,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Sophia Brown",
          reviewerEmail: "sophia.brown@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Maya Reed",
          reviewerEmail: "maya.reed@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 20,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "2210136215089",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      description:
        "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      category: "fragrances",
      price: 129.99,
      discountPercentage: 18.64,
      rating: 2.76,
      stock: 41,
      tags: ["fragrances", "perfumes"],
      brand: "Chanel",
      sku: "K71HBCGS",
      weight: 4,
      dimensions: {
        width: 21.27,
        height: 28,
        depth: 11.89,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 1,
          comment: "Disappointing product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Lincoln Kelly",
          reviewerEmail: "lincoln.kelly@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Lincoln Kelly",
          reviewerEmail: "lincoln.kelly@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Lucas Allen",
          reviewerEmail: "lucas.allen@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 5,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "1435582999795",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    },
    {
      id: 8,
      title: "Dior J'adore",
      description:
        "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      category: "fragrances",
      price: 89.99,
      discountPercentage: 17.44,
      rating: 3.31,
      stock: 91,
      tags: ["fragrances", "perfumes"],
      brand: "Dior",
      sku: "E70NB03B",
      weight: 10,
      dimensions: {
        width: 21.51,
        height: 7,
        depth: 26.51,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Zoe Nicholson",
          reviewerEmail: "zoe.nicholson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Addison Wright",
          reviewerEmail: "addison.wright@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Clara Berry",
          reviewerEmail: "clara.berry@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 8,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "0887083199279",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    },
    {
      id: 9,
      title: "Dolce Shine Eau de",
      description:
        "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      category: "fragrances",
      price: 69.99,
      discountPercentage: 11.47,
      rating: 2.68,
      stock: 3,
      tags: ["fragrances", "perfumes"],
      brand: "Dolce & Gabbana",
      sku: "1NBFK980",
      weight: 5,
      dimensions: {
        width: 17,
        height: 24.57,
        depth: 13.3,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Xavier Wright",
          reviewerEmail: "xavier.wright@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Mila Hernandez",
          reviewerEmail: "mila.hernandez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Sophia Brown",
          reviewerEmail: "sophia.brown@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 9,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "1939383392674",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      description:
        "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      category: "fragrances",
      price: 79.99,
      discountPercentage: 8.9,
      rating: 2.69,
      stock: 93,
      tags: ["fragrances", "perfumes"],
      brand: "Gucci",
      sku: "FFKZ6HOF",
      weight: 10,
      dimensions: {
        width: 22.28,
        height: 17.81,
        depth: 27.18,
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aria Parker",
          reviewerEmail: "aria.parker@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Natalie Harris",
          reviewerEmail: "natalie.harris@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ava Harris",
          reviewerEmail: "ava.harris@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 10,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8232190382069",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      description:
        "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      category: "furniture",
      price: 1899.99,
      discountPercentage: 0.29,
      rating: 4.14,
      stock: 47,
      tags: ["furniture", "beds"],
      brand: "Annibale Colombo",
      sku: "4KMDTZWF",
      weight: 3,
      dimensions: {
        width: 28.75,
        height: 26.88,
        depth: 24.47,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Julian Newton",
          reviewerEmail: "julian.newton@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Clara Berry",
          reviewerEmail: "clara.berry@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7113807059215",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    },
    {
      id: 12,
      title: "Annibale Colombo Sofa",
      description:
        "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      category: "furniture",
      price: 2499.99,
      discountPercentage: 18.54,
      rating: 3.08,
      stock: 16,
      tags: ["furniture", "sofas"],
      brand: "Annibale Colombo",
      sku: "LUU95CQP",
      weight: 3,
      dimensions: {
        width: 20.97,
        height: 19.11,
        depth: 25.81,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Tyler Davis",
          reviewerEmail: "tyler.davis@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Hannah Robinson",
          reviewerEmail: "hannah.robinson@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Waste of money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0426785817074",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    },
    {
      id: 13,
      title: "Bedside Table African Cherry",
      description:
        "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      category: "furniture",
      price: 299.99,
      discountPercentage: 9.58,
      rating: 4.48,
      stock: 16,
      tags: ["furniture", "bedside tables"],
      brand: "Furniture Co.",
      sku: "OWPLTZYX",
      weight: 10,
      dimensions: {
        width: 25.43,
        height: 20.2,
        depth: 24.95,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Avery Carter",
          reviewerEmail: "avery.carter@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Evelyn Sanchez",
          reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 5,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "2913244159666",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    },
    {
      id: 14,
      title: "Knoll Saarinen Conference Chair",
      description:
        "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      category: "furniture",
      price: 499.99,
      discountPercentage: 15.23,
      rating: 4.11,
      stock: 47,
      tags: ["furniture", "office chairs"],
      brand: "Knoll",
      sku: "RKHVJ4FE",
      weight: 3,
      dimensions: {
        width: 16.59,
        height: 21.46,
        depth: 29.07,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leah Gutierrez",
          reviewerEmail: "leah.gutierrez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Waste of money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Stella Morris",
          reviewerEmail: "stella.morris@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 5,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0726316339746",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description:
        "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      category: "furniture",
      price: 799.99,
      discountPercentage: 11.22,
      rating: 3.26,
      stock: 95,
      tags: ["furniture", "bathroom"],
      brand: "Bath Trends",
      sku: "7OLTIEVO",
      weight: 6,
      dimensions: {
        width: 7.32,
        height: 22.64,
        depth: 12.37,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Charlotte Lopez",
          reviewerEmail: "charlotte.lopez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Would not recommend!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "William Gonzalez",
          reviewerEmail: "william.gonzalez@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not worth the price!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ava Harrison",
          reviewerEmail: "ava.harrison@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7839797529453",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    },
    {
      id: 16,
      title: "Apple",
      description:
        "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      category: "groceries",
      price: 1.99,
      discountPercentage: 1.97,
      rating: 2.96,
      stock: 9,
      tags: ["fruits"],
      sku: "QTROUV79",
      weight: 8,
      dimensions: {
        width: 8.29,
        height: 5.58,
        depth: 12.41,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Logan Lee",
          reviewerEmail: "logan.lee@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Elena Long",
          reviewerEmail: "elena.long@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Grayson Coleman",
          reviewerEmail: "grayson.coleman@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 44,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "2517819903837",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    },
    {
      id: 17,
      title: "Beef Steak",
      description:
        "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      category: "groceries",
      price: 12.99,
      discountPercentage: 17.99,
      rating: 2.83,
      stock: 96,
      tags: ["meat"],
      sku: "BWWA2MSO",
      weight: 9,
      dimensions: {
        width: 23.35,
        height: 13.48,
        depth: 26.4,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ethan Martinez",
          reviewerEmail: "ethan.martinez@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Disappointing product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Owen Fisher",
          reviewerEmail: "owen.fisher@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 21,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8335515097879",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    },
    {
      id: 18,
      title: "Cat Food",
      description:
        "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      category: "groceries",
      price: 8.99,
      discountPercentage: 9.57,
      rating: 2.88,
      stock: 13,
      tags: ["pet supplies", "cat food"],
      sku: "C3F8QN6O",
      weight: 9,
      dimensions: {
        width: 15.4,
        height: 13.97,
        depth: 25.13,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mateo Bennett",
          reviewerEmail: "mateo.bennett@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aurora Barnes",
          reviewerEmail: "aurora.barnes@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ellie Stewart",
          reviewerEmail: "ellie.stewart@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 48,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "5503491330693",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    },
    {
      id: 19,
      title: "Chicken Meat",
      description:
        "Fresh and tender chicken meat, suitable for various culinary preparations.",
      category: "groceries",
      price: 9.99,
      discountPercentage: 10.46,
      rating: 4.61,
      stock: 69,
      tags: ["meat"],
      sku: "G5YEHW7B",
      weight: 7,
      dimensions: {
        width: 15.96,
        height: 29.24,
        depth: 26.25,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Sophia Jones",
          reviewerEmail: "sophia.jones@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Maya Reed",
          reviewerEmail: "maya.reed@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Harper Turner",
          reviewerEmail: "harper.turner@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 46,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0966223559510",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    },
    {
      id: 20,
      title: "Cooking Oil",
      description:
        "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      category: "groceries",
      price: 4.99,
      discountPercentage: 18.89,
      rating: 4.01,
      stock: 22,
      tags: ["cooking essentials"],
      sku: "Q6ZP1UY8",
      weight: 8,
      dimensions: {
        width: 8.18,
        height: 27.45,
        depth: 27.88,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mason Parker",
          reviewerEmail: "mason.parker@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Jonathan Pierce",
          reviewerEmail: "jonathan.pierce@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Alexander Hernandez",
          reviewerEmail: "alexander.hernandez@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 2,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "6707669443381",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    },
    {
      id: 21,
      title: "Cucumber",
      description:
        "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      category: "groceries",
      price: 1.49,
      discountPercentage: 11.44,
      rating: 4.71,
      stock: 22,
      tags: ["vegetables"],
      sku: "6KGF2K6Z",
      weight: 9,
      dimensions: {
        width: 11.04,
        height: 20.5,
        depth: 8.18,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Elijah Hill",
          reviewerEmail: "elijah.hill@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ella Cook",
          reviewerEmail: "ella.cook@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 7,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "2597004869708",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    },
    {
      id: 22,
      title: "Dog Food",
      description:
        "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      category: "groceries",
      price: 10.99,
      discountPercentage: 18.15,
      rating: 2.74,
      stock: 40,
      tags: ["pet supplies", "dog food"],
      sku: "A6QRCH37",
      weight: 2,
      dimensions: {
        width: 29.39,
        height: 29.77,
        depth: 20.54,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Alexander Jones",
          reviewerEmail: "alexander.jones@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Addison Wright",
          reviewerEmail: "addison.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 29,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7957222289508",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    },
    {
      id: 23,
      title: "Eggs",
      description:
        "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      category: "groceries",
      price: 2.99,
      discountPercentage: 5.8,
      rating: 4.46,
      stock: 10,
      tags: ["dairy"],
      sku: "YA617RI7",
      weight: 4,
      dimensions: {
        width: 12.3,
        height: 10.99,
        depth: 15.53,
      },
      warrantyInformation: "3 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mateo Perez",
          reviewerEmail: "mateo.perez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Cameron Perez",
          reviewerEmail: "cameron.perez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Aurora Barnes",
          reviewerEmail: "aurora.barnes@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 43,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7095702028776",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    },
    {
      id: 24,
      title: "Fish Steak",
      description:
        "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      category: "groceries",
      price: 14.99,
      discountPercentage: 7,
      rating: 4.83,
      stock: 99,
      tags: ["seafood"],
      sku: "XNIH1MTA",
      weight: 8,
      dimensions: {
        width: 20.14,
        height: 8.4,
        depth: 10.01,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Michael Johnson",
          reviewerEmail: "michael.johnson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Julian Newton",
          reviewerEmail: "julian.newton@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Lila Hudson",
          reviewerEmail: "lila.hudson@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 49,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "4250692197342",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    },
    {
      id: 25,
      title: "Green Bell Pepper",
      description:
        "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      category: "groceries",
      price: 1.29,
      discountPercentage: 15.5,
      rating: 4.28,
      stock: 89,
      tags: ["vegetables"],
      sku: "HU7S7VQ0",
      weight: 7,
      dimensions: {
        width: 7.32,
        height: 14.31,
        depth: 21.38,
      },
      warrantyInformation: "5 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Maya Reed",
          reviewerEmail: "maya.reed@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madison Collins",
          reviewerEmail: "madison.collins@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "7583442707568",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    },
    {
      id: 26,
      title: "Green Chili Pepper",
      description:
        "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      category: "groceries",
      price: 0.99,
      discountPercentage: 18.51,
      rating: 4.43,
      stock: 8,
      tags: ["vegetables"],
      sku: "Y4RM3JCB",
      weight: 2,
      dimensions: {
        width: 18.67,
        height: 21.17,
        depth: 25.26,
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Disappointing product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Mateo Bennett",
          reviewerEmail: "mateo.bennett@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Natalie Price",
          reviewerEmail: "natalie.price@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Avery Barnes",
          reviewerEmail: "avery.barnes@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 43,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8400326844874",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    },
    {
      id: 27,
      title: "Honey Jar",
      description:
        "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      category: "groceries",
      price: 6.99,
      discountPercentage: 1.91,
      rating: 3.5,
      stock: 25,
      tags: ["condiments"],
      sku: "BTBNIIOU",
      weight: 9,
      dimensions: {
        width: 26.53,
        height: 27.11,
        depth: 6.63,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Nicholas Bailey",
          reviewerEmail: "nicholas.bailey@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Awesome product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Gabriel Hayes",
          reviewerEmail: "gabriel.hayes@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "James Garcia",
          reviewerEmail: "james.garcia@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "0668665656044",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    },
    {
      id: 28,
      title: "Ice Cream",
      description:
        "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      category: "groceries",
      price: 5.49,
      discountPercentage: 7.58,
      rating: 3.77,
      stock: 76,
      tags: ["desserts"],
      sku: "VEZMU1EQ",
      weight: 5,
      dimensions: {
        width: 17.66,
        height: 24.49,
        depth: 25.98,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Madeline Simpson",
          reviewerEmail: "madeline.simpson@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Caleb Nelson",
          reviewerEmail: "caleb.nelson@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 19,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "9603960319256",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    },
    {
      id: 29,
      title: "Juice",
      description:
        "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      category: "groceries",
      price: 3.99,
      discountPercentage: 5.45,
      rating: 3.41,
      stock: 99,
      tags: ["beverages"],
      sku: "M2K19S06",
      weight: 2,
      dimensions: {
        width: 8.97,
        height: 12.26,
        depth: 15.05,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not worth the price!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Ethan Martinez",
          reviewerEmail: "ethan.martinez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Excellent quality!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Max Parker",
          reviewerEmail: "max.parker@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 26,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "8546824122355",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    },
    {
      id: 30,
      title: "Kiwi",
      description:
        "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      category: "groceries",
      price: 2.49,
      discountPercentage: 10.32,
      rating: 4.37,
      stock: 1,
      tags: ["fruits"],
      sku: "0X3NORB9",
      weight: 8,
      dimensions: {
        width: 27.3,
        height: 7.48,
        depth: 15.08,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Dylan Wells",
          reviewerEmail: "dylan.wells@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.620Z",
          reviewerName: "Noah Hernandez",
          reviewerEmail: "noah.hernandez@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 8,
      meta: {
        createdAt: "2024-05-23T08:56:21.620Z",
        updatedAt: "2024-05-23T08:56:21.620Z",
        barcode: "3325493172934",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    },
  ],
  total: 194,
  skip: 0,
  limit: 30,
};

//    profile btn

let Profile = document.getElementById("Profile");
Profile.onclick = () => {
  location.href = "User_Profile/Profile.html";
};

//    function of card  &  sort Category

let section = document.getElementById("box");
let uniquecategory = [];
let category = document.getElementById("category");
for (let i of obj.products) {
  // section.innerHTML = ""
  section.innerHTML += `
    <div class="card cards bg-base-100 image-full h-[350px] max-w-[450px] shadow-xl overflow-hidden ">
        <figure>
          <img
          src=${i.images[0]}
          alt="Error" />
        </figure>
        <div class="card-body text-center translate-x-[500px]">
          <h2 class="card-title w-full h-10 flex justify-center items-center pt-3">${i.title} </h2>
          <p class="para my-3 w-full h-36">${i.description}</p>
          <div class="card-actions justify-between">
            <div class="category">
              <h1 class="text-black font-bold text-xl"><u>Category</u></h1>
              <div class="badge badge-info badge-outline">${i.category}</div>
            </div>
            <button class="btn btns btn-primary">Buy Now</button>
          </div>
        </div>
        </div>`;

  if (!uniquecategory.includes(i.category)) {
    category.innerHTML += `<option value="${i.category}">${i.category}</option>`;
    uniquecategory.push(i.category);
  }
}

//   function of  Category
let uniquebrand = [];
category.onchange = () => {
  let selectedCategory = category.value;
  section.innerHTML = ""
  // let selector2 = document.getElementById("brand");
  // selector2.style.display = "block"
  //  let brands = document.getElementById('brand')
   
  for (let i of obj.products) {
  //   if (!uniquebrand.includes(i.brand)) {
  //     if (!selectedCategory.includes(i.brand)) {
  //       uniquebrand.push(i.brand);
  //       brands.innerHTML += `<option value="${i.brand}">${i.brand}</option>`;
  //     }
  //   }

    if (i.category === selectedCategory) {
      section.innerHTML += `
      <div class="card cards bg-base-100 image-full h-[350px] max-w-[450px] shadow-xl overflow-hidden ">
        <figure>
          <img
          src=${i.images[0]}
          alt="Error" />
        </figure>
        <div class="card-body text-center translate-x-[500px]">
        <h2 class="card-title w-full h-10 flex justify-center items-center pt-3">${i.title} </h2>
        <p class="para my-3 w-full h-36">${i.description}</p>
        <div class="card-actions justify-between">
        <div class="category">
        <h1 class="text-black font-bold text-xl"><u>Category</u></h1>
        <div class="badge badge-info badge-outline">${i.category}</div>
        </div>
        <button class=" btn btns btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`;
    } else if (selectedCategory == "All") {
      // section.innerHTML = ""
      section.innerHTML += `
      <div class="card cards bg-base-100 image-full h-[350px] max-w-[450px] shadow-xl overflow-hidden ">
        <figure>
          <img
          src=${i.images[0]}
          alt="Error" />
        </figure>
        <div class="card-body text-center translate-x-[500px]">
          <h2 class="card-title w-full h-10 flex justify-center items-center pt-3">${i.title} </h2>
          
          <p class="para my-3 w-full h-36">${i.description}</p>
          <div class="card-actions justify-between">
            <div class="category">
              <h1 class="text-black font-bold text-xl"><u>Category</u></h1>
              <div class="badge badge-info badge-outline">${i.category}</div>
            </div>
            
            <button class=" btn btns btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`;
    }
  }
};

//   function of  Seacrh bar

let Search = document.getElementById("Search");
Search.oninput = () => {
  let searchValue = Search.value.toLowerCase();
  section.innerHTML = "";
  for (let i of obj.products) {
    let title = i.title.toLowerCase();
    if (title.includes(searchValue)) {
      // section.innerHTML = ""
      section.innerHTML += `
   <div class="card cards bg-base-100 image-full h-[350px] max-w-[450px] shadow-xl overflow-hidden ">
        <figure>
          <img
          src=${i.images[0]}
          alt="Error" />
        </figure>
        <div class="card-body text-center translate-x-[500px]">
          <h2 class="card-title w-full h-10 flex justify-center items-center pt-3">${i.title} </h2>
          <p class="para my-3 w-full h-36">${i.description}</p>
          <div class="card-actions justify-between">
            <div class="category">
              <h1 class="text-black font-bold text-xl"><u>Category</u></h1>
              <div class="badge badge-info badge-outline">${i.category}</div>
            </div>
            
            <button class=" btn btns btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`;
    }
  }
};

//   function of  Add to card btn

let count = 0;
let sm_icon = document.querySelector(".sm_icon");
let lg_icon = document.querySelector(".lg_icon");

let carde = [];

let buy = document.querySelectorAll(".btns");
buy.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    count++;
    sm_icon.innerHTML = count;
    if (count == 1) {
      lg_icon.innerHTML = count + " " + "item";
    } else {
      lg_icon.innerHTML = count + " " + "items";
    }
    carde.unshift({
      title: `${
        e.target.parentNode.parentNode.querySelector(".card-title").innerText
      }`,
      image_url: `${
        e.target.parentNode.parentNode.parentNode.querySelector("img").src
      }`,
      description: `${
        e.target.parentNode.parentNode.querySelector(".para").innerText
      }`,
      category: `${
        e.target.parentNode.parentNode.querySelector(".badge-outline").innerText
      }`,
    });
  });
});

let View_cart = document.querySelector(".View_cart");
View_cart.onclick = () => {
  document.querySelector('link[rel="icon"]').href ="../Images/Logo for view card.jpeg";
  section.style.display = "none";
  let boxs = document.getElementById("boxs");
  let selector = document.getElementById("selector");
  boxs.style.height = "100vh";
  selector.style.display = "none";
  boxs.innerHTML = "";
  boxs.innerHTML = `<button type="button" id="back"><i class="fa-solid fa-arrow-left"></i></button>`;
  for (i of carde) {
    boxs.innerHTML += `
        <div class="card cards bg-base-100 image-full h-[350px] max-w-[450px] shadow-xl overflow-hidden ">
        <figure>
          <img
          src="${i.image_url}"
          alt="Shoes" />
        </figure>
        <div class="card-body text-center  translate-x-[500px]">
          <button type="button" id="del"><i class="fa-solid fa-xmark"></i></button>
          <h2 class="card-title w-full h-10 flex justify-center items-center ">${i.title}</h2>
          <p class="para my-3 w-full h-36">${i.description}</p>
          <div class="card-actions justify-center">
            <div class="category">
              <h1 class="text-black font-bold text-xl"><u>Category</u></h1>
              <div class="badge badge-info badge-outline">${i.category}</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  //   back

  let back = document.getElementById("back");
  back.onclick = () => {
    document.querySelector('link[rel="icon"]').href ="../Images/logo for store.jpeg";
    section.style.display = "flex";
    boxs.style.height = "0";
    selector.style.display = "flex";
    carde = [];
    count = 0;
    sm_icon.innerHTML = 0;
    lg_icon.innerHTML = 0;
    document.querySelector("body").style.overflow = "auto";
    View_cart.disabled = false;
    back.style.display = "none";
  };

  //   delete btn

  let del = document.querySelectorAll("#del");
  if (del.length < 4) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("#boxs").style.marginTop = "90px";
  }
  del.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.remove();
      count--;
      sm_icon.innerHTML = count;
      if (count == 1) {
        lg_icon.innerHTML = count + " " + "item";
      } else {
        lg_icon.innerHTML = count + " " + "items";
      }
      View_cart.disabled = true;
    });
  });
};