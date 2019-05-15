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
          def Bearer = "Bearer ${jwt}"
              waitUntil {
                def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, url: "https://portainer.ameersami.com/api/endpoints/1/docker/build?t=ded:latest&remote=https://github.com/ameersami/ded.git&dockerfile=Dockerfile&nocache=true", customHeaders:[[name:"Authorization", value: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJdQy9BOkxGeSIsInJvbGUiOjEsImV4cCI6MTU1NzkxNjM2MX0.nYQXu7gTqJ3WWIJFwFqL09t9c3TRsbRjp7nDtASTy0o" ], [name: "cache-control", value: "no-cache"]]
                def jsonSlurper = new groovy.json.JsonSlurper();
                def obj = jsonSlurper.parseText(response.getContent());
                echo obj
              }
        }
      }
    }
  }
}