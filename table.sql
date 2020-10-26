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
    Location text not null,
   products_id int,
    foreign key (products_id) references products(id)
);

create table products (
	id serial not null primary key,
    tops text ,
    dresses text,
    tshirts text,
    shoes text,
    pants text,
	price decimal(10,2)
);


insert into products (tops, dresses, tshirts, shoes, price) 
  values ('bra-top','floral-dress', 'black-tshirt','sendals', 803.99);

insert into products ( shoes, price) 
  values ('formal-shoe', 299);

  insert into products ( pants, price) 
  values ('track-pant', 450);

    insert into products ( dresses, price) 
    values ('coloured-dress', 200);

insert into products ( dresses, price) 
    values ('floral-dress', 279);