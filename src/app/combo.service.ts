import { Injectable } from '@angular/core';


@Injectable()
export class ComboService  {

  constructor() { }
  dropdown() {
    return ["Mr", "Mrs", "Ms"];
  }
}
