
import { Injectable } from '@angular/core';
import { dataFiles } from './dataFiles';
import { IFiles } from './IFiles';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  Fileslist: IFiles[] =
  [
   { 'id': 1, 'name': 'File 1', 'description': 'Lorem Ipsum is simply dummy text of the printing  industry.' },
    { 'id': 2, 'name': 'File 2', 'description': 'Lorem Ipsum has been the industrys standard dummy text ever.' },
     { 'id': 3, 'name': 'File 3', 'description': ' when an unknown printer took a galley of type and scrambled.' },
      { 'id': 4, 'name': 'File 4', 'description': 'It is a long established fact that a reader will be distracted by the readable.' },
       { 'id': 5, 'name': 'File 5', 'description': 'The point of using Lorem Ipsum is that it has a more-or-less normal.' },
       { 'id': 6, 'name': 'File 6', 'description': 'There are many variations of passages of Lorem Ipsum available, but the majority.' },
        { 'id': 7, 'name': 'File 7', 'description': 'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.' },
       ] ;


       GetFiles(){
       return this.Fileslist;
       }
}
