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
