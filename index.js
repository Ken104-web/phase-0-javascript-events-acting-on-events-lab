// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left;
    left = parseInt(left) || 0; // Use 0 as default value if parsing fails
  
    if (left < 360) {
      const newPosition = left + 10; // Adjust the increment as per your requirements
      dodger.style.left = `${newPosition}px`;
    }
  }
  
