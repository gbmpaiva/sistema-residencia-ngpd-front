'use client'

import { Empresa, valorInicialEmpresa } from "@/models/EmpresaModel"
import { mensagemErro, mensagemSucesso } from "@/models/toastr"
import { EmpresaService } from "@/service/empresa"
// import '@/styles/register.css'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register() {
    const router = useRouter()
    const [empresa, setEmpresa] = useState<Empresa>(valorInicialEmpresa)
    const { registerEmpresa } = EmpresaService()

    const cadastrar = async () => {
        try {
            const response = await registerEmpresa(empresa)
            console.log(response)
            setEmpresa(valorInicialEmpresa)
            mensagemSucesso('Empresa Cadastrada Com Sucesso!')
        } catch (e: any) {
            mensagemErro('')
        }
    }

    return (
        <div className="main-div">
            <div className="secondary-div">
                <div className="left-div">
                    <h1 id='titulo'>Cadastro</h1>

                    <input
                        id='InputRegister'
                        placeholder="cnpj"
                        type="text"
                        name="cnpj"
                        value={empresa.Cnpj}
                        onChange={(e) => setEmpresa({ ...empresa, Cnpj: e.target.value })}
                    />

                    <input
                        id='InputRegister'
                        placeholder="companyName"
                        type="text"
                        name="companyName"
                        value={empresa.company}
                        onChange={(e) => setEmpresa({ ...empresa, company: e.target.value })}
                    />

                    <input
                        id='InputRegister'
                        placeholder="contact"
                        type="text"
                        name="contact"
                        value={empresa.contact}
                        onChange={(e) => setEmpresa({ ...empresa, contact: e.target.value })}
                    />

                    <button
                        type="button"
                        onClick={cadastrar}
                    >CADASTRAR
                    </button>
                </div>
            </div>
        </div>
    )
}