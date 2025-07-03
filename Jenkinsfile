pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Executar Testes Web') {
            steps {
                bat 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
