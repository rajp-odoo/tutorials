
/** @odoo-module **/
import { Component, useState ,useRef} from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.todo";

    static props = {
        id:{type:Number},
        description:{type:String},
        done:{type:Boolean}
    }


    
    // setup() {
    //     // this.state = useState({ value: 0 });
    //     // this.todo = [];
    //     // this.input = useRef('inputdate')
    // }








    // addTodo(){
    //     const data = document.getElementById('inputdate').value;
    //     if(data){
    //         const tododata = {
    //             'name': data,
    //             'done':false
    
    //         }
    //         this.todo.push(tododata)

    //     }
    //     else{
    //         console.log("no data came")
    //     }

    //     document.getElementById('inputdate').value='';
    //     console.log(this.todo)
    // }
}