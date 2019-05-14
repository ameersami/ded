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
              // def secondjson = """
              //     {"Username": "$USERNAME", "Password": "$PASSWORD"}
              // """
              // def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: secondjson, url: "https://portainer.ameersami.com/api/auth"
              // // def json = "'{\"Username:\" \"$USERNAME\" , \"Password:\" \"$PASSWORD\" }'"
              // // echo json
              // // sh "curl --request POST https://portainer.ameersami.com/api/auth -H '\"Content-Type: application/json\"' -d '{\"Username:\" \"$USERNAME\" , \"Password:\" \"$PASSWORD\" }' "
              // // def response = sh "curl --request POST https://portainer.ameersami.com/api/auth -H '\"Content-Type: application/json\"' -d '\"{\"Username:\" \"$USERNAME\" , \"Password:\" \"$PASSWORD\" }\"' "
              // echo response


              // POST
              def post = new URL("https://portainer.ameersami.com/api/auth").openConnection();
              def message = "'{\"Username:\" \"$USERNAME\" , \"Password:\" \"$PASSWORD\" }'"
              post.setRequestMethod("POST")
              post.setDoOutput(true)
              post.setRequestProperty("Content-Type", "application/json")
              post.getOutputStream().write(message.getBytes("UTF-8"));
              def postRC = post.getResponseCode();
              println(postRC);
              if(postRC.equals(200)) {
                  println(post.getInputStream().getText());
              }


          }
        }
      }
    }
  }
}