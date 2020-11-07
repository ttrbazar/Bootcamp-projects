# PASSWORD VALIDATOR:

1.

Write a program that should check if each password in an array contains a valid password (see below for password criteria) and return a new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password.

Expected Result Example:
> PasswordValidationResult= [false, true, false, false, true]

> HINT: you can use match() method. And regex (Regular Expressions)