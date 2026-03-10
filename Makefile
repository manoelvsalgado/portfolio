# Makefile para facilitar comandos do projeto

.PHONY: help install dev build clean backend-install backend-dev frontend-install frontend-dev

# Comando padrão
help:
	@echo "📦 Portfolio - Comandos Disponíveis"
	@echo ""
	@echo "  make install          - Instala todas as dependências (frontend + backend)"
	@echo "  make dev              - Inicia frontend e backend em terminais separados"
	@echo "  make frontend-dev     - Inicia apenas o frontend"
	@echo "  make backend-dev      - Inicia apenas o backend"
	@echo "  make build            - Build do frontend para produção"
	@echo "  make clean            - Remove node_modules e venv"
	@echo ""

# Instalar todas as dependências
install: frontend-install backend-install
	@echo "✅ Todas as dependências instaladas!"

# Instalar dependências do frontend
frontend-install:
	@echo "📦 Instalando dependências do frontend..."
	cd frontend && npm install

# Instalar dependências do backend
backend-install:
	@echo "🐍 Instalando dependências do backend..."
	cd backend && python3 -m venv venv && \
		. venv/bin/activate && \
		pip install -r requirements.txt

# Iniciar frontend em modo dev
frontend-dev:
	@echo "🚀 Iniciando frontend..."
	cd frontend && npm run dev

# Iniciar backend em modo dev
backend-dev:
	@echo "🚀 Iniciando backend..."
	cd backend && . venv/bin/activate && uvicorn main:app --reload

# Build do frontend para produção
build:
	@echo "📦 Fazendo build do frontend..."
	cd frontend && npm run build

# Limpar dependências
clean:
	@echo "🧹 Limpando dependências..."
	rm -rf frontend/node_modules
	rm -rf backend/venv
	@echo "✅ Limpeza concluída!"

# Preview da build de produção
preview:
	@echo "👀 Preview da build..."
	cd frontend && npm run preview
