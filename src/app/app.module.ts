import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './shared/components/posts/posts.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabForComponent } from './shared/components/tab-for/tab-for.component';
import { TabSwitchComponent } from './shared/components/tab-switch/tab-switch.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { StdComponent } from './shared/components/std/std.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    PostsComponent,
    MobileComponent,
    TabComponent,
    TabForComponent,
    TabSwitchComponent,
    TodosComponent,
    StdComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
