export class LoanState{
    userData: {
        fullName: string;
        numberOfKTP:string;
        phoneNumber:string;
        mediaSource:string;
    }[] = [];
    loan:{
        amount:number;
        term:number;
    }
    serviceArea:string;
    loans:Array<{
        fullName:string;
        numberOfKTP:string;
        phoneNumber:string;
        mediaSource:string;
        serviceArea:string;
        amount:number;
        term:number;
    }> = [];
}