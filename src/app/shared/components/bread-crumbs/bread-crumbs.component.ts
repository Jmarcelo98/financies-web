import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';
import { TRAILS } from './bread-crumb-trails';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css'],
})
export class BreadCrumbsComponent implements OnInit {

  paramsValue: any;

  // // @Input() trail: any[] = [];
  // @Input() set trail(trails: any[]) {
  //   this.trails = trails;
  //   this.titulo = this.trails[trails.length - 1];
  //   console.log(this.titulo);
  // }

  trails: any[] = [];
  parent = '';

  constructor(
    public router: Router,
    private location: Location
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.montaRota(event);
      }
    });
  }

  ngOnInit() {
  }

  async montaRota(event: RouterEvent) {
    const regEx = /^\/|\/$/g;
    const niveis = event.url.replace(regEx, '').split('/');
    let allTrails: any = TRAILS;
    this.trails = [];
    let rota = '';


    niveis.forEach((nivel, i) => {

      let enableRoute = true;

      if (allTrails[nivel]) {

        rota = rota + '/' + nivel;

        // Final de rota
        if ((i + 1) === niveis.length) {
          enableRoute = false;
          // this.titulo = trails[nivel].titulo;
        }

        // if(trails[nivel].parent) {
        //   this.parent = trails[nivel].parent;
        // }

        // Vamos ver se a próxima rota é um parametro
        if (parseInt(niveis[i + 1], 10)) {

          this.paramsValue = niveis[i + 1]

          rota = rota + '/' + niveis[i + 1];

          if ((i + 2 === niveis.length)) {
            enableRoute = false;
          }
        }

        const item = allTrails[nivel];

        if (item) {
          if (item.name) {
            this.trails.push({
              name: item.name,
              route: rota,
              enable: enableRoute,
              parent: item.parent,
              containsParams: item.params
            });
          }
          allTrails = item;
        }

      } else if (!parseInt(niveis[i], 10)) {
        console.log('#bread-crumb não encontramos rota para: ', nivel);
      }
    });
  }

  navTo(route: string, containsParams: boolean, isBack = false) {

    if (containsParams == undefined || containsParams == false) {
      this.router.navigate([route], { replaceUrl: true });
    } else {
      this.router.navigate([route + "/" + this.paramsValue], { replaceUrl: true });
    }

  }
}
