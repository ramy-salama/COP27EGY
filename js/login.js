const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show-login');
showBtn.addEventListener('click', function(){
  if(pass_field.type === "password"){
    pass_field.type = "text";
    showBtn.textContent = "hide";
    showBtn.style.color = "#f78a42";
    }else{
      pass_field.type = "password";
      showBtn.textContent = "show";
      showBtn.style.color = "#3498db";
      }
  });
  const pass_field2 = document.querySelector('.pass-key2');
  const showBtn2 = document.querySelector('.show-login2');
  showBtn2.addEventListener('click', function(){
    if(pass_field2.type === "password"){
      pass_field2.type = "text";
      showBtn2.textContent = "hide";
      showBtn2.style.color = "#f78a42";
      }else{
        pass_field2.type = "password";
        showBtn2.textContent = "show";
        showBtn2.style.color = "#3498db";
        }
    });