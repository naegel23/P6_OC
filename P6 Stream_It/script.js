   const modal = document.querySelector(".modal");
    var trigger = document.getElementsByClassName("trigger");
    const closeButton = document.querySelector(".close-button");

    console.log(trigger);

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    
    for (let i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener("click", toggleModal);
        
    }