import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  create(key: string, value: any) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  read(key: string): any {
    let result = localStorage.getItem(key);
    if (typeof result === 'string') {
      result = JSON.parse(result);
    }
    return result;
  }

  update() {

  }

  delete(key: string) {
    localStorage.removeItem(key);
    return true;
  }

}
