document.getElementById('loveCalculatorForm').addEventListener('submit',function (event) {
  event.preventDefault();

  const yourName = document.getElementById('yourName').value;
  const partnerName = document.getElementById('partnerName').value;

  if (yourName === '' || partnerName === '') {
    alert('Please fill in both names!');
    return;
  }

  // Love percentage calculation (mocked with a random value for simplicity)
  var lovePercentage = Math.random() * 100;
lovePercentage = Math.floor(lovePercentage) + 1;
if ( lovePercentage > 70){
  lovePercentage = ( "Your LOVE score is " + lovePercentage + "%" + ". Your love is as beautiful as SNOW WHITE. 💖💖");
}

if (lovePercentage > 50 && lovePercentage <= 70){
  lovePercentage = ( "Your LOVE score is " + lovePercentage + "%" + " You go together like 🧊ice and 🔥fire.");
} 

if (lovePercentage >= 30 && lovePercentage <= 50){
  lovePercentage = ( "Your LOVE score is " + lovePercentage + "%" + " You go together like 🛢️oil and 🌊water.");
}

if (lovePercentage < 30){
  lovePercentage = ( "Your LOVE score is " + lovePercentage + "%" + " You don't belong together ❌❌.");
}

  // Update result
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    ${lovePercentage}
  `;
});

