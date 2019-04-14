import { Http } from "@angular/http";

import { map, catchError } from "rxjs/operators";
import { Observable, pipe, from, of } from "rxjs";

export class TodoService {
  constructor(private http: Http) {}

  getTodos() {
    return this.http.get("...").pipe(map(r => r.json()));
  }
}
