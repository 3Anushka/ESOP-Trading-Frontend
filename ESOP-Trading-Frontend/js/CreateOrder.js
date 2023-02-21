const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    console.log(username.value)
    const response = await fetch(`http://localhost:8080/user/${username.value}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    }).then((response)=>response.json())
    .then((json)=>{
    console.log(json.errors)
    if(json.errors){
    document.getElementById("message").innerHTML = json.errors

    }
    })

//    const result = await response.json();
//    if(result.)
//    console.log(result)
});