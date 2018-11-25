FROM node:8.12.0-alpine

LABEL maintainer="pascal.euhus@gmx.de"

COPY . /backend

WORKDIR /backend

RUN yarn install --production=true

ENTRYPOINT ["yarn"]

CMD ["start"]
