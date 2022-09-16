import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./feature/feature.module").then(m => m.FeaturesModule)
  },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
