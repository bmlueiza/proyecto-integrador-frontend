import { useForm } from "react-hook-form";
/* import { edadValidator } from "./validators";  */
import "./ChatBox.css";

function ChatBox() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "Luis",
      apellido: "Perez",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  /* el validador en otra pestaña js seria asi : */

  /*export { edadValidator } */
  return (
    <div>
      <div className="contenedor">
        <h2>Formulario de contacto</h2>
        <p>Hola: {watch("nombre")}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Asunto</label>
            <input type="text" {...register("asunto")} />
          </div>

          <div className="mensaje">
            <label>Mensaje</label>
            <textarea name="text" cols="32" rows="10">
              Este es el valor de texto por defecto
            </textarea>
          </div>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
