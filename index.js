<script>
    document.getElementById('registration-form').addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const dob = document.getElementById('dob').value;
      const acceptedTerms = document.getElementById('accepted-terms').checked;

      const entryRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const dobCell = document.createElement('td');
      const termsCell = document.createElement('td');

      nameCell.textContent = name;
      emailCell.textContent = email;
      dobCell.textContent = dob;
      termsCell.textContent = acceptedTerms ? 'Yes' : 'No';

      entryRow.appendChild(nameCell);
      entryRow.appendChild(emailCell);
      entryRow.appendChild(dobCell);
      entryRow.appendChild(termsCell);

      document.getElementById('entries-list').appendChild(entryRow);

      // Clear the form after submission
      document.getElementById('registration-form').reset();
    });
  </script>
