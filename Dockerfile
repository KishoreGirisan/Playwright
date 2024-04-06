FROM node:20-bookworm

RUN npx -y playwright@1.43.0 install --with-deps