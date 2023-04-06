pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/manhkiooo/to-do-list-fe-react.git'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        // Use a Kubernetes deployment, for example
        kubernetesDeploy (
          sh 'npm start'
        )
      }
    }
  }
}
