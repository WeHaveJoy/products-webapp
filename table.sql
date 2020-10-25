-- create table products(
-- 	productsId serial not null primary key,
--     name text not null,
--     product text not null,
-- 	price text not null,
--     foreign key (customerId) references customer(customerId)
-- );

create table customer(
id serial not null primary key,
    Firstname text not null,
    Lastname text not null,
    Age int default 0,
    Location text not null
);

create table products (
	id serial not null primary key,
    tops text not null,
    dresses text not null,
    tshirts text not null,
    shoes text not null,
	price decimal(10,2),
	customer_id int,
	foreign key (customer_id) references customer(id)
);