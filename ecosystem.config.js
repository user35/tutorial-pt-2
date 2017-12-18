module.exports = {
    apps: [{
      name: 'tutorial-2',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-70-32-217.compute-1.amazonaws.com',
        key: '~/.ssh/tutorial.pem',
        ref: 'origin/master',
        repo: 'https://github.com/user35/tutorial-pt-2.git',
        path: '/home/ubuntu/tutorial-2',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }