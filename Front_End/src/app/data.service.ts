import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ref,Storage,uploadBytes,getDownloadURL,list}  from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url:string="";
  carga:boolean = false;
  constructor(private http:HttpClient, private storage: Storage) { }

  public uploadImage($event:any, name:string, carpeta:string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, carpeta+"/"+name)
    uploadBytes(imgRef, file)
    .then(async res => {
      
      console.log(res)
      this.getImages()
    })
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La url es: " + this.url)
        this.carga=false;
      }
    })
    .catch(error => console.log(error))
  }
 
  get(tipo:any):Observable<any>{
    return ( this.http.get('https://bkportfolioap.herokuapp.com'+tipo))
  }

  getId(tipo:any,id:any):Observable<any>{
    return ( this.http.get('https://bkportfolioap.herokuapp.com'+tipo+'/'+id))
  }

  public post(tipo:any,cuerpo:any){
    let url:string;
    url='https://bkportfolioap.herokuapp.com'+tipo ;
    this.http.post(url,cuerpo)
    .subscribe ( 
      response => console.log('Se modifico correctamente')
   )
  }

  public delete(tipo:any,id:any){
    let url:string;
    url='https://bkportfolioap.herokuapp.com/'+tipo;
    this.http.delete(url)
    .subscribe ( 
      response => console.log(response)
   )
  }
}
