class Loan{ 

    constructor(A, R, N){
        this.A = A;
        this.R = R;
        this.N = N;
        this.table = {
        }
    }

    calculateLoanPayment(){
        let previousOB = this.A;
        let PPn = (this.A / this.N);
        for (let x = 1; x <= this.N; x++ ){
            let OB = previousOB - PPn;
            let INT = previousOB * this.R;
            let Payment = PPn + INT;
            previousOB = OB;
            let newEntry = {
                                id: x,
                                paymentAmount: Payment,
                                PAP: PPn,
                                IAP: INT,
                                LOB: OB
                            }
            this.table[x] = newEntry;
        }

    }
}