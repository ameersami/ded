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
          // Get JWT Token
          withCredentials([usernamePassword(credentialsId: 'Portainer', usernameVariable: 'PORTAINER_USERNAME', passwordVariable: 'PORTAINER_PASSWORD')]) {
              def json = """
                  {"Username": "$PORTAINER_USERNAME", "Password": "$PORTAINER_PASSWORD"}
              """
              def jwtResponse = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', validResponseCodes: '200', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, requestBody: json, url: "https://portainer.ameersami.com/api/auth"
              def obj = new groovy.json.JsonSlurper().parseText(jwtResponse.getContent())
              jwt = obj.jwt
          }
          echo jwt

          // Build the image
          withCredentials([usernamePassword(credentialsId: 'Github', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_PASSWORD')]) {
              def repoURL = """
                https://portainer.ameersami.com/api/endpoints/1/docker/build?t=ded:latest&remote=https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com/$GITHUB_USERNAME/ded.git&dockerfile=Dockerfile&nocache=true
              """
              waitUntil {
                def createImageResponse = httpRequest httpMode: 'POST', ignoreSslErrors: true, url: repoURL, validResponseCodes: '200', customHeaders:[[name:"Authorization", value: "Bearer ${jwt}" ], [name: "cache-control", value: "no-cache"]]
              }
          }
          
          // Get all stacks
          String existingStackId = ""
          if("true") {
            def stackResponse = httpRequest httpMode: 'GET', ignoreSslErrors: true, url: "https://portainer.ameersami.com/api/stacks", validResponseCodes: '200', consoleLogResponseBody: true, customHeaders:[[name:"Authorization", value: "Bearer ${jwt}" ], [name: "cache-control", value: "no-cache"]]
            def stacks = new groovy.json.JsonSlurper().parseText(stackResponse.getContent())
            
            stacks.each { stack ->
              String stackId = stack.Id
              String stackName = stack.Name
              echo "$stackId"
              echo "$stackName"
              if(stackName == "DED") {
                existingStackId = stackId
              }
            }
          }

          def createStackJson = ""
          if(existingStackId?.trim()) {
            // Update the stack
            def json = """
                  {"Prune": "true"}
            """
            def stackURL = """
              https://portainer.ameersami.com/api/stacks/$existingStackId
            """
            httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', validResponseCodes: '200', httpMode: 'GET', ignoreSslErrors: true, requestBody: json, url: stackURL

          } else {
            // Create a new stack
            withCredentials([usernamePassword(credentialsId: 'Github', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_PASSWORD')]) {
              def swarmResponse = httpRequest acceptType: 'APPLICATION_JSON', validResponseCodes: '200', httpMode: 'GET', ignoreSslErrors: true, consoleLogResponseBody: true, url: "https://portainer.ameersami.com/api/endpoints/1/docker/swarm", customHeaders:[[name:"Authorization", value: "Bearer ${jwt}" ], [name: "cache-control", value: "no-cache"]]
              def swarmInfo = new groovy.json.JsonSlurper().parseText(swarmResponse.getContent())

              createStackJson = """
                {"Name": "DED", "SwarmID": "$swarmInfo.ID", "RepositoryURL": "https://github.com/$GITHUB_USERNAME/ded", "ComposeFilePathInRepository": "docker-compose.yml", "RepositoryAuthentication": true, "RepositoryUsername": "$GITHUB_USERNAME", "RepositoryPassword": "$GITHUB_PASSWORD"}
              """

              echo "$createStackJson"

            }
          }

          if(createStackJson?.trim()) {
            def createStackResponse = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', validResponseCodes: '200', httpMode: 'POST', ignoreSslErrors: true, consoleLogResponseBody: true, requestBody: createStackJson, url: "https://portainer.ameersami.com/api/stacks?method=repository&type=1&endpointId=1", customHeaders:[[name:"Authorization", value: "Bearer ${jwt}" ], [name: "cache-control", value: "no-cache"]]
          }

        }
      }
    }
  }
}