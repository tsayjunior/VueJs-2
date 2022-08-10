var DirectiveShow={
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-show="mostrar" v-html="message"></p>
                <p v-show="user.permission">El usuario tiene permiso para ver esto</p>
                <p v-show="!user.permission">El usuario no tiene permiso para ver esto</p>

            </div>`,
    data(){
        return {
            title: 'Directiva v-show',
            message: '<b>Hello desde directive Show</b>',
            mostrar: true,
            user:{
                permission: true,
            }
        }
    },
}