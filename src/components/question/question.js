window.document.addEventListener('DOMContentLoaded', function(){
    let questionSection = document.querySelector('.question');

    if (questionSection) {
        
        $('.question__item').click(function(e){

            if (this.classList.contains('is-active')) {
                this.classList.remove('is-active')

                $(this).find('.question__text').slideUp();
            } else {
                this.classList.add('is-active')
                $(this).find('.question__text').slideDown();
            }
        })
    }
});