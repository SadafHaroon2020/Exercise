var modal = document.getElementById('mymodal');
var modalBtn = document.getElementById('modalBtn');
var closeButton = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
// window.addEventListener('click', checkClick);
function ready() {
    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // function checkClick(e) {

    //     // if (e.target == modal) {
    //     //     modal.style.display = 'none';
    //     // }
    // }
}