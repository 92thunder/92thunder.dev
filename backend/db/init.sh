#!/bin/bash
set -xe

CURRENT_DIR=$(cd $(dirname $0);pwd)
export MYSQL_HOST=${MYSQL_HOST:-127.0.0.1}
export MYSQL_PORT=${MYSQL_PORT:-3306}
export MYSQL_USER=${MYSQL_USER:-root}
export MYSQL_DBNAME=${MYSQL_DBNAME:-blog}
export MYSQL_PWD=${MYSQL_PASS:-}
export LANG="C.UTF-8"
cd $CURRENT_DIR

cat Schema.sql | mysql --defaults-file=/dev/null -h $MYSQL_HOST -P $MYSQL_PORT -u $MYSQL_USER $MYSQL_DBNAME