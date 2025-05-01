document.getElementById('addBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
  
    if (name === '' || age === '' || phone === '') {
      alert('Please fill all the fields.');
      return;
    }
  
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
  
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = phone;
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
  });
  