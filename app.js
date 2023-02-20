const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit-btn');
const ratingPage = document.querySelector('.rating-page');
const thankYouPage = document.querySelector('.thank-you-page');
const selectedRating = document.getElementById('selected-rating');

ratings.forEach(rating => {
    rating.addEventListener('click', e => {
        ratings.forEach(rating => {
            rating.classList.remove('activebtn')
        })
       const clicked = e.currentTarget;
       clicked.classList.add('activebtn');

       const selected = clicked.id;

       selectedRating.textContent = selected;
    })
})

submitBtn.addEventListener('click', () => {
    ratings.forEach(rating => {
        if (rating.classList.contains('activebtn')) {
            ratingPage.style.display = 'none';
            thankYouPage.style.display = 'block';
        }
    })  
})