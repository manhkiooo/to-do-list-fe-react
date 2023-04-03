pipeline {
  agent any
  stages {
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
