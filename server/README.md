# build docker
  - docker build . -t myserver (-t is tag)

# docker run with port mapping
  - docker run -p 1111:7777 -d myserver (port 7777 to 1111 | -d is detach)
  - docker run -p 2222:7777 -d myserver (port 7777 to 1111 | -d is detach)
  - docker run -p 3333:7777 -d myserver (port 7777 to 1111 | -d is detach)
  - docker run -p 4444:7777 -d myserver (port 7777 to 1111 | -d is detach)