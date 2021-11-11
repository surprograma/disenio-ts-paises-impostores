import { mocked } from "ts-jest/utils";
import { consola } from "./consola";
import programa from "./programa";

// Le pedimos a Jest que "imposte" el módulo completo
jest.mock("./consola");

// Le "avisamos" al compilador de TypeScript que la consola es un mock
// Esto "le agrega" al objeto tenga los métodos de Jest para interactuar con mocks
const consolaMock = mocked(consola);

// TODO: agregar mock para la RestCountries API

describe("Programa", () => {
  it("buscar país", async () => {
    consolaMock.leer.mockReturnValue("thailand");
    await programa.ejecutar();
    expect(consola.escribir).toHaveBeenCalledWith(
      "Thailand (THA) es un país de Asia, con una población de 69799978 habitantes."
    );
  });
});
