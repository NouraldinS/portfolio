# syntax=docker/dockerfile:1
FROM node:19.5.0
COPY . .
RUN npm install \
npm run build
EXPOSE 3000
CMD ["npm", "start"]