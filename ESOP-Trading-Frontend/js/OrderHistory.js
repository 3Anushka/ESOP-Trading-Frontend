const queryString = new URLSearchParams(window.location.search);
        const username = queryString.get('username')
         console.log(username)
fetch(`http://localhost:8080/user/${username}/orderHistory`)
  .then((response) => response.json())
  .then((json) => {

    let li = `<tr><th>OrderID</th><th>Quantity</th><th>Type</th><th>Price</th><th>Status</th></tr>`;

    json.forEach((order) => {
      li += `<tr>
        <td>${order.orderId}</td>
        <td>${order.quantity} </td>
        <td>${order.type}</td>
        <td>${order.price}</td>
        <td>${order.status}</td>
      </tr>`;
    });
    document.getElementById("orders").innerHTML = li;
  });