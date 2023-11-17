# Chat em Tempo Real
Repositório criado com o objetivo de explorar, aplicar e avaliar a plataforma Docker no contexto do desenvolvimento de um chat em tempo real durante a disciplina de Sistemas Distribuidos. 

### Arquitetura de pastas

A estrutura central da aplicação está organizada nas pastas ’public’ e ’view’. ´
### Public
Nessa pasta há uma subdivisões entre as subpastas ’assets’, ’script’ e ˜’styles’. 

A pasta ’assets’ abriga todas as imagens utilizadas no Front-End da aplicação.

A pasta ’script’ contem a lógica de comunicação com o Banco de Dados (Firebase da Google) e a API responsavel pela manipulação do Banco de Dados. 

Já na pasta ’styles’, encontram-se os arquivos de customização do Front-End.

### View
No interior dessa pasta, encontra-se o arquivo responsavel pelo Front-End da aplicação que consome a API gerada na subpasta ’script’. 

No que diz respeito a configuração do Back-End da aplicação, foi estabelecida uma rota específica. 

Dentro do arquivo ’index.js’, a rota /home foi configurada para renderizar a aplicação.  Além disso, é neste arquivo que foi definido que a aplicação operará na porta 3000.

### Dockefile
Abaixo, detalhamos cada linha do Dockerfile gerado para a aplicação de chat em tempo real, descrevendo como cada instrução contribui para a criação de um ambiente Docker eficiente para a execução de uma aplicação Node.js.

- FROM node:18-alpine: Indica que a imagem base para o contêiner será a versão 18 da imagem do Node.js baseada no Alpine Linux. O Alpine Linux é uma distribuição Linux leve.
- WORKDIR /chat: Define o diretório de trabalho dentro do contêiner como "/chat". Todos os comandos subsequentes serão executados neste diretório.
- COPY . . : Copia todos os arquivos do diretório atual (onde o Dockerfile está localizado) para o diretório de trabalho ("/chat") do contêiner.
- RUN npm install: Executa o comando "npm install" para instalar as dependências do Node.js necessárias para a aplicação.
- CMD ["node", "index.js"]: Define o comando padrão que será executado quando o contêiner for iniciado. Neste caso, ele executa o script "index.js" usando o Node.js.
- EXPOSE 3000: Informa ao Docker que a aplicação dentro do contêiner estará ouvindo na porta 3000. Note que esta instrução não publica automaticamente a porta, ela é apenas informativa.

### :information_source: Como Usar


### Instalar Projeto e Iniciar o Projeto (Através do arquivo .tar contendo a imagem da aplicação)

```bash
# Importante: Todos os comandos do docker devem ser realizados dentro da pasta onde esta presente os arquivos da aplicação

# Para utilizar a aplicação, faça o download do arquivo .tar disponível no Google Drive através do link
$ https://drive.google.com/file/d/1ZXysb0SKEBZiRhA_WZpnnPRSl2FEIquC/view?usp=sharing

# Carregar a imagem da aplicação
$ docker image load -i chat.tar

# Visualizar a imagem criada
$ docker images

# Rodar aplicação
$ docker run -dp 3000:3000 chat

# Agora, para acessar a aplicação, abra o navegador e visite
$ http://localhost:3000/home

Rodando na porta 3000
```
### Instalar Projeto e Iniciar o Projeto (Através do repositório no GitHub)

```bash
# Importante: Todos os comandos do docker devem ser realizados dentro da pasta onde esta presente os arquivos da aplicação

# Clone o repositório
$ git clone https://github.com/likehs2/ChatDocker.git

# Entre no repositório
$ cd 

# Criação da imagem da aplicação contendo todos os métodos descritos no arquivo Dockerfile
$ Docker build -t [nome da imagem] .

# Visualizar a imagem criada
$ docker images

# Rodar aplicação
$ docker run -dp 3000:3000 chat

# Agora, para acessar a aplicação, abra o navegador e visite
$ http://localhost:3000/home

Rodando na porta 3000
```

### :hammer: Ferramentas

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [nodeJs](https://nodejs.org/en)
- [Express](https://www.npmjs.com/package/express)
- [Firebase](https://firebase.google.com/?hl=pt)
