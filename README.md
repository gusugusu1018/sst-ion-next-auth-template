# SST Ion next auth template

## Getting Started

1. Click on Use this template and create a new repo

2. Clone the repo

```bash
pnpm i
```

3. From the project root, run the following to rename it to your app

```
npx replace-in-file /sst-ion-next-auth/g MY_APP **/*.* --verbose
```

4. Set secret

```
npx sst secret set Domain example.com
npx sst secret set NextAuthSecret `openssl rand -hex 32`
```

5. Open your local dev server

```
npx sst dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Roadmap

- [x] Dark mode
- [ ] DynamoDB adapter
- [ ] Google provider
- [ ] Github provider

## Support

If you find this project helpful, please consider giving it a ⭐ on [GitHub](https://github.com/gusugusu1018/sst-ion-next-auth-template). It helps others discover the project and keeps us motivated to improve and maintain it. Thank you for your support!

## Acknowledgements

This project was built using [Serverless Stack (SST)](https://sst.dev/). Special thanks to the SST team for creating and maintaining such an incredible framework that makes building and deploying serverless applications easier and more efficient. Your work has greatly contributed to the success of this project. Thank you!
