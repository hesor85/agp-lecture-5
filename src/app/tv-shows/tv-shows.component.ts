import { Component, EventEmitter, Input } from '@angular/core';
import { TvShowsService } from './tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  imports: [],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css',
})
export class TvShowsComponent {
  header = 'TV Shows';

  constructor(private tvShowService: TvShowsService) {}

  changeText() {
    this.header = this.tvShowService.changeText();
  }
}
