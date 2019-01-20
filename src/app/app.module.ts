import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from 'src/app/public/public.module'
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ImgTextComponent } from './components/img-text/img-text.component';
// import { ImgTextComponent } from 'src/app/components/index'
@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HeadComponent,
    FooterComponent,
    // ImgTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
