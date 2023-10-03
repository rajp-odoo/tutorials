/** @odoo-module **/ 
import { Component, useState } from "@odoo/owl";
import { Counter } from "./component/counter/counter";
import { Todo } from "./component/todo/todo";
import { Todolist } from "./component/todolist/todolist";
import { Card } from "./component/card/card";
// import { Dropdown } from "@web/core/dropdown/dropdown";
// import { DropdownItem } from "@web/core/dropdown/dropdown_item";
// import { ActionSwiper } from "@web/core/action_swiper/action_swiper";
export class Playground extends Component {
    static components = { Counter,Todo,Todolist,Card};
    static template = "owl_playground.playground";
   
    

    setup(){

        this.todo = {id:1,description:'Buy Milk',done:false}

    }
    

}