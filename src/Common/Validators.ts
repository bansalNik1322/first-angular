import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (controls: AbstractControl): { [key: string]: boolean } | null => {
        const control = controls.get(controlName);
        const matchingControl = controls.get(matchingControlName);

        if (!control || !matchingControl) {
            return null;
        }

        const isMatch = control.value === matchingControl.value;

        return !isMatch ? { 'passwordMismatch': true } : null;
    };
}
