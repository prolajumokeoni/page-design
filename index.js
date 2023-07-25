
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
}


document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
  
    const handleClick = () => {
      setTimeout(() => {
        window.location.href = 'confetti.html';
      }, 2000);
    };
  
    submitBtn.addEventListener('click', handleClick);
  });

  