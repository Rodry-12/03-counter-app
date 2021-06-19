import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await", () => {
  test("debe de retornar el url de la imagen ", async () => {
    const url = await getImagen();
    console.log(url);
   // expect(typeof url).toBe("string"); ya que como trae una imagen aleatoria y cambia constantemente
   expect(url.includes('https://')).toBe(true); // includes le dice que tiene que tener https:// en alguna parte de la url
  });
});
