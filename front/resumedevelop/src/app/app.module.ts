/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ResumeInfoUserComponent } from './ResumeInfoUser/ResumeInfoUser.component';
import { CertificateComponent } from './Certificate/Certificate.component';
import { AwardDetailsComponent } from './AwardDetails/AwardDetails.component';
import { UserInfoInEntComponent } from './UserInfoInEnt/UserInfoInEnt.component';
import { UserInfoInSchComponent } from './UserInfoInSch/UserInfoInSch.component';


  import { UserComponent } from './User/User.component';
  import { OrganizationComponent } from './Organization/Organization.component';
  import { EnterpriseComponent } from './Enterprise/Enterprise.component';
  import { SchoolComponent } from './School/School.component';


  import { AddRequestUserComponent } from './AddRequestUser/AddRequestUser.component';
  import { RevokeRequestUserComponent } from './RevokeRequestUser/RevokeRequestUser.component';
  import { AddAuthorizedOrgComponent } from './AddAuthorizedOrg/AddAuthorizedOrg.component';
  import { RevokeAuthorizedOrgComponent } from './RevokeAuthorizedOrg/RevokeAuthorizedOrg.component';
  import { AddAuthorizedEntComponent } from './AddAuthorizedEnt/AddAuthorizedEnt.component';
  import { RevokeAuthorizedEntComponent } from './RevokeAuthorizedEnt/RevokeAuthorizedEnt.component';
  import { AddAuthorizedSchComponent } from './AddAuthorizedSch/AddAuthorizedSch.component';
  import { RevokeAuthorizedSchComponent } from './RevokeAuthorizedSch/RevokeAuthorizedSch.component';
  import { CreateResumeInfoUserComponent } from './CreateResumeInfoUser/CreateResumeInfoUser.component';
  import { CreateResumeElementComponent } from './CreateResumeElement/CreateResumeElement.component';
  import { UpdateResumeInfoUserComponent } from './UpdateResumeInfoUser/UpdateResumeInfoUser.component';
  import { DeleteResumeElementComponent } from './DeleteResumeElement/DeleteResumeElement.component';
  import { selectResumeInfoUserComponent } from './selectResumeInfoUser/selectResumeInfoUser.component';
  import { selectMyCertificateComponent } from './selectMyCertificate/selectMyCertificate.component';
  import { selectMyAwardDetailsComponent } from './selectMyAwardDetails/selectMyAwardDetails.component';
  import { selectMyUserInfoInEntComponent } from './selectMyUserInfoInEnt/selectMyUserInfoInEnt.component';
  import { selectMyUserInfoInSchComponent } from './selectMyUserInfoInSch/selectMyUserInfoInSch.component';
  import { selectUserByCertificateNameComponent } from './selectUserByCertificateName/selectUserByCertificateName.component';
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    ResumeInfoUserComponent,
    CertificateComponent,
    AwardDetailsComponent,
    UserInfoInEntComponent,
    
    UserInfoInSchComponent
    ,

    UserComponent,
      OrganizationComponent,
      EnterpriseComponent,
      
      SchoolComponent
      ,

    AddRequestUserComponent,
        RevokeRequestUserComponent,
        AddAuthorizedOrgComponent,
        RevokeAuthorizedOrgComponent,
        AddAuthorizedEntComponent,
        RevokeAuthorizedEntComponent,
        AddAuthorizedSchComponent,
        RevokeAuthorizedSchComponent,
        CreateResumeInfoUserComponent,
        CreateResumeElementComponent,
        UpdateResumeInfoUserComponent,
        DeleteResumeElementComponent,
        selectResumeInfoUserComponent,
        selectMyCertificateComponent,
        selectMyAwardDetailsComponent,
        selectMyUserInfoInEntComponent,
        selectMyUserInfoInSchComponent,
        
        selectUserByCertificateNameComponent
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
