const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
        const queryString = new URLSearchParams(window.location.search);
        const username = queryString.get('username')
         console.log(username)
    const response = await fetch(`http://localhost:8080/user/${username}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: getBody()
    }).then((response)=>response.json())
    .then((json)=>{
    console.log(json.errors)
    if(json.errors){
    document.getElementById("message").innerHTML = json.errors

    }

})});

function getBody() {

    const orderType = document.getElementById('type').value
    const price = document.getElementById('price').value

    const quantity = document.getElementById('quantity').value

    return JSON.stringify({
        "type": orderType,
        "quantity": quantity,
        "price": price,

    })
}