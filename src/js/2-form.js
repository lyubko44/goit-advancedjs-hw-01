let formData = {
  email: "", message: ""
}

const form = document.querySelector(".feedback-form");

if (localStorage.getItem("feedback-form-state")) {
  formData = JSON.parse(localStorage.getItem("feedback-form-state"));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

const inputHandler = e => {
  formData[e.target.name] = e.target.value.trim();
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.error('Error saving to localStorage: ', error);
  }
};

form.addEventListener('input', inputHandler);

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  form.reset();
  formData = {
    email: "", message: ""
  }
})


