var DirectiveFor = {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <h3>Lista de un array</h3>
                <ul>
                    <li v-for="(color, index ) in list" :key="index" v-text="color"></li>
                </ul>
                <h3>Lista de un Objeto</h3>
                <ul>
                    <li v-for="(item, key, index) in object_list" key="index" >
                        {{key}}: {{item}}  
                    </li>
                </ul>
                <h3>Lista de un array con Objetos</h3>
                <ul>
                    <li v-for="(item, index) in other_list" key="index" >
                        Nombre: {{item.name}} <br/>
                        Apellido: {{item.last_name}} <br/>
                        Nick: {{item.nick}} <br/>

                    </li>
                </ul>
            </div>`,
  data() {
    return {
      title: "Directiva v-for",
      message: "<b>Hello desde directive v-for</b>",
      list: ["rojo", "amarillo", "azul", "purpura", "rosa"],
      object_list: {
        name: "jesus",
        last_name: "Lopez",
        nick: "Lopvi",
      },
      other_list: [
        {
          name: "jesus",
          last_name: "Lopez",
          nick: "Lopvi",
        },
        {
          name: "jorge",
          last_name: "martines",
          nick: "jmar",
        },
        {
          name: "ismael",
          last_name: "carranza",
          nick: "LIsamca",
        },
      ],
    };
  },
};
