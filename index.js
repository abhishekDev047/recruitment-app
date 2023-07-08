
const result = document.getElementById('results');
const value = document.getElementById('inputvalue');


const handleSearch = ()=>{
    if(value.value == ""){
        result.style.display = 'none';
        console.log("nothing is in query")
    }
    else{
        result.style.display = 'flex';
        console.log("search function is running");
    }
};