window.document.addEventListener('DOMContentLoaded', function(){
    let galleryItems = document.querySelectorAll('.gallery__item');
    if (galleryItems) {
        galleryItems.forEach((element, index) => {
            element.addEventListener('click', function(){
                
                galleryItems.forEach(element => {
                    element.classList.remove('is-active');
                })

                this.classList.add('is-active');
            })
        })
    }

    
})

