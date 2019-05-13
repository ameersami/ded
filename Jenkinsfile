#!/bin/groovy
pipeline {
  agent any
  tools {
    nodejs 'recent node'
  }
  stages {
    stage('Prepare') {
      steps {
        script {
          sh 'npm install yarn -g'
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'Portainer',
              usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
              //available as an env variable, but will be masked if you try to print it out any which way
              sh 'echo $PASSWORD'
              echo "${env.USERNAME}"
              def json = '''\
              {"Username": $USERNAME , "Password": $PASSWORD}'
              '''
              def response = sh 'curl --header "Accept: application/json" --request POST --data $json https://portainer.ameersami.com/api/auth'
              echo response
          }
        }
      }
    }
  }
}