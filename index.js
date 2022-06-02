'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const helmet 	    = require('helmet');
const cors	        = require('cors');

const tmh           = require('take-my-hash');

const PORT              = process.env.PORT || 9000;
const MICROSERVICE_NAME = 'hasher-microservice';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/healthcheck', (req, res) => {
    res.json({status: 200});
});

app.get('/hasher/md5/:content', (req, res) => {
    const hash = tmh.md5(req.params.content);
    res.json({ hash, type: 'md5' });
});

app.get('/hasher/sha1/:content', (req, res) => {
    const hash = tmh.sha1(req.params.content);
    res.json({ hash, type: 'sha1' });
});

app.get('/hasher/sha224/:content', (req, res) => {
    const hash = tmh.sha224(req.params.content);
    res.json({ hash, type: 'sha224' });
});

app.get('/hasher/sha256/:content', (req, res) => {
    const hash = tmh.sha256(req.params.content);
    res.json({ hash, type: 'sha256' });
});

app.get('/hasher/sha384/:content', (req, res) => {
    const hash = tmh.sha384(req.params.content);
    res.json({ hash, type: 'sha384' });
});

app.get('/hasher/sha3/:content', (req, res) => {
    const hash = tmh.sha3(req.params.content);
    res.json({ hash, type: 'sha3' });
});

app.get('/hasher/sha512/:content', (req, res) => {
    const hash = tmh.sha512(req.params.content);
    res.json({ hash, type: 'sha512' });
});

app.get('/hasher/aes/:content/:key/encrypt', (req, res) => {
    const hash = tmh.AESEncrypt(req.params.content, req.params.key);
    res.json({ hash, type: 'AES', operation: 'encrypt' });
});


app.listen(PORT, err => {
    if (err) throw err;
    console.log('%s listening at 0.0.0.0:%s', MICROSERVICE_NAME, PORT);
});