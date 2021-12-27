interface SvgoOptions {
  [key: string]: unknown;
}

export function svgoConfig(): SvgoOptions {
  return {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  };
}
