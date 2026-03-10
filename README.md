# Portfolio - Manoel Salgado

Portfolio profissional moderno e funcional desenvolvido com React + TypeScript (frontend) e FastAPI (backend).

## 🎯 Status - Projeto Completo e Pronto! ✅

### Funcionalidades Implementadas

**Frontend:**
- ✅ Design moderno e responsivo (mobile/tablet/desktop)
- ✅ Header fixo com navegação suave entre seções
- ✅ Hero section com gradiente e animações
- ✅ Seção About com cards informativos
- ✅ Grid de Skills organizado por categorias
- ✅ Grid de Projetos customizável
- ✅ **Formulário de contato funcional** com validação
- ✅ **Integração com API REST**
- ✅ Botão Scroll to Top
- ✅ Animações suaves com Framer Motion
- ✅ Toast notifications
- ✅ GitHub Pages deploy configurado

**Backend:**
- ✅ API REST completa com FastAPI
- ✅ Endpoints de projetos e contato
- ✅ Documentação interativa (Swagger/OpenAPI)
- ✅ Validação de dados com Pydantic
- ✅ CORS configurado
- ✅ Pronto para deploy no Render/Railway/Fly.io

## 📁 Estrutura do Projeto

```
Portfolio/
├── frontend/          # React + TypeScript + Chakra UI
│   ├── src/
│   │   ├── components/    # 8 componentes React
│   │   │   ├── Header.tsx           # Navegação
│   │   │   ├── Hero.tsx             # Banner animado
│   │   │   ├── About.tsx            # Sobre mim
│   │   │   ├── Skills.tsx           # Habilidades
│   │   │   ├── Projects.tsx         # Projetos
│   │   │   ├── ContactForm.tsx      # Formulário + API ⭐
│   │   │   ├── Footer.tsx           # Rodapé
│   │   │   ├── ScrollToTop.tsx      # Botão scroll ⭐
│   │   │   └── AnimatedSection.tsx  # Animações ⭐
│   │   ├── services/
│   │   │   └── api.ts               # Cliente API REST ⭐
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .github/
│   │   └── workflows/
│   │       └── deploy.yml  # CI/CD GitHub Pages
│   ├── .env.example       # Template variáveis
│   └── package.json
│
├── backend/               # FastAPI (Python)
│   ├── main.py           # API REST completa
│   ├── requirements.txt
│   ├── README.md
│   └── .gitignore
│
├── Makefile              # Comandos facilitados ⭐
├── GUIA_DE_USO.md        # Guia completo ⭐
└── README.md
```

## 🚀 Frontend (React + TypeScript + Chakra UI)

Site portfolio moderno, interativo e totalmente responsivo.

### Características:
- ✅ Design responsivo mobile-first
- ✅ 8 componentes React modulares e reutilizáveis
- ✅ Navegação suave com scroll automático
- ✅ Animações elegantes com Framer Motion
- ✅ Formulário de contato integrado com API
- ✅ Validação de formulário client-side
- ✅ Toast notifications para feedback
- ✅ Scroll to top button
- ✅ Deploy automático CI/CD no GitHub Pages

### Executar localmente:
```bash
cd frontend
npm install
npm run dev
```

Acesse: `http://localhost:5173`

### Deploy:
O deploy no GitHub Pages é automático via GitHub Actions. Veja `frontend/README.md` para detalhes.

## 🐍 Backend (FastAPI)

API REST completa para portfolio com endpoints de projetos e contato.

### Características:
- ✅ API REST documentada (Swagger/OpenAPI)
- ✅ Validação de dados com Pydantic
- ✅ CORS configurado
- ✅ Endpoints:
    - `GET /` - Info da API
    - `GET /projects` - Lista projetos
    - `GET /projects/{id}` - Projeto específico
    - `POST /contact` - Recebe mensagens ⭐
    - `GET /health` - Health check

### Executar localmente:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou venv\Scripts\activate (Windows)
pip install -r requirements.txt
uvicorn main:app --reload
```

Acesse:
- API: `http://localhost:8000`
- Docs: `http://localhost:8000/docs`

### Hospedagem Recomendada:
- **Render**: deploy gratuito via GitHub
- **Railway**: $5 crédito/mês
- **Fly.io**: tier gratuito generoso

Veja `backend/README.md` para mais opções.

## 🔗 Integrando Frontend + Backend

### Desenvolvimento Local:
1. Inicie o backend na porta 8000
2. Inicie o frontend na porta 5173
3. O CORS já está configurado
4. O formulário de contato funcionará automaticamente

### Em produção:
1. Faça deploy do frontend no GitHub Pages
2. Faça deploy do backend no Render/Railway/Fly.io
3. Atualize as URLs no código:
   - Frontend: adicione URL da API
   - Backend: adicione URL do frontend no CORS

## 📝 Personalização

### Frontend:

Veja o **[GUIA_DE_USO.md](GUIA_DE_USO.md)** completo para instruções detalhadas.

**Resumo rápido:**
- **Hero.tsx** - Seu nome e apresentação
- **About.tsx** - Sobre você e suas qualidades
- **Skills.tsx** - Suas tecnologias e habilidades
- **Projects.tsx** - Seus projetos (ou use a API)
- **ContactForm.tsx** - Seus contatos (email, LinkedIn, GitHub)

### Backend:
Edite `backend/main.py` para:
- Adicionar novos endpoints
- Conectar banco de dados
- Implementar envio de emails
- Adicionar autenticação

## 🛠️ Tecnologias

**Frontend:**
- React 18
- TypeScript
- Vite
- Chakra UI v2
- Framer Motion
- React Icons
- Axios (cliente HTTP)

**Backend:**
- Python 3.11+
- FastAPI
- Uvicorn
- Pydantic

## 📦 Deploy Checklist

- [ ] Atualizar informações pessoais nos componentes
- [ ] Adicionar projetos reais em `Projects.tsx`
- [ ] Atualizar links de contato (email, LinkedIn, GitHub)
- [ ] Configurar repositório GitHub
- [ ] Habilitar GitHub Pages nas configurações
- [ ] Fazer deploy do backend (Render/Railway/Fly.io)
- [ ] Atualizar URLs de API e CORS
- [ ] Testar em diferentes dispositivos
- [ ] Configurar domínio customizado (opcional)

## 📄 Licença

MIT

---

## 🎉 Próximos Passos

1. **Personalize o conteúdo** - Veja [GUIA_DE_USO.md](GUIA_DE_USO.md)
2. **Adicione seus projetos reais** 
3. **Faça deploy no GitHub Pages**
4. **Faça deploy do backend** (Render.com recomendado)
5. **Integre frontend com backend** em produção

## 📚 Documentação

- **[GUIA_DE_USO.md](GUIA_DE_USO.md)** - Guia completo de uso e personalização
- **[frontend/README.md](frontend/README.md)** - Documentação do frontend
- **[backend/README.md](backend/README.md)** - Documentação do backend com opções de hospedagem

## 🚀 Comandos Rápidos

```bash
# Instalar tudo
make install

# Rodar frontend
make frontend-dev

# Rodar backend
make backend-dev

# Build para produção
make build
```

---

**Desenvolvido com ❤️ usando React, TypeScript, Chakra UI e FastAPI**
# portfolio
# portfolio
