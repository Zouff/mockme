# mockme

Super basic mocked backend

## Setup and requirements

1. Install Docker
2. Modify the `mock.json` file to the result you want to receive
3. Run `docker build . -t mockme`
4. Run `docker run -p 8080:8080 mockme`
5. Navigate to [this URL](http://localhost:8080) to test that it is returning what you expect
6. Configure your front end to hit that, you should be good to go
