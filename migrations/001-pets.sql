-- Up
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Animal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    race TEXT,
    name TEXT,
    ownerId INTEGER REFERENCES User(id)
);

-- INSERT INTO User (name, email) values ('Gabs', 'gabs@gabs.com');
-- INSERT INTO User (name, email) values ('Stella', 'stella@stella.com');

-- INSERT INTO Animal (race, name, ownerId) values('dog', 'Coxinha', 1);
-- INSERT INTO Animal (race, name, ownerId) values('dog', 'Petralha', 1);
-- INSERT INTO Animal (race, name, ownerId) values('dog', 'Toddy', 2);

-- Down
DROP TABLE User;
DROP TABLE Animal;