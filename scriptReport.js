function displayReport() {
    // Get form values
    var id = document.getElementById('id').value;
    var resource = document.getElementById('resource').value;
    var region = document.getElementById('region').value;
    var date = document.getElementById('date').value;
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    
    // Display the report (you can modify this part according to your needs)
    console.log('ID:', id);
    console.log('Resource:', resource);
    console.log('Region:', region);
    console.log('Date:', date);
    console.log('Amount Total:', amount);
    console.log('Description:', description);
  }
  