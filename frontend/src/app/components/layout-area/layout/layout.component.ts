import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  mainAnimation: string = 'main-animation';
  footerHidden: boolean = false;

  constructor(
    private store: Store,
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      // shows footer only after login
      this.store.subscribe(state => {
        const token = (state as any)?.token;
        if (token) {
          this.footerHidden = false;
        } else {
          this.footerHidden = true;
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
