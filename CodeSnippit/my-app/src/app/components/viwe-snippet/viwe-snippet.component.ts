import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viwe-snippet',
  standalone: true,
  imports: [],
  templateUrl: './viwe-snippet.component.html',
  styleUrl: './viwe-snippet.component.css'
})
export class ViweSnippetComponent {
  codeSnippet = {
    title:"",
    code:''
  }
  constructor(private route: ActivatedRoute,private dbService: DbService) { }

  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippetbyId(docId!).then((data:any)=>{
      this.codeSnippet = data
    })
  }
}