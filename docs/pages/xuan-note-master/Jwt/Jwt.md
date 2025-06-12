# Jwt

## 1. 什么是JWT

> Json web token (JWT)
>
> 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（[(RFC 7519](https://link.jianshu.com?t=https://tools.ietf.org/html/rfc7519)).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。

![img](Jwt.assets/5781463-f755256395c9d325.png)

## 2. session对比JWT

1. 原始:
   - 用户名密码登录
   - 服务器验证用户信息
   - 保存信息到服务器
   - 用户保存在cookie

2. JWT:

   - 用户使用用户名密码来请求服务器

   - 服务器进行验证用户的信息

   - 服务器通过验证发送给用户一个token

   - 客户端存储token，并在每次请求时附送上这个token值

   - 服务端验证token值，并返回数据



## 3. JWT长什么样

~~~json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
~~~



## 4. JWT的构成

1. header

   - 声明类型，这里是jwt

   - 声明加密算法，通常直接使用 HMAC SHA256

   - ~~~json
     完整的头部就像下面这样的JSON：
     {
       'typ': 'JWT',
       'alg': 'HS256'
     }
     ~~~

   - ~~~json
     然后将头部进行base64加密（该加密是可以对称解密的)
     eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
     ~~~

2. playload
   - 标准中注册的声明
   - 公共的声明
   - 私有的声明

3. signature
   - jwt的第三部分是一个签证信息，这个签证信息由三部分组成：
     - header (base64后的)
     - payload (base64后的)
     - secret



## 5. 为什么用JWT

> 因为http协议本身是一种无状态的协议，所以我们需要用一种token来认证用户身份





## 6.使用JWT

### 1.获取JWT

~~~pom
<dependency>
      <groupId>com.auth0</groupId>
      <artifactId>java-jwt</artifactId>
      <version>3.4.0</version>
</dependency>
~~~



### 2.Test ->JWT

~~~java
@Test
    void contextLoads() {
        HashMap<String, Object> map = new HashMap<>();

        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.SECOND,20);

        String token = JWT.create()
                        .withHeader(map)    //头
                        .withClaim("user",22)   //payload
                        .withExpiresAt(calendar.getTime())  //设置过期时间
                        .sign(Algorithm.HMAC256("xuan"));   //签名

        System.out.println(token);
    }
~~~

运行结果:

~~~json
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTg2MDUyMDksInVzZXIiOjIyfQ.O8VqR8--rGesVxfliVOOf5QhZ93I9tfQKt-VmiIfpF8
~~~



### 3.解密JWT

~~~java
    @Test
    public void test(){
        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256("xuan")).build();

        DecodedJWT verify = jwtVerifier.verify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMn0.FSDVWlU3a5wcjXI79lvSD_qNGjfA7We7Ibm6DfH938M");

        System.out.println(verify.getHeader());
        System.out.println(verify.getPayload());
        System.out.println(verify.getSignature());

        System.out.println(verify.getClaim("user").asString());
    }
~~~

> 注意：如果上面设置了时间，过了有效期时间会报错

结果:

~~~json
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
eyJ1c2VyIjoyMn0
FSDVWlU3a5wcjXI79lvSD_qNGjfA7We7Ibm6DfH938M
null
~~~



### 4.JWT的util封装

~~~java
public class JWTUtil {

    private static final String SING = "xuan";
    /**
     * 生成token
     */
    public static String getToken(Map<String,String> map){
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE,7);  //默认7天过期

        JWTCreator.Builder builder = JWT.create();
        map.forEach((k,v)->{
            builder.withClaim(k,v);
        });
        String token = builder.withExpiresAt(calendar.getTime())
                .sign(Algorithm.HMAC256(SING));

        return token;
    }

    /**
     * 验证token 合法性
     */
    public static void verify(String token){
        JWT.require(Algorithm.HMAC256(SING)).build().verify(token);
    }

    /**
     * 获取token信息
     */
    public static DecodedJWT getTokenInfo(String token){
        DecodedJWT verify = JWT.require(Algorithm.HMAC256(SING)).build().verify(token);
        return verify;
    }
}
~~~





