import { Router, Request, Response } from "express";

const router = Router()

router.get('/',(req: Request,res: Response) =>{
  /*  let pessoa = {
        nome:'Gabriel Beicinho',
        idade: 18
    }*/

    res.render('pages/home',{
        nome: "Gabriel Tudão",
        showWelcome: false
    })
})

//
router.get('/contato',(req: Request,res: Response) =>{
    res.render('pages/contato')
})
//
router.get('/idade',(req: Request,res: Response) =>{
// se for maior que 18 exibir mensagem
//criar variaveis
    let idade: number = 18
    let mostrarIdade: boolean = false

    if (idade >= 18){
        mostrarIdade = true
    }
    res.render("pages/idade",{
        nome:"Mr. Sexo",
        mostrarIdade,
        products:[
 
            'Bolacha',
            'Petiscos',
            'Boné'
        ]
    })


    res.render('pages/idade')
})
//
router.get('/mae',(req: Request,res: Response) =>{
    res.send("Mãe do Guilherme é uma bola!")
})

//Rota dinamica
router.get('/noticia/:slug',(req: Request,res: Response) =>{
    let slug: string =req.params.slug
    res.send(`Noticia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req: Request,res: Response) =>{
    let {origem, destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})




//exportando o arquivo index
export default router