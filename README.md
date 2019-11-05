# Jenkins Interface

Projeto de implementação da interface para substituição da tela de configuração de Job no Jenkins.

## Perfil 

Para realização do experimento o usuário deve conter as seguintes caracteristicas:

+ Possuir conhecimento em desenvolvimento de software (minimo de experiência 1 ano )
+ Ter conhecimento em integração continua (ter tido contato com pelo menos 1 das ferramentas de CICD Jenkins, Circle CI não necessáriamente precisa saber configurar)

## Ambiente do Experimento

Como o ambiente de integração e entrega contínua envolve diversas tecnologias para 
o funcionamento das suas etapas(repository, build, package, quality, test), foram
construidos alguns facilitadores para o experimento. Serão listados a seguir todas as
ferramentas disponiveis para os participantes.

Artefato  |Características
--- | ---
Código Java     | Código simples de uma calculadora contendo as 4 operações básicas (soma, subtração ,multiplicação, divisão). Para ser utilizado como base do fluxo de CICD
Jnuit | Tests unitários que cobrem os 100% das operações da calculadora
GitHub    | Repositório público que será utilizado para pegar os códigos do experimento https://github.com/ChristyanS/experimento-jenkins
SonarQuebe  | Plataforma open-source para inspeção contínua de qualidade de código. disponível em: http://localhost:9000/projects
SMB | Servidor de compartilhamento de arquivos, onde o deploy será realizado.
Jenkins | Servidor de automação para criação de uma pipeline de CICD. disponível em: http://localhost:8080

## Tipo da pipeline

O usuário irá configurar uma pipeline de Contínuos Integration e Contínuos Delivery completamente automatizada com o seguinte fluxo.
Após o commit do desenvolvedor será inicializado a primeira fase da integração que é a de testes unitários, posteriormente uma rotina do sonar será ativada para avaliar a qualidade de código, após essas duas validações o build da aplicavão iniciará. com o pacote funcional ele será enviado para um servidor de arquivos SMB.


## Passos do Experimento

Para criação da pipeline descrita o participante deverá seguir os seguintes passos:

O ambiente será preparado para que o usuário já inicie logado na aplicação e 
já esteja na tela de configurações.

0. O participante deverá criar um novo job (Freestyle=abortagem 1, Personalizado=abordagem 2) com o nome pipelineCICD.

0. Após a criação deverá ser informado qual repositório o participante utilizará para construção da sua pipeline. Para isso utilize as seguintes informações:
   
    ```
    https://github.com/ChristyanS/experimento-jenkins
    ```

0. Para validação da qualidade de código o participante utilizará deverá configurar o SonarQube. Para isso utilize o seguinte comando:

	```sh
    mvn sonar:sonar \   -Dsonar.projectKey=calculadora \   -Dsonar.host.url=http://localhost:9000 \   -Dsonar.login=admin -Dsonar.password=admin	
	```

0. Em seguida o participante deverá definir o comando de testes unitários da aplicação. Para isso utilize o seguinte comando: 

	```sh
		mvn test	
	```

0. Depois será configurado o build da aplicação. Para isso utilize o seguinte comando:

	```sh
		mvn compile
	```

0. Ao término da etapa anterior deve ser gerado um pacote para a realização do deploy. Para isso utilize o seguinte comando:

	```sh
		mvn package
	```

0. Ao fim de todas as etapas o participante deverá colocar o local para deploy de sua aplicação. Para isso utilize o seguinte comando:

	```sh
		mvn deploy	
	```

0. O participante deverá salvar as configurações. 

0. Após o preenchimento das informações da pipeline o usuário deve responder o questionário indicado pelos observadores do experimento.
## Avaliação
Ao término da configuração serão avaliados diversos quesitos para compreender qual abordagem facilita a configuração de uma pipeline de CICD.

+ Será avaliado o tempo que o usuário levou para realizar a configuração da pipeline. Estamos considerando que o tempo é influenciado pela facilidade.
    +  O tempo máximo para configuração será de 1 hora.
+ Será levado em consideração a corretude das informações, ou seja, se todos os dados foram informados de maneira correta para em cada uma das 6 etapas. Para isso utilizaremos uma escala segundo a ISO 25010 não completou, completou parcialmente, completou todas as informações
    + Concluiu a configuração do repository
    + Concluiu a configuração de quality
    + Concluiu a configuração de test
    + Concluiu a configuração do build
    + Concluiu a configuração de package
    + Concluiu a configuração de Deploy
+ Será avaliado se a pipeline funciona corretamente.
+ O grau de usabilidade da aplicação. que será medido através do questionário SUS System Usablility Scale.

## História Construção da Pipeline

Você como desenvolvedor trabalha em um projeto de desenvolvimento software, que tem o seu código versionado no repositório GitHub (url: https://github.com/ChristyanS/experimento-jenkins). Foi solicitado que você configure uma pipeline de integração e entrega contínua para melhorar a qualidade e velocidade das entragas deste software. A pipeline que você deverá implementar deve conter as validações de qualidade de código ("mvn sonar:sonar \ -Dsonar.projectKey=calculadora \ -Dsonar.host.url=http://localhost:9000 \ -Dsonar.login=admin -Dsonar.password=admin") e a execução dos testes ("mvn test"). Após as validações de código e testes será necessário a realização de build do projeto ("mvn compile"), o package ("mvn package") e o deploy ("mvn deploy").