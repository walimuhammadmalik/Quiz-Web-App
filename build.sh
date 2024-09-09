#!/bin/bash
# Use this script to automate building Rubix Retail Service docker image.
# Provide registry name as script argument to create a image tag with regisry name.
# Usage:
#       ./build.sh Provide-Registy-Name-Here

# Colors
blue='\033[0;34m'
white='\033[0;37m'
green='\033[0;32m'
red='\033[0;31m'

# Provide Registry Name
registryName=$1

# Check if variable is empty
if [ -z "$registryName" ]; then
    printf "\n${red}Error: Provide container registry name as script argument${white}\n"
    exit 1
fi

docker build -t "$registryName"/rubixentitlements:master_latest .
