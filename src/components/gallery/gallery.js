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

        $('.gallery__photo').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    }
})

