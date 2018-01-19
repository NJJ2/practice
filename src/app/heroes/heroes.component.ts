import { Component, OnInit } from '@angular/core';
import Hero from './../ts/hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes :Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    console.log( this.heroService)
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
