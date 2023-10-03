
/** @odoo-module **/
import { Component, useState ,useRef,onWillDestroy,onWillUnmount} from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.todo";

    static props = {
        id:{type:Number},
        description:{type:String},
        done:{type:Boolean},
        toggleState:{type:Function},
        toggleDelete:{type:Function}
        
    }


    
    setup() {
        onWillDestroy(() => {
            // do some cleanup
            console.log("onwillDestroy")
          });


          onWillUnmount(() => {
            // remove listener
            console.log("onwillUnmount")
          });
    }







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