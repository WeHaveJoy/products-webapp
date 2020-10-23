create table products(
	productsId serial not null primary key,
    name text not null,
    product text not null,
	price text not null,
    foreign key (customerId) references customer(customerId)
);

create table customer(
	customerId serial not null primary key,
    Firstname text not null,
    Lastname text not null,
    Age int default 0
);