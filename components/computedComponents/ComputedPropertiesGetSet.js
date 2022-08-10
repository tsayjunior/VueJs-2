Vue.component("computed-properties-get-set", {
  template: `
        <div>
            <h1>Computed Properties</h1>
            <p>Hola soy {{ fullName }}</p>
            <p>Y tengo {{ userAge }} años</p>
        </div>
    `,
  data() {
    return {
      user: {
        name: "Jesus",
        lastName: "Lopez",
        year: "1992",
      },
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.user.name} ${this.user.lastName}`;
      },
      set(newValue){
        let name= newValue.split(' ')//guarda el nuevo valor, pero en un array, donde la separacion es por espacio, donde al haber un nombre y apellido, sera un array de 2 valores
        this.user.name= name[0]
        this.user.lastName= name[1]

      }
    },
    userAge() {
      let date = new Date();
      let currentYear = date.getFullYear();
      return currentYear - Number(this.user.year);
    },
  },
});
