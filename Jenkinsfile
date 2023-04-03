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
          configs: 'my-k8s-configs',
          kubeconfigId: 'my-k8s-config',
          namespace: 'my-namespace',
          yaml: 'k8s-deployment.yaml'
        )
      }
    }
  }
}
