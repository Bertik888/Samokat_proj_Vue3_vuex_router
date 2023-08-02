export const getProducts = () => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve(
        [
          {
            name: 'samokat_wheel',
            id: 3,
            image: 'samokat_wheel.jpg'
          }
        ]
      ) 

    }, 2000)
  })
}