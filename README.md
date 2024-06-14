
![Contributors](https://img.shields.io/github/contributors/Am4ral/Append?style=for-the-badge&labelColor=black&color=green)
![Forks](https://img.shields.io/github/forks/Am4ral/Append?style=for-the-badge&labelColor=black&color=green)
![Issues](https://img.shields.io/github/issues/Am4ral/Append?style=for-the-badge&labelColor=black&color=green)





# Append
  PO: [Guilherme Cordeiro](https://github.com/GuisCordeiro)</br>
  Front-end: [Lucas Lopes](https://github.com/lucaslopesxx)</br>
  Back-end: [Marco Túlio Amaral](https://github.com/Am4ral)


## Descrição do Projeto
O projeto se trata de uma aplicação web para a divulgação de apartamentos, pensões e repúblicas, semelhante ao Airbnb. Neste sistema, locadores poderão registrar e divulgar seus imóveis, enquanto locatários poderão contatá-los para aluguel. Além disso, a aplicação contará com um painel de controle (dashboard) para os administradores, permitindo a gestão e monitoramento das atividades na plataforma.

## Tabela de Conteúdos
- [Funcionaldidades](#Funcionalidades)
- [Tecnologias](#Tecnologias)
- [Estrutura de Diretório](#estrutura-diretorio)
- [Padrões de uso do Git](#git)
- [Regras e Boas Práticas de Codificação](#regras-codificacao)
- [Contribuição](#Contribuição)
- [Licença](#Licença)

## Funcionalidades
<a name="Funcionalidades"></a>

### Interface
  - [Prototipação](https://www.figma.com/file/kLX4mMwaRc1pCUjucsqpYW/App%C3%AAnd?type=design&node-id=0%3A1&mode=design&t=tYKmfjELc4TkLqLJ-1)

### Geral
- Listagem de vagas em imóveis/repúblicas
- Cadastro/Alteração/Exclusão de Vagas;
- Cadastro/Alteração/Exclusão de Administradores;
- Cadastro/Alteração/Exclusão de Locadores;

### Painel inicial
  - O painel inicial apresenta todas as vagas disponíveis para locação.
  - Permite busca de lugares baseado no endereço.

### Dashboard Administrativo 
  - Permite o cadastro de um novo login de administrador
  - Permite visualizar todos os locadores cadastrados
  - Permite visualizar todos as vagas cadastradas pelos locadores
  - Permite a aprovação de uma vaga cadastrada por um locador
  - Permite a exclusão de um locador por um admin.
  - Permite a exclusão de uma vaga por um admin.

### Dashboard Locador
  - Permite o cadastro de uma nova vaga (Deverá ser aprovada pelo admin)
  - Permite visualizar todas as vagas cadastradar
  - Permite alterar os dados de uma vaga cadastrada
  - Permite a exclusão de uma vaga cadastrada
  -  
### Página de Login
  ### Registro de Locador 
  - Permite que um locador se registre no site
  - É necessário que o locador forneça seus dados para comprovar sua identidade,


## Tecnologias
<a name="Tecnologias"></a>
O projeto utiliza as seguintes tecnologias:

- **Backend:** ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) 17
- **Framework:** ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) 2.4.4
- **Frontend:** ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 18.2
- **Banco de Dados:** H2 2.2
- **Servidor:** Apache

_As tecnologias podem ser alteradas durante a fase de desenvolvimento!_

## Estrutura de Diretório
<a name="estrutura-diretorio"></a>

```sh
|-- Documentacao/
|   |-- Diagramas/
|   |-- Requisitos/
|-- Padroes_Adotados/
|-- Sistema/
|   |-- backend/
|   |   |-- TODO
|   |-- frontend/
|   |   |-- TODO
|-- README.md
```

## Regras e Padrões de uso do Git
<a name="git"></a>
### Commits

- Mensagem simples, objetiva e com uma descrição breve do problema resolvido.
- Seguir o padrão "Mensagem Verbo". Ex.: "Classe UserService refatorada".
- Preservar a atomicidade dos commits.
- Os commits devem, quando possível, estarem mapeados com o backlog do projeto.

### Branches

- Utilizar as branches "backend" e "frontend" para códigos de back-end e front-end, respectivamente.
- O merge de branches com a main só será realizado após os testes e com a aprovação de dois membros da equipe no GitHub.
- Nomes de branches devem possuir apenas letras minúsculas.

### Organização
- Código e documentação devem sempre estar em pastas separadas.

### Arquivos ignorados
- Inserir no arquivo .gitignore a extensão dos arquivos que são gerados durante o processo de compilação ou log (Ex.: .class, .jar, .log).
- Inserir no arquivo .gitignore pastas e extensões de arquivos relacionados a dependências externas. (Ex.:/.mvn/, /target/).
- - Inserir no arquivo .gitignore pastas e extensões de arquivos relacionados a editores e IDEs. (Ex.:/.idea/, /.vscode/).

## Regras e Boas Práticas de Codificação

<a name="regras-codificacao"></a>

- Identar o código corretamente.
- Nomear classes, métodos e variáveis de maneira intuitiva e padronizada para melhorar a reutilização de código.
- Utilizar a convenção de nomenclatura Camel Case em classes, métodos e variáveis.
- Cada função, classe ou módulo deve ter uma responsabilidade única, ou seja, ser coesa.
- Se necessário, usar comentários para explicar por que o código está fazendo algo específico.
- Evitar repetição de código. A duplicação pode levar a erros e tornar o código mais difícil de realizar manutenções.
- Organizar o código de uma maneira lógica, com funções relacionadas agrupadas e conceitos relacionados próximos uns dos outros.


## Contribuição
<a name="Contribuição"></a>
Se você tiver uma sugestão que tornaria o Append melhor, por favor, faça um fork do repositório e crie um pull request. Você também pode simplesmente abrir um problema issue com a etiqueta melhoria.

Faça um fork do Projeto
Crie seu Ramo de Funcionalidade com git checkout -b feature/NovaFuncionalidade
Comite suas Alterações com git commit -m 'Adicionar alguma NovaFuncionalidade'
Envie para o Ramo com git push origin feature/NovaFuncionalidade
Abra um Pull Request 

## Licença
<a name="Licença"></a>
[MIT License](LICENSE)


