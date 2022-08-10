Vue.component('vue-directives', {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-text="text"></p>
                <a :href="link.href" :title="link.tittle" v-text="link.text"></a>
                <directive-html></directive-html>
                <DirectiveShow/>
                <DirectiveIf/>
                <DirectiveFor/>
                <DirectiveOn/>
                <DirectiveModel/>
                <DirectiveSlot/>
                <DirectivePre />
                <DirectiveOnce />
            </div>`,
    data(){
        return {
            title: 'Directivas de Vue Js',
            text: 'Texto de prueba v-text',
            link:{
                text:'VueJs Home',
                href: 'https://v2.vuejs.org/',
                tittle: 'Documentacion Vue Js',
            }
        }
    },
    components:{
        // 'directive-html': DirectiveHtml,
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
        DirectivePre,
        DirectiveOnce,
    }

})