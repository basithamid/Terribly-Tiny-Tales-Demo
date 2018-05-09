import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";


@Injectable()
export class WordCountService {
    private _fileURL = 'http://localhost:8000/fetch_file';
    header = new Headers();
    constructor(private _http: HttpClient){}

    getWords(inputNumber: number): Observable<string>{
        return this._http.get<string>(this._fileURL+"?number="+inputNumber);
    }

}