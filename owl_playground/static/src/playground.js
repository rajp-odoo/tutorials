/** @odoo-module **/ 
import { Component, useState } from "@odoo/owl";
import { Counter } from "./component/counter/counter";
import { Todo } from "./component/todo/todo";
import { Todolist } from "./component/todolist/todolist";


export class Playground extends Component {
    static components = { Counter,Todo,Todolist};
    static template = "owl_playground.playground";

    setup(){

        this.todo = {id:3,description:'Buy Milk',done:false}

    }
    

}