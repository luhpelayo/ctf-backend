pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // Puedes agregar pasos de construcción si es necesario
            }
        }
        stage('Test') {
            steps {
                // Instala las dependencias y ejecuta las pruebas con Jest
                sh 'npm install'
                sh 'npx jest'
            }
        }
        stage('Deploy') {
            steps {
                // Puedes agregar pasos de implementación si es necesario
            }
        }
    }
}
