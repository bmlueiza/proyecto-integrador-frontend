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
      <div className="contenedor2">
        <h2 className="title_contac2">Formulario de contacto</h2>

        <form className="contact_form2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="contact_label2">Asunto</label>
            <input
              className="contact_input2"
              type="text"
              {...register("asunto")}
            />
          </div>

          <div className="mensaje2">
            <label className="contact_label2">Mensaje</label>
            <textarea
              className="contact_textarea2"
              name="text"
              cols="32"
              rows="10"
            ></textarea>
          </div>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
