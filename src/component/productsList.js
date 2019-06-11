const products={
  Watches:CreateProducts("watches"),
  Clothes:CreateProducts("clothes"),
  Shoes:CreateProducts("shoes")
}
function CreateProducts(name){
  let x=[];
  let a;
  for (var i = 0; i < 100; i++) {
    a={
      id:name+String(i),
      name:name+i,
      price:10000*i+1000,
      img:"https://cdn.tgdd.vn/Products/Images/42/106211/samsung-galaxy-note8-black-1-400x400.jpg"      
    }
    x.push(a);
  }
  return x;
}

export default products
