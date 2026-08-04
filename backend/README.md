# Backend - Portfolio API

API REST desenvolvida com FastAPI para o site portfolio.

## 🚀 Tecnologias

- Python 3.11+
- FastAPI
- Uvicorn
- Pydantic

## 💻 Executar localmente

No terminal:

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# Windows:
# venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

A API estará disponível em:
- `http://localhost:8000`
- `http://localhost:8000/docs` (Swagger)
- `http://localhost:8000/redoc` (ReDoc)

### Alternativa com Makefile

```bash
make backend-install
make backend-dev
```

## 📚 Endpoints

### GET /
Retorna uma mensagem de status e os principais endpoints.

### GET /projects
Lista todos os projetos.

### GET /projects/{project_id}
Retorna um projeto específico.

### POST /contact
Recebe mensagem de contato:

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "subject": "Proposta de projeto",
  "message": "Olá, gostaria de conversar sobre..."
}
```

### GET /health
Health check da API.

## 🌍 CORS

O backend já permite requisições do frontend local (`http://localhost:5173`) e de domínios estáticos configurados para deploy.

## 🚀 Deploy

### Opções recomendadas

- Render
- Railway
- Fly.io
- PythonAnywhere

### Exemplo Render

- Build Command: `pip install -r requirements.txt`
- Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

## 📝 Observações

O endpoint `POST /contact` está preparado para receber mensagens, mas ainda precisa de implementação de envio de email ou persistência em produção.

## 📝 Licença

MIT

### GET /
Informações básicas da API

### GET /projects
Lista todos os projetos

### GET /projects/{project_id}
Retorna um projeto específico

### POST /contact
Recebe mensagem de contato
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "subject": "Proposta de projeto",
  "message": "Olá, gostaria de conversar sobre..."
}
```

### GET /health
Health check da API

## 🚀 Deploy

### Opções de Hospedagem Gratuitas/Baixo Custo para Python:

1. **Render** (Recomendado)
   - Gratuito com limitações
   - Deploy automático via GitHub
   - https://render.com

2. **Railway**
   - $5 de crédito grátis por mês
   - Deploy simples
   - https://railway.app

3. **Fly.io**
   - Tier gratuito generoso
   - Deploy via CLI
   - https://fly.io

4. **PythonAnywhere**
   - Tier gratuito disponível
   - Específico para Python
   - https://www.pythonanywhere.com

5. **Vercel** (Serverless)
   - Gratuito
   - Requer pequenas adaptações para FastAPI
   - https://vercel.com

### Deploy no Render (Exemplo)

1. Crie conta no Render
2. Conecte seu repositório GitHub
3. Crie um novo Web Service
4. Configure:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Deploy automático a cada push!

## 🔧 Próximos Passos

- [ ] Adicionar banco de dados (PostgreSQL/MongoDB)
- [ ] Implementar autenticação JWT
- [ ] Adicionar envio de email real (SendGrid/AWS SES)
- [ ] Implementar rate limiting
- [ ] Adicionar testes automatizados
- [ ] Configurar CI/CD
- [ ] Adicionar logging estruturado

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` para variáveis sensíveis:

```env
# .env
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=sua-chave-secreta-aqui
EMAIL_API_KEY=sua-chave-api-email
FRONTEND_URL=https://seu-usuario.github.io
```

## 📝 Licença

MIT
