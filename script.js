
function toggleConversationInput(option) {
  const audioInput = document.getElementById('audioInput');
  const textInput = document.getElementById('textInput');
  
  if (option === 'audio') {
    audioInput.classList.remove('hidden');
    textInput.classList.add('hidden');
    textInput.value = ''; 
  } else if (option === 'text') {
    textInput.classList.remove('hidden');
    audioInput.classList.add('hidden');
    audioInput.value = ''; 
  }
}

document.getElementById('callReportForm').addEventListener('submit', function(event) {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const audioInput = document.getElementById('audioInput').files.length;
  const textInput = document.getElementById('textInput').value.trim();
  
  if (!/^[0-9]{10}$/.test(phoneNumber)) {
    alert("Please enter a valid 10-digit phone number.");
    event.preventDefault(); 
    return;
  }
 
  if (audioInput === 0 && textInput === "") {
    alert("Please provide either an audio file or a text conversation.");
    event.preventDefault(); 
    return;
  }

  alert('Report submitted successfully!');
  this.reset(); 
  document.getElementById('audioInput').classList.add('hidden'); 
  document.getElementById('textInput').classList.add('hidden');  
});
