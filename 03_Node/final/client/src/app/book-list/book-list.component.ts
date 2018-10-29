import { Component } from '@angular/core';

import { RootObject } from "./../shared/models/book-root-object.model";
import { BookService } from '../shared/services/book-service.services';
import { Book } from '../shared/models/book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
    public localBookData: RootObject;

    public setSelectedBook(book:Book): void {
        this.myBookService.selectedBook.selected = book;      
    }

    public shortTitle(title:string):string{
        if(title.length>13){
            return title.substring(0,13)+"...";
        }
        return title;
    }

    public searchBooks(str:string) {
        this.myBookService.initBooks(str);
    }

    public constructor(private myBookService: BookService) {
        this.localBookData = this.myBookService.bookInfo;

        for (let i = 0; i < this.localBookData.items.length; i++) {
            let temp: string = this.localBookData.items[i].volumeInfo.title;
            this.localBookData.items[i].volumeInfo.title = temp.substring(0, 16);
        }
    }

}
