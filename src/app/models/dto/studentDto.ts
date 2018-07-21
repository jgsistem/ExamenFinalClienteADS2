export class StudentDto {
    studentId: number;
    firstName: string;
    lastName: string;
    email : string;
    documentNumber : string;
    monto : number;    
    isActive : boolean;

    constructor() {}

    public setStudentId(value: number): StudentDto {
        this.studentId = value;
        return this;
    }

    public setFirstName(value: string): StudentDto {
        this.firstName = value;
        return this;
    }

    public setLastName(value: string): StudentDto {
        this.lastName = value;
        return this;
    }

    public setDocumentNumber(value: string): StudentDto {
        this.documentNumber = value;
        return this;
    }

    public setEmail(value: string): StudentDto {
        this.email = value;
        return this;
    }
    
    public setIsActive(value: boolean): StudentDto {
        this.isActive = value;
        return this;
    }

    public setMonto(value: number): StudentDto {
        this.monto = value;
        return this;
    }
}
