import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParamsUtils } from '../http-client.utils';
import { TablePagination } from '../table-pagination.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private API = environment.host;
  constructor(private httpClient: HttpClient) { }

  public getWithFiltersAndPAgination(pagination: TablePagination, endPoint: string, filters?: any): Observable<any> {
    const params = HttpParamsUtils.getFiltersAndPagination(filters, pagination);

    return this.httpClient.get(`${this.API}/${endPoint}`, { params }).pipe(
      map(resp => this.mappingData(resp))
    );
  }

  public getAll(): Observable<any[]> {
    return this.httpClient.get<any>(`${this.API}`).pipe(
      map(resp => this.mappingData(resp))
    );
  }

  public save(entity: any, endPoint: string): Observable<any> {
    return this.httpClient.post(`${this.API}/${endPoint}`, entity).pipe(
      map(resp => this.mappingData(resp))
    );
  }

  public edit(entity: any, endPoint: string): Observable<any> {
    return this.httpClient.put(`${this.API}/${endPoint}/${entity.id}`, entity).pipe(
      map(resp => this.mappingData(resp))
    );
  }

  public getById(endPoint: string, id: any): Observable<any> {
		return this.httpClient.get(`${this.API}/${endPoint}/${id}`).pipe(
			map(this.mappingData)
		);
	}

  public delete(endPoint: string, id: any): Observable<any> {
		return this.httpClient.delete(`${this.API}/${endPoint}/${id}`).pipe(
			map(this.mappingData)
		);
	}

  private mappingData(resp: any): any {
    return resp;
  }
}
