import { Component } from "@angular/core";
import { ArticleService } from "../shared/services/article.service";
import { Article } from "../shared/models/article.model";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent {
  localList: Article[] = [];
  constructor(private myService: ArticleService) {
    this.localList = this.myService.getAllArticles();
  }

  setArticleSelection(article: Article) {
    this.myService.setSelectedArticle(article);
  }
}
