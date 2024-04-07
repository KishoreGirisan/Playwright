pipeline {
   agent { docker { image 'node:18-alpine' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'node --version'
         }
      }
   }
}