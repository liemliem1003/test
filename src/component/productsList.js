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
      stars:0,
      id:name+String(i),
      name:name+i,
      price:10000*i+1000,
      img:"https://cdn.tgdd.vn/Products/Images/42/106211/samsung-galaxy-note8-black-1-400x400.jpg",
      details:"Giảm 500.000đ qua quà tặng Galaxy (không kèm thu cũ đổi mới)"
    }
    x.push(a);
  }
  // console.log(x);
  return x
}

export default products
