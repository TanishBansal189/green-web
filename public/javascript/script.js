const menuBtn = document.querySelector('button[aria-label="toggle menu"]');
const mobileMenu = document.querySelector('.hidden.md\\:hidden');
let book = document.querySelector('book')
let form=document.querySelector('add-form')
let submit = document.querySelector('submit')
console.log(book)
book.addEventListener('click',()=>{
  form.classList.remove('hide')
})
submit.addEventListener('click',()=>{
  form.classList.add('hide')
})
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});
