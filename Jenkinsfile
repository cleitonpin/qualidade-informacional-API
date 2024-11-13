pipeline {
  agent any

  environment {
    RAILWAY_PROJECT = 'qualidade-informacional-api' // Substitua pelo seu projeto
    // Nome da credencial armazenada no Jenkins para o Railway API Token
    RAILWAY_API_TOKEN = credentials('RAILWAY_API_TOKEN')
  }

  stages {
    stage('Preparação') {
      steps {
        // Limpa o workspace antes de iniciar
        cleanWs()

        // Clona o repositório do projeto
        checkout scm
      }
    }

    stage('Instalar Dependências') {
      steps {
        // Instala as dependências do projeto
        bat 'yarn install'
      }
    }

    stage('Executar Testes') {
      steps {
        // Executa os testes do projeto
        bat 'yarn test'
      }
    }

    stage('Build') {
      steps {
        // Realiza o build do projeto (se aplicável)
        bat 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        bat "npm install -g @railway/cli"

        bat '''
          echo $RAILWAY_API_TOKEN | railway login --apiKey
        '''

        bat "railway up --project=${RAILWAY_PROJECT}"
      }
    }
  }

  post {
      always {
          // Ações que sempre serão executadas após o pipeline, independentemente do resultado
          cleanWs()
      }

      success {
          // Ações a serem executadas em caso de sucesso
          echo 'Pipeline concluído com sucesso!'
      }

      failure {
          // Ações a serem executadas em caso de falha
          echo 'Pipeline falhou. Verifique os logs para mais detalhes.'
      }
  }
}
