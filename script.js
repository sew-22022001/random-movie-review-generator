const reviews = [
    {
        movieName: 'FATHERHOOD',
        review: "A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughter birth.",
        image: 'fatherhood.jpg'
    },
    {
        movieName: 'THE PURSUIT OF HAPPYNESS',
        review: 'A newly single father determined to lift himself and his son out of poverty works his way up from the bottom at a stock brokerage firm.',
        image: 'pursuit.jpg'
    },
    {
        movieName: 'La La Land',
        review: 'A visually stunning musical that captures the magic of dreams and the pursuit of passion.',
        image: 'lalaland.jpg'
    }
];


function randomReview() {
    var randomIndex = Math.floor(Math.random() * reviews.length)
    return reviews[randomIndex];
}

function printReview() {
    var reviewDetails = randomReview();
    var movieImageElement = document.getElementById('movieImage');
    var movieNameElement = document.getElementById('movieName');
    var reviewElement = document.getElementById('movieReview');

    movieImageElement.src = reviewDetails.image;
    movieNameElement.innerText = reviewDetails.movieName;
    reviewElement.innerText = reviewDetails.review;

   
}


document.getElementById('loadReview').addEventListener('click', printReview);
