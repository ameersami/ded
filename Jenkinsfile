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
          def jwt = ""
          withCredentials([usernamePassword(credentialsId: 'Portainer',
              usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
              def json = """
                  {"Username": "$USERNAME", "Password": "$PASSWORD"}
              """
              def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, requestBody: json, url: "https://portainer.ameersami.com/api/auth"
              def jsonSlurper = new groovy.json.JsonSlurper();
              def obj = jsonSlurper.parseText(response.getContent());
              echo obj.jwt
              jwt = obj.jwt
          }
          echo jwt
        }
      }
    }
  }
}