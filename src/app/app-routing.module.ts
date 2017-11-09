import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { MessageComponent } from './components/message/message.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupFormComponent},
    { path: 'login', component: LoginFormComponent },
    { path: 'dashboard', component: DashboardComponent }
    // { path: 'users', component: OtherComponent, canActivate: [AuthGuard] }

]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
