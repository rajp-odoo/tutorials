/** @odoo-module **/ 

import {onMounted,useRef} from "@odoo/owl";

export function useAutofocus(Inpput){

    const inputRef = useRef(Input)

    onMounted(()=> inputRef.el.focus())
}