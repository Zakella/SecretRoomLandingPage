import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Subject, Subscription} from 'rxjs';
import {PhotoService} from "../../service/photo.service";
import {StoryModel} from "../../../components/stories/story.model";
import {STORIES} from "../../../components/stories/stories";
import {StoriesService} from "../../../components/stories/stories.service";
import {takeUntil} from "rxjs/operators";
import {TranslocoService} from "@ngneat/transloco";
import {SelectButtonChangeEvent} from "primeng/selectbutton";

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    darkMode: boolean = false;
    images: any[] | undefined;

    stories: StoryModel = STORIES;
    storyIsOpen = false;
    unSub: Subject<void> = new Subject<void>();

    stateOptions: any[] = [{label: 'Ro', value: 'ro'}, {label: 'Ru', value: 'ru'}];

    value: string = 'ro';

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

    private backgroundImages: { src: string; title: string; description: string; }[] = [
        {
            src: 'assets/store/b1.jpeg',
            title: 'VSBeauty',
            description: 'VSBeautyDisc',
        },
        {
            src: 'assets/store/l1.jpeg',
            title: 'Langerie',
            description: 'LingerieDisc',
        },

        {
            src: 'assets/store/p1.jpeg',
            title: 'Perfume',
            description: 'PerfumeDisc',
        },

        {
            src: 'assets/store/mag5.jpeg',
            title: 'Sleep',
            description: 'SleepDisc',
        },


        // {
        //     src: 'assets/store/acces1.jpg',
        //     title: 'Accessories',
        //     description: 'AccessoriesDisc',
        // },
        // ... добавьте больше изображений по мере необходимости ...
    ];

    private currentImageIndex: number = 0;
    currentBackground: string = this.backgroundImages[this.currentImageIndex].src;
    currentTitle: string = this.backgroundImages[this.currentImageIndex].title;
    currentDescription: string = this.backgroundImages[this.currentImageIndex].description;

    imagesBB: string[] = [];
    selectedImageIndexBB: number = 0;

    constructor(public router: Router, private layoutService: LayoutService, private photoService: PhotoService,
                private storiesService: StoriesService, private translocoService: TranslocoService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
        });
    }

    ngOnInit(): void {
        this.photoService.getImages().then(images => {
            this.images = images;
        });

        this.imagesBB = [
            'bb5.jpg',
            'bb6.jpg',
            'bb7.jpg',
            'bb8.jpg'
        ];

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    folowInstagram() {

    }

    closeStory(): void {
        this.storyIsOpen = false;
        this.getStories();
        document.body.style.overflowY = 'scroll';
    }

    getStories(): void {

        this.storiesService.changeStories(this.stories.data);
        this.initStoriesLogic();
    }

    initStoriesLogic(): void {
        this.storiesService.changeUsersCount(this.stories.data.length);
        this.storiesService.activeUserIndex$.pipe(takeUntil(this.unSub)).subscribe(x => {
            if (x === this.stories.data.length && this.storyIsOpen) {
                this.storyIsOpen = false;
            }
        });
    }

    openStories() {
        this.storyIsOpen = true;
    }

    goToInstagram() {
        window.location.href = 'https://www.instagram.com/secret_room.moldova/';
    }

    langChange(language: SelectButtonChangeEvent) {
        this.translocoService.setActiveLang(language.value);

    }


    nextBackground(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
        this.updateBackgroundDetails();
    }

    previousBackground(): void {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.backgroundImages.length) % this.backgroundImages.length;
        this.updateBackgroundDetails();
    }

    private updateBackgroundDetails(): void {
        this.currentBackground = this.backgroundImages[this.currentImageIndex].src;
        this.currentTitle = this.backgroundImages[this.currentImageIndex].title;
        this.currentDescription = this.backgroundImages[this.currentImageIndex].description;
    }
}
