FROM node:13.12.0-alpine
ENV HOME /root
WORKDIR /home/app/client
ADD ./package.json /home/app/client
ADD ./yarn.lock /home/app/client
RUN yarn install
COPY . /home/app/client
CMD ["yarn", "start"]