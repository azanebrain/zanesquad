FROM mhart/alpine-node:8 as base
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm install
COPY . .

FROM mhart/alpine-node:base-8
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
CMD ["node", "./bin/www"]
# CMD ["npm start"]
# CMD ["ls"]


