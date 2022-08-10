Vue.component('computed-properties', {
    template:`
        <div>
            <h1>Computed Properties</h1>
            <p>Hola soy {{ fullName }}</p>
            <p>Y tengo {{ userAge }} años</p>
        </div>
    `,
    data(){
        return {
            user:{
                name: 'Jesus',
                lastName: 'Lopez',
                year: '1992',
            }
        }
    },
    computed:{
        fullName(){
            return `${this.user.name} ${this.user.lastName}`
        },
        userAge(){
            let date= new Date
            let currentYear= date.getFullYear()
            return currentYear - Number(this.user.year)
        }
    }
}) 