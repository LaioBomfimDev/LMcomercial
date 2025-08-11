# 🔧 Configuração Git e Upload para GitHub

## 📋 Passo 1: Configurar Git (Obrigatório)

Antes de fazer upload para GitHub, configure seu Git:

```bash
# Configure seu nome (substitua por seu nome real)
git config --global user.name "Seu Nome Aqui"

# Configure seu email (use o mesmo email da conta GitHub)
git config --global user.email "seuemail@exemplo.com"
```

## 🚀 Passo 2: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New"** (verde) ou **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `lm-comercial`
   - **Description**: `Website LM Comercial - Materiais de Construção`
   - Marque **"Public"**
   - **NÃO** marque nenhuma opção adicional (README, .gitignore, license)
5. Clique em **"Create repository"**

## 🔗 Passo 3: Conectar e Fazer Upload

Após criar o repositório, execute estes comandos no terminal:

```bash
# Conectar ao repositório remoto (SUBSTITUA 'SEU_USUARIO' pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/lm-comercial.git

# Renomear branch para main
git branch -M main

# Fazer upload do código
git push -u origin main
```

## 🌐 Passo 4: Deploy no Vercel

### Método Automático (Recomendado):
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign up"** ou **"Login"**
3. **Conecte com GitHub** (botão "Continue with GitHub")
4. Autorize o Vercel a acessar seus repositórios
5. No dashboard, clique em **"New Project"**
6. Encontre o repositório `lm-comercial` e clique em **"Import"**
7. Configure:
   - **Project Name**: `lm-comercial`
   - **Framework Preset**: Vite (detectado automaticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
8. Clique em **"Deploy"**

## ✅ Verificação Final

Após o deploy:
- ✅ GitHub: `https://github.com/SEU_USUARIO/lm-comercial`
- ✅ Site Live: `https://lm-comercial.vercel.app`

## 🔄 Para Futuras Atualizações

Quando quiser atualizar o site:
```bash
# Fazer mudanças no código
# Depois:
git add .
git commit -m "Descrição da mudança"
git push
```

O Vercel fará deploy automaticamente a cada push!

## ⚠️ Problemas Comuns

### Erro de autenticação no GitHub:
- Use Personal Access Token em vez de senha
- Ou configure SSH keys

### Build falha no Vercel:
- Verifique se `package.json` está correto
- Confirme que `npm run build` funciona localmente

### Imagens não aparecem:
- Confirme que estão na pasta `public/`
- Verifique se `vite.config.js` tem `base: '/lm-comercial/'`

---

**🎯 Próximos Passos:**
1. Configure Git com seus dados
2. Crie repositório no GitHub
3. Faça upload do código
4. Deploy no Vercel
5. Teste o site online!