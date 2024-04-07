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
         steps 
         {
        // Steps run in node:7-alpine docker container on docker agent
        sh 'node --version'
         }
      }

      stage('e2e-tests') 
      {
         steps 
         {
            sh 'node --version'
         }
      }
   }
}