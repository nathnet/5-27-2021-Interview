# Agoda-Interview

Although the functionality is there, there is no functional API at the time of submission.

## How to run
1. Change directory into api folder
2. Run npm install
3. Run npm test

## How I approached the problem
I started looking up how to set up the server for Java first. After having gone through a few blogs, I find that it may not be suitable for the current situation considering the time frame. I then changed my language to Node.js and set up the server side using Express. Upon creating the server, I created a function for greatestCommonDivisor (GCD) based on my past experience on how to create API first. Then, I looked up Euclidean algorithms to find out how GCD is computed. I then typed in the algorithm into the function using recursion at first. Due to the nature of recursion's stack, I devised the algorithm to run in iterations instead. Afterwards, I looked up how to do unit testing in Node.js and I stumbled upon Mocha. I took the opportunity to learn Mocha and used it as the unit testing library for this interview. After having made sure that the algorithm runs correctly, I looked up how to apply SOLID to Node.js and see if I can create classes and interfaces like Java applications. After a few tries, I decided that it may be better to create a functional API first. So, I dropped the SOLID principles application and I tried to create a router.post to make the API available for clients. However, the router post still failed by the time of submission.

## What I learned
- How to do Unit Testing using Mocha
- Basics of how to apply SOLID to Node.js
- Node.js does not have interface, must only use Typescript

## Challenges
Since my main language is Java and I have never created a backend server using Java before, I decided to use Node.js instead. Using Node.js alleviated the obstacle in creating a server. However, it has posed new challenges as I have never written a separate test files for Node.js applications since I usually used Postman to test my applications. Another challenge was the application of SOLID principles on Node.js. I have never learned classes and interfaces in Javascript before, and it seems like JS does not have interface either! 