## 7. 整合springboot完成项目

1. 导入依赖

   ~~~pom
   <!-- 引入jwt-->
           <dependency>
               <groupId>com.auth0</groupId>
               <artifactId>java-jwt</artifactId>
               <version>3.4.0</version>
           </dependency>
   
           <!-- 引入mybatis-->
           <dependency>
               <groupId>org.mybatis.spring.boot</groupId>
               <artifactId>mybatis-spring-boot-starter</artifactId>
               <version>2.1.3</version>
           </dependency>
       
           <!-- 引入lombk  -->
           <dependency>
               <groupId>org.projectlombok</groupId>
               <artifactId>lombok</artifactId>
               <version>1.18.12</version>
           </dependency>
       
           <!-- 引入druid  -->
           <dependency>
               <groupId>com.alibaba</groupId>
               <artifactId>druid</artifactId>
               <version>1.1.19</version>
           </dependency>
       
           <!-- 引入mysql -->
           <dependency>
               <groupId>mysql</groupId>
               <artifactId>mysql-connector-java</artifactId>
               <version>5.1.25</version>
           </dependency>
   ~~~

   

2. yml配置信息

   ~~~yaml
   server:
     port: 8001
   
   
   
   #连接池
   spring:
     datasource:
       username: root
       password: 123456
       url: jdbc:mysql://localhost:3306/blog?characterEncoding=UTF-8
       driver-class-name: org.gjt.mm.mysql.Driver
   
   # mybatis配置
   mybatis:
     type-aliases-package: com.xuan.jwt.pojo
     mapper-locations: classpath:mybatis/mapper/*.xml
   
   ~~~

   

3. 实体类

   ~~~java
   @Data
   public class User {
   
       private Integer id;
   
       private String username;
   
       private String password;
   }
   
   ~~~

   

4. mapper类

   ~~~java
   @Mapper
   @Repository
   public interface UserMapper {
       User login(User user);
   }
   ~~~

   

5. xml文件

   ~~~xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   <mapper namespace="com.xuan.jwt.mapper.UserMapper">
       <select id="login" resultType="com.xuan.jwt.pojo.User">
           select * from user where username=#{username} and password=#{password}
       </select>
   </mapper>
   ~~~

   

6. serviceImpl类

   ~~~java
   @Service
   @Transactional
   public class UserServiceUmpl implements UserService {
   
       @Autowired
       private UserMapper userMapper;
       
       @Override
       @Transactional(propagation = Propagation.SUPPORTS)
       public User login(User user) {
           User login = userMapper.login(user);
           if (login !=null){
               return login;
           }
           throw new RuntimeException("登录失败~");
       }
   }
   ~~~

   

7. controller类

   ~~~java
   @RestController
   public class UserController {
   
       @Autowired
       private UserService userService;
   
       @Autowired
       private UserMapper userMapper;
   
       @GetMapping("/user/login")
       public Map<String,Object> login(User user){
           Map<String, Object> map = new HashMap<>();
   
           try{
               User login = userService.login(user);
   
               //生成令牌
               Map<String,String> payload = new HashMap<>();
               payload.put("id", String.valueOf(login.getId()));
               payload.put("username",login.getUsername());
               String token = JWTUtil.getToken(payload);
   
               map.put("state",true);
               map.put("msg","认证成功");
               map.put("token",token);
           }catch (Exception e){
               map.put("state",false);
               map.put("msg",e.getMessage());
           }
   
           return map;
       }
       
       @PostMapping("/test")
       public HashMap<String, Object> test(String token){
           HashMap<String, Object> map = new HashMap<>();
   
           map.put("state",true);
           map.put("msg","请求成功");
           return map;
       }
   }
   
   ~~~

   浏览器访问

   http://localhost:8001/user/login?username=root&password=123456

   

   得到结果:

   ~~~json
   {
       "msg": "认证成功",
       "state": true,
       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJleHAiOjE1OTkyMjAwODQsInVzZXJuYW1lIjoicm9vdCJ9.sdKUgN9TYQ204GqnAinRlbYIzA_AHbXutg_Owynwr0w"
   }
   ~~~

   

   设置错误参数得到结果:

   ~~~json
   {
       "msg": "登录失败~",
       "state": false
   }
   ~~~

   

## 8.springboot设置拦截器解决代码重复

1. 新建JWTinter

   ~~~java
   public class JWTinter implements HandlerInterceptor {
   
       @Override //在业务处理器处理请求之前被调用
       public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
           HashMap<String, Object> map = new HashMap<>();
   
           //获取请求头中的令牌
           String token = request.getHeader("token");
   
           try{
               JWTUtil.verify(token);
               return true; //放心请求
           }catch (SignatureVerificationException e){
               e.printStackTrace();
               map.put("msg","无效签名");
           }catch (TokenExpiredException e){
               e.printStackTrace();
               map.put("msg","token过期");
           }catch (AlgorithmMismatchException e){
               e.printStackTrace();
               map.put("msg","算法不一致");
           }catch (Exception e){
               e.printStackTrace();
               map.put("msg","token无效");
           }
           map.put("state",false);
           //将map转为json
           String json = new ObjectMapper().writeValueAsString(map);
           response.setContentType("application/json;charset=UTF-8");
           response.getWriter().println(json);
           return false;
       }
   }
   
   ~~~

   

2. 新建ApplicationConfig

   ~~~java
   @Configuration
   public class ApplicationConfig implements WebMvcConfigurer {
   
       @Override
       public void addInterceptors(InterceptorRegistry registry) {
           registry.addInterceptor(new JWTinter())
                   .addPathPatterns("/**")	//拦截所有
                   .excludePathPatterns("/user/**"); //放行用户注册登录接口
       }
   }
   ~~~

   postman请求

   http://localhost:8001/user/login?username=root&password=123456

   结果:

   ~~~json
   {
       "msg": "认证成功",
       "state": true,
       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJleHAiOjE1OTkyMjIwMjksInVzZXJuYW1lIjoicm9vdCJ9.q6thSLHBIr8MjiO3v63Rue_bVk18-zqAZ2JsHMOqgw8"
   }
   ~~~

   

   postman请求

   http://localhost:8001/test

   带上token请求头结果:

   ~~~json
   {
       "msg": "请求成功",
       "state": true
   }
   ~~~

   




## X->注:拦截器的使用

> 第一步先定义一个类实现HandlerInterceptor接口

~~~java
public class JWTinter implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HashMap<String, Object> map = new HashMap<>();

        //获取请求头中的令牌
        String token = request.getHeader("token");

        try{
            JWTUtil.verify(token);
            return true; //放心请求
        }catch (SignatureVerificationException e){
            e.printStackTrace();
            map.put("msg","无效签名");
        }catch (TokenExpiredException e){
            e.printStackTrace();
            map.put("msg","token过期");
        }catch (AlgorithmMismatchException e){
            e.printStackTrace();
            map.put("msg","算法不一致");
        }catch (Exception e){
            e.printStackTrace();
            map.put("msg","token无效");
        }
        map.put("state",false);
        //将map转为json
        String json = new ObjectMapper().writeValueAsString(map);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(json);
        return false;
    }
}

~~~



> 第二步定义一个config类实现WebMvcConfigurer接口

~~~java
@Configuration
public class ApplicationConfig implements WebMvcConfigurer {

}
~~~



> 第三步重写方法

~~~java
@Configuration
public class ApplicationConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new JWTinter())//自己定义的类JWTinter并且实现了HandlerInterceptor
                .addPathPatterns("/**")	//拦截所有
                .excludePathPatterns("/user/**");	//放行谁
    }
}
~~~



> 至此我们的拦截器就写完啦