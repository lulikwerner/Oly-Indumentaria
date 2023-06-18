let products = [
    { id: 1, img: '../public/assets/img/dia.png' },
    { id: 2, img: '../public/assets/img/noche.png' },
    { id: 3, img: '../public/assets/img/abrigos.png' },
    { id: 4, img: '../public/assets/img/calzado.png' },
    { id: 5, img: '../public/assets/img/jeans.png' },
    { id: 6, img: '../public/assets/img/camisas.png' },
    { id: 7, img: '../public/assets/img/accesorios.png' },
    { id: 8, img: '../public/assets/img/giftcard.png' }
  ];
  
  export const gFetch = () => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(products);
          });
        
    }else {
        rej('error en el fetch')
    }
  });

  let product2 =[
    { id: 1, img: "q"},
    { id: 2, img: "w" },
    { id: 3, img: "u"},
    { id: 4, img: "z" },
  ]
  export const gFetch2 = () => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(product2);
          });
        
    }else {
        rej('error en el fetch')
    }
  });
