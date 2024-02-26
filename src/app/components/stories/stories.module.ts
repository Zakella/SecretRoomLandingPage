import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {StoriesComponent} from "./stories.component";
import {StoryVideoComponent} from "./story-view/story-item/story-video/story-video.component";
import {StoryViewComponent} from "./story-view/story-view.component";
import {StoryItemComponent} from "./story-view/story-item/story-item.component";
import {FormsModule} from "@angular/forms";
import {StoriesService} from "./stories.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    StoriesComponent,
    StoryVideoComponent,
    StoryViewComponent,
    StoryItemComponent,
  ],
    exports: [
        StoriesComponent,
        StoryViewComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage

  ],
  providers: [
    StoriesService
  ]
})
export class StoriesModule { }
