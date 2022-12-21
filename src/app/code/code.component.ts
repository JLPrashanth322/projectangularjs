
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
// import { EmailValidator } from '@angular/forms';


// import { CodeService } from '../code.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  
  styleUrls: ['./code.component.css']
 
})
export class CodeComponent implements OnInit {
  dataopg:any=[];  
  dataList:string[]=[]; 
 id='1';
 userid='1';
 body='quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';
 title='sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
 








  public getJsonvalve : any;
  public postJsonvalve: any;

  constructor(private http: HttpClient){

  }

  
  @Input()codeForm:any;
 
    

  ngOnInit(): void {
    this.getmethod();
    this.postmethod();
    
    
  
    console.log(this.codeForm);
    
  }
  public getmethod(){
   
    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((data)=>{
      console.log(data); 
      this.getJsonvalve=data; 
    });
  }
  public postmethod(){
    const header=new HttpHeaders({
      contentType: 'application/Json'
    })
    
    
    this.http.get('https://jsonplaceholder.typicode.com/posts/3', ).subscribe((data)=>{
      console.log(data); 
      this.postJsonvalve=data; 
    });
  }

}
