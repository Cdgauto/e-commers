const products = [

    {
        id: '1',
        name:'Iphone 11',
        price: 170000,
        category: 'Celular',
        img:'https://d2r9epyceweg5n.cloudfront.net/stores/001/097/819/products/iphone-1141-6395564a1e92a9f06f16795205177772-1024-1024.jpg',
        stock: 25,
        decription:'Descripcion de Iphone 11',
    },

    {
        id: '2',
        name:'Iphone XS',
        price: 181000,
        category: 'Celular',
        img:'https://acdn.mitiendanube.com/stores/001/116/601/products/xsgold1-b0840cf04ada7a54c916376873574552-640-0.png',
        stock: 20,
        decription:'Descripcion de Iphone XS', 
    },

    {
        id: '3',
        name:'Iphone X',
        price: 121000,
        category: 'Celular',
        img:'https://todoapplecaba.com.ar/wp-content/uploads/2021/05/apple-iphone-x-64gb-silver-used-20191122085356800-_w500_1-8532858c58bff3411615996662135414-640-0.jpg',
        stock: 10,
        decription:'Descripcion de Iphone X', 
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}