# 🎨 Portfolio - Guia de Uso e Personalização

## 📋 Status do Projeto

✅ **Frontend Completo** - React + TypeScript + Chakra UI v2  
✅ **Backend API** - FastAPI + Python  
✅ **Formulário de Contato Funcional** - Integrado com API  
✅ **Design Responsivo** - Mobile, Tablet e Desktop  
✅ **Animações React** - Framer Motion  
✅ **Scroll to Top Button** - Navegação melhorada  
✅ **Deploy Configuration** - GitHub Pages pronto  

---

## 🚀 Como Executar Localmente

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Acesse: **http://localhost:5174/**

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```
Acesse: 
- API: **http://localhost:8000**  
- Docs: **http://localhost:8000/docs**

---

## ✏️ Como Personalizar

### 1. Informações Pessoais

#### Hero Section
Edite: `frontend/src/components/Hero.tsx`
```typescript
Olá, sou SEU NOME  // Linha 26
Desenvolvedor Front-end  // Linha 36
Sua descrição pessoal  // Linha 47
```

#### Contatos
Edite: `frontend/src/components/ContactForm.tsx`
```typescript
// Linha 169-196 - Atualize os cards de contato:
value="seu@email.com"
link="mailto:seu@email.com"

value="/in/seu-perfil"
link="https://linkedin.com/in/seu-perfil"

value="@seu-usuario"
link="https://github.com/seu-usuario"
```

#### Footer
Edite: `frontend/src/components/Footer.tsx`
```typescript
// Linha 9-17 - Atualize os links sociais
```

### 2. Adicionar Seus Projetos Reais

#### Opção A: Projetos Mockados (Rápido)
Edite: `frontend/src/components/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    tags: ['React', 'TypeScript', 'etc'],
    demoLink: 'https://url-do-demo.com',
    githubLink: 'https://github.com/usuario/repo'
  },
  // Adicione mais projetos...
];
```

#### Opção B: Projetos da API (Recomendado)
Edite: `backend/main.py` (linha 40-63)
```python
projects_db = [
    {
        "id": 1,
        "title": "Seu Projeto Real",
        "description": "Descrição completa...",
        "tags": ["React", "TypeScript"],
        "demo_link": "https://...",
        "github_link": "https://...",
        "created_at": datetime.now()
    }
]
```

### 3. Skills/Tecnologias

Edite: `frontend/src/components/Skills.tsx`
```typescript
const skills = [
  {
    category: 'Frontend',
    items: ['Suas', 'Tecnologias', 'Aqui'],
    color: 'blue'
  },
  // Adicione ou remova categorias
];
```

### 4. Seção "Sobre Mim"

Edite: `frontend/src/components/About.tsx`
```typescript
// Linha 13 - Atualize sua descrição pessoal
```

---

## 🌐 Deploy

### Frontend no GitHub Pages

1. **Crie repositório no GitHub**
```bash
cd
frontend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/REPO.git
git push -u origin main
```

2. **Habilite GitHub Pages**
- Vá em **Settings → Pages**
- Source: **GitHub Actions**

3. **Se não usar domínio customizado**, edite `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-repositorio/',  // ← Nome do seu repo
})
```

4. **Push novamente** - Deploy automático! 🎉

### Backend (Opções de Hospedagem)

#### Render.com (Recomendado - Gratuito)
1. Crie conta em https://render.com
2. New → Web Service
3. Conecte seu repositório GitHub
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Deploy! ✨

#### Alternativas
- **Railway.app** - $5 crédito/mês
- **Fly.io** - Tier gratuito
- **PythonAnywhere** - Para Python

### Integrar Frontend com Backend

Depois de fazer deploy do backend:

1. **Crie arquivo** `frontend/.env`:
```
VITE_API_URL=https://sua-api.render.com
```

2. **Atualize CORS no backend** (`backend/main.py`):
```python
allow_origins=[
    "https://seu-usuario.github.io",  # Seu domínio do GitHub Pages
    "http://localhost:5173",
    "http://localhost:5174",
],
```

3. **Rebuild e deploy** ambos!

---

## 🛠️ Funcionalidades Implementadas

### Frontend
- ✅ Header fixo com navegação suave
- ✅ Hero section com gradiente animado
- ✅ Seção "Sobre" com cards informativos
- ✅ Grid de Skills por categoria
- ✅ Grid de Projetos customizável
- ✅ **Formulário de contato funcional** com validação
- ✅ Footer com links sociais
- ✅ **Botão Scroll to Top**
- ✅ **Animações com Framer Motion**
- ✅ **Totalmente responsivo**
- ✅ Toast notifications
- ✅ Validação de formulário client-side
- ✅ Integração com API REST

### Backend
- ✅ API REST documentada (OpenAPI/Swagger)
- ✅ Endpoint GET `/projects` - Lista projetos
- ✅ Endpoint GET `/projects/{id}` - Projeto específico
- ✅ **Endpoint POST `/contact`** - Recebe mensagens
- ✅ Endpoint GET `/health` - Health check
- ✅ Validação com Pydantic
- ✅ CORS configurado
- ✅ Documentação interativa em `/docs`

---

## 📁 Estrutura de Arquivos

```
Portfólio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navegação
│   │   │   ├── Hero.tsx            # Banner principal
│   │   │   ├── About.tsx           # Sobre mim
│   │   │   ├── Skills.tsx          # Habilidades
│   │   │   ├── Projects.tsx        # Grid de projetos
│   │   │   ├── ContactForm.tsx     # Formulário + Cards ⭐
│   │   │   ├── Footer.tsx          # Rodapé
│   │   │   ├── ScrollToTop.tsx     # Botão scroll ⭐
│   │   │   └── AnimatedSection.tsx # Wrapper animação ⭐
│   │   ├── services/
│   │   │   └── api.ts              # Cliente API ⭐
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .github/workflows/
│   │   └── deploy.yml              # CI/CD GitHub Pages
│   ├── .env.example                # Template variáveis
│   └── package.json
│
└── backend/
    ├── main.py                     # FastAPI app
    ├── requirements.txt
    └── README.md
