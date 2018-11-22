create database burgers_db;
use burgers_db;
create table burgers(
    id int(10) auto_increment,
    burger_name varchar(50),
    devoured boolean,
    primary key (id)
);
