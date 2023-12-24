import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "The Woman in Me",
  author: "Britney Spears",
  img: "https://images-na.ssl-images-amazon.com/images/I/61KI7oL-u9L._AC_UL900_SR900,600_.jpg",
};

const secondBook = {
  title: "Iron Flame (The Empyrean, 2)",
  author: "Rebecca Yarros",
  img: "https://m.media-amazon.com/images/I/91ke43dIxkL._SY522_.jpg",
};



const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />

    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
