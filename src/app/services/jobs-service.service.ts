import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  private REST_API_SERVER = 'https://localhost:44323/';
  description: string[];
  constructor(private http: HttpClient) {
  }

  public getJobListings() {
    return this.http.get(this.REST_API_SERVER + 'api/JobPost');
  }

  // tslint:disable-next-line:max-line-length
  public postNewJob(
    id: string, company: string,
    date: string, contact: string,
    overview: string, requirements: string,
    responsibilities: string, location: string,
    title: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };

    return this.http.post(this.REST_API_SERVER + 'api/JobPost',
    {
      id,
      company,
      date,
      description: {
        contact,
        overview,
        requirements,
        responsibilities
      },
      location,
      title
    } , options);
  }
}
