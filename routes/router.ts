import { Router, Request, Response, application } from "express";
import {Socie} from "../models/socie.model";
export const router = Router();
let socies: Array<Socie> = [
        {
            nombre:'Irina',
            apellido:'Almazan',
            nick: 'Ir1n4',
            edad:20
        },
        {
            nombre:'Rocco',
            apellido:'Hernandez',
            nick:'R0CC0',
            edad:22
        },
        {
            nombre:'Maria',
            apellido:'Paz',
            nick:'M4r14',
            edad: 18
        }
    ]

router.get('/socies', (req: Request, res: Response) => {
    res.json({
        ok: true,
        socies:socies
    });
});


router.get('/socie/:nick', (req:Request, res:Response) =>{
    let ficha:Socie={nombre: "", apellido: "", nick: "", edad:0};

    socies.forEach(socie =>{
        if (socie.nick === req.params.nick){
            ficha=socie;
        }
    });
    res.json({
        ok:true,
        socie:ficha
    });
});

router.post('/registro',(req: Request, res: Response) =>{

    let nombre: string;
    let apellido: string;

if (req.body.nombre && req.body.nombre !== ""){
    nombre = req.body.nombre;
}
else{
    res.json({
        ok: false,
        mensaje:`Error: Falta el campo de nombre`
    });
    nombre = "";
}
apellido = req.body.apellido?req.body.apellido:"";
res.json({
    ok:true,
    mensaje: `Bienvenido ${nombre} ${apellido}!!!`
})
});

