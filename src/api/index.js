import axios from 'axios';

export const postUserInfo = (user) => {
  axios.post(`https://jsonplaceholder.typicode.com/users`, user)
     .then(res => {
       console.log(res.status);
       // console.log(res.data);
       if (res.status === 201) {
         alert('Login successful')
       } else {
         alert('Login failed')
       }
     })
}
export const dummyApiCall = postId => new Promise(resolve => {
  setTimeout(() => {
    resolve({id: postId, title: 'dummy post'})
  }, 2000);
})
