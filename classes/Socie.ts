export class Tutor{
    public nombre: string;
    public apellido: string;
    public vinculo:string;
    public telefono:number;

        public constructor(nombre:string, apellido:string, vinculo:string, telefono:number){
            this.apellido=apellido;
            this.nombre=nombre;
            this.vinculo=vinculo;
            this.telefono=telefono;
    }
}

export class Domicilio{
public direccion:string;
public localidad:string;

public constructor(direccion:string, localidad:string){
    this.direccion=direccion;
    this.localidad=localidad;
    }
}

export class Socie{
    public nombre: string;
    public apellido: string;
    public pronombre: string;
    public nickname: string;
    public fechaNacimiento: number;
    public dni: number; 
    public escuela:string;
    public carrera:string;

    public constructor(nombre:string, apellido:string,pronombre:string, nickname:string, fechanacimiento:number, dni:number, escuela:string, carrera:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pronombre=pronombre;
        this.nickname=nickname;
        this.fechaNacimiento=fechanacimiento;
        this.dni=dni;
        this.escuela=escuela;
        this.carrera=carrera;
    }
}