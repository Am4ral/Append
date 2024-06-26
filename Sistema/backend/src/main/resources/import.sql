INSERT INTO tb_users(email, name, password) VALUES ('marco@gmail.com', 'marco', '$2a$12$QIYjb6OqH6PHZRABwGe7BOIOMvr9bLF1XvHe66g3Cz5adElNMHFYS');
INSERT INTO tb_users(email, name, password) VALUES ('lucas@gmail.com', 'lucas', '$2a$12$QIYjb6OqH6PHZRABwGe7BOIOMvr9bLF1XvHe66g3Cz5adElNMHFYS');
INSERT INTO tb_users(email, name, password) VALUES ('gui@gmail.com', 'gui', '$2a$12$QIYjb6OqH6PHZRABwGe7BOIOMvr9bLF1XvHe66g3Cz5adElNMHFYS');
INSERT INTO tb_users(email, name, password) VALUES ('ana@gmail.com', 'ana', '$2a$12$QIYjb6OqH6PHZRABwGe7BOIOMvr9bLF1XvHe66g3Cz5adElNMHFYS');

INSERT INTO tb_houses (owner_id, title, state, city, street, district, number, info, price, imgURL) VALUES (2,  'Casa 1', 'Minas Gerais', 'Lavras', 'Afonso Pena', 'Dos Ipes', 95, 'Terreo, portao cinza', 355, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Q3EJQ5Xk5TnfpC7_yofScytkjphQhL1LrBEvOLHSwbMvCQwagR8C7_QxwOGRXjkWaE&usqp=CAU');
INSERT INTO tb_houses (owner_id, title, state, city, street, district, number, info, price, imgURL) VALUES (2, 'Casa 2', 'Minas Gerais', 'Lavras', 'Afonso Pena', 'Dos Ipes', 100, 'Casa mobilhada', 400, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Q3EJQ5Xk5TnfpC7_yofScytkjphQhL1LrBEvOLHSwbMvCQwagR8C7_QxwOGRXjkWaE&usqp=CAU');
INSERT INTO tb_houses (owner_id, title, state, city, street, district, number, info, price, imgURL) VALUES (3,  'Casa 3' , 'Minas Gerais', 'Lavras', 'Afonso Pena', 'Dos Ipes', 105, 'Quarto com suite', 600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Q3EJQ5Xk5TnfpC7_yofScytkjphQhL1LrBEvOLHSwbMvCQwagR8C7_QxwOGRXjkWaE&usqp=CAU');
INSERT INTO tb_houses (owner_id, title, state, city, street, district, number, info, price, imgURL) VALUES (3,  'Casa 4', 'Minas Gerais', 'Lavras', 'Afonso Pena', 'Dos Ipes', 45, 'Kitnet', 550, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Q3EJQ5Xk5TnfpC7_yofScytkjphQhL1LrBEvOLHSwbMvCQwagR8C7_QxwOGRXjkWaE&usqp=CAU');


INSERT INTO tb_roles (authority) VALUES ('ROLE_OWNER');
INSERT INTO tb_roles (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_roles (authority) VALUES ('ROLE_USER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 3)

