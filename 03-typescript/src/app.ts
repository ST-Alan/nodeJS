import { findHeroById } from "./services/hero.service"



const hero = findHeroById(1)
console.log(hero?.name ?? 'Hero nor found!')