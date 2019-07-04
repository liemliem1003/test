const users = JSON.parse(localStorage.getItem('users')) || []

export function login(user){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _user = users.find(u => u.name === user.name && u.pass === user.pass)
      // _user ? resolve({data:_user}) : reject({err:{message: 'account not found'}})
      if (_user) {
        resolve({data:_user})
      }
      else{
        reject({err:{message: 'account not found'}})
        alert("account not found")
        console.log("a");
      }
    },1000)
    // console.log(users);
  })
}

export function register(user){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _user = users.find(u => u.name === user.name)
      if(_user){
        reject({message: 'account already taken'})
        alert("account already taken")
      }else{
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        resolve({status:200})
      }
    },1000)
    console.log(users);
  })
}
