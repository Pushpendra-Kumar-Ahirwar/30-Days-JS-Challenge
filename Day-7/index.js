//Activity-1
//Task1
console.log("<--------------------Task-1-------------------->");
const books = {
    title: "The Family Man",
    author: "Mrunal Thakur",
    year: 2024,
    bookDetail() {
        return `Author is: ${author}  and title is: ${title}`;
    },
    publishYear(year) {
        return (books.year = year);
    },
};
console.log(books);
//Task 2
console.log("<--------------------Task-2-------------------->");
const title = books.title;
const author = books.author;
console.log(books.title);
console.log(books.author);

//Activity -2
//Task 3
console.log("<--------------------Task-3-------------------->");
console.log(books.bookDetail());
//Task 4
console.log("<--------------------Task-4-------------------->");
console.log(books.publishYear(2020));
console.log(books);

//Activity-3
//Task 5
console.log("<--------------------Task-5-------------------->");
const Movies = {
    name: "WebShows",
    movieList: [{
            title: "Mirzapur",
            author: "Amazone Prime Video",
            ReleaseYear: 2024,
        },
        {
            title: "Panchayat",
            author: "Sony LIV",
            ReleaseYear: 2023,
        },
        {
            title: "MoneyHiest",
            author: "Netflix India",
            ReleaseYear: 2020,
        },
    ],
};
console.log(Movies);
//Task 6
console.log("<--------------------Task-6-------------------->");
Movies.movieList.forEach((movie) => console.log(movie.title));

//Activity-4
//Task 7
console.log("<--------------------Task-7-------------------->");
const books1 = {
    title: "Ramleela",
    author: "Sanjay Leela Banshali",
    year: 2024,
    bookDetails() {
        return `Author is: ${this.author} and title is: ${this.title}`; //Without this keyword it will return details of privious object 'books'
    },
};
console.log(books1.bookDetails());
//Activity-5
//Task 8
console.log("<--------------------Task-8-------------------->");
const JSchallenge = {
    platform: "Chai or Code",
    author: "Hitesh Sir",
    PublishData: "july 2024",
};
for (const key in JSchallenge) {
    const element = JSchallenge[key];
    console.log(`${key}:- ${element}`);
}
//Task 9
console.log("<--------------------Task-9-------------------->");
console.log(`Keys:- ${Object.keys(JSchallenge)}`);
console.log(`Value:- ${Object.values(JSchallenge)}`);