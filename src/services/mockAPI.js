const data = [
    {
      id: 1,
      title: "Notebook 1",
      price: 1500,
      stock: 6,
      category: "laptops",
      detail:
        "Buena laptop para uso de estudio",
      img: "/assets/laptops/1.png",
    },
    {
      id: 2,
      title: "Notebook 2",
      price: 1000,
      stock: 3,
      category: "laptops",
      detail:
        "Rica PC para juegos",
      img: "/assets/laptops/2.png",
    },
    {
      id: 3,
      title: "Notebook 3",
      price: 500,
      stock: 7,
      category: "laptops",
      detail:
        "PC normalita",
      img: "/assets/laptops/3.png",
    },
  ];
  
  export default function getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  }
  
  export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemFind = data.find((item) => item.id === idItem);
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 1500);
    });
  }