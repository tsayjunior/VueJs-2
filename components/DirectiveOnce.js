//hace que solo se renderize una ves algo, ya la siguiente ves que quiera renderizar algo, no lo toma en cuenta

var DirectiveOnce = {
    template: `<div>
                  <h1 v-text="title" v-once></h1>
              </div>`,
    data() {
      return {
        title: "Directiva v-once",
      };
    },
  };
  