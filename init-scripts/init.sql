-- Create departments table
CREATE TABLE IF NOT EXISTS departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT
    projectsAssigned INT
    workingHours INT
);

-- Insert sample data into departments table
INSERT INTO departments (department_name)
VALUES
    ('Development'),
    ('Testing'),
    ('Design'),
    ('Support');

-- Insert sample data into employees table
INSERT INTO employees (first_name, last_name, department_id, projectsAssigned, workingHours)
VALUES
    ('John', 'Doe', 1, 3, 39),
    ('Jane', 'Smith', 2, 2, 26),
    ('David', 'Johnson', 1, 42),
    ('Emily', 'Brown', 5, 16);
