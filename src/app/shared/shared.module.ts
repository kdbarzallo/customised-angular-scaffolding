import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingImgDirective } from './directives/lazy-loading-img.directive';
import { SlugGeneratorPipe } from './pipes/slug-generator.pipe';



@NgModule({
  declarations: [
    LazyLoadingImgDirective,
    SlugGeneratorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyLoadingImgDirective,
    SlugGeneratorPipe
  ]
})
export class SharedModule { }
