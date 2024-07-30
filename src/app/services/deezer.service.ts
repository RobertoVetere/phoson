import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  private backendApiUrl = 'https://photosong-backend-production.up.railway.app/api/deezer/song';

  constructor(private http: HttpClient) { }

  findSongOnDeezer(artist: string, songTitle: string): Observable<string> {
    const params = new HttpParams().set('artist', artist).set('songTitle', songTitle);
    return this.http.get(this.backendApiUrl, { params, responseType: 'text' });
  }
}