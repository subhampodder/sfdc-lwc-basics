import { LightningElement, track } from 'lwc';
 
export default class ParentComponent extends LightningElement {
    @track answer = "Patient: ";
    question = "Doctor: Are you mantaining social distancing?";
   
    handleAnswer(event) {
      /*eslint-disable-next-line*/
      console.log("res-->" + event.detail);
      const res = event.detail;
      this.answer = this.answer + res;
    }
}