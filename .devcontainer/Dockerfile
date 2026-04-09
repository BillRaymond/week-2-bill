FROM node:24-bookworm

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		fd-find \
		gh \
		git \
		less \
		openssh-client \
		procps \
		ripgrep \
		sudo \
		unzip \
		xz-utils \
		zsh \
	&& rm -rf /var/lib/apt/lists/*

ENV SHELL=/bin/zsh
