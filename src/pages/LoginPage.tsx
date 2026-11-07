import { useState } from "react"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  async function fazerLogin(e: React.FormEvent) {
    e.preventDefault()

    try {
      const resposta = await fetch(
        `${import.meta.env.VITE_API_URL}/auth`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: senha
          })
        }
      )

      const dados = await resposta.json()

      if (resposta.ok && dados.access_token) {
        localStorage.setItem("access_token", dados.access_token)
        setMensagem("Login realizado! Token recebido.")
      } else {
        setMensagem("E-mail ou senha inválidos")
      }
    } catch {
      setMensagem("Erro ao conectar com a API")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={fazerLogin}
        className="w-80 rounded bg-white p-6 shadow">

        <h1 className="mb-4 text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 w-full rounded border p-2"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="mb-3 w-full rounded border p-2"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white"
        >
          Entrar
        </button>

        <p className="mt-3 text-sm">{mensagem}</p>
      </form>
    </div>
  )
}