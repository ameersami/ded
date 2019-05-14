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
              usernameVariable: 'PORTAINER_USERNAME', passwordVariable: 'PORTAINER_PASSWORD')]) {
              def json = """
                  {"Username": "$PORTAINER_USERNAME", "Password": "$PORTAINER_PASSWORD"}
              """
              def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, requestBody: json, url: "https://portainer.ameersami.com/api/auth"
              def jsonSlurper = new groovy.json.JsonSlurper();
              def obj = jsonSlurper.parseText(response.getContent());
              jwt = obj.jwt
          }
          echo jwt
          withCredentials([usernamePassword(credentialsId: 'Github',
              usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_PASSWORD')]) {
              echo "Bearer ${jwt}"
              def requestURL = """
                  https://portainer.ameersami.com/api/endpoints/1/docker/build?t=ded:latest&remote=https://github.com/ameersami/ded.git&dockerfile=Dockerfile&nocache=true
              """
              def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, url: requestURL, customHeaders:[[name:"Authorization", value:"Bearer ${jwt}"]]
              def jsonSlurper = new groovy.json.JsonSlurper();
              def obj = jsonSlurper.parseText(response.getContent());
              echo obj
          }
        }
      }
    }
  }
}