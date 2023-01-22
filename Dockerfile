# syntax=docker/dockerfile:1

FROM node:latest AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


#FROM nginx:latest AS deploy-static
#
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=build /app/package .
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
#
FROM node:latest AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/package .
RUN npm run build
CMD ["node", "index.js"]