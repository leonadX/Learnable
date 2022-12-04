const categories = { 
  "Laptops": {
    items: ["HP", "Dell", "Lenovo", "Apple", "Acer", "Asus"]
  },
  "Phones": { 
    items: ["Tecno", "Infinix", "Samsung", "Huawei", "Xaiomi"]
  },
  "Electronics": {
    items: ["LG", "Samsung", "Mecury", "Thermacool"]
  },
  "Fashion": {
    items: ["D&G", "Nike", "Gucci", "Lois Vuitton"]
  }
}
console.log("Select a category. Input ")
let i = 0
for (let c in categories) {
    console.log(i + " for " + c)
    i++
}
let catId = prompt()
let cat
i = 0;
for (let c in categories) {
    if(i==catId){
        cat = c
        break
    }
    i++
}
console.log("The available models in the " + cat + " category are: ")
for (let model of categories[cat].items) {
    console.log(model)
}