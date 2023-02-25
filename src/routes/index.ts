import { Router } from "express";
import path from 'path'
import { solution } from "../controllers/solution";
const router=Router()


router.post("/solution", solution)


router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname,'../../public/index.html'))
})

export {router};