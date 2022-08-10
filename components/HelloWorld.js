Vue.component('hello-world', {
    template: ` <header>
                <h1>{{tittle2}}</h1>
                <h3>{{message}}</h3>
            </header>`,
    data(){
        return{
            tittle2: 'Hola Mundo',
            message: 'Bienvenido al curso de Vuejs prueba',
        }
    }
})