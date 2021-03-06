import React, {Component} from 'react';

export default class ArticleList extends Component {
  componentDidMount() {
    this.props.renderArticles();
  }

  render() {
    const articles = this.props.articles.map((article, index)=> {
      return <div key={index} className="col-lg-8 col-lg-offset-1 articleList" id="article">
        <h3><a className="pointer">{article.title}</a></h3>
        <div className="col-lg-3" id="parentOfImg">
          <img src={`../../images/traveller/${article.image}`} id="picture"/>
        </div>
        <div className="col-sm-offset-4">
          {article.content}
          <div id="articleFooter">
            <div className="sameLine pointer">By <a>{article.author}</a></div>
            <div className="sameLine col-md-offset-1">{article.date}</div>
            <div className="col-lg-offset-6 sameLine"><span
              className="glyphicon glyphicon-thumbs-up">{article.likedCount}</span></div>
            <div className="col-sm-offset-1 sameLine"><span
              className="glyphicon glyphicon-comment">{article.commentCount}</span></div>
          </div>
        </div>
      </div>;
    });
    return <div>
      {articles}
    </div>;
  }
}