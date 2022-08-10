let MovieComp={
    template:`
        <div>
            <img :src="cover">
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <hr>
        </div>
    `,
    // props:[
    //     'id',
    //     'title',
    //     'synopsis',
    //     'cover'
    // ]
    props:{
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'No posee synopsis'
        },
        cover: {
            type: String,
            required: true,
        }
    }
}