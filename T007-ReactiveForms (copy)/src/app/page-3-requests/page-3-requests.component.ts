import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3-requests.component.html',
  styleUrls: ['./page-3-requests.component.scss']
})
export class Page3ParentComponent implements OnInit {
  posts: object[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string, jugnu:string }) {
    console.log(postData);
    // Send Http request
    this.http
      .post(
        'https://ng-complete-guide-ali-1.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        //console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    this.deletePosts().subscribe(() => {
      this.posts = [];
    });
  }
  deletePosts() {
    return this.http.delete('https://ng-complete-guide-ali-1.firebaseio.com/posts.json');
  }

  private fetchPosts() {
    this.http
      .get('https://ng-complete-guide-ali-1.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          console.log("Top of line 46: ",responseData);
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          console.log(postsArray);
          return postsArray;
        })
      )
      .subscribe((posts:object[]) =>  {
        this.posts = posts;
        console.log(posts);
      });
  }
}
