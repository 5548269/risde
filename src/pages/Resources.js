import React from 'react';

function Resources() {
  const books = [
    { title: "九型人格：改变自己的第一本书", author: "海伦·帕尔默", link: "#" },
    { title: "九型人格使用手册", author: "唐·理查德·里索, 拉斯·赫德森", link: "#" },
    { title: "九型人格职场应用", author: "伊丽莎白·瓦格勒", link: "#" },
  ];

  const websites = [
    { name: "国际九型人格协会", url: "https://www.enneagraminternational.com/" },
    { name: "九型人格研究所", url: "https://www.enneagraminstitute.com/" },
    { name: "九型人格中文网", url: "https://www.9types.com/chinese/" },
  ];

  const articles = [
    { title: "九型人格理论简介", link: "#" },
    { title: "如何利用九型人格改善人际关系", link: "#" },
    { title: "九型人格在职场中的应用", link: "#" },
  ];

  return (
    <div className="resources">
      <h1>九型人格学习资源</h1>
      
      <section>
        <h2>推荐书籍</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <a href={book.link}>{book.title}</a> - {book.author}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>相关网站</h2>
        <ul>
          {websites.map((site, index) => (
            <li key={index}>
              <a href={site.url} target="_blank" rel="noopener noreferrer">{site.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>推荐文章</h2>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.link}>{article.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <p>
        注意：这些资源仅供参考。我们鼓励您批判性地思考并结合自己的经验来理解九型人格理论。
        记住，每个人都是独特的个体，不应该被简单地归类。
      </p>
    </div>
  );
}

export default Resources;
