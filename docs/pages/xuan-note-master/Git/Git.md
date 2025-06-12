# Git

## 1. Git常用命令

> 命令大全网址	https://www.wenjiangs.com/doc/gitattributes

| 命令名称                                              | 作用                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| git config --global user.name 用户名                  | 设置用户签名                                                 |
| git config --global user.email 邮箱                   | 设置用户签名                                                 |
| git --version                                         | 查看git版本                                                  |
| git init                                              | 初始化本地库                                                 |
| git status                                            | 查看本地库状态                                               |
| git add 文件名    \|  git add .(添加所有 .前面有空格) | 添加到暂存区                                                 |
| git commit -m "日志信息" [文件名]                     | 提交到本地库                                                 |
| git reflog                                            | 查看历史记录                                                 |
| git reset --hard 版本号                               | 版本穿梭                                                     |
| touch README.md                                       | 添加一个介绍文档                                             |
| git config --list                                     | 检查已有的配置信息                                           |
|                                                       |                                                              |
|                                                       |                                                              |
| git branch 分支名                                     | 创建分支                                                     |
| git branch -v                                         | 查看分支                                                     |
| git checkout 分支名                                   | 切换分支                                                     |
| git merge 分支名                                      | 把指定的分支合并到当前分支上                                 |
| git reset HEAD^                                       | 回退所有内容到上一个版本                                     |
|                                                       |                                                              |
|                                                       |                                                              |
| git remote -v                                         | 查看远程库                                                   |
| git remote add 别名 远程库地址                        | 添加远程库                                                   |
| git push 别名 分支                                    | 推送到远程库                                                 |
| git push                                              | （推送到远程库）如果当前分支只有一个追踪分支，那么主机名都可以省略 |
| git push -u origin master                             | 如果当前分支与多个主机存在追踪关系，那么这个时候**-u选项会**指定一个默认主机，这样后面就可以不加任何参数使用git push。 |
| git pull --rebase 别名 分支                           | 拉取远程库                                                   |
| git clone 远程库地址                                  | 克隆远程库                                                   |





## 2. .git目录

![image-20211023101429170](Git.assets/image-20211023101429170.png)



## 3. 基础的Linux命令

1. clear:清除屏幕
2. echo 'test':往控制台输出信息
3. ll:将当前目录下的子文件&子目录平铺在控制台
4. find目录名:将对应目录下的子孙文件&子孙目录平铺在控制台
5. find 目录名 -typef:将对应目录下的文件平铺在控制台
6. rm 文件名:删除文件
7. mv 源文件 重命名文件:重命名
8. cat 文件的url：查看对应文件的内容
9. vim 文件的url（在英文模式下）:
   1. 按i进插入模式 进行文件的编辑
   2. 按esc键&按；键进行命令的执行
   3. q!强制退出（不保存）
   4. :wq保存退出
   5. set nu 设置行号



## 4. 正常流程

### 1. 云端新建仓库

> 这里使用GitEE为例，因为GitHub有可能访问不到

1. 登录进入主页点击加号选择新建仓库

![image-20211022190503507](Git.assets/image-20211022190503507.png)



2. 填写相关信息即可点击创建

![image-20211022191252093](Git.assets/image-20211022191252093.png)



![img](Git.assets/753880-20200917182336643-2013804137.png)





### 2. 本地准备环境

1. 初始化本地仓库

   进入Git Bash Here

   使用git init初始化仓库

   ![image-20211022191618444](Git.assets/image-20211022191618444.png)
   
   需要打开查看隐藏文件才可以看到.git文件
   
   
   
2. 查看仓库状态

   使用git status查看仓库状态

   ![image-20211022192006418](Git.assets/image-20211022192006418.png)





### 3. 本地仓库推送到云端

1. 使用git add.将所有文件添加到暂存区

   ![image-20211022192219679](Git.assets/image-20211022192219679.png)

   查看状态

   ![image-20211022192300403](Git.assets/image-20211022192300403.png)





2. 使用git commit -m "xxx"将暂存区内容提交到本地库

   ![image-20211022192419070](Git.assets/image-20211022192419070.png)

   查看状态

   ![image-20211022192518583](Git.assets/image-20211022192518583.png)



3. 使用git remote add 别名 远程库地址 | 添加远程库

   ![image-20211022192812181](Git.assets/image-20211022192812181.png)

   ![image-20211022192941311](Git.assets/image-20211022192941311.png)





4. 使用git push -u 别名 分支将仓库推送到云端

   ![image-20211022193122871](Git.assets/image-20211022193122871.png)
   
   这里加了-u之后就不需要再加别名和分支也可以正常推送，即git push



5. 刷新云端页面即可查看成功提交

   ​	注意：每次提交都需要将内容提交到本地库

   ​	git add .

   ​	git commit -m "xxxxxxx"







## 5. 区域

工作区

暂存区

版本库



## 6. 对象

> find .git/objects/ -type f	查看对象

Git对象

树对象

提交对象







## 7. 底层

### 1. add .

> 先到版本库做版本控制，再从版本库里面拿到暂存区

![image-20211023111845859](Git.assets/image-20211023111845859.png)





### 2. 暂存区

> git ls-files -s 命令查看暂存区
>
> git commit -m "注释" 提交到本地库不会清空暂存区

1. 环境准备，新建test.txt文件

   ![image-20211023112858341](Git.assets/image-20211023112858341.png)



2. 查看暂存区

   ![image-20211023112951139](Git.assets/image-20211023112951139.png)

   因为并没有add .提交，所以暂存区没有内容



3. 提交到暂存区

   ![image-20211023113023848](Git.assets/image-20211023113023848.png)

   这时候暂存区有东西了

   ![image-20211023113050012](Git.assets/image-20211023113050012.png)



4. 提交到本地库

   ![image-20211023113147609](Git.assets/image-20211023113147609.png)

   再次查看暂存区还是有内容的，所以以上的结论得到验证

   ![image-20211023113213344](Git.assets/image-20211023113213344.png)





5. 查看对象

   ![image-20211023113443041](Git.assets/image-20211023113443041.png)





### 3. git操作最基本的流程

1. 创建工作目录 对工作目录进行修改
2. git add ./
   1. git hash-object -w 文件名（修改了多少个工作目录中的文件 此命令就要被执行多少次）
   2. git update-index ...
3. git commit -m "注释内容"
   1. git write -tree
   2. git commit -tree

























## X.报错

### 1. error: failed to push some refs to 'http:xxxx'
![image-20211022145336691](Git.assets/image-20211022145336691.png)



**可能错误一**：出现这个问题可能因为github中的README.md文件不在本地代码目录中，可以通过如下命令进行代码合并

```git
git pull --rebase origin master
```



**可能错误二**：可能是你上一步拉取后没有重新提交到暂存区，可以通过如下命令进行添加到暂存区

~~~git
git add .
git commit -m "xxx"
~~~





### 2. error: failed to push some refs to 'https://gitee.com/xuanxiaoqian/xuan-auto-script.git'



**可能错误一：**出现错误的主要原因是github中的README.md文件不在本地代码目录中
此时我们要执行**git pull --rebase origin master**命令README.md拉到本地，

任何然后执行**git push origin master**



**解决方法二：**本地新建一个README.md文件





### 3 ：error: cannot pull with rebase: You have unstaged changes.

**可能错误一：**出现错误的主要原因是因为工作区不干净git status查看工作区