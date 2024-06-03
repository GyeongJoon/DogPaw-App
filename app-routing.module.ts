import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'regist',
    loadChildren: () => import('./regist/regist.module').then( m => m.RegistPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then( m => m.BmiPageModule)
  },
  {
    path: 'kcal',
    loadChildren: () => import('./kcal/kcal.module').then( m => m.KcalPageModule)
  },
  {
    path: 'momentum',
    loadChildren: () => import('./momentum/momentum.module').then( m => m.MomentumPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'water',
    loadChildren: () => import('./water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'age-result',
    loadChildren: () => import('./age-result/age-result.module').then( m => m.AgeResultPageModule)
  },
  {
    path: 'bmi-result1',
    loadChildren: () => import('./bmi-result1/bmi-result1.module').then( m => m.BmiResult1PageModule)
  },
  {
    path: 'bmi-result2',
    loadChildren: () => import('./bmi-result2/bmi-result2.module').then( m => m.BmiResult2PageModule)
  },
  {
    path: 'bmi-result3',
    loadChildren: () => import('./bmi-result3/bmi-result3.module').then( m => m.BmiResult3PageModule)
  },
  {
    path: 'bmi-result4',
    loadChildren: () => import('./bmi-result4/bmi-result4.module').then( m => m.BmiResult4PageModule)
  },
  {
    path: 'bmi-result5',
    loadChildren: () => import('./bmi-result5/bmi-result5.module').then( m => m.BmiResult5PageModule)
  },
  {
    path: 'kcal-result',
    loadChildren: () => import('./kcal-result/kcal-result.module').then( m => m.KcalResultPageModule)
  },
  {
    path: 'moment-result1',
    loadChildren: () => import('./moment-result1/moment-result1.module').then( m => m.MomentResult1PageModule)
  },
  {
    path: 'moment-result2',
    loadChildren: () => import('./moment-result2/moment-result2.module').then( m => m.MomentResult2PageModule)
  },
  {
    path: 'moment-result3',
    loadChildren: () => import('./moment-result3/moment-result3.module').then( m => m.MomentResult3PageModule)
  },
  {
    path: 'temperature-result1',
    loadChildren: () => import('./temperature-result1/temperature-result1.module').then( m => m.TemperatureResult1PageModule)
  },
  {
    path: 'temperature-result2',
    loadChildren: () => import('./temperature-result2/temperature-result2.module').then( m => m.TemperatureResult2PageModule)
  },
  {
    path: 'temperature-result3',
    loadChildren: () => import('./temperature-result3/temperature-result3.module').then( m => m.TemperatureResult3PageModule)
  },
  {
    path: 'temperature-result4',
    loadChildren: () => import('./temperature-result4/temperature-result4.module').then( m => m.TemperatureResult4PageModule)
  },
  {
    path: 'temperature-result5',
    loadChildren: () => import('./temperature-result5/temperature-result5.module').then( m => m.TemperatureResult5PageModule)
  },
  {
    path: 'water-result',
    loadChildren: () => import('./water-result/water-result.module').then( m => m.WaterResultPageModule)
  },
  {
    path: 'regist-dog',
    loadChildren: () => import('./regist-dog/regist-dog.module').then( m => m.RegistDogPageModule)
  },
  {
    path: 'regist-dog-list',
    loadChildren: () => import('./regist-dog-list/regist-dog-list.module').then( m => m.RegistDogListPageModule)
  },
  {
    path: 'profile/:dog_id',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'profile/:dog_id/:dogname/:dogbreed/:dogsex/:dogbirth/:time_stamp/:dogimage',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
