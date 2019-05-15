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
          withCredentials([usernamePassword(credentialsId: 'Portainer', usernameVariable: 'PORTAINER_USERNAME', passwordVariable: 'PORTAINER_PASSWORD')]) {
              def json = """
                  {"Username": "$PORTAINER_USERNAME", "Password": "$PORTAINER_PASSWORD"}
              """
              def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', validResponseCodes: '200', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, requestBody: json, url: "https://portainer.ameersami.com/api/auth"
              def obj = new groovy.json.JsonSlurper().parseText(response.getContent())
              jwt = obj.jwt
          }
          echo jwt
          // withCredentials([usernamePassword(credentialsId: 'Github', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_PASSWORD')]) {
          //     def repoURL = """
          //       https://portainer.ameersami.com/api/endpoints/1/docker/build?t=ded:latest&remote=https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com/$GITHUB_USERNAME/ded.git&dockerfile=Dockerfile&nocache=true
          //     """
          //     waitUntil {
          //       def response = httpRequest httpMode: 'POST', ignoreSslErrors: true, url: repoURL, validResponseCodes: '200', customHeaders:[[name:"Authorization", value: "Bearer ${jwt}" ], [name: "cache-control", value: "no-cache"]]
          //     }
          // }
          
          def response = httpRequest httpMode: 'GET', ignoreSslErrors: true, url: "https://portainer.ameersami.com/api/stacks", validResponseCodes: '200', customHeaders:[[name:"Authorization", value: "Bearer ${jwt}" ], [name: "cache-control", value: "no-cache"]]
          def stacks = new groovy.json.JsonSlurper().parseText(response.getContent())
          stacks.each { stack ->
            String stackId = stack.Id
            String stackName = stack.Name
            echo "$stackId"
            echo "$stackName"
            // if(key[1].split(':')[1] == "myStack"){
            //   echo 'OK it worked'
            //   echo "$key[0]"
            // }
          }
        }
      }
    }
  }
}