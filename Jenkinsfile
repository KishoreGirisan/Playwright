pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-jammy' } }
   stages {
      stage('pull') {
         steps {
            sh 'docker pull mcr.microsoft.com/playwright:v1.43.0-jammy'
         }
      }
      stage('run') {
         steps {
            sh 'docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.43.0-jammy /bin/bash'
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