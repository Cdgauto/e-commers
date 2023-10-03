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
        name:'Ipad Apple 10th',
        price: 221000,
        category: 'Ipad',
        img:'https://http2.mlstatic.com/D_NQ_NP_764857-MLA52988770506_122022-O.webp',
        stock: 10,
        description:'Descripcion de Ipad', 
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