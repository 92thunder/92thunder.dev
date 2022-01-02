DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;
DROP TABLE IF EXISTS blog.post;
CREATE TABLE blog.post (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(64) NOT NULL,
  body VARCHAR(4096) NOT NULL,
  published BOOLEAN NOT NULL,
  published_at DATETIME NOT NULL
);

DROP TABLE IF EXISTS blog.secret;
CREATE TABLE blog.secret (
  secret VARCHAR(64) NOT NULL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  url VARCHAR(256) NOT NULL
);

DROP TABLE IF EXISTS blog.session;
CREATE TABLE blog.session (
  id VARCHAR(64) NOT NULL PRIMARY KEY
);