FROM node:8.12.0-alpine

LABEL maintainer="pascal.euhus@gmx.de"

COPY . /frontend

WORKDIR /frontend

RUN yarn build && yarn global add serve

ENTRYPOINT ["serve"]

CMD ["-s", "build"]
