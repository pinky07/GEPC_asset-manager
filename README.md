# Requirements
* JDK 8u131 or above
* Gradle 4 or above
* SQL Server

# Build the application

## Gradle custom tasks
* cleanUI: this task cleans all the distribution folders generated during the UI build
* buildUI: this task builds all the UI project and copies the dist folder into static folder in the web application. 

## Build backend gradle task 
* gradle --no-daemon clean build

## Build frontend gradle task
gradle --no-daemon cleanPublic compileUI

## Build frontend and backend gradle task
gradle --no-daemon cleanUI buildUI clean build

# How to deploy the application
Remember to add the following VM arg when in the application: **-Dspring.profiles.active=dev**



