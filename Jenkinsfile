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
                echo 'Building...'
                // Add build commands here, e.g., compile or prepare
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'python -m unittest discover tests'  // Example for Python unittest
            }
        }
    }
}
