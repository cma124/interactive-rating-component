const ratingSection = document.querySelector('.rating-section');
const ratingResult = document.querySelector('.rating-result');

const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.btn-submit');
const ratingPoint = document.querySelector('.rating-point');
const emoji = document.querySelector('.emoji');

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        const currentRating = rating;

        ratings.forEach(otherRating => {
            if(otherRating != currentRating) {
                otherRating.classList.remove('clicked');
            }
        });

        currentRating.classList.toggle('clicked');
    });
});

submitBtn.addEventListener('click', () => {
    let result = 0;
    let emojiResult = ':(';

    ratings.forEach(rating => {
        if(rating.classList.contains('clicked')) {
            result = rating.textContent;
        }
    });

    if(result !== 0) {
        emojiResult = ':)';
    }

    ratingPoint.textContent = result;
    emoji.textContent = emojiResult;

    ratingSection.classList.add('hide');
    ratingResult.classList.add('show');
})