var DirectiveModel = {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>

                <input type="text" v-model="inputText" @keyup="mostrarDataInput" />

                <h2>Tipo Checkbox</h2>
                <label>
                    <input type="checkbox" v-model="checked" @click="mostrarChecked"/> Activado
                </label>

                <h2>peliculas</h2>
                <label v-for="(movie, key) in movies" :key="key" >
                    <input :value="movie" type="checkbox" v-model="favoritesMovies" @click="mostrarFavoritesMovies" />
                    {{movie}}
                </label>

                <h1 v-show="favoritesMovies.length>0">Peliculas favoritas</h1>
                <ul>
                    <li v-for="(mov, key) in favoritesMovies" v-text="mov"></li>
                </ul>
            </div>`,
  data() {
    return {
      title: "Directiva v-model",
      message: "<b>Hello desde directive v-model</b>",
      inputText: "Data del inpu",
      checked: true,
      favoritesMovies:[],
      movies:['Buscando a nemo', 'Titanic', 'Toy story'],
    };
  },
  methods: {
    mostrarDataInput() {
      console.log(this.inputText);
    },
    mostrarChecked() {
      console.log(!this.checked);
    },
    mostrarFavoritesMovies() {
      console.log(this.favoritesMovies)

    },
  },
};
