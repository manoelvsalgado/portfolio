# Backend - Portfolio API

API REST desenvolvida com FastAPI para o site portfolio.

## 🚀 Tecnologias

- Python 3.11+
- FastAPI
- Uvicorn
- Pydantic

## 💻 Desenvolvimento Local

### Criar ambiente virtual e instalar dependências

```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt
```

### Executar servidor de desenvolvimento

```bash
# Modo desenvolvimento (com auto-reload)
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Ou simplesmente
python main.py
```

A API estará disponível em:
- API: `http://localhost:8000`
- Documentação interativa (Swagger): `http://localhost:8000/docs`
- Documentação alternativa (ReDoc): `http://localhost:8000/redoc`

## 📚 Endpoints

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
