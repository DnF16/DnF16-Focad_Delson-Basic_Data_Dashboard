// Select elements
const totalUsersElement = document.getElementById('totalUsers');
const totalSalesElement = document.getElementById('totalSales');
const alertButton = document.getElementById('alertButton');

// Add event listener to the button
alertButton.addEventListener('click', () => {
    const totalUsers = totalUsersElement.textContent;
    const totalSales = totalSalesElement.textContent;

    // Display alert with the formatted message
    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});
