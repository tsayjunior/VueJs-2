Vue.component('saludar-comp', {
    template: `<div @click="upps">
                <h1 v-text="titulo"></h1>
               <button @click.stop="saludar">Saludar</button>
            </div>`,
    data(){
        return {
            titulo: 'saludo para ti',
            nombre: 'Junior javier',
            pais: 'Bolivia',
            clickAfuera: 'No hagas click en el boton',
        }
    },
    methods:{
        upps (){
            alert(this.clickAfuera)
        },
        saludar(){
            
            alert(`Mi nombre es ${this.nombre} y soy del pais ${this.pais}`)
        }
    }
})