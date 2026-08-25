
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
if(menu && nav){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const amounts = document.querySelectorAll('.amount');
const custom = document.querySelector('#customAmount');
const donationAmount = document.querySelector('#donationAmount');
amounts.forEach(btn=>{
  btn.addEventListener('click',()=>{
    amounts.forEach(x=>x.classList.remove('selected'));
    btn.classList.add('selected');
    if(custom) custom.value='';
    if(donationAmount) donationAmount.value=btn.dataset.amount;
  });
});
if(custom){
  custom.addEventListener('input',()=>{
    amounts.forEach(x=>x.classList.remove('selected'));
    if(donationAmount) donationAmount.value=custom.value;
  });
}

const donationForm=document.querySelector('#donationForm');
if(donationForm){
  donationForm.addEventListener('submit',e=>{
    e.preventDefault();
    const amount=document.querySelector('#donationAmount')?.value;
    const method=document.querySelector('#paymentMethod')?.value;
    if(!amount || Number(amount)<=0){ alert('Please choose or enter a donation amount.'); return; }
    alert(`Donation request prepared: UGX ${Number(amount).toLocaleString()} via ${method}.\\n\\nConnect this form to your secure payment gateway/backend before accepting live payments.`);
  });
}

const contactForm=document.querySelector('#contactForm');
if(contactForm){
  contactForm.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you. Your message has been received by this demo form. Connect it to your email/API endpoint for production use.');
    contactForm.reset();
  });
}

const newsletter=document.querySelector('#newsletter');
if(newsletter){
  newsletter.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you for joining our updates.');
    newsletter.reset();
  });
}
