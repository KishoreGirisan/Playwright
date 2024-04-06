pipeline {
   agent any
   stages {
      stage('pull') {
         steps {
            sh 'docker pull mcr.microsoft.com/playwright:v1.43.0-jammy'
         }
      }
      stage('run') {
         steps {
            sh 'docker run mcr.microsoft.com/playwright:v1.43.0-jammy'
         }
      }
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npm run Google'
         }
      }
   }
}