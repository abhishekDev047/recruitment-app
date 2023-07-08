
const result = document.getElementById('results');
const value = document.getElementById('inputvalue');
const role = document.getElementsByClassName('role');
const pannel = document.getElementById('pannel');

const form = document.getElementById('login-form');

const handleSearch = ()=>{
    if(value.value == ""){
        result.style.display = 'none';
        // console.log("nothing is in query")
    }
    else{
        for (let i = 0; i < role.length; i++) {
            role[i].innerHTML = value.value; 
        }
        result.style.display = 'flex';
        // console.log("search function is running");
    }
};
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password ) {
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password');
  }
});

