import { Enrollment } from "./enrollment";

export class Student  {
    idStudent: number;
    firstName: string;
    lastName: string;
    placeOfBirth:string;
    birth: string;
    numberCardId:string;
    phone: string;
    sex:string;
    email: string;
    address:string;
    startFrom:string;
    enrollment:Enrollment[]=[];
  

}
