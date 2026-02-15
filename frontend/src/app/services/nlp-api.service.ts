import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NlpApiService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  summarize(text: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/summarize/`, { text });
  }

  clean(text: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/clean/`, { text });
  }

  spell(text: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/spell/`, { text });
  }

  keywords(text: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/keywords/`, { text });
  }

  transformToLowercase(text: string): Observable<any> {
  return this.http.post(`${this.BASE_URL}/transform/lowercase`, { text });
  }

  killPunctuation(text: string): Observable<any> {
  return this.http.post(`${this.BASE_URL}/clean/punctuation`, { text });
}

  cleanHtml(text: string): Observable<any> {
  return this.http.post(`${this.BASE_URL}/clean/html`, { text });
}

}
