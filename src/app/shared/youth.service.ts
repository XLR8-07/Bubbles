import { Profiles } from 'src/app/shared/profiles.model';
import { Questions } from './questions.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class YouthService {
  ClickedProfile : Profiles;

  constructor(private firestore: AngularFirestore) { }

  getQuestions(){
    return this.firestore.collection('Questions').snapshotChanges();
  }

  insertNewQuestion(qFormData : Questions){
    return this.firestore.collection('Questions').add(qFormData)
  }

  getProfiles(){
    return this.firestore.collection('Profiles').snapshotChanges();
  }
}
