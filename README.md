# Docker from scratch

We need to create an image, containers are based off images

1. To create an image, we create a dockerfile
2. After the docker file is created, run `docker build .`
3. Once the build finishes, the image will be setup for the container to be launched
4. Run `docker run <buildId>`
   - Run with a port assigned `docker run -p <HostMachineExposedPort>:<PortExposedByDockerFile> <buildId>`

```
On windows, you must take the SHA Build ID, in order to properly run the image`
Example: docker run -p 80:3000 c300684955045374224bf3928fb2aefd289e058ea0fce1ca0d957ba00cc7d06c
```

### Stop a container

1. Run `docker ps` to see running containers
2. Run `docker stop <containerName>`

### Ports usage

https://docs.docker.com/network/#published-ports
