/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    }
    //テストライブラリは後で入れる
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemovePropTypes: {
          // 本番環境でreact testing libraryで使用するdata-testidを削除
          properties: ['~data-testid$'],
        },
      }
    }
    return compilerConfig
  })(),
}

module.exports = nextConfig
