How to run:
1. create tests dir in the playwright dir
2. copy files to test dir
3. In console navigate to playwright dir
4. execute ‘npx playwright test’

Design decisions:
* Usernames and passwords: I like to keep all my variables with the tests that use them, especially if there are so little of them. As the number of the variables increases they should be moved to a dedicated file or database.
