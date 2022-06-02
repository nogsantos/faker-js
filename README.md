# Whois Microservice "Nadavê"

Using this shit to implement microservices tests on containers.

This is a 5 minute implementation. Don't use this like reference for nothing. 


### How to create setup with docker

```sh
docker run -it -p 9000:9000 msfidelis/hasher:v1

```

## How to use 

### Hash md5

```sh
curl  curl http://localhost:9000/hasher/md5/fodase -i
```

```
{"hash":"3027b1eb85eeffea124f102a062dc64e","type":"md5"}
```

### Hash sha1

```sh
curl localhost:9000/hasher/sha1/cobrinha -i
```

```
{"hash":"74f60321a113850e38a62062f9f3b1fb20f45755", "type":"sha1"}
```


### Hash sha256

```sh
curl localhost:9000/hasher/sha256/pindamoiangaba -i
```

```
{"hash":"bc330085271ae14351b4a11ffa0bc7cdf53533ccb7b794eb9dd5aa429c44097f","type":"sha256"}
```
