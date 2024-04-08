// 1. Install Docker pipeline plugin 2. In Tools, set Dockers path 
//3. Change homebrew file - /usr/local/Cellar/jenkins-lts/{verion}/homebrew.mxcl.jenkins-lts.plist 
/***
 <key>EnvironmentVariables</key>
    <dict>
      <key>PATH</key>
      <string>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Docker.app/Contents/Resources/bin/:/Users/kishorekumargirisan/Library/Group\ Containers/group.com.docker/Applications/Docker.app/Contents/Resources/bin</string>
    </dict>
***/
//4. restart jenkins service - brew services restart jenkins-lts
pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-jammy' } }
   stages {
      stage('e2e-tests') 
      {
         steps {
            sh 'npm cache clean --force'
            sh 'npm cache verify'
            sh 'npm ci'
            sh 'npm run Google'
         }
      }
   }
}