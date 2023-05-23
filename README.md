###### DEVELOPMENT

- Install dependencies
  `npm install`
- Execute project
  `npm run dev`

###### PRODUCTION

###### ( We should use docker-compose but we just need 3 instructions to build and host our app with NGINX )

- Install docker (To use and create images, excute containers).
  `https://docs.docker.com/get-docker/`

- (1) (Terminal) Execute NGINX (Now hosting, right now to serve static apps).
  `docker run --name some-nginx -d -p 8080:80 nginx:1.23.3`

- (Browser) Visit localhost:8080 in the browser to verify it's working.
  `localhost:8080`

- (2) (Terminal) Create an image using then Dockerfile file.
  `docker build -t deel-test-app . --no-cache`

- (Terminal) Verify image created (We should see the element called 'deel-test-app' with its respective ID).
  `docker image ls`

- (3) (Terminal) Execute our image (Run container).
  `docker container run -p 80:80 deel-test-app`

- (Browser) Visit localhost in the browser to verify app is hosted and working.
  `localhost`
