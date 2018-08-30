import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../shared/services/article.service";
import { Article } from "../shared/models/article.model";

@Component({
  selector: "app-article-info",
  templateUrl: "./article-info.component.html",
  styleUrls: ["./article-info.component.css"]
})
export class ArticleInfoComponent implements OnInit {
  selection:{article:Article};
  constructor(private myService: ArticleService) {
    this.selection = this.myService.selectedArticle;
  }
  ngOnInit() {}
}
