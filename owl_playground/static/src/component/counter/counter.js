
/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "owl_playground.counter";

    setup() {
        this.state = useState({ value: 0 });
        // this.todo = [];
        this.ref = useRef
        console.log(this.state)
    }

    increment() {
        this.state.value++;
        // this.todo.push(document.getElementById('todotest')).value;
        // console.log(this.todo)
    }
}