import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  url!: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.params.post;
    
    const ptag = document.getElementById("post-contents");

    this.http.get<any>('https://raw.githubusercontent.com/EthanC2/Notes-and-Writeups/main/C%2B%2B/Advanced/Move%20Semantics.md')
    .subscribe(data => {
      ptag!.innerHTML = data;
    })

  }

}
