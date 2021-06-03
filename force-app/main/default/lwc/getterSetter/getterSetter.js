import { LightningElement, track } from 'lwc';

export default class GetterSetter extends LightningElement {
    defaultMsg = "Hello";
    @track outputMessage;

    handleMessage(event){
        this.message = event.target.value;
    }

    get message(){
        return this.defaultMsg + "PROM";
    }

    set message(val){
        this.outputMessage = val;
    }
}