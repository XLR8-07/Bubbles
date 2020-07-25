import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatInputModule } from "@angular/material/input";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouthService } from './shared/youth.service';
import { MaterialModule } from './material/material.module';
import { NewQuestionComponent } from './pop-up/new-question/new-question.component';
import { ProfileComponent } from './pop-up/profile/profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    NewQuestionComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [YouthService],
  bootstrap: [AppComponent],
  entryComponents: [PopUpComponent, NewQuestionComponent, ProfileComponent],
})
export class AppModule {}
