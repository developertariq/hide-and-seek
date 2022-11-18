
let contactInfo = {
  FirstName: '',
  LastName: '',
  FullName: '',
  Email: '',
  message: ''
}

const contactForm = document.querySelector('.contact-me-form');

if(localStorage.getItem('contactInfo') != null) {
  contactInfo = JSON.parse(localStorage.getItem('contactInfo'));

  contactForm.elements.firstname.value = contactInfo.FirstName;
  contactForm.elements.lastname.value = contactInfo.LastName;
  contactForm.elements.name.value = contactInfo.FullName;
  contactForm.elements.email.value = contactInfo.Email;
  contactForm.elements.msg.value = contactInfo.message;
}

contactForm.addEventListener('change', () => { 
  contactInfo.FirstName = contactForm.elements.firstname.value;
  contactInfo.LastName = contactForm.elements.lastname.value;
  contactInfo.FullName = contactForm.elements.name.value;
  contactInfo.Email = contactForm.elements.email.value;
  contactInfo.message = contactForm.elements.msg.value;
  
  localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
});

