class MiComponente extends HTMLElement {

    static name = 'mi-componente'

    static get style() {

        return /*css*/`
        
            :host(.container) {

                /*
                display: block;
                background-color: green;
                */

            }

            :host-context(.dark){

                display: block;
                background-color: brown;

            }

            .container {
                color: red;
            }

        `

    }

    constructor() {
        super();

        this.attachShadow({

            mode: 'open'

        })

        this.shadowRoot.innerHTML = /*html*/ `<div class="container">
        
            <style>
                ${MiComponente.style}
            </style>

            <div class="container">Exequiel</div>

        </div>`

    }

}

customElements.define(MiComponente.name, MiComponente)