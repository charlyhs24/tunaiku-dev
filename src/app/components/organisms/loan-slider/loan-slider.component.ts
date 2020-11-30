import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ILoanSlider } from 'src/app/services/loan/loan-state';
import { LoanService } from 'src/app/services/loan/loan.service';
@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent {
  @Output()
  submitEventLoanSlider: EventEmitter<ILoanSlider>;
  createSliderForm = new FormGroup({
    loanAmount: new FormControl(2),
    loanTerm: new FormControl(6),
  });
  constructor(private loan: LoanService) {
    this.submitEventLoanSlider = new EventEmitter<ILoanSlider>();
  }
  get loanAmount() {
    return this.createSliderForm.get('loanAmount');
  }
  get loanTerm() {
    return this.createSliderForm.get('loanTerm');
  }
  calculatePayPermonth() {
    return this.loan.monthlyPaymentCalculation(this.createSliderForm.value.loanAmount, this.createSliderForm.value.loanTerm) ? this.loan.monthlyPaymentCalculation(this.createSliderForm.value.loanAmount, this.createSliderForm.value.loanTerm) : 0;
  }
  onSubmit() {
    this.submitEventLoanSlider.emit({
      loanAmount: this.createSliderForm.value.loanAmount,
      loanTerm: this.createSliderForm.value.loanTerm
    })
  }
}
