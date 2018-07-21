export class Student {
    studentId: number;
    firstName: string;
    lastName: string;
    email : string;
    documentNumber : string;
    isActive : boolean;
    monto : number;

    constructor() {}

    public setStudentId(value: number): Student {
        this.studentId = value;
        return this;
    }

    public setMonto(value: number): Student{
     this.monto = value;
      return this;

    }

    public setFirstName(value: string): Student {
        this.firstName = value;
        return this;
    }

    public setLastName(value: string): Student {
        this.lastName = value;
        return this;
    }

    public setDocumentNumber(value: string): Student {
        this.documentNumber = value;
        return this;
    }

    public setEmail(value: string): Student {
        this.email = value;
        return this;
    }
    
    public setIsActive(value: boolean): Student {
        this.isActive = value;
        return this;
    }
}
