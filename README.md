<h1 align="center"> Todo List </h1>

<h2 align="center">
    <img alt="logo todo list" title="#todo" src="/src/assets/logo.svg" width="200px" />
</h2>

<p align="center">
![](https://img.shields.io/github/license/RogerRoth/to-do-list)
</p>

## ▶️ Projeto
Este projeto tem como objetivo por em pratica conceitos de React Native. Para isto, foi desenvolvido uma aplicação de controle de tarefas no estilo **to-do list**.

Nesse projeto temos as seguintes funcionalidades:
- Adicionar uma nova tarefa
- Marcar e desmarcar uma tarefa como concluída
- Remover uma tarefa da listagem
- Mostrar o progresso de conclusão das tarefas

##🧑‍💻 Conceitos e Tecnologias

- [`Expo`](https://expo.dev/): tecnologia para simplificar o ambiente de desenvolvimento
- [`TypeScript`](https://www.typescriptlang.org/): tecnologia para simplificar o ambiente de desenvolvimento
- `Estados e Imutabilidade do estado`: utilização de Hooks para gerenciamento de estados 
- `Propriedades`: criação de propriedade dos componentes
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
  - `Text`: componente para exibir textos
  - `View`: container para blocos de componentes
  - `Image`: componente para exibir imagens
  - `TouchableOpacity`: componente para criar áreas clicáveis
  - `FlatList`: componente para criar listas dinamicas e performáticas
- `Componentização`: criação e utilização de componentes customizados
- `StyleSheet`: estilização básica de componentes

##📱 Layout do Projeto
<h2 align="center">
    <img alt="tela_mobile_0" title="#mobile_0" src="/images/mobile_0.png" width="250px" />
    <img alt="tela_mobile_1" title="#mobile_1" src="/images/mobile_1.png" width="250px" />
    <img alt="tela_mobile_2" title="#mobile_2" src="/images/mobile_2.png" width="250px" />
    <img alt="tela_mobile_3" title="#mobile_3" src="/images/mobile_3.png" width="250px" />
    <img alt="tela_mobile_4" title="#mobile_4" src="/images/mobile_4.png" width="250px" />
</h2>

## 📲 Executando o projeto

### ✔️ Pré-requisitos

Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:
- Git para clonar o projeto e acessar as branches. Você pode instalar [aqui](https://git-scm.com/downloads);
- Node para podermos rodar `expo` e `npm`. Você pode instala-lo [aqui](https://nodejs.org/en/);
- Um celular Android ou iOS com o aplicativo Expo instalado, ou então algum simulador Android ou iOS no computador;

Se quiser testar as instalações, rodar os comandos abaixo separadamente deve mostrar as respectivas versões.

```bash
git --version
node --version
npm --version
```

Então com o `npm` instalado podemos instalar o `expo` e checar a versão:
```bash
npm install --global expo-cli
expo --version
```

### 🐙 Clonando o projet
Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:
```bash
git clone https://github.com/RogerRoth/nlw-eSports.git
```

### ▶️ Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```bash
npm install
```

Então podemos rodar o projeto:
```bash
expo start
```
Pronto, agora o app você deve ver o app rodando.

## License

[MIT](LICENSE.md)