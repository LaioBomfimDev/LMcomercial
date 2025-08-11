# 🚀 Deploy no GitHub - LM Comercial

## ⚠️ Pré-requisitos

### 1. Instalar Git
- Baixe em: https://git-scm.com/download/windows
- Execute o instalador
- Reinicie o terminal após a instalação

### 2. Criar conta no GitHub
- Acesse: https://github.com
- Crie uma conta gratuita

## 📋 Passos para Deploy

### 1. Inicializar Repositório Git
```bash
git init
git add .
git commit -m "Initial commit - LM Comercial website"
```

### 2. Criar Repositório no GitHub
1. Acesse https://github.com
2. Clique em "New repository"
3. Nome: `lm-comercial`
4. Descrição: `Website moderno para LM Comercial - React + Vite + TailwindCSS`
5. Marque como **Público**
6. **NÃO** marque "Add README"
7. Clique em "Create repository"

### 3. Conectar ao GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/lm-comercial.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages
1. No repositório, vá em **Settings**
2. Role até **Pages** (menu lateral)
3. Em **Source**, selecione **GitHub Actions**
4. Clique em **Configure** no workflow "Static HTML"
5. **Substitua** todo o conteúdo por:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

6. Clique em **Commit changes**

### 5. Aguardar Deploy
- O deploy será automático
- Aguarde 2-5 minutos
- Acesse: `https://SEU_USUARIO.github.io/lm-comercial`

## 🔄 Atualizações Futuras

Para atualizar o site:
```bash
git add .
git commit -m "Descrição da atualização"
git push
```

## 🎯 URLs Importantes

- **Repositório**: `https://github.com/SEU_USUARIO/lm-comercial`
- **Site Online**: `https://SEU_USUARIO.github.io/lm-comercial`
- **Actions**: `https://github.com/SEU_USUARIO/lm-comercial/actions`

## 📱 Personalização

Antes do deploy, personalize:
1. **Imagens**: Adicione em `src/assets/images/`
2. **WhatsApp**: Atualize números nos componentes
3. **Informações**: Edite textos da empresa
4. **Cores**: Ajuste em `tailwind.config.js`

---

**✅ Após seguir estes passos, seu site estará online e acessível mundialmente!**