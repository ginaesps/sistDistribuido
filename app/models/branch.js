class branch{
    constructor(owner,active,address, creation_date,phone_number,email){
        this.id=null;
        this.owner=owner;
        this.active=active;
        this.address=address;
        this.creation_date=creation_date; // es necesario poner el campo considerando que es timestamp?
        this.phone_number=phone_number;
        this.email=email;
    }
}
module.exports=branch;