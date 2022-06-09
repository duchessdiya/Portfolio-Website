/*const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
*/
var modal = document.getElementById('simpleModal')
var modalBtn = document.getElementById('modalBtn')
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);

function openModal()
{
    modal.style.display = 'block';
}
function closeModal()
{
    modal.style.display = 'none';
}

