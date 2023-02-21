// 1. GET request using fetch()
fetch("http://localhost:8080/user/${username}/orderHistory")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {

  // 2. Create a variable to store HTML table headers
    let li = `<tr><th>OrderID</th><th>Quantity</th><th>Type</th><th>Price</th> <th>Status</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((order) => {
      li += `<tr>
        <td>${order.orderId}</td>
        <td>${order.quantity} </td>
        <td>${order.type}</td>
        <td>${order.price}</td>
        <td>${order.status}</td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("orders").innerHTML = li;
  });