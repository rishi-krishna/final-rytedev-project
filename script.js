function goToHome() {
    window.location.href = "index.html";
  }
  
  function goToReports() {
    // Do nothing since the dropdown menu handles the navigation
  }
  
  function goToInfo() {
    window.location.href = "index.html";
  }
  
  function submitForm() {
    event.preventDefault();
    const form = document.getElementById("employeeForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    // Use the data object to make API request and update Google Sheets
    // Example: Use fetch() or XMLHttpRequest to send the data to your server-side code
    // Your server-side code should handle the request and update the Google Sheet using the Google Sheets API
  }
  
  function updateForm() {
    event.preventDefault();
    const employeeId = prompt("Enter the ID of the employee to update:");
  
    // Use the employeeId to fetch the existing data for the employee
    // Pre-fill the form fields with the existing data for editing
    // Update the Google Sheets with the updated data upon form submission
  }
  
  function deleteEmployee() {
    event.preventDefault();
    const employeeId = prompt("Enter the ID of the employee to delete:");
  
    // Use the employeeId to delete the employee from the Google Sheets
  }
  