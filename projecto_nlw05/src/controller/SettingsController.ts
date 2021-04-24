import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";
class SettingsController{
    async create(request: Request, response: Response){

/**
 * Tipos de parametros
 * Routes params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Parametros de busca
 * http://localhost:3333/settings/1?search=nlw#5
 * 
 * Body params => {
 * 
 * }
 */

    const {chat, username} = request.body;

    const settingsService = new SettingsService();

    try{

        const settings = await settingsService.create({ chat, username }); 
    
        return response.json(settings);
    }catch(err){
        return response.status(400).json({
            message: err.message,
        })
    }
    
    }
}

export { SettingsController };