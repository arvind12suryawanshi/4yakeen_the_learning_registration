const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));











const text = "REGISTER NOW";
const heading = document.getElementById("register-heading1");

let charIndex = 0;

function animateText() {
  heading.textContent = text.substring(0, charIndex);
  charIndex = (charIndex + 1) % (text.length + 1);
  setTimeout(animateText, charIndex === 0 ? 2000 : 150);
}

animateText();




















function showPrice() {
    const courseSelect = document.getElementById('course');
    const selectedCourse = courseSelect.options[courseSelect.selectedIndex].value;
    const coursePriceDiv = document.getElementById('course-price');
  
    // Set the prices for ChatGPT and Freelancing courses
    const chatGptPrice = '$100'; // Replace with the actual price for ChatGPT course
    const freelancingPrice = '$150'; // Replace with the actual price for Freelancing course
  
    if (selectedCourse === 'ChatGPT') {
      document.getElementById('course-price').style.display = 'block';
      document.getElementById('course-price').textContent = `Price: ${chatGptPrice}`;
      document.getElementById('course-price').style.backgroundColor = '#007BFF';
    } else if (selectedCourse === 'Freelancing') {
      document.getElementById('course-price').style.display = 'block';
      document.getElementById('course-price').textContent = `Price: ${freelancingPrice}`;
      document.getElementById('course-price').style.backgroundColor = '#FFC107';
    } else {
      document.getElementById('course-price').style.display = 'none';
    }
  }
  