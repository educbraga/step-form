import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use(express.json())

// Serve os arquivos estáticos da pasta 'dist' criados pelo vite ao gerar a build do projeto
app.use(express.static(path.join(__dirname, "dist")))

app.get("/", (request, response) => {
  response.redirect("/registration")
})

app.get("/registration", (request, response) => {
  response.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.post("/registration", (request, response) => {
  const formData = request.body
  let isValid = true
  let responseData = {}

  // Verificação básica para todos os usuários
  if (!formData.userEmail || !formData.userPhone || !formData.userPassword) {
    isValid = false
  }

  // Verificações específicas para Pessoa Física (PF)
  if (formData.userPersonType === "pf") {
    if (!formData.userName || !formData.userCpf || !formData.userBirthdate) {
      isValid = false
    } else {
      responseData = {
        userName: formData.userName,
        userEmail: formData.userEmail,
        userPhone: formData.userPhone,
        userCpf: formData.userCpf,
        userBirthdate: formData.userBirthdate
      }
    }
  }

  // Verificações específicas para Pessoa Jurídica (PJ)
  if (formData.userPersonType === "pj") {
    if (!formData.userCompanyName || !formData.userCnpj || !formData.userOpeningDate) {
      isValid = false
    } else {
      responseData = {
        userCompanyName: formData.userCompanyName,
        userEmail: formData.userEmail,
        userPhone: formData.userPhone,
        userCnpj: formData.userCnpj,
        userOpeningDate: formData.userOpeningDate
      }
    }
  }

  if (!isValid) {
    return response.status(400).json({
      message: `❌  Não foi possível concluir seu registro.
        Por favor, verifique os dados e tente novamente.
        Caso o problema persista, entre em contato com o suporte em xxx@xxx.com.br.`
    })
  }

  response.status(200).json({
    data: responseData
  })
})

app.listen(PORT, () => {
  console.log("📦 Build gerada com sucesso.")
  console.log(`⚙️  Servidor rodando em: http://localhost:${PORT}`)
})
