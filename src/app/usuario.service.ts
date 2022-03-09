import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Usuario } from "./usuario";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getUsuario(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.apiServerUrl}/usuario/all`);
    }

    public addUsuario(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/add`,usuario);
    }

    public updateUsuario(usuario: Usuario): Observable<Usuario>{
        return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`,usuario);
    }

    public deleteUsuario(usuarioId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/usuario/delete/${usuarioId}`);
    }
}