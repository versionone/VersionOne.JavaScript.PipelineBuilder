FROM node:8.12.0-jessie
LABEL maintainer.email="aguzman@collab.net"

VOLUME ["/sdk"]
CMD ["/bin/bash"]

# Build
# docker image build --tag ctm-pb-sdk $PWD

# Run
# docker container run -it --rm -v $PWD:/sdk ctm-pb-sdk