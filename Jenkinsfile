#!/bin/groovy
pipeline {
  agent any
  tools {
    nodejs 'recent node'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'npm run test'
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
          sh 'npm build'
        }
      }
    }
  }
}