pipeline {
   agent none

   stages 
   {
       stage('Docker node test') 
      {
         agent 
         {
            docker
            {
               image 'node:18-alpine'
            }
         }
      }

      stage('e2e-tests') 
      {
         steps {
            sh 'node --version'
         }
      }
   }
}