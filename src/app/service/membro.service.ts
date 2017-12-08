import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Membro } from '../model/Membro';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MembroService {
    urlListaTodos = "https://fimdeano.brasilcap.com.br/galeria/";
    urlCreate = "https://fimdeano.brasilcap.com.br/create/";
    urlSlack = "https://fimdeano.brasilcap.com.br/shareSlack";
    urlSlackUpload = "http://localhost:8082/uploadSlack";


    constructor(private http: Http) {
    }

    incluir(membro: Membro): Observable<Membro> {
        return this.http.post(this.urlCreate, membro).map(res => res.json());
    }

    atualizar(membro: Membro): Observable<Membro> {
        return this.http.post(this.urlCreate, membro).map(res => res.json());
    }

    excluir(membro: Membro): Observable<Membro> {
        return this.http.post(this.urlCreate, membro).map(res => res.json());
    }

    buscarPorId(id): Observable<any[]> {
        return this.http.get(this.urlListaTodos).map(this.extractData).catch(this.handleErrorObservable);
    }

    listarTodos(): Observable<any[]> {
        return this.http.get(this.urlListaTodos).map(this.extractData).catch(this.handleErrorObservable);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

} 