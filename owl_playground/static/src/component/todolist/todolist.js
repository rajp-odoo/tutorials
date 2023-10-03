
/** @odoo-module **/

import { Component, useState,useRef,onMounted,onWillStart,onWillRender,onRendered,onWillUpdateProps,onWillPatch,onPatched,onWillUnmount,onWillDestroy,onError} from "@odoo/owl";
import { Todo } from "../todo/todo";


export class Todolist extends Component {
    static components = { Todo };
    static template = "owl_playground.todolist";
    

    inputRef = useRef("someInput");

    setup() {
        console.log("setup functiont")
        // this.todoList = [];
        this.todoList = useState([{id:1,description:'test',done:true}]);
        this.nextId = this.todoList.length+1;
        // this.inputRef.focus();
        onMounted(() => {
            console.log("onMounted function")
            // do something here
            this.inputRef.el.focus()

          });

          onWillStart(async () => {
            console.log("onWillStart")
            // this.data = await this.loadData()
          });

          onWillRender(() => {
            // do something
            console.log("onWillReder")
          });

          onRendered(() => {
            // do something
            console.log("onRendered")
          });

          onWillUpdateProps(nextProps => {
            // return this.loadData({id: nextProps.id});
            console.log("onWillUpdateProps")
          });

          onWillPatch(() => {
            // this.scrollState = this.getScrollSTate();
            console.log("onWillPatch")
          });


          onPatched(() => {
            // this.scrollState = this.getScrollSTate();
            console.log("onPatched")
          });

         

         

          // onError((error) => {
          //   // do something
            
          //   console.log(error)
          // });

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
        // this.render()

   
        // console.log(data)
    }

    deletetodo(){
        console.log("delete");

        this.todoList.splice(0)
        console.log(this.todoList.length)
        this.nextId = this.todoList.length + 1
        // this.render()
    }

    toggleState(todoId){
        // console.log(todoId)
        // console.log(this.todoList)

        const todo = this.todoList.find((todo) => todo.id === todoId);
        console.log(todo)
        if(todo){
            
            todo.done = !todo.done;
        }

    }


    delete(todoId){
      console.log("function delete working")

      console.log(todoId)
      
      const index = this.todoList.findIndex((elem) => elem.id === todoId);
      if (index >= 0) {
    // remove the element at index from list
         this.todoList.splice(index, 1);
        }// console.log(this.todoList)

      // const todo = this.todoList.find((todo) => todo.id === todoId);
      // console.log(todo)
      // if(todo){
          
      //     todo.done = !todo.done;
      // }

  }




}