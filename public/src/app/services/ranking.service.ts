import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from '../models/ranking';
@Injectable({
  providedIn: 'root'
})
export class RankingService {
  rankingSeleccionado: Ranking;
  ranking: Ranking[];
  readonly URL_API = /*'http://localhost:3000/api/ranking'*/ 'https://immense-island-10865.herokuapp.com/';
  constructor(
    private http: HttpClient
  ) { }
  insertInRanking(ranking: Ranking) {
    return this.http.post(this.URL_API, ranking).toPromise();
  }
  getRanking() {
    return this.http.get(this.URL_API).toPromise();
  }
  getPosition(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateInRanking(ranking: Ranking) {
    this.http.put(this.URL_API + `/${ranking._id}`, ranking).toPromise();
  }
  deleteOfRanking(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
