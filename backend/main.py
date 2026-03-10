from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

app = FastAPI(
    title="Portfolio API",
    description="API para o site portfolio com endpoints para projetos e contato",
    version="1.0.0"
)

# Configuração CORS para permitir requests do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "https://seu-usuario.github.io",  # Atualize com seu domínio do GitHub Pages
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos Pydantic
class Project(BaseModel):
    id: int
    title: str
    description: str
    tags: List[str]
    image_url: Optional[str] = None
    demo_link: Optional[str] = None
    github_link: Optional[str] = None
    created_at: datetime

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str
    subject: Optional[str] = None

# Dados mockados de projetos (substitua por banco de dados real)
projects_db = [
    {
        "id": 1,
        "title": "strateegia",
        "description": "Plataforma de e-commerce completa com carrinho, checkout e integração de pagamento.",
        "tags": ["React", "TypeScript", "Chakra UI"],
        "demo_link": "https://strateegia.com",
    },
    {
        "id": 2,
        "title": "Setta Energia",
        "description": "Dashboard interativo para visualização de dados e métricas em tempo real.",
        "tags": ["React", "JavaScript", "Material UI"],
        "demo_link": "https://settaenergia.com.br",
    }
]

# Rotas
@app.get("/")
def read_root():
    """Endpoint raiz da API"""
    return {
        "message": "Portfolio API está funcionando!",
        "version": "1.0.0",
        "endpoints": {
            "projects": "/projects",
            "contact": "/contact",
            "docs": "/docs"
        }
    }

@app.get("/projects", response_model=List[Project])
def get_projects():
    """Retorna lista de projetos"""
    return projects_db

@app.get("/projects/{project_id}", response_model=Project)
def get_project(project_id: int):
    """Retorna um projeto específico por ID"""
    project = next((p for p in projects_db if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    return project

@app.post("/contact")
async def send_contact_message(message: ContactMessage):
    """
    Recebe mensagem de contato.
    Em produção, você pode:
    - Enviar email usando SendGrid, AWS SES, etc.
    - Salvar no banco de dados
    - Enviar notificação
    """
    # TODO: Implementar envio de email ou salvamento no banco
    print(f"Nova mensagem de contato de {message.name} ({message.email})")
    print(f"Assunto: {message.subject}")
    print(f"Mensagem: {message.message}")
    
    return {
        "success": True,
        "message": "Mensagem recebida com sucesso! Entrarei em contato em breve."
    }

@app.get("/health")
def health_check():
    """Endpoint para health check"""
    return {"status": "healthy", "timestamp": datetime.now()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
