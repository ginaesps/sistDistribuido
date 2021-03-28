class product{
    constructor(name,available_quantity,cost, branch_id){
        this.id=null;
        this.name=name;
        this.available_quantity=available_quantity;
        this.cost=cost;
        this.branch_id=branch_id;
    }
}
module.exports=product;