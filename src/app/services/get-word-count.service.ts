import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";


@Injectable()
export class WordCountService {
    private _fileURL = 'http://localhost:8000/fetch_file';
    abc:any;
    constructor(private _http: HttpClient){}

    getWords(inputNumber: number): Observable<any>{
        return this._http.get<any>(this._fileURL+"?number="+inputNumber);
        
    }

}