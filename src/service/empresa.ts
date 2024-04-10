import { Empresa } from "@/models/EmpresaModel";
import { apiService } from "./apiService";


export const EmpresaService = () => {

    const url = "/empresa"

    const registerEmpresa = (empresa: Empresa) => {
        return apiService.post(`${url}`, empresa)
    }

    // const updateEmpresa = (id: string, empresa: Empresa) => {
    //     return apiService.put(`${url}/update ${id}`, empresa)
    // }
    
    const getTotalEmpresa = () => {
        return apiService.get(`${url}`)
    }

    const deleteEmpresa = (cnpj: string) => {
        return apiService.delete(`${url}/${cnpj}`)
    }

    return {
        registerEmpresa,
        // updateEmpresa,
        getTotalEmpresa,
        deleteEmpresa
    }
}

