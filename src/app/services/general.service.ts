import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private db: AngularFirestore) { }

  getAllData(): AngularFirestoreCollection {
    return this.db.collection('comercio');
  }

  saveData(object): void {
    this.db.collection('comercio').add(object);
  }
}
