import { Article } from "../models/article.model";
import { ArticleStore } from "../models/article-store.model";

export class ArticleService {
  selectedArticle:{article:Article} = {
    article: undefined
  };


  getAllArticles(): Article[] {
    return ArticleStore.articleList;
  }

  setSelectedArticle(article:Article){
      this.selectedArticle.article=article;
  }
}
