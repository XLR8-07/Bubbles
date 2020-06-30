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
}
