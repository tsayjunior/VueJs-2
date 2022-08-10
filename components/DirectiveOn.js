// estados
var DirectiveOn={
    template: `<header @click="decirHola" >
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <button v-on:click="decirHola" >Dame Click</button>
                <p v-text="pelicula"></p>
                <button @click.stop.prevent="comprarEntrada" >Comprar entrada</button>
                <input type="text" @keydown="decirHola"/>
                <p>disponibles <span v-text="entradas"></span></p>
            </header>`,
    data(){
        return {
            title: 'Directiva v-on',
            message: '<b>Hello desde directive v-On</b>',
            welcome_text:"Bienvenido desde la data",
            pelicula: "Dora la exploradora",
            entradas: 5,
        }
    },
    methods:{
        decirHola (){
            alert(this.welcome_text)
        },
        comprarEntrada(){
            if(this.entradas>0){
                this.entradas --
                return alert(`Entrada para ${this.pelicula} comprada`)
            }
            return alert("Ya no hay entradas")
        }
    }
}