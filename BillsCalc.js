class Bill {
    constructor(name, balanceDue, dueDate, paid, ...args) {
        this.name = {
            "balanceDue": balanceDue,
            "dueDate": dueDate,
            "paid": paid
        }
    }
}

let bills = {
    "CarInsurance": { balanceDue: 211.78, dueDate: new Date("8/23/21"), paid: false},
    "Electric": { balanceDue: 91.81, dueDate: new Date("8/24/21"), paid: false},
    "Internet": { balanceDue: 58.51, dueDate: new Date("8/15/21"), paid: true},
    "WaterBill": { balanceDue: 179.01, dueDate: new Date("8/5/21"), paid: true},
    "GrahamEvergreenMedBill": { balanceDue: 33.93, dueDate: new Date("8/10/21"), paid: true},
    "HRVBill": { balanceDue: 211.40, dueDate: new Date("8/25/21"), paid: false},
    "LOC": { balanceDue: 37.82, dueDate: new Date("8/15/21"), paid: true},
    "BECUCredit": { balanceDue: 100.00, dueDate: new Date("8/22/21"), paid: true},
    "GrahamPediatrixMedBill": {balanceDue: 16.61, dueDate: new Date("8/19/21"), paid: false},
    "GrahamDentistMedBill": {balanceDue: 1062.00, dueDate: new Date("8/15/21"), paid: false},
    "AliciaEvergreenMedBill": {balanceDue: 140.37, dueDate: new Date("7/23/21"), paid: false},
    "GrahamChildrensMedBill": {balanceDue: 41.83, dueDate: new Date("8/25/21"), paid: false},

};