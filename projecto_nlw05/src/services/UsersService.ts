import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService{
    async create(email: string){        
        const usersRepository = getCustomRepository(UsersRepository)
        //Verificar se usuario existe

        const userExists =  await usersRepository.findOne({
            email
        })

        //Se nao existir, salvar no BD
        if (userExists){
            return userExists;
        }

        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        //Se existir, retornar user
        return user;
    }
}

export { UsersService };