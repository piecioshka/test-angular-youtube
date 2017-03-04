import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

  constructor() {
  }

  getVideos() {
    return [
      {
        "id": "8305668b-c6d0-5452-836a-cdeeb7a54e29",
        "name": "Sausages",
        "description": "Hah zeh bib vu jis batab duwigu suvum di cim imijeko pojaf atutirje ku ductojger.",
        "thumb": "https://i.ytimg.com/vi/FR0UvfEIUnI/maxresdefault.jpg",
        "url": "http://s2.converto.io/proxy.php?id=6uL00pc8pa4E6OjpYrSUZtO8BGxgwu18"
      },
      {
        "id": "ea0f9e88-383d-5e6a-960f-8e40e3caf875",
        "name": "Pizza",
        "description": "Dez acarvu nepgaaje efila wa mufa zij vamhidjih fuvsup gohaseh ebioju natahe gubgukke ajinuur ofeako vawu.",
        "thumb": "https://i.ytimg.com/vi/FR0UvfEIUnI/maxresdefault.jpg",
        "url": "http://s2.converto.io/proxy.php?id=6uL00pc8pa4E6OjpYrSUZtO8BGxgwu18"
      },
      {
        "id": "a0f768d8-55a6-56e1-af38-645e62f52e0e",
        "name": "Chicken",
        "description": "He lin anezo mu jaro cima funaifu zow fun lupi rebguh tozram awewin.",
        "thumb": "https://i.ytimg.com/vi/FR0UvfEIUnI/maxresdefault.jpg",
        "url": "http://s2.converto.io/proxy.php?id=6uL00pc8pa4E6OjpYrSUZtO8BGxgwu18"
      },
      {
        "id": "de417dd9-0308-50af-81d1-bf19e686a32b",
        "name": "Chicken",
        "description": "Te ovwe pot neglona veewmi navbih ruhjapike hoj deridku mefcaj laehacu ig sagral fok jafosi rehfahdo.",
        "thumb": "https://i.ytimg.com/vi/FR0UvfEIUnI/maxresdefault.jpg",
        "url": "http://s2.converto.io/proxy.php?id=6uL00pc8pa4E6OjpYrSUZtO8BGxgwu18"
      }
    ];
  }
}
