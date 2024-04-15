const panicButton = document.getElementById('panicButton');
const messageBox = document.getElementById('message');
const contactName = document.getElementById('contactName');
const contactNumber = document.getElementById('contactNumber');
const callContactButton = document.getElementById('callContact');

// Pre-fill emergency contact information (replace with your actual contact)
contactName.textContent = 'Your Emergency Contact Name';
contactNumber.textContent = 'Your Emergency Contact Phone Number';

panicButton.addEventListener('click', function() {
  messageBox.textContent = 'Emergency Alert Triggered!';

  // Simulate location retrieval (not possible to send data directly in browser)
  console.log('Fetching GPS location...');

  // Alert user to take action (call emergency contact or local emergency services)
  alert('Call your emergency contact or dial local emergency services immediately! \nEmergency Contact: ' + contactNumber.textContent);
});

callContactButton.addEventListener('click', function() {
  // Simulate phone call (not possible directly in browser)
  console.log('Calling emergency contact...');
  alert('Attempting to call your emergency contact.');
});