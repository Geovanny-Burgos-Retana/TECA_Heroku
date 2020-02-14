import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { AvatarSelectComponent } from './avatar-select/avatar-select.component';
import { StudentAvatarComponent } from './avatar-select/student-avatar/student-avatar.component';
import { ProfessorAvatarComponent } from './avatar-select/professor-avatar/professor-avatar.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfessorFormComponent } from './register-form/professor-form/professor-form.component';
import { StudentFormComponent } from './register-form/student-form/student-form.component';
import { CurtainComponent } from './curtain/curtain.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './side-bar/menu-bar/menu-bar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { PersonalInfoComponent } from './profile-bar/personal-info/personal-info.component';
import { DashboardComponent } from './control-panel/dashboard/dashboard.component';
import { DashboardAchievementsComponent } from './control-panel/dashboard/dashboard-achievements/dashboard-achievements.component';
import { DashboardRankingComponent } from './control-panel/dashboard/dashboard-ranking/dashboard-ranking.component';
import { DashboardRecentComponent } from './control-panel/dashboard/dashboard-recent/dashboard-recent.component';
import { AchievementsComponent } from './control-panel/achievements/achievements.component';
import { RecentComponent } from './control-panel/recent/recent.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReminderInfoComponent } from './profile-bar/reminder-info/reminder-info.component';
import { CampaignModeComponent } from './campaign-mode/campaign-mode/campaign-mode.component';
import { SubtemaComponent } from './campaign-mode/subtema/subtema.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ManAvatarComponent } from './avatar-select/professor-avatar/man-avatar/man-avatar.component';
import { WomanAvatarComponent } from './avatar-select/professor-avatar/woman-avatar/woman-avatar.component';
import { BoyAvatarComponent } from './avatar-select/student-avatar/boy-avatar/boy-avatar.component';
import { GirlAvatarComponent } from './avatar-select/student-avatar/girl-avatar/girl-avatar.component';
//import { NotificationsComponent } from './dashboard/notifications/notifications.component';
//import { AchievementsComponent } from './dashboard/achievements/achievements.component';





@NgModule({
  declarations: [LoginComponent, BannerComponent, UserTypeComponent,
  AvatarSelectComponent, MenuComponent, RegisterFormComponent, ProfessorFormComponent,
  StudentFormComponent, StudentAvatarComponent, ProfessorAvatarComponent, CurtainComponent,
  SideBarComponent, MenuBarComponent, NotificationsComponent, 
  ProfileBarComponent, PersonalInfoComponent, ReminderInfoComponent, DashboardComponent, AchievementsComponent, 
  RecentComponent, DashboardAchievementsComponent, DashboardRankingComponent, DashboardRecentComponent,
  CampaignModeComponent, SubtemaComponent, ManAvatarComponent, WomanAvatarComponent, BoyAvatarComponent, GirlAvatarComponent],
  
  exports: [LoginComponent, BannerComponent, UserTypeComponent,
  AvatarSelectComponent, MenuComponent, RegisterFormComponent, ProfessorFormComponent,
  StudentFormComponent, StudentAvatarComponent, ProfessorAvatarComponent, CurtainComponent,
  SideBarComponent, MenuBarComponent, NotificationsComponent, DashboardAchievementsComponent, DashboardRankingComponent, DashboardRecentComponent,
  ProfileBarComponent, PersonalInfoComponent, ReminderInfoComponent, DashboardComponent, AchievementsComponent, RecentComponent,
  CampaignModeComponent, SubtemaComponent, ManAvatarComponent, WomanAvatarComponent, BoyAvatarComponent, GirlAvatarComponent,
],
  
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
