const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const toast=document.getElementById('toast');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.plan-card button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const plan=btn.dataset.plan;
    document.getElementById('planChoice').value=plan;
    toast.textContent=plan+' plan selected';
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),1800);
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  });
});
document.getElementById('trainingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value;
  document.getElementById('formMessage').textContent='Thanks, '+name+'. Your training request has been received.';
  e.target.reset();
});