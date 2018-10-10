FROM node:8.12.0-jessie
LABEL maintainer.email="aguzman@collab.net"

VOLUME ["/sdk"]
CMD ["/bin/bash"]

# Build
# docker image build --tag ctm-pb-sdk $PWD

# Run
# docker container run -u 1000:1000 -it --rm -v $PWD:/sdk -w /sdk ctm-pb-sdk


# Steps to build:
# rm -rf dist/
# have a clean git workspace
# npm version BUMP
# git push
# move into container
# npm login
# npm publish --access public
