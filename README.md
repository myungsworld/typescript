# typescript 기본 설정

## yarn

프로젝트를 생성할 파일 생성  

- **yarn init**  
Create a new package in the local directory  
  
- **yarn global add typescript**  
Install typescript  

- **new file tsconfig.json create**  
This JSON file will let us how to compile javascript  

```typescript
{
  "compilerOptions": {
       "target": "ES2015",                        
       "module": "commonjs",
       "sourceMap": true
  },
  //include는 어떤파일이 컴파일 될지 타입스크립트에 알려줌
  "include":["test.ts"], 
  "exclude":["node_modules"]
}
```
Moving on  

I'm gonna use __yarn start__ instead of __tsc__ in order to check console.log() as well  
following this direction  
- **In file package.json**  
```typescript
  "scripts": {
    "start": "node test.js",
    "prestart": "tsc"
    }
```
NodeJS doesn't understand typescript so we need to make it to Javascript  

Moving on..  

- **In terminal yarn add tsc-watch -dev**  
Too lazy to type __yarn start__ so we'll omit it  
If you don't mind you don't need to do this  
```typescript

//package.json
"scripts": {
  "start": "tsc-watch --onSuccess \"node test.js\""
  }
  
//tsconfig.json
{
  "compilerOptions": {
       "target": "ES2015",  
       "module": "commonjs",
       "sourceMap": true,
       "outDir" : "dist"
  },
  //include는 어src/test.ts일 될지 타입스크립트에 알려줌
  "include":["src/**/*"], 
  "exclude":["node_modules"]
}
```
Make src and dist(distribution) folders and edit tsconfig.json and package.json files.
