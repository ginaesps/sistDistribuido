class invoice{
    constructor(date,payment,tax, customer_rfc, branch_id){
        this.id=null;
        this.date=date;
        this.payment=payment;
        this.tax=tax;
        this.customer_rfc=customer_rfc;
        this.branch_id=branch_id;
    }
}

module.exports=invoice;