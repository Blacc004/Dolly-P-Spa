/* ========== EMAIL VALIDATION ======== */
const form = document.getElementById('form'),
      email = document.getElementById('email'),
      pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
      
      email.addEventListener('input', () => {
        // Evaluate If It matches the pattern values //
        if(email.ariaValueMax.match(pattern)) {
            form.classList.add('valid')
            form.classList.remove('invalid')
        } else {
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
})

      /*const signUpForm = document.getElementById('signUpForm');
      const signInForm = document.getElementById('signInForm');
      const switchToSignUp = document.getElementById('switchToSignUp');
      const switchToSignIn = document.getElementById('swicthToSignIn');
      const backIcon = document.getElementById('backIcon')

      switchToSignIn.addEventListener('click', () => {
        document.querySelector('.form-container').style.transform = 'translateX(-50%)';
      });

      switchToSignUp.addEventListener('click', () => {
        document.querySelector('.form-container').style.transform = 'translateX(0)';
      })
      
      backIcon.addEventListener('click', () => {
        window.history.back(); //Goes back to previous page //
      })

      //Modal functionality //
      const modal = document.getElementById("validationModal");
      const closeModal = document.getElementsByClassName("close")[0];

      function showModal() {
        modal.style.display = "block";
      }

      closeModal.onclick = function () {
        modal.style.display = "none";
      }

      window.onclick = function (event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
      }

   /*Email Validation
   function isValidEmail(email) {
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
   }*/

   /*Password Strength Validation 
   function isStrongPassword(password) {
    const strongPasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[W_]).{8,}$/;
    return strongPasswordRegex.test.apply(password);
   } */

   /*Form Validation
   document.getElementById('signUpFormElement').addEventListener('submit', function (e) {
    e.preventDefault();

   const username = document.getElementById('signUpUsername').value.trim();
   const email = document.getElementById('signUpEmail').value.trim();
   const password = document.getElementById('signUpPassword').value.trim();
   const confirmPassword = document.getElementById('signUpConfirmPassword').value.trim();

   if (username === "|| email === " || password === " || confirmPassword === ") {
    alert('Please fill in all fields');
    return;
   } 

   if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
   }

   if (!isStrongPassword(password)) {
    alert('Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number and one special character.');
    return;
   }

   if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
   }

   showModal();
   });

   document.getElementById('signInFormElement').addEventListener('submit',  function (e) {
    e.preventDefault();

    const email =document.getElementById('singInEmail').value.trim();
    const password = document.getElementById('signInPasword').value.trim();

    if (email === " || password === ") {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    showModal();
   }); */

