<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
it's a server-side stored key authentication system. it stores the key in cookies to allow the user to stay logged in even with page refresh

2. What does bcrypt do to help us store passwords in a secure manner. 
it takes the password and uses a cipher to hash it. this makes each password truly unique and then doesn't store the password as plain text

3. What does bcrypt do to slow down attackers?
the hash function runs slower negating the faster hardware being used by blunt force attackers. It also changes the hash everytime you log in reducing the number passwords attackers can hash per second

4. What are the three parts of the JSON Web Token?
header, payload and signature
