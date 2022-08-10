var DirectiveIf={
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-if="mostrar" v-html="message"></p>
                <h1>Uso  de v-if/ v-else </h1>
                <p v-if="user.permission">El usuario tiene permiso para ver esto</p>
                <p v-else>El usuario no tiene permiso para ver esto</p>
                <h1>Uso  de v-if/ v-else-if/ v-else </h1>
                <p v-if="user.permission && user.vip">El usuario tiene permiso y es vip</p>
                <p v-else-if="user.permission">El usuario tiene permiso</p>
                <p v-else-if="user.vip">El usuario es vip</p>
                <p v-else>El usuario no tiene permiso ni es vip</p>

            </div>`,
    data(){
        return {
            title: 'Directiva v-If',
            message: '<b>Hello desde directive V-If</b>',
            mostrar: true,
            user:{
                permission: false,
                vip: true,
            }
        }
    },
}