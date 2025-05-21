const linkExterno = document.querySelector('a[title="Google Maps"]');

//linkExterno.onclick = () => {
//  alert("Você será redirecionado para um link externo.");
//};

linkExterno.addEventListener("click", (e) => {
  const option = confirm("VocÊ será redirecionado para um link");
  if (option === false) {
    e.preventDefault();
  }
});
