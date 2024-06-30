FROM node:20.11.1-alpine3.19 as dependencies

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

ARG PORT=1337
ENV PORT $PORT

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

EXPOSE $PORT

CMD [ "node", "src/index.js" ]