```

---

## 🔧 Próximas Melhorias (Opcional)

### Curto Prazo
- [ ] Adicionar banco de dados (PostgreSQL/MongoDB)
- [ ] Implementar envio de email real (SendGrid/Mailgun)
- [ ] Adicionar imagens/screenshots dos projetos
- [ ] Dark mode toggle
- [ ] Seção de experiência/timeline
- [ ] Blog/artigos

### Médio Prazo
- [ ] Testes automatizados (Jest, Pytest)
- [ ] CI/CD completo
- [ ] Rate limiting na API
- [ ] Autenticação para admin
- [ ] Analytics (Google Analytics)
- [ ] SEO optimization

---

## 📝 Checklist de Deploy

Antes de fazer deploy, confira:

- [ ] Informações pessoais atualizadas
- [ ] Links de projetos reais
- [ ] Contatos corretos (email, LinkedIn, GitHub)
- [ ] Imagens/fotos adicionadas (opcional)
- [ ] Testado em mobile/tablet/desktop
- [ ] Testado formulário de contato
- [ ] CORS configurado com URL de produção
- [ ] Variável VITE_API_URL configurada
- [ ] GitHub Pages habilitado
- [ ] Backend deployado e funcionando

---

## 🐛 Troubleshooting

### Frontend não carrega
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Formulário não envia
- Verifique se o backend está rodando
- Verifique CORS no backend
- Verifique `.env` com VITE_API_URL correto
- Abra console do navegador para ver erros

### Erros de TypeScript
```bash
# Reinstalar dependências
npm install @chakra-ui/react@^2.8.2
```

### Vite erro de versão Node
```bash
# Downgrade Vite para v5
npm install vite@^5.4.0 --save-dev
```

---

## 📞 Suporte

Se tiver dúvidas:
1. Verifique a documentação em `backend/README.md`
2. Consulte os comentários no código
3. Veja exemplos nos componentes

---

## 📄 Licença

MIT - Livre para uso pessoal e comercial

---

**Desenvolvido com ❤️ usando React + TypeScript + Chakra UI + FastAPI**
