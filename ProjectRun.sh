#!/bin/bash

echo "Welcome Back to $(pwd)";
# This syntax checks and store where my log file location
filename=project.log
# This syntax declare the log variable and store path of file
log=./$filename

# This command find the docker image if docker iamge availabel then its return the docker iamge id  
projectIamgeId=`docker images | grep "react-app" | awk '{print $3}'`

# This function removing docker image and put logs
dockerImageRemove(){
# This syntax echo text into log file
echo "$(date) - Find docker image for your project with id $1" >> $log
echo "$(date) - Removing docker image for your project with id $1" >> $log
# This will down old cahce is there 
docker-compose down
# This syntax remove the docker image by forcefully by passing as parameter
docker rmi -f $1
echo "$(date) - Deleting docker image with result is $?" >> $log
}

# This functions creating docker image and runing the docker image
dockerImageCreating(){
    # This syntax building your project 
    docker-compose build
    # This syntax runing your project
    docker-compose up
}

# This conditions checking where docker image is there or not
if [ $projectIamgeId ] 
then
   # This block docker image is there, then remove old docker image and creating new docker image    
   echo "You have docker image $projectIamgeId for your project " 
   dockerImageRemove $projectIamgeId
   dockerImageCreating
else
   # This block execute there is no docker image (creating new docker image and runing docker image) 
   echo "You dont have docker image for your project"
   dockerImageCreating
fi

