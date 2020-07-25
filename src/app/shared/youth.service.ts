import { Questions } from './questions.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class YouthService {

  constructor(private firestore: AngularFirestore) { }

  getQuestions(){
    return this.firestore.collection('Questions').snapshotChanges();
  }

  insertNewQuestion(qFormData : Questions){
    this.firestore.collection('Questions').add(qFormData).then(() => {
      console.log('Data vorse');
    })
  }
}
