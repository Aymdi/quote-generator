function generate() {
    var quotes = {
        "-Albert Camus": '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "-Lewis B. Smedes": '"You will know that forgiveness has begun when you recall those who hurt you and feel the power to wish them well."',
        "-Tyler Perry" : '"It s not an easy journey, to get to a place where you forgive people. But it is such a powerful place, because it frees you."',
        "-Aymane": '"Pitzu !"'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}