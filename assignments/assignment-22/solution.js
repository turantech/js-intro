// Task 1: Create a JavaScript Object
let movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    genre: "Drama",
    rating: 9.3
};

// Task 2: Accessing Object Properties
console.log(movie.title); // Dot notation
console.log(movie["director"]); // Bracket notation
console.log(movie.releaseYear); // Dot notation
console.log(movie["genre"]); // Bracket notation
console.log(movie.rating); // Dot notation

// Task 3: Undefined Properties
console.log(movie.producer); // Undefined property. This will print undefined because the property 'producer' has not been defined in the movie object.

// Task 4: Modify Object Properties
movie.rating = 9.5;
console.log(movie.rating);

// Task 5: Add New Properties
movie.boxOffice = 28.34; // In millions
console.log(movie.boxOffice);

// Task 6: Delete Properties
delete movie.boxOffice;
console.log(movie.boxOffice); // This will print undefined because the property 'boxOffice' has been deleted from the movie object.

// Extra Challenge
function printMovieDetails(movie) {
    console.log(
        `The movie '${movie.title}' was directed by '${movie.director}' and was released in ${movie.releaseYear}. It is a '${movie.genre}' film with a rating of ${movie.rating}.`
    );
}

printMovieDetails(movie); // In this function, we are passing the movie object as an argument and printing out a formatted string that includes the properties of the movie. This uses template literals (the backtick strings) to cleanly include variables directly in the string.
