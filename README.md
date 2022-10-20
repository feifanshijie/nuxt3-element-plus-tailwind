### 说明
> 按需加载 element-plus 与 @element-plus/icons-vue 并集成了 tailwindcss sass
1. 没安装pnpm先安装 `npm install -g pnpm`
2. 请移除plugins下对element-plus的处理
3. 使用nginx 转发开启gzip可以进一步减少体积 大概可以减少一半 参考nginx gzip说明

### 运行
```bash

git clone git@github.com:feifanshijie/nuxt3-element-plus-tailwind.git

cd nuxt3-element-plus-tailwind

pnpm install

npm run dev

# 访问http://localhost:3000
```

### build测试
```bash

npm run build

npm run start

# 访问http://localhost:3000
# 使用nginx开启gzip体积会进一步大幅减少  参考nginx gzip
```
