
/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "owl_playground.counter";

   
    setup() {
        this.state = useState({ value: 0 });
        
        // this.todo = [];
        // this.ref = useRef
        // console.log(this.state)
    }

    increment() {
        // this.state.value++;
        const num = parseInt(document.getElementById('todotest').value);
        if(num){
            console.log(typeof(num))
            this.state.value += num;
            document.getElementById('todotest').value=''
            
        }
        else{
            this.state.value++
        }
        // console.log(this.todo)
    }
}