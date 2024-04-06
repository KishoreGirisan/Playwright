pipeline {
   agent 
   { 
    docker 
        { 
            image 'mcr.microsoft.com/playwright:v1.43.0-jammy' 
        } 
    }
   stages {
      stage('Install Playwright') 
      {
         steps 
         {
            sh '''
            npm i -D @playwright/test
            npx playwright install
            '''
         }
      }
      stage('Test') 
      {
         steps 
         {
            sh '''
            npx playwright test --list
            npm run Google
            '''
         }
      }
   }
}