<script>
    // Load existing entries from localStorage on page load
    window.addEventListener('load', function () {
      const entries = JSON.parse(localStorage.getItem('entries')) || [];
      const entriesList = document.getElementById('entries-list');

      entries.forEach(entry => {
        const entryRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const dobCell = document.createElement('td');
        const termsCell = document.createElement('td');

        nameCell.textContent = entry.name;
        emailCell.textContent = entry.email;
        dobCell.textContent = entry.dob;
        termsCell.textContent = entry.acceptedTerms ? 'Yes' : 'No';

        entryRow.appendChild(nameCell);
        entryRow.appendChild(emailCell);
        entryRow.appendChild(dobCell);
        entryRow.appendChild(termsCell);

        entriesList.appendChild(entryRow);
      });
    });

    document.getElementById('registration-form').addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const dob = document.getElementById('dob').value;
      const acceptedTerms = document.getElementById('accepted-terms').checked;

      const currentDate = new Date();
      const userDob = new Date(dob);
      const age = currentDate.getFullYear() - userDob.getFullYear();

      if (!isValidEmail(email)) {
        alert('Invalid email address');
        return;
      }

      if (age < 18 || age > 55) {
        alert('Age must be between 18 and 55');
        return;
      }

      const entry = {
        name: name,
        email: email,
        dob: dob,
        acceptedTerms: acceptedTerms
      };

      const entries = JSON.parse(localStorage.getItem('entries')) || [];
      entries.push(entry);
      localStorage.setItem('entries', JSON.stringify(entries));

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

    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  </script>
