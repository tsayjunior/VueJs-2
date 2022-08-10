//envía datos a componentes

var DirectiveSlot = {
  template: `<div>
                <h1 v-text="title"></h1>
                <button-comp>
                    <template #action>
                        Cerrar
                    </template>
                    <template #element>
                        Modal
                    </template>
                </button-comp>
            </div>`,
  data() {
    return {
      title: "Directiva v-slot",
    };
  },
  components: {
    buttonComp,
  },
};
