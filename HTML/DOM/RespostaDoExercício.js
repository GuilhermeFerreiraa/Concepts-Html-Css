const openModalButton = document.getElementById('openmodal')

const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function (){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){ 
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})