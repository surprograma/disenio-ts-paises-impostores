import { map, mergeRight } from "ramda";
import { RestAPI } from "./RestAPI";

/*
👀 ¡¡ATENCIÓN!!
El código de este archivo *funciona* tal cual está y no debe realizarse ninguna modificación.
Lo incluimos en el proyecto únicamente con fines didácticos, para quienes quieran ver cómo
está hecho. El ejercicio se tiene que resolver sin alterar para nada este archivo.
 */

export class RestCountriesAPI extends RestAPI {
  urlBase = "https://restcountries.com/v2";

  async todosLosPaises(): Promise<Country[]> {
    return this.obtenerRecurso<Country[]>(
      "/all",
      map(this.inicializarCamposNulos)
    );
  }

  async buscarPaisesPorNombre(nombre: string): Promise<Country[]> {
    return this.obtenerRecurso<Country[]>(
      `/name/${nombre}`,
      map(this.inicializarCamposNulos)
    );
  }

  async paisConCodigo(codigoIso3: string): Promise<Country> {
    return this.obtenerRecurso<Country>(
      `/alpha/${codigoIso3}`,
      this.inicializarCamposNulos
    );
  }

  inicializarCamposNulos = mergeRight({
    borders: [],
    regionalBlocs: [],
    currencies: [],
  });
}

// Tomamos solamente un subconjunto de la información que da la API.
// Todos los campos disponibles pueden verse en http://restcountries.eu/#api-endpoints-response-example.

export type Country = {
  name: string;
  alpha3Code: string;
  capital: string;
  region: string;
  population: number;
  area: number;
  borders: string[];
  languages: Language[];
  regionalBlocs: RegionalBloc[];
  currencies: Currency[];
};

export type Language = {
  name: string;
};

export type RegionalBloc = {
  acronym: string;
  name: string;
};

export type Currency = {
  code: string;
};
