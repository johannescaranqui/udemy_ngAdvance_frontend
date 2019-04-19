import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(protected router: Router,
              protected pageTitle: Title,
              protected meta: Meta) {
  }

  ngOnInit() {
    this.getDataRoute()
      .subscribe(event => {
      this.title = event.title;
      this.pageTitle.setTitle(this.title);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.title
      };
      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute(){
    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
