import { Aluno } from "@/models/alunoModel";
import { apiService } from "./apiService";


export const alunoService = () => {

    const url = "/aluno"

    const registerAluno = (aluno: Aluno) => {
        return apiService.post(`${url}`, aluno)
    }

    const logInAluno = (aluno: Aluno) => {
        return apiService.post(`/auth `, aluno)
    }

    // const updateAluno = (id: string, aluno: Aluno) => {
    //     return apiService.put(`${url}/update ${id}`, aluno)
    // }
    
    const getTotalAluno = () => {
        return apiService.get(`${url}`)
    }

    const deleteAluno = (id: string) => {
        return apiService.delete(`${url}/${id}`)
    }

    return {
        registerAluno,
        logInAluno,
        // updateAluno,
        getTotalAluno,
        deleteAluno
    }
}

