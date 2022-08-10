//Evita que me renderize un dato, mas me muestra como se lo pone, no haciendo la bifurcacion

var DirectivePre = {
    template: `<div>
                  <h1 v-text="title"></h1>
                  <p v-pre>{{title}}</p>
              </div>`,
    data() {
      return {
        title: "Directiva v-pre",
      };
    },
  };
  