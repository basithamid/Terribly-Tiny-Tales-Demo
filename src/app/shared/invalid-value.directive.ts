import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";
import { Directive, Input } from "@angular/core";


@Directive({
    selector: '[invaidInput]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenInputDirective, multi: true}]
})
export class ForbiddenInputDirective implements Validator{
    @Input('invalidInput') forbiddenInput: any;
        
    validate(control:FormControl): {[key: string]: boolean} {
        console.log(control.value)
        if(this.forbiddenInput.indexOf(control.value)) {
            console.log("Input Value", control.value)
            return {'inputIsForbidden': true};
        }
        return null;
    }
}
