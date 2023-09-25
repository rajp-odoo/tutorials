
/** @odoo-module **/

import { Component, useState} from "@odoo/owl";
import { Todo } from "../todo/todo";


export class Todolist extends Component {
    static components = { Todo };
    static template = "owl_playground.todolist";

    setup() {
        // this.todoList = [];
        this.todoList = useState([{id:1,description:'test',done:true}]);
        this.nextId = this.todoList.length+1;

     

        // this.todoList.push({ id: 1, description: "Task 1", done: false });
        // this.todoList.push({ id: 2, description: "Task 2", done: false });
    }
    addTodo(ev){

        // console.log("outside function")o
        if(ev.keyCode == 13 && ev.target.value.trim() != "" && ev.target.value !=" " ){
            console.log(ev.target.value);
            // console.log("todo item")
            this.todoList.push({id:this.nextId++,description:ev.target.value,done:false})
            // document.getElementById('inputTodo').value='';
            ev.target.value=''

        }

        // console.log(data)
    }

}