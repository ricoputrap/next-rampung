-- Up
CREATE TABLE IF NOT EXISTS PROJECT (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    archived INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS TASK (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL,
    due_date TEXT,
    project_id INTEGER NOT NULL,
    CONSTRAINT TASK_fk_project_id FOREIGN KEY (project_id)
        REFERENCES PROJECT (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TAG (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS MEMBER (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    profile_picture TEXT
);

CREATE TABLE IF NOT EXISTS TASK_TAG (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tag_id INTEGER NOT NULL,
    task_id INTEGER NOT NULL,
    CONSTRAINT TASK_TAG_fk_tag_id FOREIGN KEY (tag_id)
        REFERENCES TAG (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT TASK_TAG_fk_task_id FOREIGN KEY (task_id)
        REFERENCES TASK (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS TASK_ASSIGNEE (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id INTEGER NOT NULL,
    task_id INTEGER NOT NULL,
    CONSTRAINT TASK_ASSIGNEE_fk_member_id FOREIGN KEY (member_id)
        REFERENCES MEMBER (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT TASK_ASSIGNEE_fk_task_id FOREIGN KEY (task_id)
        REFERENCES TASK (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS PROJECT_MEMBER (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    member_id INTEGER NOT NULL,
    CONSTRAINT PROJECT_MEMBER_fk_project_id FOREIGN KEY (project_id)
        REFERENCES PROJECT (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT PROJECT_MEMBER_fk_member_id FOREIGN KEY (member_id)
        REFERENCES MEMBER (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

INSERT INTO PROJECT (title) values ('Laundry App');
INSERT INTO PROJECT (title) values ('Rampung');
INSERT INTO PROJECT (title) values ('eBimbel');

INSERT INTO TASK (title, status, project_id) 
    values ('Create order', 'TODO', 1);
INSERT INTO TASK (title, status, project_id) 
    values ('Cancel order', 'TODO', 1);
INSERT INTO TASK (title, status, project_id) 
    values ('Create account', 'PROG', 1);
INSERT INTO TASK (title, status, project_id) 
    values ('Forgot password', 'REVW', 1);
INSERT INTO TASK (title, status, project_id) 
    values ('Close order', 'DONE', 1);

INSERT INTO TAG (label) values ('Database App');
INSERT INTO TAG (label) values ('UI Design');
INSERT INTO TAG (label) values ('User Flow');

INSERT INTO MEMBER (name) values ('Rico');
INSERT INTO MEMBER (name) values ('Vincent');
INSERT INTO MEMBER (name) values ('Edrick');

INSERT INTO TASK_TAG (task_id, tag_id)  values (1, 1);
INSERT INTO TASK_TAG (task_id, tag_id)  values (1, 2);
INSERT INTO TASK_TAG (task_id, tag_id)  values (2, 3);
INSERT INTO TASK_TAG (task_id, tag_id)  values (3, 2);

INSERT INTO TASK_ASSIGNEE (task_id, member_id)  values (1, 1);
INSERT INTO TASK_ASSIGNEE (task_id, member_id)  values (3, 1);
INSERT INTO TASK_ASSIGNEE (task_id, member_id)  values (4, 2);
INSERT INTO TASK_ASSIGNEE (task_id, member_id)  values (5, 3);

INSERT INTO PROJECT_MEMBER (project_id, member_id)  values (1, 1);
INSERT INTO PROJECT_MEMBER (project_id, member_id)  values (1, 2);
INSERT INTO PROJECT_MEMBER (project_id, member_id)  values (1, 2);

-- Down
DROP TABLE PROJECT;
DROP TABLE TASK;
DROP TABLE TAG;
DROP TABLE MEMBER;
DROP TABLE TASK_TAG;
DROP TABLE TASK_ASSIGNEE;
DROP TABLE PROJECT_MEMBER;