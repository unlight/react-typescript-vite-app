module.exports = ({ env, cwd }) => {
    const isProduction = env === 'production';
    const plugins = [
        require('autoprefixer')(),
        isProduction
            ? require('cssnano')({
                  preset: [
                      'default',
                      {
                          discardComments: {
                              removeAll: true,
                          },
                      },
                  ],
              })
            : undefined,
    ];

    return {
        plugins,
    };
};
