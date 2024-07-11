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
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="contenedor">
        <h2>Formulario de contacto</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Asunto</label>
            <input type="text" {...register("asunto")} />
          </div>

          <div className="mensaje">
            <label>Mensaje</label>
            <textarea name="text" cols="32" rows="10"></textarea>
          </div>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
