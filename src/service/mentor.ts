import { Mentor } from "@/models/mentorModel";
import { apiService } from "./apiService";


export const mentorService = () => {

    const url = "/mentor"

    const registerMentor = (mentor: Mentor) => {
        return apiService.post(`${url}`, mentor)
    }

    const logInMentor = (mentor: Mentor) => {
        return apiService.post(`/auth `, mentor)
    }

    // const updateMentor = (id: string, mentor: Mentor) => {
    //     return apiService.put(`${url}/update ${id}`, mentor)
    // }
    
    const getTotalMentor = () => {
        return apiService.get(`${url}`)
    }

    const deleteMentor = (id: string) => {
        return apiService.put(`${url}/${id}`)
    }

    return {
        registerMentor,
        logInMentor,
        // updateMentor,
        getTotalMentor,
        deleteMentor
    }
}

