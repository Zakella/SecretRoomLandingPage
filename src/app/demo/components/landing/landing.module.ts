import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { AnimateEnterDirective } from './animateenter.directive';
import {LogoComponent} from "../../../components/logo/logo.component";
import {RippleModule} from "primeng/ripple";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {StoriesModule} from "../../../components/stories/stories.module";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule} from "@angular/forms";
import {TranslocoPipe} from "@ngneat/transloco";

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        ButtonModule,
        RouterModule,
        StyleClassModule,
        AppConfigModule,
        LogoComponent,
        RippleModule,
        GalleriaModule,
        ImageModule,
        StoriesModule,
        SelectButtonModule,
        FormsModule,
        TranslocoPipe


    ],
    declarations: [LandingComponent, AnimateEnterDirective]
})
export class LandingModule { }
