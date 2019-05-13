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
    stage('Startup') {
      steps {
        script {
          sh 'yarn install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'yarn test'
        }
      }
      post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
        }
      }
    }
    stage('Build') {
      steps {
        script {
          sh 'yarn build'
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
              def response = sh 'curl --header "Accept: application/json" --request POST --data '{"username"\:"${env.USERNAME}","password"\:"${env.PASSWORD}"}' https://portainer.ameersami.com/api/auth'
              echo response
          }
        }
      }
    }
  }
}