import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Subscription } from 'rxjs';
import {PhotoService} from "../../service/photo.service";

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    darkMode: boolean = false;
    images: any[] | undefined;

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    constructor(public router: Router, private layoutService: LayoutService, private photoService: PhotoService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
        });
    }

    ngOnInit(): void {
        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    folowInstagram() {

    }
}
